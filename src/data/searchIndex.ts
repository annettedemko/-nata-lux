/**
 * Site search index (DE / RU / UA).
 *
 * `keywords` mix all languages on purpose: synonyms, colloquial names,
 * English terms and common misspellings, so people find a service
 * however they call it. Typos and Latin/Cyrillic spelling are also
 * handled by the matcher in `src/lib/search.ts`.
 */

export type Lang = 'de' | 'ru' | 'ua';
type Text = Record<Lang, string>;

export interface SearchItem {
  id: string;
  path: string;
  title: Text;
  description: Text;
  category: Text;
  keywords: string[];
}

const CAT = {
  lash: { de: 'Wimpern & Augenbrauen', ru: 'Ресницы и брови', ua: 'Вії та брови' },
  pmu: { de: 'Permanent Make-up', ru: 'Перманентный макияж', ua: 'Перманентний макіяж' },
  laser: { de: 'Laser', ru: 'Лазер', ua: 'Лазер' },
  face: { de: 'Gesicht & Anti-Aging', ru: 'Лицо и Anti-Age', ua: 'Обличчя та Anti-Age' },
  body: { de: 'Körper & Massagen', ru: 'Тело и массажи', ua: 'Тіло та масажі' },
  hair: { de: 'Kopfhaut & Haare', ru: 'Кожа головы и волосы', ua: 'Шкіра голови та волосся' },
  shop: { de: 'Kosmetik-Shop', ru: 'Магазин косметики', ua: 'Магазин косметики' },
  training: { de: 'Schulungen', ru: 'Обучение', ua: 'Навчання' },
  info: { de: 'Information', ru: 'Информация', ua: 'Інформація' },
  legal: { de: 'Rechtliches', ru: 'Правовая информация', ua: 'Правова інформація' },
};

const renewLine = (
  slug: string,
  name: string,
  description: Text,
  keywords: string[],
): SearchItem => ({
  id: `shop-${slug}`,
  path: `/shop/renew/${slug}`,
  title: { de: `RENEW ${name}`, ru: `RENEW ${name}`, ua: `RENEW ${name}` },
  description,
  category: CAT.shop,
  keywords: ['renew', 'рену', 'ренью', 'kosmetik', 'косметика', 'shop', 'магазин', 'купить', 'kaufen', 'купити', ...keywords],
});

export const searchIndex: SearchItem[] = [
  // ───────────── Wimpern & Augenbrauen ─────────────
  {
    id: 'lashes-brows',
    path: '/lashes-brows',
    title: { de: 'Wimpern & Augenbrauen', ru: 'Ресницы и брови', ua: 'Вії та брови' },
    description: {
      de: 'Wimpernverlängerung, Laminierung, Augenbrauen-Styling',
      ru: 'Наращивание, ламинирование, оформление бровей',
      ua: 'Нарощування, ламінування, оформлення брів',
    },
    category: CAT.lash,
    keywords: ['lash', 'brow', 'lashes', 'brows', 'wimpern', 'augenbrauen', 'брови', 'ресницы', 'вії', 'брови', 'реснички', 'бровки'],
  },
  {
    id: 'lash-extensions',
    path: '/services/wimpernverlaengerung',
    title: { de: 'Wimpernverlängerung', ru: 'Наращивание ресниц', ua: 'Нарощування вій' },
    description: {
      de: 'Klassik 1:1, 2D, 3D, Mega-Volumen, Korrektur, Entfernung',
      ru: 'Классика 1:1, 2D, 3D, мегаобъём, коррекция, снятие',
      ua: 'Класика 1:1, 2D, 3D, мегаоб’єм, корекція, зняття',
    },
    category: CAT.lash,
    keywords: [
      'wimpernverlängerung', 'wimpern verlängern', 'wimpernverlängerungen', 'wimpernverdichtung', 'künstliche wimpern', 'falsche wimpern',
      'lash extensions', 'eyelash extensions', 'lashes', 'klassik', 'classic', '1:1', '2d', '3d', 'volumen', 'volume', 'mega volumen', 'mega volume',
      'russian volume', 'hollywood', 'l-curl', 'strahlen', 'untere wimpern', 'auffüllen', 'refill', 'korrektur', 'wimpern entfernen',
      'наращивание ресниц', 'нарощенные ресницы', 'ресницы', 'реснички', 'наращивание', 'классика', 'объем', 'объём', 'мегаобъем', '2д', '3д',
      'голливуд', 'лучики', 'коррекция ресниц', 'снятие ресниц', 'наращенные ресницы', 'нарашивание',
      'нарощування вій', 'вії', 'нарощування', 'класика', 'обєм', 'мегаобєм', 'корекція вій', 'зняття вій',
    ],
  },
  {
    id: 'lamination',
    path: '/services/wimpern-augenbrauen-laminierung',
    title: {
      de: 'Wimpern- & Augenbrauen-Laminierung',
      ru: 'Ламинирование ресниц и бровей',
      ua: 'Ламінування вій та брів',
    },
    description: {
      de: 'Lash Lifting / Wimpernwelle, Brow Lifting, mit Färbung oder Keratin-Pflege („Lash Botox“)',
      ru: 'Лифтинг ресниц, «волна», ламинирование бровей, с окрашиванием или кератином («ботокс для ресниц»)',
      ua: 'Ліфтинг вій, «хвиля», ламінування брів, з фарбуванням або кератином («ботокс для вій»)',
    },
    category: CAT.lash,
    keywords: [
      'laminierung', 'wimpernlaminierung', 'augenbrauenlaminierung', 'lash lifting', 'lashlifting', 'wimpernlifting', 'brow lifting', 'browlifting',
      'brow lamination', 'lash lamination', 'wimpernwelle', 'wimpernwelle färben', 'wimpern färben', 'augenbrauen färben', 'lash botox', 'botox wimpern',
      'keratin', 'wimpern curl', 'lifting',
      'ламинирование', 'ламинирование ресниц', 'ламинирование бровей', 'ламинация', 'лифтинг ресниц', 'лифтинг бровей', 'волна ресниц',
      'ботокс для ресниц', 'ботокс ресниц', 'ботокс', 'кератин', 'кератиновое', 'окрашивание ресниц', 'окрашивание бровей', 'покраска ресниц',
      'ламінування', 'ламінування вій', 'ламінування брів', 'ліфтинг вій', 'хвиля вій', 'ботокс для вій', 'фарбування вій', 'фарбування брів',
    ],
  },
  {
    id: 'brow-styling',
    path: '/prices#lashes-brows',
    title: { de: 'Augenbrauen Styling', ru: 'Оформление бровей', ua: 'Оформлення брів' },
    description: {
      de: 'Modellierung + Färbung',
      ru: 'Моделирование формы + окрашивание',
      ua: 'Моделювання форми + фарбування',
    },
    category: CAT.lash,
    keywords: [
      'augenbrauen', 'augenbrauen zupfen', 'zupfen', 'augenbrauen formen', 'augenbrauen färben', 'brow styling', 'brows', 'brow shaping',
      'брови', 'оформление бровей', 'коррекция бровей', 'окрашивание бровей', 'покраска бровей', 'моделирование бровей', 'выщипывание',
      'брови оформлення', 'корекція брів', 'фарбування брів', 'моделювання брів',
    ],
  },

  // ───────────── Permanent Make-up ─────────────
  {
    id: 'permanent-makeup',
    path: '/permanent-makeup',
    title: { de: 'Permanent Make-up', ru: 'Перманентный макияж', ua: 'Перманентний макіяж' },
    description: {
      de: 'Augenbrauen, Lippen, Lidstrich, PMU-Entfernung',
      ru: 'Брови, губы, межресничка, стрелки, удаление ПМ',
      ua: 'Брови, губи, міжвійкова, стрілки, видалення ПМ',
    },
    category: CAT.pmu,
    keywords: [
      'permanent make-up', 'permanent makeup', 'pmu', 'pm', 'permanent', 'tattoo', 'microblading', 'microshading',
      'перманентный макияж', 'перманент', 'пм', 'пму', 'татуаж', 'тату', 'микроблейдинг', 'перманентний макіяж', 'перманентний',
    ],
  },
  {
    id: 'powder-brows',
    path: '/services/powder-brows',
    title: { de: 'Powder Brows (Augenbrauen)', ru: 'Пудровые брови', ua: 'Пудрові брови' },
    description: {
      de: 'Pudertechnik für natürliche Augenbrauen, Korrektur',
      ru: 'Пудровая техника для естественных бровей, коррекция',
      ua: 'Пудрова техніка для природних брів, корекція',
    },
    category: CAT.pmu,
    keywords: [
      'powder brows', 'powderbrows', 'puderbrauen', 'pudertechnik', 'augenbrauen permanent', 'augenbrauen tattoo', 'ombre brows', 'microblading', 'shading',
      'пудровые брови', 'пудра', 'пудровое напыление', 'напыление бровей', 'татуаж бровей', 'перманент бровей', 'омбре', 'шейдинг', 'микроблейдинг',
      'пудрові брови', 'напилення брів', 'татуаж брів', 'перманент брів',
    ],
  },
  {
    id: 'aquarell-lips',
    path: '/services/aquarell-lips',
    title: { de: 'Aquarell Lips (Lippen)', ru: 'Акварельные губы', ua: 'Акварельні губи' },
    description: {
      de: 'Aquarell- & Velvet-Technik, Korrektur',
      ru: 'Акварельная и вельвет техника, коррекция',
      ua: 'Акварельна та вельвет техніка, корекція',
    },
    category: CAT.pmu,
    keywords: [
      'aquarell lips', 'aquarelllippen', 'lippen', 'lippen permanent', 'lippen tattoo', 'lip blush', 'lipblush', 'velvet lips', 'lippenkontur',
      'губы', 'акварельные губы', 'акварель', 'татуаж губ', 'перманент губ', 'вельвет', 'контур губ',
      'губи', 'акварельні губи', 'татуаж губ', 'перманент губ',
    ],
  },
  {
    id: 'wimpernkranz',
    path: '/services/wimpernkranz',
    title: { de: 'Wimpernkranz & Lidstrich', ru: 'Межресничка и стрелки', ua: 'Міжвійкова та стрілки' },
    description: {
      de: 'Wimpernkranzverdichtung, Lidstrich, Lidstrich mit Schattierung',
      ru: 'Межресничное пространство, стрелка, стрелка с растушёвкой',
      ua: 'Міжвійковий простір, стрілка, стрілка з розтушовкою',
    },
    category: CAT.pmu,
    keywords: [
      'wimpernkranz', 'wimpernkranzverdichtung', 'lidstrich', 'eyeliner', 'augen permanent', 'lidstrich tattoo', 'smokey', 'schattierung',
      'межресничка', 'межресничное', 'стрелки', 'стрелка', 'подводка', 'татуаж глаз', 'перманент глаз', 'растушевка',
      'міжвійкова', 'міжвійковий', 'стрілки', 'стрілка', 'татуаж очей', 'розтушовка',
    ],
  },
  {
    id: 'pmu-remover',
    path: '/services/pmu-remover',
    title: { de: 'PMU-Entfernung (PMU Remover)', ru: 'Удаление перманента (ремувер)', ua: 'Видалення перманенту (ремувер)' },
    description: {
      de: 'Sanfte Pigmententfernung: Salon + Heimpflege',
      ru: 'Мягкое удаление пигмента: салон + домашний уход',
      ua: 'М’яке видалення пігменту: салон + домашній догляд',
    },
    category: CAT.pmu,
    keywords: [
      'pmu remover', 'remover', 'pmu entfernen', 'permanent make-up entfernen', 'tattoo entfernen', 'pigment entfernen', 'pmu entfernung', 'removal',
      'ремувер', 'удаление перманента', 'удаление татуажа', 'выведение татуажа', 'выведение пигмента', 'удалить перманент', 'удаление пм',
      'видалення перманенту', 'видалення татуажу', 'виведення пігменту',
    ],
  },

  // ───────────── Laser ─────────────
  {
    id: 'laser',
    path: '/laser',
    title: { de: 'Laser-Haarentfernung', ru: 'Лазерная эпиляция', ua: 'Лазерна епіляція' },
    description: {
      de: 'Dreiwellenlaser: Alexandrit + Diode + Nd:YAG, Damen & Herren',
      ru: 'Трёхволновой лазер: александрит + диод + Nd:YAG, женщины и мужчины',
      ua: 'Трихвильовий лазер: олександрит + діод + Nd:YAG, жінки та чоловіки',
    },
    category: CAT.laser,
    keywords: [
      'laser', 'laserhaarentfernung', 'haarentfernung', 'dauerhafte haarentfernung', 'epilation', 'epilieren', 'enthaarung', 'diodenlaser', 'diode',
      'alexandrit', 'alexandrite', 'nd:yag', 'ndyag', 'ipl', 'achseln', 'bikini', 'intim', 'beine', 'oberlippe', 'rücken', 'ganzkörper', 'herren', 'männer',
      'лазер', 'лазерная эпиляция', 'эпиляция', 'удаление волос', 'депиляция', 'диодный лазер', 'александрит', 'александритовый', 'неодимовый',
      'подмышки', 'бикини', 'интим', 'ноги', 'усики', 'спина', 'всё тело', 'мужская эпиляция', 'лазерна епіляція', 'епіляція', 'видалення волосся',
      'пахви', 'бікіні', 'ноги', 'чоловіча епіляція',
    ],
  },

  // ───────────── Gesicht & Anti-Aging ─────────────
  {
    id: 'anti-aging',
    path: '/anti-aging',
    title: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Age и косметология', ua: 'Anti-Age та косметологія' },
    description: {
      de: 'Apparative Behandlungen für Gesicht und Körper',
      ru: 'Аппаратные процедуры для лица и тела',
      ua: 'Апаратні процедури для обличчя та тіла',
    },
    category: CAT.face,
    keywords: [
      'anti-aging', 'antiaging', 'anti age', 'verjüngung', 'kosmetologie', 'kosmetik', 'kosmetikerin', 'falten', 'hautstraffung',
      'антиэйдж', 'антиэйдж', 'антивозрастной', 'омоложение', 'косметология', 'косметолог', 'морщины', 'омолодження', 'косметологія', 'зморшки',
    ],
  },
  {
    id: 'apparative-anti-aging',
    path: '/services/apparative-anti-aging',
    title: { de: 'Apparative Anti-Aging', ru: 'Аппаратный Anti-Age', ua: 'Апаратний Anti-Age' },
    description: {
      de: 'RF-Lifting, Lichttherapie (LED), Biostrom, Ultraschall',
      ru: 'RF-лифтинг, светотерапия (LED), биотоки, ультразвук',
      ua: 'RF-ліфтинг, світлотерапія (LED), біоструми, ультразвук',
    },
    category: CAT.face,
    keywords: [
      'apparative kosmetik', 'apparativ', 'gerätebehandlung', 'аппаратная косметология', 'аппаратный', 'аппаратка', 'апаратна косметологія', 'апаратний',
    ],
  },
  {
    id: 'rf-lifting',
    path: '/services/apparative-anti-aging/rf-lifting',
    title: { de: 'RF-Lifting Gesicht', ru: 'RF-лифтинг лица', ua: 'RF-ліфтинг обличчя' },
    description: {
      de: 'Radiofrequenz-Behandlung für das Gesicht, 1 Std.',
      ru: 'Радиочастотная процедура для лица, 1 ч',
      ua: 'Радіочастотна процедура для обличчя, 1 год',
    },
    category: CAT.face,
    keywords: [
      'rf-lifting', 'rf lifting', 'rflifting', 'radiofrequenz', 'radiofrequency', 'rf', 'hochfrequenz', 'straffung', 'facelifting ohne op', 'hautstraffung',
      'рф лифтинг', 'рф-лифтинг', 'рф', 'rf', 'радиочастотный лифтинг', 'радиочастотка', 'радиоволновой', 'лифтинг лица', 'подтяжка лица',
      'рф ліфтинг', 'радіочастотний ліфтинг', 'ліфтинг обличчя', 'підтяжка обличчя',
    ],
  },
  {
    id: 'lichttherapie',
    path: '/services/apparative-anti-aging/lichttherapie',
    title: { de: 'LED-Lichttherapie', ru: 'LED-светотерапия', ua: 'LED-світлотерапія' },
    description: {
      de: 'LED-Therapie mit Maske: AHA+PHA, Hyaluronsäure oder Niacinamid',
      ru: 'LED-терапия с маской: AHA+PHA, гиалуроновая кислота или ниацинамид',
      ua: 'LED-терапія з маскою: AHA+PHA, гіалуронова кислота або ніацинамід',
    },
    category: CAT.face,
    keywords: [
      'lichttherapie', 'led', 'led therapie', 'led-therapie', 'led maske', 'licht', 'phototherapie', 'fototherapie', 'rotlicht', 'blaulicht',
      'aha', 'pha', 'hyaluron', 'hyaluronsäure', 'niacinamid', 'niacinamide', 'vitamin b3',
      'светотерапия', 'световая терапия', 'лед', 'лед терапия', 'led терапия', 'фототерапия', 'свет', 'гиалуронка', 'гиалуроновая кислота', 'ниацинамид',
      'світлотерапія', 'світлова терапія', 'фототерапія', 'гіалуронова кислота', 'ніацинамід',
    ],
  },
  {
    id: 'biostrom',
    path: '/services/apparative-anti-aging/biostrom',
    title: { de: 'Biostrom (Mikrostrom)', ru: 'Биотоки (микротоки)', ua: 'Біоструми (мікроструми)' },
    description: {
      de: 'Mikrostrom-Behandlung für das Gesicht, 1 Std.',
      ru: 'Микротоковая процедура для лица, 1 ч',
      ua: 'Мікрострумова процедура для обличчя, 1 год',
    },
    category: CAT.face,
    keywords: [
      'biostrom', 'mikrostrom', 'microcurrent', 'mikrostromtherapie', 'strom', 'reizstrom',
      'биотоки', 'микротоки', 'микротоковая терапия', 'токи', 'миостимуляция', 'биоток',
      'біоструми', 'мікроструми', 'мікрострумова терапія', 'біотоки', 'мікротоки',
    ],
  },
  {
    id: 'ultraschall',
    path: '/services/apparative-anti-aging/ultraschall',
    title: { de: 'Ultraschall-Gesichtsbehandlung', ru: 'Ультразвуковой уход за лицом', ua: 'Ультразвуковий догляд за обличчям' },
    description: {
      de: 'Ultraschall mit Maske und LED-Lampe, optional mit Peeling',
      ru: 'Ультразвук с маской и LED-лампой, по желанию с пилингом',
      ua: 'Ультразвук з маскою та LED-лампою, за бажанням з пілінгом',
    },
    category: CAT.face,
    keywords: [
      'ultraschall', 'ultrasound', 'ultraschallbehandlung', 'ultraschall gesicht', 'ultraschall maske',
      'ультразвук', 'узи', 'уз', 'ультразвуковой', 'ультразвук лица', 'ультразвуковий', 'ультразвук обличчя',
    ],
  },
  {
    id: 'gesichtsreinigung',
    path: '/services/gesichtsreinigung',
    title: { de: 'Gesichtsreinigung', ru: 'Чистка лица', ua: 'Чистка обличчя' },
    description: {
      de: 'Mit Ultraschall, Ultraschall + manuell, Tiefenreinigung mit Maske',
      ru: 'Ультразвуковая, ультразвуковая + механическая, глубокая с маской',
      ua: 'Ультразвукова, ультразвукова + механічна, глибока з маскою',
    },
    category: CAT.face,
    keywords: [
      'gesichtsreinigung', 'gesichtsbehandlung', 'reinigung', 'tiefenreinigung', 'ultraschallreinigung', 'manuelle reinigung', 'ausreinigen',
      'mitesser', 'unreine haut', 'poren', 'facial', 'hydrafacial', 'deep cleansing',
      'чистка лица', 'чистка', 'чистка пор', 'ультразвуковая чистка', 'механическая чистка', 'комбинированная чистка', 'глубокая чистка',
      'черные точки', 'чёрные точки', 'комедоны', 'поры', 'очищение лица', 'фейшл',
      'чистка обличчя', 'ультразвукова чистка', 'механічна чистка', 'глибока чистка', 'чорні цятки', 'пори', 'очищення обличчя',
    ],
  },
  {
    id: 'facial-treatments',
    path: '/prices#facial-care',
    title: { de: 'Gesichtsbehandlungen', ru: 'Уходовые процедуры для лица', ua: 'Доглядові процедури для обличчя' },
    description: {
      de: 'BioEnzyme Therapy, Anti-Aging, Feuchtigkeit, Algenmaske, Express',
      ru: 'BioEnzyme Therapy, Anti-Age, увлажнение, маска с водорослями, экспресс',
      ua: 'BioEnzyme Therapy, Anti-Age, зволоження, маска з водоростями, експрес',
    },
    category: CAT.face,
    keywords: [
      'gesichtsbehandlung', 'gesichtspflege', 'facial', 'bioenzyme', 'bio enzyme', 'enzym', 'feuchtigkeit', 'feuchtigkeitsbehandlung', 'hydration',
      'algenmaske', 'algen', 'anti-wrinkle', 'anti falten', 'express', 'kosmetikbehandlung', 'maske', 'gesichtsmaske',
      'уход за лицом', 'уход', 'увлажнение', 'увлажняющий уход', 'маска', 'маски', 'альгинатная маска', 'водоросли', 'экспресс уход', 'энзимы',
      'догляд за обличчям', 'догляд', 'зволоження', 'зволожувальний', 'маска з водоростями', 'експрес догляд',
    ],
  },
  {
    id: 'facial-massage',
    path: '/prices#facial-care',
    title: { de: 'Gesichtsmassage', ru: 'Массаж лица', ua: 'Масаж обличчя' },
    description: {
      de: 'Spa-Facelift-Massage, Lymphdrainage-Gesichtsmassage, Facelift-Massage',
      ru: 'Spa Facelift массаж, лимфодренажный массаж лица, массаж Facelift',
      ua: 'Spa Facelift масаж, лімфодренажний масаж обличчя, масаж Facelift',
    },
    category: CAT.face,
    keywords: [
      'gesichtsmassage', 'facelift', 'facelift massage', 'spa', 'lymphdrainage gesicht', 'gesichtsoval', 'kobido', 'face massage',
      'массаж лица', 'фейслифтинг', 'фейс лифтинг', 'лимфодренаж лица', 'лимфодренажный массаж', 'овал лица', 'кобидо', 'скульптурный массаж',
      'масаж обличчя', 'лімфодренаж обличчя', 'лімфодренажний масаж', 'овал обличчя',
    ],
  },
  {
    id: 'peelings',
    path: '/prices#facial-care',
    title: { de: 'Peelings (RENEW)', ru: 'Пилинги (RENEW)', ua: 'Пілінги (RENEW)' },
    description: {
      de: 'Enzyme Pure Skin, AHA Fresh Glow, Pro Glow Multi-Acid',
      ru: 'Enzyme Pure Skin, AHA Fresh Glow, Pro Glow мультикислотный',
      ua: 'Enzyme Pure Skin, AHA Fresh Glow, Pro Glow мультикислотний',
    },
    category: CAT.face,
    keywords: [
      'peeling', 'peelings', 'chemisches peeling', 'säurepeeling', 'fruchtsäure', 'enzympeeling', 'aha', 'pha', 'bha', 'multi-acid', 'glow',
      'enzyme pure skin', 'fresh glow', 'pro glow', 'exfoliation', 'pigmentflecken',
      'пилинг', 'пилинги', 'химический пилинг', 'кислотный пилинг', 'энзимный пилинг', 'ферментный пилинг', 'кислоты', 'отшелушивание', 'пигментация',
      'пілінг', 'пілінги', 'хімічний пілінг', 'кислотний пілінг', 'ензимний пілінг', 'відлущування', 'пігментація',
    ],
  },
  {
    id: 'phonophorese',
    path: '/services/phonophorese',
    title: { de: 'Phonophorese', ru: 'Фонофорез', ua: 'Фонофорез' },
    description: {
      de: 'Ultraschall-Einschleusung von Kollagen, Vitaminen, Ölen, Exosomen',
      ru: 'Ультразвуковое введение коллагена, витаминов, масел, экзосом',
      ua: 'Ультразвукове введення колагену, вітамінів, олій, екзосом',
    },
    category: CAT.face,
    keywords: [
      'phonophorese', 'sonophorese', 'ultraschall', 'kollagen', 'vitamine', 'exosomen', 'exosome', 'wirkstoffe', 'tiefenpflege',
      'фонофорез', 'ультрафонофорез', 'коллаген', 'витамины', 'экзосомы', 'питание кожи', 'колаген', 'вітаміни', 'екзосоми',
    ],
  },
  {
    id: 'microneedling',
    path: '/services/microneedling',
    title: { de: 'Microneedling', ru: 'Микронидлинг', ua: 'Мікронідлінг' },
    description: {
      de: 'Gesicht, Hals & Dekolleté, Kopfhaut, Hände, Dehnungsstreifen',
      ru: 'Лицо, шея и декольте, кожа головы, руки, растяжки',
      ua: 'Обличчя, шия та декольте, шкіра голови, руки, розтяжки',
    },
    category: CAT.face,
    keywords: [
      'microneedling', 'micro needling', 'mikroneedling', 'dermapen', 'derma pen', 'dermaroller', 'kollageninduktion', 'needling', 'narben',
      'aknenarben', 'dehnungsstreifen', 'dekolleté', 'hals', 'kopfhaut', 'ampulle', 'exosomen',
      'микронидлинг', 'микронедлинг', 'миконидлинг', 'дермапен', 'дермаролик', 'мезороллер', 'коллагенотерапия', 'рубцы', 'постакне', 'растяжки',
      'шея', 'декольте', 'мікронідлінг', 'рубці', 'розтяжки', 'шия',
    ],
  },

  // ───────────── Kopfhaut & Haare ─────────────
  {
    id: 'kopfhaut-haare',
    path: '/services/darsonval-haare',
    title: { de: 'Kopfhaut & Haare', ru: 'Кожа головы и волосы', ua: 'Шкіра голови та волосся' },
    description: {
      de: 'Darsonval, Microneedling + ENHAIR BioRepair Pro, Kopfmassage',
      ru: 'Дарсонваль, микронидлинг + ENHAIR BioRepair Pro, массаж головы',
      ua: 'Дарсонваль, мікронідлінг + ENHAIR BioRepair Pro, масаж голови',
    },
    category: CAT.hair,
    keywords: [
      'darsonval', 'darsonvalisation', 'haare', 'haarwachstum', 'haarausfall', 'dünnes haar', 'kopfhaut', 'kopfhautpflege', 'kopfmassage',
      'haarpflege', 'enhair', 'biorepair', 'haarwurzeln',
      'дарсонваль', 'дарсанваль', 'волосы', 'выпадение волос', 'рост волос', 'облысение', 'кожа головы', 'массаж головы', 'луковицы', 'трихология',
      'волосся', 'випадіння волосся', 'ріст волосся', 'шкіра голови', 'масаж голови',
    ],
  },

  // ───────────── Körper & Massagen ─────────────
  {
    id: 'massagen',
    path: '/massagen',
    title: { de: 'Apparative Massagen', ru: 'Аппаратные массажи', ua: 'Апаратні масажі' },
    description: {
      de: 'Lymphdrainage, Anti-Cellulite, Bodyforming, Hautstraffung (RF + Vakuum + Infrarot)',
      ru: 'Лимфодренаж, антицеллюлитный, бодиформинг, подтяжка кожи (RF + вакуум + ИК)',
      ua: 'Лімфодренаж, антицелюлітний, бодіформінг, підтяжка шкіри (RF + вакуум + ІЧ)',
    },
    category: CAT.body,
    keywords: [
      'massage', 'massagen', 'apparative massage', 'körpermassage', 'lymphdrainage', 'lymphe', 'anti-cellulite', 'cellulite', 'orangenhaut',
      'bodyforming', 'figurformung', 'abnehmen', 'vakuummassage', 'lpg', 'endermologie', 'hautstraffung', 'infrarot',
      'массаж', 'массажи', 'аппаратный массаж', 'массаж тела', 'лимфодренаж', 'лимфодренажный', 'антицеллюлитный', 'целлюлит', 'апельсиновая корка',
      'бодиформинг', 'похудение', 'вакуумный массаж', 'лпж', 'lpg массаж', 'подтяжка кожи', 'объемы', 'объёмы',
      'масаж', 'масажі', 'апаратний масаж', 'лімфодренаж', 'антицелюлітний', 'целюліт', 'схуднення', 'вакуумний масаж',
    ],
  },
  {
    id: 'koerperbehandlungen',
    path: '/services/koerperbehandlungen',
    title: { de: 'Körperbehandlungen', ru: 'Процедуры для тела', ua: 'Процедури для тіла' },
    description: {
      de: 'RF-Lifting + Vakuum + Infrarot, Kavitation für Bauch, Po, Oberschenkel',
      ru: 'RF-лифтинг + вакуум + ИК, кавитация для живота, ягодиц, бёдер',
      ua: 'RF-ліфтинг + вакуум + ІЧ, кавітація для живота, сідниць, стегон',
    },
    category: CAT.body,
    keywords: [
      'körperbehandlung', 'körper', 'body', 'bauch', 'po', 'oberschenkel', 'hüften', 'reiterhosen', 'figur', 'fett', 'straffung',
      'тело', 'процедуры для тела', 'живот', 'ягодицы', 'бедра', 'бёдра', 'галифе', 'ушки', 'фигура', 'жир',
      'тіло', 'процедури для тіла', 'живіт', 'сідниці', 'стегна', 'фігура',
    ],
  },
  {
    id: 'rf-vakuum',
    path: '/services/koerperbehandlungen/rf-vakuum',
    title: { de: 'RF-Vakuum Körperbehandlung', ru: 'RF-вакуум для тела', ua: 'RF-вакуум для тіла' },
    description: {
      de: 'RF-Lifting + Vakuum-Massage + Infrarotlicht, 30 Min',
      ru: 'RF-лифтинг + вакуумный массаж + инфракрасный свет, 30 мин',
      ua: 'RF-ліфтинг + вакуумний масаж + інфрачервоне світло, 30 хв',
    },
    category: CAT.body,
    keywords: [
      'rf vakuum', 'rf-vakuum', 'vakuum', 'vacuum', 'rf körper', 'body rf', 'rf lifting körper', 'infrarot',
      'рф вакуум', 'вакуум', 'вакуумный', 'рф лифтинг тела', 'лифтинг тела', 'инфракрасный', 'рф вакуум тіла', 'вакуумний', 'ліфтинг тіла',
    ],
  },
  {
    id: 'kavitation',
    path: '/services/koerperbehandlungen/kavitation',
    title: { de: 'Kavitation', ru: 'Кавитация', ua: 'Кавітація' },
    description: {
      de: 'Ultraschall-Kavitation pro Zone: Bauch, Po, Hüften, Oberschenkel',
      ru: 'Ультразвуковая кавитация по зонам: живот, ягодицы, бока, бёдра',
      ua: 'Ультразвукова кавітація по зонах: живіт, сідниці, боки, стегна',
    },
    category: CAT.body,
    keywords: [
      'kavitation', 'cavitation', 'ultraschallkavitation', 'fettabbau', 'fettreduktion', 'fettpolster', 'lipo', 'bauchfett',
      'кавитация', 'ультразвуковая кавитация', 'безоперационная липосакция', 'липосакция', 'жир', 'жировые отложения', 'похудение',
      'кавітація', 'ультразвукова кавітація', 'ліпосакція', 'жирові відкладення',
    ],
  },

  // ───────────── Schulungen ─────────────
  {
    id: 'training',
    path: '/training',
    title: { de: 'Schulungen & Kurse', ru: 'Обучение и курсы', ua: 'Навчання та курси' },
    description: {
      de: 'Professionelle Ausbildung mit Zertifikat',
      ru: 'Профессиональное обучение с сертификатом',
      ua: 'Професійне навчання з сертифікатом',
    },
    category: CAT.training,
    keywords: [
      'schulung', 'schulungen', 'ausbildung', 'kurs', 'kurse', 'training', 'zertifikat', 'weiterbildung', 'lernen', 'seminar', 'workshop',
      'обучение', 'курсы', 'курс', 'тренинг', 'сертификат', 'школа', 'научиться', 'повышение квалификации', 'мастер-класс',
      'навчання', 'курси', 'сертифікат', 'майстер-клас',
    ],
  },

  // ───────────── Shop ─────────────
  {
    id: 'shop',
    path: '/shop',
    title: { de: 'Kosmetik-Shop (RENEW)', ru: 'Магазин косметики (RENEW)', ua: 'Магазин косметики (RENEW)' },
    description: {
      de: 'Professionelle RENEW-Kosmetik für zu Hause',
      ru: 'Профессиональная косметика RENEW для дома',
      ua: 'Професійна косметика RENEW для дому',
    },
    category: CAT.shop,
    keywords: [
      'shop', 'kosmetik', 'produkte', 'kaufen', 'pflege', 'renew', 'creme', 'serum', 'hautpflege',
      'магазин', 'косметика', 'купить', 'средства', 'крем', 'сыворотка', 'уход', 'купити', 'засоби', 'сироватка',
    ],
  },
  renewLine('anti-age', 'Anti Age', {
    de: 'Pflege für reife Haut', ru: 'Уход для зрелой кожи', ua: 'Догляд для зрілої шкіри',
  }, ['anti age', 'reife haut', 'falten', 'антиэйдж', 'зрелая кожа', 'морщины', 'зріла шкіра']),
  renewLine('anti-aging', 'Anti-Aging', {
    de: 'Anti-Aging-Pflege', ru: 'Антивозрастной уход', ua: 'Антивіковий догляд',
  }, ['anti-aging', 'антивозрастной', 'антивіковий']),
  renewLine('aqualia', 'Aqualia', {
    de: 'Feuchtigkeitspflege', ru: 'Увлажняющий уход', ua: 'Зволожувальний догляд',
  }, ['aqualia', 'feuchtigkeit', 'увлажнение', 'аквалия', 'зволоження']),
  renewLine('basic-care', 'Basic Care', {
    de: 'Basispflege für jeden Tag', ru: 'Базовый ежедневный уход', ua: 'Базовий щоденний догляд',
  }, ['basic care', 'basispflege', 'reinigung', 'базовый уход', 'очищение', 'базовий догляд']),
  renewLine('biorepair-pro', 'BioRepair Pro', {
    de: 'Regenerierende Pflege', ru: 'Восстанавливающий уход', ua: 'Відновлювальний догляд',
  }, ['biorepair', 'bio repair', 'regeneration', 'биорепейр', 'восстановление', 'відновлення']),
  renewLine('dermo-control', 'Dermo Control', {
    de: 'Pflege für unreine Haut', ru: 'Уход для проблемной кожи', ua: 'Догляд для проблемної шкіри',
  }, ['dermo control', 'unreine haut', 'akne', 'дермо контроль', 'проблемная кожа', 'акне', 'проблемна шкіра']),
  renewLine('golden-age', 'Golden Age', {
    de: 'Luxuspflege für reife Haut', ru: 'Люкс-уход для зрелой кожи', ua: 'Люкс-догляд для зрілої шкіри',
  }, ['golden age', 'gold', 'голден эйдж', 'золото']),
  renewLine('hydration', 'Hydration', {
    de: 'Intensive Feuchtigkeit', ru: 'Интенсивное увлажнение', ua: 'Інтенсивне зволоження',
  }, ['hydration', 'feuchtigkeit', 'trockene haut', 'увлажнение', 'сухая кожа', 'суха шкіра']),
  renewLine('masks', 'Masken', {
    de: 'Professionelle Gesichtsmasken', ru: 'Профессиональные маски для лица', ua: 'Професійні маски для обличчя',
  }, ['masken', 'maske', 'mask', 'маски', 'маска']),
  renewLine('peelings', 'Peelings', {
    de: 'Peelings für zu Hause und Profis', ru: 'Пилинги для дома и профессионалов', ua: 'Пілінги для дому та професіоналів',
  }, ['peeling', 'peelings', 'пилинг', 'пилинги', 'пілінг']),
  renewLine('problem-skin', 'Problem Skin', {
    de: 'Pflege für Problemhaut', ru: 'Уход для проблемной кожи', ua: 'Догляд для проблемної шкіри',
  }, ['problem skin', 'problemhaut', 'akne', 'pickel', 'проблемная кожа', 'прыщи', 'акне', 'прищі']),
  renewLine('professional', 'Professional', {
    de: 'Profi-Produkte für Kosmetikerinnen', ru: 'Профессиональные средства для косметологов', ua: 'Професійні засоби для косметологів',
  }, ['professional', 'profi', 'b2b', 'kosmetikerin', 'профессиональная', 'для косметологов', 'професійна']),
  renewLine('propioguard', 'Propioguard', {
    de: 'Pflege bei Unreinheiten', ru: 'Уход при несовершенствах кожи', ua: 'Догляд при недосконалостях шкіри',
  }, ['propioguard', 'пропиогард']),
  renewLine('retinol', 'Retinol', {
    de: 'Retinol-Pflege', ru: 'Уход с ретинолом', ua: 'Догляд з ретинолом',
  }, ['retinol', 'vitamin a', 'ретинол', 'витамин а', 'вітамін а']),
  renewLine('sensitive-skin', 'Sensitive Skin', {
    de: 'Pflege für empfindliche Haut', ru: 'Уход для чувствительной кожи', ua: 'Догляд для чутливої шкіри',
  }, ['sensitive', 'empfindliche haut', 'rötungen', 'чувствительная кожа', 'покраснения', 'чутлива шкіра']),
  renewLine('sun-protection', 'Sonnenschutz', {
    de: 'Sonnenschutz (SPF)', ru: 'Солнцезащита (SPF)', ua: 'Сонцезахист (SPF)',
  }, ['sonnenschutz', 'spf', 'sonnencreme', 'sun', 'солнцезащита', 'спф', 'санскрин', 'сонцезахист']),
  renewLine('vitamin-c', 'Vitamin C', {
    de: 'Vitamin-C-Pflege', ru: 'Уход с витамином C', ua: 'Догляд з вітаміном C',
  }, ['vitamin c', 'vitamin', 'витамин с', 'витамин c', 'вітамін с']),
  renewLine('whitening', 'Whitening', {
    de: 'Pflege bei Pigmentflecken', ru: 'Уход при пигментации', ua: 'Догляд при пігментації',
  }, ['whitening', 'pigmentflecken', 'aufhellung', 'отбеливание', 'пигментация', 'пигментные пятна', 'відбілювання', 'пігментація']),

  // ───────────── Information ─────────────
  {
    id: 'prices',
    path: '/prices',
    title: { de: 'Preise', ru: 'Цены', ua: 'Ціни' },
    description: {
      de: 'Preisliste für alle Behandlungen',
      ru: 'Прайс-лист на все процедуры',
      ua: 'Прайс-лист на всі процедури',
    },
    category: CAT.info,
    keywords: ['preise', 'preis', 'preisliste', 'kosten', 'was kostet', 'цены', 'цена', 'прайс', 'стоимость', 'сколько стоит', 'ціни', 'ціна', 'вартість', 'скільки коштує'],
  },
  {
    id: 'contact',
    path: '/contact',
    title: { de: 'Kontakt & Termin', ru: 'Контакты и запись', ua: 'Контакти та запис' },
    description: {
      de: 'Adresse, Telefon, WhatsApp, Termin buchen',
      ru: 'Адрес, телефон, WhatsApp, записаться',
      ua: 'Адреса, телефон, WhatsApp, записатися',
    },
    category: CAT.info,
    keywords: [
      'kontakt', 'termin', 'termin buchen', 'buchen', 'adresse', 'anfahrt', 'telefon', 'anrufen', 'whatsapp', 'öffnungszeiten', 'haidhausen',
      'контакты', 'запись', 'записаться', 'адрес', 'как добраться', 'телефон', 'позвонить', 'ватсап', 'вотсап', 'часы работы',
      'контакти', 'запис', 'записатися', 'адреса', 'зателефонувати',
    ],
  },
  {
    id: 'about',
    path: '/about',
    title: { de: 'Über uns', ru: 'О нас', ua: 'Про нас' },
    description: {
      de: 'Erfahrung, Sterilität, Premium-Ausrüstung',
      ru: 'Опыт, стерильность, премиум-оборудование',
      ua: 'Досвід, стерильність, преміум-обладнання',
    },
    category: CAT.info,
    keywords: ['über uns', 'studio', 'salon', 'team', 'nataliia', 'наталья', 'наталія', 'о нас', 'салон', 'студия', 'про нас', 'студія'],
  },
  {
    id: 'impressum',
    path: '/impressum',
    title: { de: 'Impressum', ru: 'Импрессум', ua: 'Імпресум' },
    description: { de: 'Anbieterkennzeichnung', ru: 'Выходные данные', ua: 'Вихідні дані' },
    category: CAT.legal,
    keywords: ['impressum', 'imprint', 'выходные данные', 'реквизиты', 'реквізити'],
  },
  {
    id: 'datenschutz',
    path: '/datenschutz',
    title: { de: 'Datenschutzerklärung', ru: 'Политика конфиденциальности', ua: 'Політика конфіденційності' },
    description: { de: 'Datenschutz & Cookies', ru: 'Защита данных и cookies', ua: 'Захист даних і cookies' },
    category: CAT.legal,
    keywords: ['datenschutz', 'dsgvo', 'privacy', 'cookies', 'конфиденциальность', 'персональные данные', 'конфіденційність'],
  },
  {
    id: 'agb',
    path: '/agb',
    title: { de: 'AGB', ru: 'Условия (AGB)', ua: 'Умови (AGB)' },
    description: {
      de: 'Allgemeine Geschäftsbedingungen, Stornierung',
      ru: 'Общие условия, отмена записи',
      ua: 'Загальні умови, скасування запису',
    },
    category: CAT.legal,
    keywords: ['agb', 'geschäftsbedingungen', 'stornierung', 'absage', 'условия', 'отмена', 'отменить запись', 'умови', 'скасування'],
  },
  {
    id: 'widerruf',
    path: '/widerruf',
    title: { de: 'Widerrufsbelehrung', ru: 'Право на отказ (возврат)', ua: 'Право на відмову (повернення)' },
    description: { de: 'Widerrufsrecht & Rückgabe', ru: 'Отказ от покупки и возврат', ua: 'Відмова від покупки та повернення' },
    category: CAT.legal,
    keywords: ['widerruf', 'rückgabe', 'rücksendung', 'возврат', 'отказ', 'вернуть товар', 'повернення', 'відмова'],
  },
];
