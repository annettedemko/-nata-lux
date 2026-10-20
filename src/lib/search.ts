import type { SearchItem } from '@/data/searchIndex';

/**
 * Forgiving site search: finds services across DE / RU / UA even with
 * typos, synonyms, Latin spelling of Cyrillic words and the wrong keyboard layout.
 */

const CYR_TO_LAT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
  у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sh', ы: 'i', э: 'e',
  ю: 'u', я: 'a',
};

// QWERTY <-> ЙЦУКЕН, for text typed with the wrong keyboard layout
const LAT_KEYS = "qwertyuiop[]asdfghjkl;'zxcvbnm,.";
const CYR_KEYS = 'йцукенгшщзхъфывапролджэячсмитьбю';

/** Lowercase, drop accents and unify RU/UA letters so variants compare equal. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // ä -> a, é -> e
    .normalize('NFC')
    .replace(/ё/g, 'е')
    .replace(/й/g, 'и')
    .replace(/[іїы]/g, 'и')
    .replace(/є/g, 'е')
    .replace(/ґ/g, 'г')
    .replace(/[ьъ'’`ʼ"«»„“]/g, '')
    .replace(/[^a-z0-9а-я+]+/g, ' ')
    .trim();
}

/** Rough sound-alike key in Latin letters: "микронидлинг" ≈ "microneedling". */
function phonetic(word: string): string {
  let s = '';
  for (const ch of word) s += CYR_TO_LAT[ch] ?? ch;
  return s
    .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
    .replace(/sch/g, 'sh')
    .replace(/ph/g, 'f')
    .replace(/ck/g, 'k')
    .replace(/tion/g, 'tsion')
    .replace(/qu/g, 'kv')
    .replace(/x/g, 'ks')
    .replace(/c/g, 'k')
    .replace(/w/g, 'v')
    .replace(/y/g, 'i')
    .replace(/ee/g, 'i')
    .replace(/oo/g, 'u')
    .replace(/(.)\1+/g, '$1');
}

function switchLayout(text: string): string {
  let out = '';
  for (const ch of text.toLowerCase()) {
    const li = LAT_KEYS.indexOf(ch);
    if (li >= 0) { out += CYR_KEYS[li]; continue; }
    const ci = CYR_KEYS.indexOf(ch);
    out += ci >= 0 ? LAT_KEYS[ci] : ch;
  }
  return out;
}

/** Optimal string alignment distance (Levenshtein + swapped letters), capped. */
function distance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const rows: number[][] = [];
  for (let i = 0; i <= a.length; i++) rows.push([i]);
  for (let j = 1; j <= b.length; j++) rows[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, rows[i - 2][j - 2] + 1);
      }
      rows[i][j] = v;
      rowMin = Math.min(rowMin, v);
    }
    if (rowMin > max) return max + 1;
  }
  return rows[a.length][b.length];
}

function allowedTypos(len: number): number {
  if (len <= 3) return 0;
  if (len <= 5) return 1;
  if (len <= 8) return 2;
  return 3;
}

interface Term { word: string; key: string; weight: number }
interface Prepared { item: SearchItem; terms: Term[]; text: string }

let cache: { source: SearchItem[]; prepared: Prepared[] } | null = null;

function prepare(items: SearchItem[]): Prepared[] {
  if (cache && cache.source === items) return cache.prepared;
  const prepared = items.map((item) => {
    const fields: [string, number][] = [
      ...Object.values(item.title).map((t): [string, number] => [t, 3]),
      ...item.keywords.map((k): [string, number] => [k, 2]),
      ...Object.values(item.description).map((d): [string, number] => [d, 1]),
      ...Object.values(item.category).map((c): [string, number] => [c, 0.5]),
    ];
    const terms: Term[] = [];
    const seen = new Set<string>();
    for (const [field, weight] of fields) {
      for (const word of normalize(field).split(' ')) {
        if (word.length < 2 || seen.has(word + weight)) continue;
        seen.add(word + weight);
        terms.push({ word, key: phonetic(word), weight });
      }
    }
    const text = ' ' + fields.map(([f]) => normalize(f)).join(' | ') + ' ';
    return { item, terms, text };
  });
  cache = { source: items, prepared };
  return prepared;
}

/** How well one query word matches one indexed word (0 = no match). */
function matchWord(q: string, qKey: string, t: Term): number {
  if (t.word === q) return 1;
  if (t.word.startsWith(q)) return q.length >= 2 ? 0.85 : 0;
  if (q.length >= 4 && t.word.includes(q)) return 0.7; // part of a compound word
  if (t.key === qKey) return 0.8;
  const max = allowedTypos(qKey.length);
  if (max === 0) return 0;
  // Compare with the whole word and with its beginning (user may still be typing)
  const whole = distance(qKey, t.key, max);
  const prefix = t.key.length > qKey.length ? distance(qKey, t.key.slice(0, qKey.length), max) : max + 1;
  const d = Math.min(whole, prefix);
  return d <= max ? 0.6 - d * 0.1 : 0;
}

function runSearch(query: string, items: SearchItem[], requireAll: boolean): SearchItem[] {
  const q = normalize(query);
  const words = q.split(' ').filter((w) => w.length >= 2 || /\d/.test(w));
  if (!words.length) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const p of prepare(items)) {
    let score = 0;
    let matched = 0;
    for (const w of words) {
      const key = phonetic(w);
      let best = 0;
      for (const t of p.terms) {
        const m = matchWord(w, key, t);
        if (m) best = Math.max(best, m * t.weight);
      }
      if (best > 0) matched++;
      score += best;
    }
    if (requireAll ? matched < words.length : matched === 0) continue;
    if (words.length > 1 && p.text.includes(' ' + q)) score += 3; // whole phrase
    scored.push({ item: p.item, score: score + matched });
  }
  scored.sort((a, b) => b.score - a.score);
  // Drop weak fuzzy hits when there are clearly better matches
  const top = scored[0]?.score ?? 0;
  return scored.filter((s) => s.score >= top * 0.4).map((s) => s.item);
}

export function searchSite(query: string, items: SearchItem[], limit = 8): SearchItem[] {
  if (!query.trim()) return [];
  let results = runSearch(query, items, true);
  if (!results.length) results = runSearch(switchLayout(query), items, true);
  if (!results.length) results = runSearch(query, items, false);
  return results.slice(0, limit);
}
