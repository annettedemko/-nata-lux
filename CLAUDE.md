# CLAUDE.md -- Nata Lux Beauty Studio

## Projekt-Uebersicht

**Nata Lux** -- Premium-Kosmetikstudio und Schulungszentrum in Muenchen-Haidhausen.
- **Inhaberin**: Nataliia Koziukevych (Einzelunternehmen)
- **Adresse**: Elsaesser Strasse 33, 81667 Muenchen (Studio) / Rosenheimerstrasse 159, 81671 Muenchen (Impressum)
- **Domain**: munich-beauty.de
- **Tech Stack**: Next.js 16 (SSG/Static Export), React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Sprachen**: DE (primaer), RU, UA
- **Deployment**: Vercel (empfohlen), statisches Hosting

## Build & Development

```bash
npm run dev        # Lokaler Entwicklungsserver
npm run build      # Produktions-Build (Static Export)
npm run start      # Produktionsserver
npm run lint       # ESLint
```

## Projektstruktur

```
app/               # Next.js App Router (Seiten/Routen)
src/components/    # Wiederverwendbare UI-Komponenten
src/page-components/  # Seitenspezifische Komponenten (Impressum, Datenschutz, AGB, etc.)
src/contexts/      # React Context (LanguageContext)
src/i18n/          # Uebersetzungsdateien (de.json, ru.json)
src/hooks/         # Custom React Hooks
src/lib/           # Utility-Funktionen
src/seo/           # SEO metadata registry
public/            # Statische Assets (Bilder, Logos)
```

## SEO System

### Metadata (`src/seo/metadata.ts`)
Centralized metadata registry for all pages. Each entry has:
- **`metadata`**: Next.js `Metadata` object (German, static at build time)
- **`titles`**: Trilingual titles `{ de, ru, ua }` for client-side updates

**Adding metadata to a new page:**
```ts
// In app/new-page/page.tsx:
import { PAGE_SEO } from '@/seo/metadata'
export const metadata = PAGE_SEO['/new-page']?.metadata
```

### Client-side Titles (`src/hooks/usePageTitle.ts`)
- Automatically updates `document.title` for RU/UA users
- Integrated via `<PageTitleUpdater />` in `client-layout.tsx`
- German titles come from static metadata (no override needed)

### JSON-LD Schemas
| Component | File | Usage |
|-----------|------|-------|
| BeautySalon | `app/layout.tsx` (inline) | Root layout, always present |
| BreadcrumbList | `src/components/BreadcrumbSchema.tsx` + `BreadcrumbInjector.tsx` | Auto-injected on all pages via `client-layout.tsx` |
| FAQPage | `src/components/FAQSchema.tsx` | Auto-injected in `ServicePageLayout.tsx` when FAQ data present |
| Product/ItemList | `src/components/ProductLineSchema.tsx` | Used in each shop product page component |

### OG Image
- **File**: `/public/og-image.jpg` (1200x630)
- Referenced in `createPageMeta()` helper and root layout
- Source: cropped from `/public/45.webp`

## Externe Dienste & Integrationen

| Dienst | Zweck | AVV erforderlich |
|--------|-------|------------------|
| Google Analytics 4 (G-9WW8PXXRQ0) | Web-Analyse | Ja (Google DPA) |
| Web3Forms | Kontaktformular-Backend | Ja |
| DIKIDI (dikidi.ru) | Online-Terminbuchung | Ja |
| Google Fonts | Schriftarten (Playfair Display, Cormorant Garamond, Inter) | Selbst-Hosting pruefen! |
| WhatsApp (Meta) | Kundenkommunikation | Ja (Meta DPA) |
| Vercel/Hosting | Website-Hosting | Ja |

---

# RECHTLICHE ANFORDERUNGEN -- VOLLSTAENDIGER COMPLIANCE-LEITFADEN 2026

> **Stand**: Februar 2026. Alle Angaben basieren auf der aktuellen Rechtslage inkl. DDG, TDDDG, BFSG, DSA, AI Act und aktueller Rechtsprechung.
> **Ziel**: Kein einziger Abmahngrund. Vollstaendige Rechtskonformitaet.

---

## 1. IMPRESSUM (SS 5 DDG)

### Rechtsgrundlage
- **SS 5 Digitale-Dienste-Gesetz (DDG)** -- ersetzt seit 14.05.2024 den SS 5 TMG
- **SS 18 Abs. 2 MStV** (Medienstaatsvertrag) -- inhaltlich Verantwortlicher

### WICHTIG: TMG wurde aufgehoben!
Das Telemediengesetz (TMG) wurde am 14.05.2024 vollstaendig durch das **Digitale-Dienste-Gesetz (DDG)** ersetzt. Alle Verweise auf "SS 5 TMG" muessen zu "SS 5 DDG" geaendert werden (oder die Gesetzeszitation ganz weglassen -- es gibt keine Pflicht, das Gesetz zu zitieren).

### Pflichtangaben im Impressum (SS 5 DDG)

| Angabe | Pflicht | Hinweis |
|--------|---------|---------|
| Vollstaendiger Name des Inhabers | Ja | Vor- und Nachname (bei Einzelunternehmen) |
| Geschaeftsname/Handelsname | Ja, wenn vorhanden | "Nata Lux" |
| Rechtsform | Ja | "Einzelunternehmen" / "Gewerbebetrieb" |
| Vollstaendige Postanschrift | Ja | Kein Postfach! Strasse, Hausnummer, PLZ, Ort |
| E-Mail-Adresse | Ja | Fuer schnelle elektronische Kontaktaufnahme |
| Telefonnummer | Empfohlen | Streitig, ob Pflicht -- Best Practice: angeben |
| Registereintrag | Ja, wenn vorhanden | Handelsregister, Registergericht, Registernummer |
| USt-IdNr. | Ja, wenn vorhanden | NUR USt-IdNr., NICHT die persoenliche Steuernummer! |
| Kleinunternehmerregelung | Ja, wenn anwendbar | "Kein Ausweis von MwSt. gemaess SS 19 UStG" |
| Zustaendige Aufsichtsbehoerde | Ja, wenn genehmigungspflichtig | Mit vollstaendiger Postanschrift |
| Berufsbezeichnung | Empfohlen | "Kosmetikerin" -- bei reglementierten Berufen Pflicht |
| Inhaltlich Verantwortlicher | Ja | Gemaess SS 18 Abs. 2 MStV -- Name und Anschrift |
| Berufshaftpflichtversicherung | Ja, wenn vorhanden | Name, Anschrift, raeumlicher Geltungsbereich |

### Erreichbarkeit
- Impressum muss von **jeder Seite** mit **maximal 2 Klicks** erreichbar sein
- Muss klar als **"Impressum"** bezeichnet sein (nicht "Ueber uns", "Kontakt" o.ae.)
- Muss auch auf mobilen Geraeten leicht auffindbar sein

### Haeufige Abmahnfallen
1. Verweis auf "SS 5 TMG" statt "SS 5 DDG" -- veraltet seit Mai 2024
2. Fehlende E-Mail-Adresse
3. Postfach statt physischer Adresse
4. Impressum nicht von jeder Seite erreichbar
5. Impressum nicht klar als solches benannt
6. OS-Plattform-Link noch vorhanden (Plattform wurde am 20.07.2025 abgeschaltet!)
7. Veraltete Haftungsausschluss-Referenzen (SSSS 7-10 TMG statt SSSS 7-10 DDG)

### Aktion fuer NataLux
- [x] Impressum vorhanden
- [ ] **SS 5 TMG -> SS 5 DDG** aendern (Datei: `src/page-components/Impressum.tsx`, Zeile 44)
- [ ] **SSSS 7-10 TMG -> SSSS 7-10 DDG** in Haftungsabschnitten aendern (Zeilen 190-193)
- [ ] OS-Plattform-Link pruefen und ggf. entfernen (seit 20.07.2025 abgeschaltet)

---

## 2. DATENSCHUTZERKLAERUNG (Art. 13, 14 DSGVO)

### Rechtsgrundlage
- **Art. 12-14 DSGVO** -- Informationspflichten
- **Art. 6 DSGVO** -- Rechtsmaessigkeit der Verarbeitung
- **SS 25 TDDDG** -- Cookie-/Tracking-Einwilligung (vormals SS 25 TTDSG)

### WICHTIG: TTDSG wurde umbenannt!
Das TTDSG wurde am 13.05.2024 in **TDDDG** (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) umbenannt. Alle Verweise aktualisieren!

### Pflichtinhalte der Datenschutzerklaerung

#### A. Allgemeine Angaben
1. **Name und Kontaktdaten des Verantwortlichen** (Art. 13 Abs. 1 lit. a)
2. **Kontaktdaten des Datenschutzbeauftragten** (Art. 13 Abs. 1 lit. b) -- ab 20 Mitarbeitern mit automatisierter Verarbeitung Pflicht (SS 38 BDSG)
3. **Hinweis auf Beschwerderecht** bei der zustaendigen Aufsichtsbehoerde (Art. 13 Abs. 2 lit. d)
   - Fuer Bayern: **Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)**
   - Promenade 18, 91522 Ansbach
   - Telefon: +49 981 180093-0
   - E-Mail: poststelle@lda.bayern.de
   - Website: www.lda.bayern.de

#### B. Fuer JEDE Verarbeitungstaetigkeit einzeln:
4. **Zweck der Verarbeitung** (Art. 13 Abs. 1 lit. c)
5. **Rechtsgrundlage** (Art. 13 Abs. 1 lit. c) -- konkrete Angabe:
   - **Art. 6 Abs. 1 lit. a DSGVO** -- Einwilligung (Cookies, Newsletter, Analytics)
   - **Art. 6 Abs. 1 lit. b DSGVO** -- Vertragserfullung (Terminbuchung, Kontaktformular fuer Serviceanfragen)
   - **Art. 6 Abs. 1 lit. c DSGVO** -- Rechtliche Verpflichtung (steuerliche Aufbewahrung)
   - **Art. 6 Abs. 1 lit. f DSGVO** -- Berechtigtes Interesse (Server-Logs, Website-Sicherheit, technisch notwendige Cookies)
6. **Berechtigte Interessen** bei Art. 6 Abs. 1 lit. f (Art. 13 Abs. 1 lit. d)
7. **Empfaenger oder Kategorien von Empfaengern** (Art. 13 Abs. 1 lit. e)
8. **Drittlandtransfers** mit Schutzgarantien (Art. 13 Abs. 1 lit. f)
   - EU-US Data Privacy Framework fuer US-Dienste (Google, Meta)
9. **Speicherdauer** oder Kriterien fuer die Festlegung (Art. 13 Abs. 2 lit. a)

#### C. Betroffenenrechte (alle einzeln auffuehren!)
10. **Auskunftsrecht** (Art. 15 DSGVO)
11. **Berichtigungsrecht** (Art. 16 DSGVO)
12. **Loeschungsrecht** (Art. 17 DSGVO)
13. **Einschraenkung der Verarbeitung** (Art. 18 DSGVO)
14. **Datenportabilitaet** (Art. 20 DSGVO)
15. **Widerspruchsrecht** (Art. 21 DSGVO) -- **besonders hervorheben!**
16. **Widerruf der Einwilligung** (Art. 13 Abs. 2 lit. c)
17. **Pflicht/Erforderlichkeit der Bereitstellung** (Art. 13 Abs. 2 lit. e)
18. **Automatisierte Entscheidungsfindung / Profiling** (Art. 13 Abs. 2 lit. f)

#### D. Einzelne Verarbeitungstaetigkeiten (jeweils mit Zweck, Rechtsgrundlage, Speicherdauer, Empfaenger):
19. **Server-Logfiles** -- IP-Adresse, Browsertyp, Zugriffszeit etc.
20. **Technisch notwendige Cookies** -- Session, Spracheinstellung, Cookie-Consent
21. **Analyse-Cookies** -- Google Analytics 4 (mit Consent Mode v2)
22. **Kontaktformular** -- Web3Forms als Auftragsverarbeiter
23. **E-Mail-/Telefonkontakt**
24. **Online-Terminbuchung** -- DIKIDI als Auftragsverarbeiter
25. **Google Fonts** -- Selbst-Hosting oder Einwilligung erforderlich!
26. **Google Maps** -- Einbettung mit Datentransfer
27. **WhatsApp-Integration** -- Meta als Empfaenger
28. **Social-Media-Links** -- Instagram, Telegram (Klick-Verlinkung vs. Embed)
29. **Hosting-Anbieter** -- Name, Standort der Server, AVV
30. **SSL/TLS-Verschluesselung**
31. **Ahrefs** -- wenn verwendet, separat auffuehren

### Rechtsgrundlagen-Zuordnung (haeufige Fehler!)

| Verarbeitung | RICHTIGE Rechtsgrundlage | FALSCHER haeufiger Fehler |
|-------------|-------------------------|--------------------------|
| Technisch notwendige Cookies | Art. 6 Abs. 1 lit. f (berechtigtes Interesse) | Art. 6 Abs. 1 lit. c (rechtliche Verpflichtung) |
| Analyse-Cookies (GA4) | Art. 6 Abs. 1 lit. a (Einwilligung) + SS 25 TDDDG | Ohne SS 25 TDDDG-Verweis |
| Kontaktformular | Art. 6 Abs. 1 lit. b (vorvertragliche Massnahmen) | Art. 6 Abs. 1 lit. a (Einwilligung) |
| Server-Logs | Art. 6 Abs. 1 lit. f (berechtigtes Interesse) | -- |
| Terminbuchung | Art. 6 Abs. 1 lit. b (Vertragserfullung) | -- |

### Aktion fuer NataLux
- [ ] **Rechtsgrundlage fuer notwendige Cookies korrigieren**: Art. 6 Abs. 1 lit. c -> lit. f (`src/page-components/Datenschutz.tsx`)
- [ ] **BayLDA als zustaendige Aufsichtsbehoerde** mit vollstaendiger Adresse hinzufuegen
- [ ] **Hosting-Anbieter** benennen (Vercel/Netlify + Serverstandort)
- [ ] **WhatsApp-Datenverarbeitung** hinzufuegen
- [ ] **Social-Media-Datenverarbeitung** hinzufuegen
- [ ] **Google Fonts** -- pruefen ob selbst gehostet oder extern geladen
- [ ] **Drittlandtransfer** detailliert beschreiben (EU-US Data Privacy Framework)
- [ ] **TDDDG-Verweis** fuer Cookie-Einwilligung hinzufuegen (nicht mehr TTDSG)
- [ ] **Datum aktualisieren** (aktuell "Dezember 2024")
- [ ] **DIKIDI als Auftragsverarbeiter** benennen

---

## 3. COOKIE-CONSENT (SS 25 TDDDG)

### Rechtsgrundlage
- **SS 25 TDDDG** (vormals SS 25 TTDSG, umbenannt am 13.05.2024)
- **Art. 5 Abs. 3 ePrivacy-Richtlinie** (2002/58/EG)
- **Art. 6 Abs. 1 lit. a DSGVO** (Einwilligung fuer nicht-essentielle Cookies)
- **Einwilligungsverwaltungsverordnung (EinwV)** -- in Kraft seit 01.04.2025

### Anforderungen an den Cookie-Banner

#### Erste Ebene (Banner)
1. **"Alle akzeptieren"** und **"Alle ablehnen"** Buttons muessen **gleichwertig gestaltet** sein
   - Gleiche Groesse, Farbe, Prominenz
   - **Keine Dark Patterns!** (VG Hannover, 19.03.2025)
   - "Alle akzeptieren" darf NICHT hervorgehoben sein (kein Gold, keine Schatten, kein Scale-Effekt)
2. **Informationspflicht VOR Einwilligung**:
   - Welche Cookies/Tracking-Technologien werden eingesetzt?
   - Zu welchem Zweck?
   - Welche Dritten erhalten Zugang?
   - Wie lange werden Cookies gespeichert?
3. **Link zur Datenschutzerklaerung** muss sichtbar sein
4. **Kein Cookie-Wall**: Zugang zu Inhalten darf NICHT von Cookie-Akzeptanz abhaengig sein

#### Zweite Ebene (Einstellungen)
5. **Granulare Kontrolle**: Nutzer muessen einzelne Cookie-Kategorien an/abschalten koennen
6. **Kategorien** muessen klar beschrieben sein (Zweck, Anbieter, Laufzeit)
7. **Notwendige Cookies** duerfen nicht abwaehlbar sein (aber muessen erklaert werden)

#### Technische Anforderungen
8. **Opt-in PFLICHT** fuer ALLE nicht-essentiellen Cookies BEVOR sie gesetzt werden
9. **Kein Tracking vor Einwilligung** -- Google Analytics, Ahrefs etc. duerfen erst NACH Einwilligung laden
10. **Re-Consent**: Nutzer muessen ihre Einstellungen jederzeit aendern koennen
11. **Consent-Dokumentation**: Einwilligungen muessen nachweisbar protokolliert werden (Zeitstempel!)
12. **Consent-Kategorien muessen zur tatsaechlichen Nutzung passen** -- keine ad_storage/ad_personalization einwilligen lassen, wenn keine Werbung laeuft

### Google Tag Manager -- Achtung! (VG Hannover, 19.03.2025)
Das VG Hannover hat entschieden, dass der **Google Tag Manager selbst** eine Einwilligung benoetigt, da:
- GTM uebertraegt personenbezogene Daten an externe Server
- GTM speichert JavaScript auf Nutzergeraeten vor der Einwilligung
- GTM dient kommerziellen Interessen, nicht essentiellen technischen Funktionen

### Bussgelder
Bis zu **300.000 EUR** fuer TDDDG-Verstoesse.

### Aktion fuer NataLux
- [ ] **Button-Styling angleichen**: "Alle akzeptieren" und "Alle ablehnen" muessen optisch gleichwertig sein (`src/components/CookieConsent.tsx`)
  - Aktuell: "Alle akzeptieren" hat Gold-Farbe, shadow-lg, hover:scale-105 -- "Alle ablehnen" ist schlicht
  - Loesung: Gleiche Groesse, gleiche Prominenz, keine Hervorhebung des Akzeptieren-Buttons
- [ ] **Consent-Zeitstempel** protokollieren (Datum/Uhrzeit der Einwilligung speichern)
- [ ] **Ad-Consent-Kategorien entfernen** (ad_storage, ad_user_data, ad_personalization) -- keine Werbung auf der Seite
- [ ] **GTM-Einwilligungspflicht** pruefen

---

## 4. AGB -- Allgemeine Geschaeftsbedingungen (SSSS 305-310 BGB)

### Rechtsgrundlage
- **SSSS 305-310 BGB** (AGB-Recht)
- **SS 312 ff. BGB** (Fernabsatzvertraege)
- **SS 36 VSBG** (Verbraucherstreitbeilegungsgesetz)

### Pflichtinhalte fuer Dienstleistungsbetriebe

| Abschnitt | Inhalt | Pflicht |
|-----------|--------|---------|
| Geltungsbereich | Klare Definition der Anwendbarkeit | Ja |
| Leistungsbeschreibung | Was wird angeboten | Ja |
| Vertragsschluss | Wie kommt der Vertrag zustande | Ja |
| Preise und Zahlung | Inkl. MwSt-Hinweis | Ja |
| Stornierung | Bedingungen, Gebuehren (Nachweis geringeren Schadens muss moeglich sein!) | Ja |
| Haftung | Darf NICHT ausschliessen: Vorsatz, grobe Fahrlaessigkeit, Leben/Koerper/Gesundheit, Produkthaftung, Kardinalpflichten | Ja |
| Salvatorische Klausel | Unwirksamkeit einzelner Klauseln | Empfohlen |
| Anwendbares Recht / Gerichtsstand | | Empfohlen |
| Streitbeilegung (SS 36 VSBG) | Bereitschaft/Pflicht zur Teilnahme an Verbraucherschlichtung | Ja (Ausnahme: <10 MA) |

### SS 36 VSBG -- Streitbeilegungshinweis
**Auch nach Abschaltung der OS-Plattform (20.07.2025) gilt SS 36 VSBG weiterhin!**
- Erklaerung, ob das Unternehmen bereit oder verpflichtet ist, an einem Streitbeilegungsverfahren teilzunehmen
- Wenn ja: Name, Anschrift und Website der zustaendigen Schlichtungsstelle
- **Ausnahme**: Unternehmen mit weniger als 10 Mitarbeitern (zum 31.12. des Vorjahres) sind von SS 36 VSBG befreit

### Haeufige Abmahnfallen bei AGB
1. Pauschaler Haftungsausschluss fuer leichte Fahrlaessigkeit bei Kardinalpflichten (unwirksam nach SS 309 Nr. 7 BGB)
2. Pauschale Stornogebuehren ohne Moeglichkeit des Nachweises geringeren Schadens
3. Einseitige Aenderungsklauseln
4. Unklare Vertragsschluss-Formulierung
5. Fehlender Streitbeilegungshinweis
6. OS-Plattform-Link noch vorhanden (seit 20.07.2025 abgeschaltet!)

### Aktion fuer NataLux
- [x] AGB vorhanden mit Geltungsbereich, Leistungen, Terminen, Zahlung, Haftung
- [x] Haftungsabschnitt behaelt Produkthaftungsgesetz bei
- [x] Stornierungsklausel erlaubt Nachweis geringeren Schadens
- [ ] **Streitbeilegungshinweis** nach SS 36 VSBG hinzufuegen (oder dokumentieren, dass <10 MA-Ausnahme greift)
- [x] Kein OS-Plattform-Link vorhanden (korrekt seit 20.07.2025)

---

## 5. WIDERRUFSBELEHRUNG (SS 312g BGB)

### Rechtsgrundlage
- **SS 312g BGB** -- Widerrufsrecht bei Fernabsatzvertraegen
- **SS 355 ff. BGB** -- Ausuebung des Widerrufs
- **Art. 246a SS 1 Abs. 2 EGBGB** -- Muster-Widerrufsformular

### Anforderungen
1. **14-taegige Widerrufsfrist** ab Vertragsschluss (bei Dienstleistungen) bzw. Warenerhalt (bei Waren)
2. **Widerrufsbelehrung** muss klar und verstaendlich bereitgestellt werden
3. **Muster-Widerrufsformular** (Anlage 2 zu Art. 246a EGBGB) muss verfuegbar gemacht werden
4. Bei fehlender/fehlerhafter Belehrung: Frist verlaengert sich auf **12 Monate + 14 Tage**

### Ausnahmen relevant fuer Kosmetikstudios
- **SS 312g Abs. 2 Nr. 9 BGB**: Kein Widerrufsrecht bei Freizeitdienstleistungen mit festem Termin (gebuchte Behandlungstermine)
- **SS 312g Abs. 2 Nr. 3 BGB**: Kein Widerrufsrecht bei versiegelten Waren aus Hygienegruenden (Kosmetikprodukte mit gebrochenem Siegel)

### KRITISCH fuer NataLux
- **Shop-Bereich**: Verkauf von RENEW-Kosmetikprodukten -> **Widerrufsbelehrung ist PFLICHT!**
- **Termine**: Gebuchte Behandlungstermine fallen unter die Ausnahme SS 312g Abs. 2 Nr. 9 BGB
- **Fehlend**: Aktuell gibt es KEINE Widerrufsbelehrung auf der Website!

### Aktion fuer NataLux
- [ ] **Widerrufsbelehrung-Seite erstellen** (`/widerruf`) mit:
  - Widerrufsbelehrung fuer Warenkaeufe (Kosmetikprodukte)
  - Hinweis auf Ausnahme fuer versiegelte Hygieneprodukte (SS 312g Abs. 2 Nr. 3 BGB)
  - Hinweis auf Ausnahme fuer termingebundene Dienstleistungen (SS 312g Abs. 2 Nr. 9 BGB)
  - **Muster-Widerrufsformular** (gesetzliches Muster aus Anlage 2 zu Art. 246a EGBGB)

---

## 6. PREISANGABENVERORDNUNG (PAngV)

### Rechtsgrundlage
- **Preisangabenverordnung (PAngV)** in der Fassung vom 28.05.2022
- **SS 1 PAngV** -- Grundpflicht zur Gesamtpreisangabe
- **SS 19 UStG** -- Kleinunternehmerregelung

### Anforderungen

| Regel | Details | Pflicht |
|-------|---------|---------|
| Bruttopreise | ALLE Preise muessen Endpreise sein (inkl. MwSt) | Ja, immer |
| MwSt-Hinweis | "inkl. MwSt." oder "inkl. gesetzl. MwSt." bei jedem Preis | Ja |
| Kleinunternehmer | "Kein Ausweis von MwSt. gemaess SS 19 UStG" | Ja, wenn anwendbar |
| Versandkosten | Klar angeben oder "zzgl. Versandkosten" mit genauem Betrag | Ja, bei Versand |
| Grundpreise | Pro kg/Liter bei gewichts-/volumenabhaengigen Produkten | Ja, im Shop |
| Preissenkungen | Niedrigster Preis der letzten 30 Tage als Referenz angeben (SS 11 PAngV) | Ja, bei Rabatten |

### Bussgelder
Bis zu **25.000 EUR** fuer Verstoesse.

### Aktion fuer NataLux
- [x] Kleinunternehmerhinweis im Impressum vorhanden
- [ ] **Auf der Preisseite** bei jedem Preis Hinweis auf SS 19 UStG (kein MwSt-Ausweis)
- [ ] **Im Shop** Grundpreise pruefen (pro ml/g bei Kosmetikprodukten)
- [ ] **Bei Rabatten** den niedrigsten Preis der letzten 30 Tage angeben

---

## 7. UWG -- Wettbewerbsrecht & Kosmetik-Claims

### Rechtsgrundlage
- **UWG** (Gesetz gegen den unlauteren Wettbewerb)
- **EU Kosmetik-Verordnung (EG) Nr. 1223/2009, Art. 20**
- **Kommissions-Verordnung (EU) Nr. 655/2013** (Kosmetik-Werbeaussagen)

### Anforderungen fuer Kosmetik-Websites

#### Verbotene Werbeaussagen
1. **Keine irrefuehrenden Heilversprechen** -- Kosmetik darf keine medizinischen Wirkungen versprechen
2. **Keine falschen Vorher/Nachher-Vergleiche** -- Bilder muessen echt und repraesentativ sein
3. **Keine unsubstantiierten Anti-Aging-Versprechen** -- "Falten verschwinden" ist problematisch, "kann das Erscheinungsbild verbessern" ist akzeptabel
4. **Keine medizinische Terminologie** fuer kosmetische Behandlungen (es sei denn, wissenschaftlich belegt)

#### EU-Verordnung 655/2013 -- 6 Kriterien fuer Kosmetik-Claims
1. **Rechtskonformitaet** -- Claims duerfen nicht gegen Gesetze verstossen
2. **Wahrhaftigkeit** -- Aussagen muessen wahr sein
3. **Belegbarkeit** -- Aussagen muessen durch Nachweise gestuetzt sein
4. **Ehrlichkeit** -- Keine Uebertreibungen
5. **Fairness** -- Kein unfairer Vergleich mit Wettbewerbern
6. **Informierte Entscheidung** -- Verbraucher muessen informiert entscheiden koennen

#### Kosmetik-spezifisch (ab 01.09.2025)
Neue Liste von 21 CMR-Substanzen in Kosmetikprodukten verboten (Anhang II der CLP-Verordnung).

### Abmahnung-Risiko
Wettbewerbszentrale und Verbraucherschutzverbaende ueberwachen aktiv Kosmetik-Websites. Haeufige Fallen:
- Versprechen konkreter Behandlungsergebnisse
- Medizinische Terminologie fuer kosmetische Verfahren
- Fehlende Vorher/Nachher-Disclaimer
- Unsubstantiierte Anti-Aging-Versprechen
- Schleichwerbung (bezahlte Empfehlungen ohne Kennzeichnung)

### Aktion fuer NataLux
- [ ] **Alle Service-Seiten pruefen** auf irrefuehrende Claims
- [ ] **Vorher/Nachher-Bilder** mit Disclaimer versehen
- [ ] **Anti-Aging-Formulierungen** pruefen (keine Heilversprechen)
- [ ] **Laser-Seite** besonders pruefen (Grenze Kosmetik/Medizin)

---

## 8. BARRIEREFREIHEITSSTAERKUNGSGESETZ (BFSG)

### Rechtsgrundlage
- **Barrierefreiheitsstaerkungsgesetz (BFSG)** -- in Kraft seit 28.06.2025
- Umsetzt **EU-Richtlinie 2019/882** (European Accessibility Act)
- Verweist auf **EN 301 549**, die **WCAG 2.1 Level AA** einbezieht

### Geltungsbereich
Gilt fuer elektronische Dienstleistungen, die Verbrauchern ueber Websites angeboten werden (B2C):
- Online-Shops
- Kontaktformulare
- Buchungssysteme
- Apps

### Kleinstunternehmen-Ausnahme (SS 3 Abs. 3 BFSG)
**Dienstleistende Kleinstunternehmen sind BEFREIT**, wenn BEIDE Bedingungen erfuellt sind:
- Weniger als 10 Mitarbeiter UND
- Jahresumsatz unter 2 Mio. EUR

**Fuer NataLux**: Bei weniger als 10 Mitarbeitern und unter 2 Mio. EUR Umsatz greift die **BFSG-Befreiung**. Freiwillige Einhaltung wird dennoch empfohlen.

### Was das BFSG verlangt (falls anwendbar)
1. WCAG 2.1 Level AA Konformitaet
2. Ausreichender Farbkontrast (mind. 4.5:1 fuer Normaltext, 3:1 fuer grossen Text)
3. Tastaturbedienbarkeit
4. Screenreader-Kompatibilitaet
5. Lesbare Schriften und Textalternativen fuer Bilder
6. **Erklaerung zur Barrierefreiheit** (wenn BFSG gilt)
7. Responsive Design
8. Strukturierte Ueberschriften-Hierarchie
9. Formulare mit Labels und Fehlermeldungen
10. Ausreichende Klickflaechen (mind. 44x44px)

### Bussgelder
Bis zu **100.000 EUR** fuer Verstoesse.

### Aktion fuer NataLux
- [ ] **Kleinstunternehmen-Ausnahme dokumentieren** (wenn anwendbar)
- [ ] Trotzdem: **Farbkontraste pruefen** (besonders bei Glass-Morphism-Effekten)
- [ ] **Alt-Texte fuer alle Bilder** pruefen
- [ ] **Tastaturbedienbarkeit** testen
- [ ] **ARIA-Labels** pruefen

---

## 9. DIGITAL SERVICES ACT (DSA) / DDG

### Rechtsgrundlage
- **Verordnung (EU) 2022/2065** (Digital Services Act) -- voll anwendbar seit 17.02.2024
- **Digitale-Dienste-Gesetz (DDG)** -- deutsche Umsetzung, in Kraft seit 14.05.2024

### Auswirkung auf NataLux
Fuer eine einfache Geschaefts-Website (kein Marktplatz, keine Plattform) sind die Auswirkungen **minimal**:
- Impressumspflicht ueber SS 5 DDG (siehe Abschnitt 1)
- Transparenz in AGB
- Die schwereren Pflichten (Inhaltsmoderation, Transparenzberichte) gelten nur fuer Hosting-Dienste, Online-Plattformen und sehr grosse Plattformen

### Durchsetzung
BNetzA (Bundesnetzagentur) ist die deutsche Durchsetzungsbehoerde. Erste Bussgelder ab 2026 erwartet.

---

## 10. EU AI ACT

### Rechtsgrundlage
- **Verordnung (EU) 2024/1689** (KI-Verordnung)
- **Art. 50** -- Transparenzpflichten (wirksam ab August 2026)

### Relevanz fuer NataLux
Wenn KI-Tools auf der Website eingesetzt werden (Chatbots, KI-Bildgenerierung, KI-Texte, KI-Hautanalyse):
- **Offenlegungspflicht**: Nutzer muessen informiert werden, dass sie mit KI interagieren
- **Chatbots**: Muessen klar als nicht-menschlich gekennzeichnet sein
- **KI-generierte Inhalte**: Muessen als KI-generiert erkennbar sein
- **Deepfakes**: Muessen gekennzeichnet werden

### Zeitplan
- Art. 50 Transparenzregeln treten **August 2026** in Kraft
- Entwurf des Code of Practice veroeffentlicht am 17.12.2025; finale Version erwartet Juni 2026

### Aktion fuer NataLux
- [ ] Aktuell keine KI-Tools auf der Website -- keine Aktion erforderlich
- [ ] Bei kuenftiger KI-Nutzung: Art. 50 Transparenzpflichten beachten

---

## 11. ePRIVACY

### Rechtsgrundlage
- **ePrivacy-Richtlinie 2002/58/EG** (weiterhin in Kraft)
- Umgesetzt in Deutschland durch **SS 25 TDDDG**
- Die geplante ePrivacy-Verordnung wurde im **Februar 2025** von der EU-Kommission **zurueckgezogen**

### Kernprinzip
Art. 5 Abs. 3 der ePrivacy-Richtlinie: Speichern oder Zugreifen auf Informationen auf dem Geraet eines Nutzers erfordert informierte Einwilligung, ausser fuer streng notwendige technische Zwecke.

-> Praktische Anforderungen sind durch Abschnitt 3 (Cookie-Consent) abgedeckt.

---

## 12. TMG/TTDSG -> DDG/TDDDG UEBERGANG

### Zusammenfassung der Gesetzesaenderungen

| Altes Gesetz | Neues Gesetz | Aenderungsdatum | Aenderung |
|-------------|-------------|-----------------|-----------|
| SS 5 TMG (Impressum) | SS 5 DDG | 14.05.2024 | Gleicher Inhalt, neue Zitation |
| SSSS 7-10 TMG (Haftung) | SSSS 7-10 DDG | 14.05.2024 | Gleicher Inhalt, neue Zitation |
| SS 25 TTDSG (Cookie-Einwilligung) | SS 25 TDDDG | 13.05.2024 | Gleicher Inhalt, neuer Name |
| TMG-Verweis in Datenschutzerklaerung | DDG-Verweis | 14.05.2024 | Alle Erwaenungen aktualisieren |

### Aktion fuer NataLux
- [ ] **ALLE Verweise** auf TMG/TTDSG auf DDG/TDDDG aktualisieren
- Betroffen: Impressum, Datenschutzerklaerung, AGB (ueberall pruefen!)

---

## 13. OS-PLATTFORM -- WICHTIGE AKTUALISIERUNG

### Status
- **ODR-Verordnung (EU) Nr. 524/2013** -- AUFGEHOBEN durch Verordnung (EU) 2024/3228
- **Plattform abgeschaltet am 20.07.2025**

### Aktion
- **ALLE Links und Verweise** auf die OS-Plattform (ec.europa.eu/consumers/odr) ENTFERNEN
- Aus Impressum, AGB und allen anderen Stellen entfernen
- Nichtentfernung ist potenziell **abmahnfaehig**!
- **SS 36 VSBG** gilt weiterhin (siehe Abschnitt 4)

### Status NataLux
- [x] Kein OS-Plattform-Link vorhanden (korrekt)

---

## 14. VERPACKUNGSGESETZ (VerpackG)

### Rechtsgrundlage
- **Verpackungsgesetz (VerpackG)**
- **LUCID Verpackungsregister**

### Relevanz fuer NataLux
**Gilt NUR wenn Produkte an Verbraucher VERSANDT werden.**

Falls der Kosmetikshop (RENEW-Produkte) Produkte versendet:
1. **LUCID-Registrierung** erforderlich (kostenlos)
2. **Systembeteiligungsvertrag** (z.B. Der Gruene Punkt)
3. **Datenmeldung** der Verpackungsmengen
4. **LUCID-ID** auf Rechnungen angeben

### Bussgelder
Bis zu **200.000 EUR** und Vertriebsverbot.

### Aktion fuer NataLux
- [ ] Klaeren: Werden Produkte versandt? Wenn ja -> LUCID-Registrierung und Systembeteiligung
- [ ] Wenn nur Studioverkauf: VerpackG weniger relevant

---

## 15. GOOGLE FONTS -- DATENSCHUTZ-PFLICHT

### Rechtsgrundlage
- **DSGVO Art. 6 Abs. 1** (rechtswidrige Datenuebermittlung)
- **LG Muenchen I, Urteil vom 20.01.2022, Az. 3 O 17493/20** (Leitentscheidung)

### Das Google-Fonts-Problem
Das LG Muenchen hat entschieden, dass das Laden von Google Fonts vom Google-CDN eine **unzulaessige Uebermittlung der IP-Adresse** an Google (US-Unternehmen) darstellt. Dies loeste eine massive Abmahnwelle aus (ueber 100.000 Abmahnungen a 170 EUR).

### BGH-Vorlage an EuGH (2025)
Der BGH hat dem EuGH Fragen vorgelegt, ob absichtlich provozierte DSGVO-Verstoesse (durch Crawlen von Websites) als Grundlage fuer Schadenersatzansprueche dienen koennen. Die grundsaetzliche Verpflichtung zum Selbst-Hosting bleibt aber bestehen.

### Anforderungen
1. **Google Fonts SELBST HOSTEN** -- herunterladen und vom eigenen Server ausliefern
2. **ALLE externen Ressourcen** selbst hosten, wo moeglich (Font Awesome, CDNs etc.)
3. Wenn externes Laden noetig: **Einwilligung VOR dem Laden** einholen
4. Gilt fuer JEDE externe Ressource, die Nutzerdaten uebertraegt

### Aktion fuer NataLux
- [ ] **KRITISCH: Pruefen ob Google Fonts selbst gehostet oder vom Google-CDN geladen werden**
  - Datei pruefen: `app/layout.tsx` (Google Fonts Import)
  - Falls extern: Sofort auf Selbst-Hosting umstellen!

---

## 16. KONTAKTFORMULARE -- Rechtliche Anforderungen

### Rechtsgrundlage
- **Art. 6 Abs. 1 lit. b DSGVO** (vorvertragliche Massnahmen) oder **lit. a** (Einwilligung)
- **Art. 13 DSGVO** (Informationspflicht)
- **Art. 32 DSGVO** (Sicherheit der Verarbeitung)
- **SS 25 TDDDG** (wenn das Formular Cookies setzt)

### Anforderungen
1. **SSL/TLS-Verschluesselung** ist PFLICHT fuer jede Seite mit Kontaktformular
2. **Datenschutzhinweis** neben dem Formular mit:
   - Welche Daten werden erhoben
   - Zweck der Verarbeitung
   - Rechtsgrundlage
   - Speicherdauer
   - Betroffenenrechte
3. **Einwilligungs-Checkbox** (standardmaessig nicht angehakt) mit Link zur Datenschutzerklaerung
4. **Datenminimierung**: Nur tatsaechlich notwendige Daten erheben
5. **Keine vorausgefuellten Felder** fuer optionale Daten
6. **Spam-Schutz**: Bei reCAPTCHA -> Einwilligung erforderlich (Google-Datentransfer); Alternativen: Honeypot-Felder

### Status NataLux
- [x] Kontaktformular mit Web3Forms vorhanden
- [x] Datenschutz-Checkbox vorhanden
- [ ] **Datenschutzhinweis direkt beim Formular** pruefen (nicht nur Checkbox)
- [ ] **Kein reCAPTCHA** -- gut (kein zusaetzlicher Datentransfer)
- [ ] SSL/TLS bei Deployment sicherstellen

---

## 17. NEWSLETTER -- Double Opt-In (SS 7 UWG)

### Rechtsgrundlage
- **SS 7 Abs. 2 Nr. 3 UWG** (Verbot unverlangter Werbung)
- **Art. 6 Abs. 1 lit. a DSGVO** (Einwilligung)

### Anforderungen (falls Newsletter implementiert wird)
1. **Double Opt-In ist PFLICHT** in Deutschland:
   - Schritt 1: Nutzer gibt E-Mail ein und haekt Einwilligungsbox an
   - Schritt 2: Bestaetigungs-E-Mail mit Aktivierungslink
   - Schritt 3: Nutzer klickt Link zur Bestaetigung
2. **Einwilligung muss protokolliert werden** (Zeitstempel, IP-Adresse, Einwilligungstext)
3. **Klare Information** vor Anmeldung ueber Inhalt, Haeufigkeit, Absender
4. **Jede E-Mail muss Abmeldelink** enthalten
5. **Kein Koppelungsverbot**: Newsletter-Anmeldung darf KEINE Bedingung fuer Leistungen sein
6. **Beweislast** liegt beim Absender

### Status NataLux
- Aktuell kein Newsletter implementiert
- Bei kuenftiger Einfuehrung: Striktes Double Opt-In mit vollstaendiger Protokollierung

---

## 18. FOTOGRAFIE / BILDER -- Rechte und Einwilligung

### Rechtsgrundlage
- **SS 22 KunstUrhG** -- Recht am eigenen Bild
- **SS 23 KunstUrhG** -- Ausnahmen
- **Art. 6 Abs. 1 lit. a DSGVO** -- Einwilligung
- **UrhG** (Urheberrechtsgesetz) -- Urheberrecht

### Anforderungen fuer Vorher/Nachher-Fotos
1. **Schriftliche Einwilligung** jeder abgebildeten Person VOR Veroeffentlichung
2. **Einwilligung ist kontextspezifisch** -- Einwilligung fuer eine Nutzung gilt nicht fuer andere
3. **Minderjaehrige unter 18**: Eltern-/Erziehungsberechtigten-Einwilligung Pflicht
4. **Einwilligung kann widerrufen werden** (fuer zukuenftige Nutzung)
5. **DSGVO-Einwilligung** kann zusaetzlich zur KunstUrhG-Einwilligung erforderlich sein

### Stock-Fotos
- Korrekte Lizenzierung sicherstellen
- Model-Releases muessen die beabsichtigte Nutzung abdecken
- Attributionspflichten je nach Lizenz beachten

### Status NataLux
- [x] AGB adressiert Fotoeinwilligung korrekt (Abschnitt 8: "ausdrueckliche schriftliche Einwilligung")
- [ ] Sicherstellen, dass in der Praxis schriftliche Einwilligungsformulare verwendet werden
- [ ] Einwilligung muss spezifizieren, WO Fotos verwendet werden (Website, Social Media etc.)

---

## 19. SSL/TLS-VERSCHLUESSELUNG

### Rechtsgrundlage
- **Art. 32 DSGVO** (Sicherheit der Verarbeitung)
- **SS 19 Abs. 4 TDDDG** (technische Schutzmassnahmen)

### Anforderungen
1. SSL/TLS-Verschluesselung ist **PFLICHT** fuer jede Website mit Kontaktformular oder Datenerhebung
2. Gesamte Website muss HTTPS verwenden
3. HTTP muss auf HTTPS umleiten
4. Zertifikate muessen gueltig und aktuell sein
5. Mindestens TLS 1.2 (TLS 1.3 empfohlen)

### Bussgelder
Verstoesse gegen Art. 32 DSGVO: Bis zu **10 Mio. EUR** oder 2% des weltweiten Jahresumsatzes.

### Status NataLux
- [x] Bei Vercel-Deployment automatisch SSL/TLS
- [ ] Bei alternativem Hosting: SSL/TLS sicherstellen

---

## 20. AUFTRAGSVERARBEITUNGSVERTRAEGE (AVV) -- Art. 28 DSGVO

### Rechtsgrundlage
- **Art. 28 DSGVO** (Auftragsverarbeiter)
- **Art. 46 DSGVO** (Geeignete Garantien fuer Drittlandtransfers)

### Erforderliche AVVs fuer NataLux

| Auftragsverarbeiter | Dienst | AVV-Status |
|---------------------|--------|------------|
| Hosting-Anbieter (Vercel/Netlify) | Website-Hosting | [ ] Pruefen |
| Google | Google Analytics | [ ] Google DPA akzeptieren |
| Web3Forms | Kontaktformular-Backend | [ ] Pruefen |
| DIKIDI | Online-Terminbuchung | [ ] Pruefen |
| WEB.DE | Geschaefts-E-Mail | [ ] Pruefen |
| Meta (WhatsApp) | WhatsApp-Kommunikation | [ ] Pruefen |
| CDN-Anbieter | Inhaltsauslieferung | [ ] Pruefen |
| Newsletter-Dienst | Falls verwendet | [ ] Pruefen |

### Inhalt eines AVV
- Gegenstand und Dauer der Verarbeitung
- Art und Zweck der Verarbeitung
- Art der personenbezogenen Daten und Kategorien betroffener Personen
- Pflichten und Rechte des Verantwortlichen
- Technische und organisatorische Massnahmen
- Genehmigungsverfahren fuer Unterauftragsverarbeiter
- Datenloeschung nach Vertragsende
- Kontrollrechte

---

## 21. AUFBEWAHRUNGSPFLICHTEN

### Rechtsgrundlage
- **Art. 5 Abs. 1 lit. e DSGVO** (Speicherbegrenzung)
- **Art. 17 DSGVO** (Recht auf Loeschung)
- **SS 147 AO** (steuerliche Aufbewahrung)
- **SS 257 HGB** (handelsrechtliche Aufbewahrung)

### Aufbewahrungsfristen

| Datenart | Aufbewahrungsfrist | Rechtsgrundlage |
|----------|-------------------|-----------------|
| Rechnungen, Buchungsbelege | 10 Jahre (seit 2025 teilweise auf 8 Jahre reduziert) | SS 147 AO, SS 257 HGB |
| Geschaeftskorrespondenz | 6 Jahre | SS 147 AO |
| Steuerrelevante Unterlagen | 10 Jahre | SS 147 AO |
| Kontaktformular-Anfragen | Bis Zweckerfuellung + angemessener Puffer | Art. 17 DSGVO |
| Cookie-Consent-Protokolle | Dauer der Einwilligung + Dokumentationszeitraum | SS 25 TDDDG |
| Kunden-Termindaten | Bis Zweckerfuellung | Art. 5 Abs. 1 lit. e DSGVO |

### Loeschkonzept
Unter der DSGVO sollte ein dokumentiertes Loeschkonzept existieren:
- Welche Daten werden gespeichert
- Warum und wie lange
- Wann und wie werden sie geloescht
- Wer ist verantwortlich

---

## 22. SOCIAL-MEDIA-INTEGRATION

### Rechtsgrundlage
- **DSGVO Art. 6, 13, 14** (Datenverarbeitung durch Social-Media-Embeds)
- **SS 25 TDDDG** (Cookie/Tracking durch eingebettete Inhalte)
- **KunstUrhG** (Bildrechte)
- **UWG** (Werbekennzeichnung)

### Anforderungen

| Integration | Anforderung | Details |
|-------------|-------------|---------|
| Social-Media-Links (zu externen Profilen) | Unproblematisch | In Datenschutzerklaerung erwaehnen |
| Social-Media-Embeds (Instagram-Feed etc.) | **Einwilligung vor dem Laden!** | Zwei-Klick-Loesung oder Consent erforderlich |
| Social-Media-Share-Buttons | Wie Embeds | Keine externen Skripte ohne Einwilligung laden |
| Social-Media-Profil-Impressum | Eigenes Impressum | Jedes Profil (Instagram etc.) braucht eigenes Impressum oder klaren Link zum Website-Impressum |

### Aktion fuer NataLux
- [ ] Instagram-Integration pruefen: Links (OK) vs. Embeds (Einwilligung noetig)
- [ ] Instagram-Profil: Impressum/Link zum Website-Impressum vorhanden?

---

## 23. MINDERJAHRIGENSCHUTZ

### Rechtsgrundlage
- **Jugendschutzgesetz (JuSchG)**
- **Jugendmedienschutz-Staatsvertrag (JMStV)**
- **Art. 8 DSGVO** -- Einwilligung von Kindern (16 Jahre in Deutschland)

### Anforderungen fuer NataLux
1. **Altersrestriktionen fuer Dienstleistungen** -- korrekt in AGB adressiert (PMU ab 18, Minderjaehrige mit Einwilligung der Erziehungsberechtigten)
2. **Datenerhebung von Minderjaehrigen**: Unter Art. 8 DSGVO braucht Einwilligung unter 16 Jahren die Zustimmung der Erziehungsberechtigten
3. **Online-Shop**: Wenn Minderjaehrige Produkte kaufen koennten, altersgerechte Bedingungen beachten

---

## 24. DIKIDI -- KRITISCHES DATENSCHUTZPROBLEM (Drittlandtransfer nach Russland!)

### Rechtsgrundlage
- **Art. 44-49 DSGVO** (Uebermittlung personenbezogener Daten an Drittlaender)
- **Art. 45 DSGVO** (Angemessenheitsbeschluss)

### Das Problem
**DIKIDI (dikidi.ru) ist eine RUSSISCHE Plattform.** Russland hat **KEINEN Angemessenheitsbeschluss** der EU-Kommission. Die Uebermittlung personenbezogener Daten (Name, Telefon, E-Mail, Terminwuensche) an DIKIDI-Server in Russland ist unter der DSGVO **hoechst problematisch**.

### Betroffene Dateien
- `src/components/FloatingButtons.tsx` -- Link zu dikidi.ru
- `src/components/HeroSection.tsx` -- "Termin buchen" Button -> dikidi.ru
- `src/components/ServicePageLayout.tsx` -- "Termin buchen" Button -> dikidi.ru
- `src/page-components/Laser.tsx` -- "Termin buchen" Button -> dikidi.ru
- `src/page-components/Datenschutz.tsx` -- DIKIDI-Datenschutzhinweis

### Rechtliche Optionen
1. **Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)** -- mit DIKIDI abschliessen (schwierig, da Russland)
2. **Ausdrueckliche Einwilligung (Art. 49 Abs. 1 lit. a DSGVO)** -- Nutzer muessen VOR der Weiterleitung zu DIKIDI informiert werden:
   - Dass Daten nach Russland uebermittelt werden
   - Dass kein angemessenes Datenschutzniveau besteht
   - Ausdrueckliche Einwilligung einholen
3. **Alternative Buchungsplattform** mit EU-Serverstandort verwenden (z.B. Shore, Treatwell, SimplyBook.me)
4. **Eigenes Buchungsformular** auf der Website implementieren

### Empfehlung
**DRINGEND** die Nutzung von DIKIDI ueberpruefen und ggf. auf eine EU-basierte Alternative umsteigen. Mindestens eine informierte Einwilligung VOR der Weiterleitung einholen.

### Aktion fuer NataLux
- [ ] **KRITISCH**: Datentransfer zu dikidi.ru rechtlich absichern oder Alternative suchen
- [ ] Falls DIKIDI beibehalten: Einwilligungsdialog VOR Weiterleitung implementieren
- [ ] Datenschutzerklaerung: Drittlandtransfer nach Russland ausfuehrlich beschreiben
- [ ] AVV mit DIKIDI pruefen (inkl. Standardvertragsklauseln)

---

## 25. NiSV -- LASERBEHANDLUNGEN (Verordnung zum Schutz vor nichtionisierender Strahlung)

### Rechtsgrundlage
- **NiSV** (Verordnung zum Schutz vor schaedlichen Wirkungen nichtionisierender Strahlung bei der Anwendung am Menschen)
- In Kraft seit **31.12.2020**, Fachkunde-Nachweispflicht seit **01.01.2022**

### Relevanz fuer NataLux
Die Website bewirbt Laser-Behandlungen mit spezifischen Laser-Typen:
- **Dioden-Laser** (808nm, 755nm, 1064nm) -- erfordert NiSV-Fachkunde
- **Alexandrit-Laser** -- erfordert NiSV-Fachkunde
- **RF-Lifting** (Radiofrequenz) -- erfordert NiSV-Fachkunde
- **Ultraschall** (Phonophorese) -- ggf. NiSV-relevant
- **Lichttherapie** (LED) -- ggf. NiSV-relevant
- **Biostrom** -- ggf. NiSV-relevant

### Anforderungen
1. **Fachkundenachweis** des Betreibers/Anwenders -- seit 01.01.2022 Pflicht
2. **Aufklaerungspflicht** -- Kunden muessen VOR der Behandlung ueber Risiken aufgeklaert werden
3. **Dokumentationspflicht** -- Behandlungen muessen dokumentiert werden
4. **Anzeigepflicht** bei der zustaendigen Behoerde fuer bestimmte Geraete
5. **Kontraindikationen** muessen abgeklaert werden (Schwangerschaft, Medikamente, Hauttyp etc.)
6. **Mindestalter 18 Jahre** fuer bestimmte Behandlungen

### Auswirkung auf die Website
- Auf der **Laser-Seite** sollte der Fachkunde-Nachweis erwaehnt werden (schafft Vertrauen)
- **Kontraindikationen** sollten transparent kommuniziert werden
- **Keine uebertriebenen Wirkversprechen** (UWG + NiSV)
- **Vorher/Nachher-Bilder** mit Disclaimer

### Aktion fuer NataLux
- [ ] Fachkunde-Nachweis (NiSV) auf Laser-Seite erwaehnen
- [ ] Kontraindikationen-Liste auf Laser-Seite hinzufuegen
- [ ] Wirkversprechen auf allen Laser/RF/Ultraschall-Seiten pruefen

---

## 26. HEILMITTELWERBEGESETZ (HWG) -- Werbung fuer kosmetische/medizinnahe Behandlungen

### Rechtsgrundlage
- **Heilmittelwerbegesetz (HWG)**
- **SS 11 HWG** -- Verbotene Werbemassnahmen
- **SS 3 HWG** -- Irrefuehrende Werbung

### Relevanz fuer NataLux
Einige Behandlungen liegen an der Grenze zwischen Kosmetik und Medizin:
- **Laser-Haarentfernung** -- kosmetisch, aber mit medizinischem Geraet
- **Microneedling** -- kann als invasiv gelten
- **Anti-Aging-Behandlungen** -- Wirkversprechen koennten unter HWG fallen
- **RF-Lifting** -- medizinnahe Anwendung
- **Kavitation** -- Koerperformung mit medizinischem Geraet

### Verbotene Werbeaussagen (SS 11 HWG)
1. **Keine Vorher/Nachher-Bilder** bei verschreibungspflichtigen Verfahren
2. **Keine Gutachten/Zeugnisse** ohne Beleg
3. **Keine Angstappelle** oder Druck
4. **Keine Garantie** fuer Behandlungserfolg
5. **Keine irrefuehrende Darstellung** von Wirkungen

### Erlaubte Formulierungen
- "Kann das Erscheinungsbild verbessern" statt "Macht Falten verschwinden"
- "Unterstuetzt die Hautregeneration" statt "Heilt die Haut"
- "Sichtbare Verbesserung moeglich" statt "Garantierte Ergebnisse"

### Aktion fuer NataLux
- [ ] **Alle Service-Seiten** auf HWG-Konformitaet pruefen
- [ ] Wirkversprechen abschwaechen wo noetig
- [ ] Vorher/Nachher-Bilder: Disclaimer hinzufuegen
- [ ] Behandlungsergebnis-Aussagen mit "kann" / "moeglich" formulieren

---

## 27. BEWERTUNGEN / REVIEWS -- Omnibus-Richtlinie

### Rechtsgrundlage
- **Modernisierungsrichtlinie (EU) 2019/2161** (Omnibus-Richtlinie)
- **SS 5b UWG** -- Wesentliche Informationen
- Umgesetzt in deutsches Recht seit **28.05.2022**

### Anforderungen bei Darstellung von Kundenbewertungen
1. **Verifikation offenlegen**: Angeben, ob und wie Bewertungen auf Echtheit geprueft werden
2. **Keine gefaelschten Bewertungen**: Alle dargestellten Reviews muessen echt sein
3. **Keine selektive Darstellung**: Nicht nur positive Reviews zeigen (wenn echte Reviews)
4. **Kennzeichnung**: Wenn Reviews nicht verifiziert sind, muss das klar sein

### Status NataLux
Datei: `src/page-components/Reviews.tsx`
- **9 Reviews** werden angezeigt -- **ALLE mit 5 Sternen**
- Reviews scheinen **redaktionell erstellt** zu sein (keine echte Bewertungsquelle)
- **KEIN Hinweis** ob Reviews verifiziert sind
- **KEIN Hinweis** auf Quelle der Bewertungen (Google, eigene Sammlung etc.)

### Aktion fuer NataLux
- [ ] **Kennzeichnung hinzufuegen**: Woher stammen die Reviews? (Google Reviews, eigene Umfrage etc.)
- [ ] **Verifizierungshinweis**: "Bewertungen wurden nicht unabhaengig verifiziert" oder Quelle angeben
- [ ] Falls redaktionell erstellt: Als "Kundenstimmen" oder "Erfahrungsberichte" kennzeichnen, NICHT als "Bewertungen"
- [ ] Alternativ: Echte Google-Reviews einbinden (mit Consent fuer externes Laden)

---

## 28. SEO & TECHNISCHE ANFORDERUNGEN FUER MEHRSPRACHIGKEIT

### HTML lang-Attribut

**PROBLEM**: `<html lang="de">` ist in `app/layout.tsx` (Zeile 62) **fest auf "de" gesetzt** und aendert sich NICHT bei Sprachwechsel.

**Auswirkung**:
- Screenreader lesen RU/UA-Inhalte mit deutscher Aussprache vor
- Google indexiert alle Seiten als deutschsprachig
- Barrierefreiheits-Verstoess (WCAG 3.1.1 -- Sprache der Seite)
- Potentiell BFSG-relevant

**Loesung**: `lang`-Attribut dynamisch setzen basierend auf aktueller Sprache:
- `de` -> `lang="de"`
- `ru` -> `lang="ru"`
- `ua` -> `lang="uk"` (ISO 639-1 fuer Ukrainisch ist "uk")

### hreflang-Tags (fehlend!)

**PROBLEM**: Keine hreflang-Tags vorhanden. Diese sind essentiell fuer:
- Korrekte Sprachzuordnung durch Google
- Vermeidung von Duplicate Content
- Korrekte Anzeige in Suchergebnissen je nach Nutzersprache

**Loesung**: In `<head>` jeder Seite einfuegen:
```html
<link rel="alternate" hreflang="de" href="https://munich-beauty.de/" />
<link rel="alternate" hreflang="ru" href="https://munich-beauty.de/?lang=ru" />
<link rel="alternate" hreflang="uk" href="https://munich-beauty.de/?lang=ua" />
<link rel="alternate" hreflang="x-default" href="https://munich-beauty.de/" />
```

### Meta-Tags (nur Deutsch!)

**PROBLEM**: In `app/layout.tsx` (Zeilen 27-53) sind title, description und OG-Tags **nur auf Deutsch/Englisch** und aendern sich NICHT bei Sprachwechsel.

```
title: 'Nata Lux - Beauty Studio München'  // Fest Deutsch
description: 'Professional beauty services...'  // Fest Englisch!
locale: 'de_DE'  // Fest Deutsch
```

**Loesung**: Meta-Tags dynamisch basierend auf Sprache generieren.

### Structured Data / JSON-LD (unvollstaendig)

**VORHANDEN**: `ProcedureSchema` Komponente fuer einzelne Service-Seiten
**FEHLEND**:
- **LocalBusiness** Schema fuer die Hauptseite (Name, Adresse, Oeffnungszeiten, Koordinaten)
- **BeautySalon** Schema (spezifischer Typ)
- **Product** Schema fuer Shop-Produkte
- **FAQ** Schema fuer FAQ-Seite
- **BreadcrumbList** Schema fuer Navigation
- **Review** Schema fuer Bewertungen (wenn echt)

### Aktion fuer NataLux
- [ ] **`<html lang>` dynamisch setzen** basierend auf aktueller Sprache
- [ ] **hreflang-Tags hinzufuegen** in `app/layout.tsx`
- [ ] **Meta-Tags sprachspezifisch** machen (title, description, OG)
- [ ] **LocalBusiness / BeautySalon** JSON-LD Schema auf Hauptseite
- [ ] **Product** Schema fuer Shop-Produkte
- [ ] **FAQ** Schema fuer FAQ-Seite
- [ ] **BreadcrumbList** Schema

---

## 29. GOOGLE FONTS -- ENTWARNUNG (Self-Hosted durch Next.js)

### Status
Google Fonts werden ueber `next/font/google` geladen (`app/layout.tsx`, Zeilen 2-25):
- Playfair Display
- Cormorant Garamond
- Inter

### next/font/google = Self-Hosting!
**Next.js `next/font/google` laedt Schriftarten bei Build-Time herunter** und liefert sie vom eigenen Server aus. Es findet **KEIN Datentransfer zum Google-CDN** zur Laufzeit statt.

**Ergebnis**: Kein DSGVO-Problem. Die Fonts sind de facto selbst gehostet.

### Aktion fuer NataLux
- [x] Google Fonts sind via next/font/google selbst gehostet -- **KEIN Handlungsbedarf**

---

## 30. KOSMETIKPRODUKTE IM SHOP -- Produktsicherheit

### Rechtsgrundlage
- **EU Kosmetik-Verordnung (EG) Nr. 1223/2009**
- **CPNP** (Cosmetic Products Notification Portal) -- wenn Produkte erstmalig auf EU-Markt gebracht
- **LMBG / LFGB** (Lebensmittel- und Futtermittelgesetzbuch) -- ggf. relevant
- **PAngV** (Preisangaben)

### Anforderungen fuer den Online-Verkauf von Kosmetikprodukten
1. **INCI-Liste**: Inhaltsstoffe muessen angegeben werden (auf dem Produkt UND online)
2. **PAO-Symbol** (Period After Opening): Haltbarkeit nach Oeffnung
3. **Chargennummer**: Muss auf Produkt vorhanden sein
4. **Herkunftsland**: Angabe erforderlich (RENEW = Israel)
5. **Verantwortliche Person in der EU**: Muss benannt sein
6. **Verwendungshinweise**: Falls erforderlich fuer sichere Anwendung
7. **Grundpreise**: Pro 100ml oder pro 100g (PAngV)
8. **Warnhinweise**: Falls zutreffend (z.B. "Nicht in die Augen bringen")

### Besonderheit RENEW-Produkte (Israel)
- RENEW ist eine israelische Marke
- Fuer den EU-Markt muss eine **verantwortliche Person in der EU** benannt sein (Art. 4 VO 1223/2009)
- **CPNP-Registrierung** muss durch den EU-Verantwortlichen erfolgen
- Als Haendler (nicht Hersteller) gelten reduzierte Pflichten

### Aktion fuer NataLux
- [ ] **INCI-Listen** fuer Shop-Produkte pruefen (online anzeigen oder auf Anfrage)
- [ ] **Grundpreise** (pro 100ml/100g) im Shop hinzufuegen (PAngV)
- [ ] **EU-Verantwortliche Person** fuer RENEW-Produkte identifizieren
- [ ] **Herkunftsland** angeben (wenn nicht bereits auf Produktbildern sichtbar)

---

## 31. WEITERE GEFUNDENE PROBLEME

### WhatsApp-Nachricht ohne Ukrainisch
**Datei**: `src/components/FloatingButtons.tsx`, Zeile 12-14

```tsx
const message = language === 'de'
  ? 'Hallo! Ich interessiere mich für Ihre Dienstleistungen.'
  : 'Здравствуйте! Меня интересуют ваши услуги.';
```

**Problem**: UA-Nutzer erhalten die RUSSISCHE Nachricht. Es fehlt die ukrainische Variante.
**Loesung**: Dreifache Bedingung mit UA-Text hinzufuegen.

### "Termin b..." abgeschnittener Text auf Mobile
**Datei**: `src/components/FloatingButtons.tsx`, Zeile 37

```tsx
{language === 'de' ? 'Termin b...' : language === 'ru' ? 'Записать...' : 'Записатися...'}
```

**Problem**: Text ist absichtlich abgeschnitten ("b..." statt "buchen"). Sieht unprofessionell aus.
**Loesung**: Vollstaendigen Text oder Icon-only verwenden.

### FloatingButtons nur auf Mobile sichtbar
**Datei**: `src/components/FloatingButtons.tsx`, Zeile 28

```tsx
className="... md:hidden ..."
```

**Problem**: Booking- und WhatsApp-Buttons sind auf Desktop **nicht sichtbar**. Desktop-Nutzer haben nur den Header-CTA.

---

## 32. DREISPRACHIGKEIT (DE / RU / UA) -- ANFORDERUNGEN & AUDIT

### Technische Architektur

- **Sprachsystem**: React Context API (`src/contexts/LanguageContext.tsx`)
- **Unterstuetzte Sprachen**: DE (Deutsch, Standard), RU (Russisch), UA (Ukrainisch)
- **Persistenz**: `localStorage` mit Schluessel `'language'`
- **Uebersetzungsfunktion**: `t(key)` aus `useLanguage()` Hook
- **Uebersetzungs-Patterns**:
  - i18n-Schluessel via `t('key')` (empfohlen)
  - Inline-Bedingungen: `language === 'de' ? ... : language === 'ru' ? ... : ...`
  - Hardcodierte Objekte mit Sprach-Keys

### Grundregeln fuer Dreisprachigkeit

1. **JEDER sichtbare Text** auf der Website muss in allen 3 Sprachen verfuegbar sein
2. **KEINE Sprache darf vergessen werden** -- insbesondere UA wird oft uebersehen
3. **Rechtstexte** (Impressum, Datenschutz, AGB, Widerruf) muessen in allen 3 Sprachen **inhaltlich identisch** sein
4. **Fachbegriffe** muessen korrekt uebersetzt sein (keine Google-Translate-Qualitaet)
5. **Formatierung** muss sprachuebergreifend konsistent sein (Ueberschriften, Listen, Absaetze)
6. **Sprachumschalter** muss auf ALLEN Geraeten erreichbar sein (Desktop UND Mobile!)
7. **Meta-Tags** (title, description) sollten sprachspezifisch sein
8. **Buttons und CTAs** muessen in allen 3 Sprachen passen (Laengenunterschiede beachten!)
9. **Fehlermeldungen** in Formularen muessen uebersetzt sein
10. **Toast-Nachrichten** und Benachrichtigungen muessen uebersetzt sein
11. **Alt-Texte** fuer Bilder sollten sprachspezifisch sein
12. **Placeholder-Texte** in Eingabefeldern muessen uebersetzt sein

### Sprachumschalter-Anforderungen

| Anforderung | Details | Status |
|-------------|---------|--------|
| Desktop sichtbar | DE/RU/UA Buttons im Header | [x] Vorhanden |
| **Mobile sichtbar** | **Im mobilen Menue erreichbar** | [ ] **PRUEFEN -- ggf. nicht sichtbar auf Mobile!** |
| Aktive Sprache hervorgehoben | Gold-Hintergrund fuer aktive Sprache | [x] Vorhanden |
| Persistenz | Sprachwahl bleibt ueber Sessions erhalten | [x] localStorage |
| Sofortige Aktualisierung | Alle Texte aendern sich ohne Seitenreload | [x] React Context |

### Cookie-Banner Sprach-Mapping

**ACHTUNG**: Im `CookieConsent.tsx` wird `'ua'` auf `'uk'` gemappt. Dies sollte konsistent sein:
- Interner Sprach-Code: `'ua'`
- Cookie-Banner-Mapping: `'ua' -> 'uk'`
- Sicherstellen, dass das Mapping korrekt funktioniert und keine Texte fehlen

### Seiten-Audit: Sprachunterstuetzung (DE / RU / UA)

#### Hauptseiten

| Seite | Komponente | DE | RU | UA | Methode | Anmerkung |
|-------|-----------|----|----|----|---------|----|
| Startseite | `Index.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |
| Ueber uns | `About.tsx` | OK | OK | OK | Inline + i18n | Vollstaendig |
| Kontakt | `Contact.tsx` | OK | OK | OK | Inline-Bedingungen | Vollstaendig |
| Preise | `Prices.tsx` | OK | OK | OK | Inline-Bedingungen | Vollstaendig |
| Services | `Services.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |
| Shop | `Shop.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |
| Training | `Training.tsx` | OK | ? | ? | i18n-Keys | **PRUEFEN: RU/UA vollstaendig?** |
| Laser | `Laser.tsx` | OK | OK | OK | Inline-Bedingungen | Vollstaendig |
| Permanent Makeup | `PermanentMakeup.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |
| Anti-Aging | `AntiAging.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |
| Wimpern & Brauen | `LashesBrows.tsx` | OK | OK | OK | i18n-Keys | Vollstaendig |

#### Rechtstexte (KRITISCH -- muessen 1:1 uebersetzt sein!)

| Seite | Komponente | DE | RU | UA | Anmerkung |
|-------|-----------|----|----|----|----|
| Impressum | `Impressum.tsx` | OK | OK | OK | TMG->DDG Aenderung in ALLEN 3 Sprachen! |
| Datenschutz | `Datenschutz.tsx` | OK | OK | OK | Alle Ergaenzungen in ALLEN 3 Sprachen! |
| AGB | `AGB.tsx` | OK | OK | OK | Streitbeilegung in ALLEN 3 Sprachen! |
| **Widerruf** | **FEHLT** | -- | -- | -- | **Neue Seite in ALLEN 3 Sprachen erstellen!** |

#### Service-Unterseiten (17 Seiten)

| Seite | Komponente | DE | RU | UA | Anmerkung |
|-------|-----------|----|----|----|----|
| Wimpernverlaengerung | `services/Wimpernverlaengerung.tsx` | ? | ? | ? | **PRUEFEN** |
| Wimpern-/Brauen-Laminierung | `services/WimpernBrauenLaminierung.tsx` | ? | ? | ? | **PRUEFEN** |
| Powder Brows | `services/PowderBrows.tsx` | ? | ? | ? | **PRUEFEN** |
| Aquarell Lips | `services/AquarellLips.tsx` | ? | ? | ? | **PRUEFEN** |
| Wimpernkranz | `services/Wimpernkranz.tsx` | ? | ? | ? | **PRUEFEN** |
| PMU Remover | `services/PMURemover.tsx` | ? | ? | ? | **PRUEFEN** |
| Apparative Anti-Aging | `services/ApparativeAntiAging.tsx` | ? | ? | ? | **PRUEFEN** |
| RF-Lifting | `services/RFLifting.tsx` | ? | ? | ? | **PRUEFEN** |
| Lichttherapie | `services/Lichttherapie.tsx` | ? | ? | ? | **PRUEFEN** |
| Biostrom | `services/Biostrom.tsx` | ? | ? | ? | **PRUEFEN** |
| Ultraschall | `services/Ultraschall.tsx` | ? | ? | ? | **PRUEFEN** |
| RF-Vakuum | `services/RFVakuum.tsx` | ? | ? | ? | **PRUEFEN** |
| Kavitation | `services/Kavitation.tsx` | ? | ? | ? | **PRUEFEN** |
| Microneedling | `services/Microneedling.tsx` | ? | ? | ? | **PRUEFEN** |
| Darsonval Haare | `services/DarsonvalHaare.tsx` | ? | ? | ? | **PRUEFEN** |
| Gesichtsreinigung | `services/Gesichtsreinigung.tsx` | ? | ? | ? | **PRUEFEN** |
| Phonophorese | `services/Phonophorese.tsx` | ? | ? | ? | **PRUEFEN** |

#### Shop-Unterseiten (15 Seiten)

| Seite | Komponente | DE | RU | UA | Anmerkung |
|-------|-----------|----|----|----|----|
| Whitening | `shop/renew/Whitening.tsx` | ? | ? | ? | **PRUEFEN** |
| Golden Age | `shop/renew/GoldenAge.tsx` | ? | ? | ? | **PRUEFEN** |
| Anti Age | `shop/renew/AntiAge.tsx` | ? | ? | ? | **PRUEFEN** |
| Retinol | `shop/renew/Retinol.tsx` | ? | ? | ? | **PRUEFEN** |
| Biorepair Pro | `shop/renew/BiorepairPro.tsx` | ? | ? | ? | **PRUEFEN** |
| Dermo Control | `shop/renew/DermoControl.tsx` | ? | ? | ? | **PRUEFEN** |
| Propioguard | `shop/renew/Propioguard.tsx` | ? | ? | ? | **PRUEFEN** |
| Peelings | `shop/renew/Peelings.tsx` | ? | ? | ? | **PRUEFEN** |
| Masks | `shop/renew/Masks.tsx` | ? | ? | ? | **PRUEFEN** |
| Basic Care | `shop/renew/BasicCare.tsx` | ? | ? | ? | **PRUEFEN** |
| Sun Protection | `shop/renew/SunProtection.tsx` | ? | ? | ? | **PRUEFEN** |
| Sensitive Skin | `shop/renew/SensitiveSkin.tsx` | ? | ? | ? | **PRUEFEN** |
| Aqualia | `shop/renew/Aqualia.tsx` | ? | ? | ? | **PRUEFEN** |
| Vitamin C | `shop/renew/VitaminC.tsx` | ? | ? | ? | **PRUEFEN** |
| Professional | `shop/renew/Professional.tsx` | ? | ? | ? | **PRUEFEN** |

#### UI-Komponenten

| Komponente | DE | RU | UA | Anmerkung |
|-----------|----|----|----|----|
| Header (Desktop) | OK | OK | OK | Sprachumschalter + Navigation |
| Header (Mobile) | OK | OK | OK | **Sprachumschalter im Mobile-Menue pruefen!** |
| Footer | OK | OK | OK | Links + Kontaktinfo |
| Cookie-Banner | OK | OK | OK | ua->uk Mapping pruefen |
| Cookie-Einstellungen | OK | OK | OK | Modal mit Kategorien |
| FloatingWhatsApp | OK | ? | ? | **Tooltip-Text pruefen** |
| ScrollToTop | -- | -- | -- | Kein Text (nur Icon) |
| SearchBar | ? | ? | ? | **Placeholder-Text pruefen** |
| 404-Seite | ? | ? | ? | **PRUEFEN** |

### Audit-Checkliste pro Seite (bei Sprachpruefung)

Fuer JEDE Seite muessen folgende Punkte in ALLEN 3 Sprachen geprueft werden:

- [ ] **Seitentitel** (Browser-Tab) -- sprachspezifisch?
- [ ] **Ueberschriften** (H1, H2, H3) -- alle uebersetzt?
- [ ] **Fliesstext** -- vollstaendig und korrekt uebersetzt?
- [ ] **Buttons / CTAs** -- Text passt in Button-Groesse? Korrekt uebersetzt?
- [ ] **Formular-Labels** -- alle uebersetzt?
- [ ] **Formular-Placeholder** -- alle uebersetzt?
- [ ] **Fehlermeldungen** -- alle uebersetzt?
- [ ] **Erfolgsmeldungen** -- alle uebersetzt?
- [ ] **Tooltips** -- alle uebersetzt?
- [ ] **Alt-Texte** -- sprachspezifisch?
- [ ] **Navigation** -- Menuepunkte korrekt?
- [ ] **Footer-Texte** -- alle uebersetzt?
- [ ] **Meta-Tags** (title, description) -- sprachspezifisch?
- [ ] **Strukturierte Daten** (JSON-LD) -- sprachspezifisch?
- [ ] **Kein gemischter Sprachinhalt** -- keine deutschen Woerter in RU/UA-Ansicht und umgekehrt
- [ ] **Formatierung konsistent** -- Absaetze, Listen, Tabellen gleich strukturiert
- [ ] **Links funktionieren** -- interne Links fuehren zur richtigen sprachspezifischen Seite
- [ ] **Zahlen/Waehrung** -- korrekt formatiert (EUR-Zeichen, Dezimaltrenner)
- [ ] **Datumsformate** -- sprachgerecht (DE: TT.MM.JJJJ)
- [ ] **Fachbegriffe** -- korrekt uebersetzt (keine maschinelle Uebersetzung)

### Haeufige Sprachfehler

1. **UA vergessen**: RU wurde uebersetzt, UA wurde uebersprungen oder ist identisch mit RU
2. **Fallback auf DE**: Wenn ein Key fehlt, wird deutscher Text in RU/UA-Ansicht angezeigt
3. **Gemischte Sprachen**: Teile einer Seite sind uebersetzt, andere nicht
4. **Hardcodierte Texte**: Texte direkt im JSX ohne Sprachbedingung
5. **Unterschiedliche Textlaengen**: Russischer/Ukrainischer Text ist laenger und sprengt das Layout
6. **Fehlende Pluralformen**: Verschiedene Sprachen haben unterschiedliche Pluralregeln
7. **Cookie-Banner-Mapping**: `'ua'` wird auf `'uk'` gemappt -- sicherstellen, dass korrekt
8. **Toast-Nachrichten**: Oft nur auf Deutsch hardcodiert
9. **Aria-Labels**: Barrierefreiheits-Labels oft nur auf Deutsch

### Rechtliche Pflicht zur Mehrsprachigkeit

- **Impressum**: Muss mindestens in der Hauptsprache (DE) vorliegen. Bei mehrsprachigem Angebot: Uebersetzung empfohlen
- **Datenschutzerklaerung**: Art. 12 DSGVO verlangt "klare und einfache Sprache" -- bei russisch-/ukrainischsprachiger Zielgruppe ist Uebersetzung **dringend empfohlen**
- **AGB**: Verbindlich ist die deutsche Version. Uebersetzungen als Service, mit Hinweis "Im Zweifelsfall gilt die deutsche Fassung"
- **Cookie-Banner**: Muss in der Sprache sein, die der Nutzer gewaehlt hat
- **Widerrufsbelehrung**: Bei Fernabsatz an nicht-deutschsprachige Kunden: Uebersetzung empfohlen

---

## 25. MOBILE VERSION -- ANFORDERUNGEN & AUDIT

### Technische Architektur

- **Responsive Framework**: Tailwind CSS mit Mobile-First-Ansatz
- **Mobile-Detection**: `useIsMobile()` Hook (`src/hooks/use-mobile.tsx`) -- Breakpoint 768px
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px (Haupt-Mobile-Breakpoint)
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1200px (Custom Override)

### Grundregeln fuer Mobile

1. **Mobile First**: Basis-Styles gelten fuer Mobile, Desktop-Styles werden mit Breakpoints ergaenzt
2. **Kein horizontales Scrollen** auf keinem Geraet
3. **Touch-freundliche Buttons**: Mindestgroesse 44x44px (WCAG 2.1)
4. **Lesbare Schriftgroessen**: Minimum 16px fuer Fliesstext (verhindert iOS-Zoom)
5. **Keine Hover-Only-Interaktionen**: Alles muss auch per Touch bedienbar sein
6. **Performance**: Bilder optimiert, kein unnoetig grosses JS-Bundle
7. **Cookie-Banner**: Muss auf Mobile vollstaendig bedienbar sein
8. **Formulare**: Grosse Eingabefelder, richtige Input-Typen (email, tel)
9. **Navigation**: Hamburger-Menue mit Framer-Motion-Animation
10. **Floating-Elemente**: WhatsApp-Button, Scroll-to-Top muessen bedienbar bleiben

### Mobile-Audit: Komponenten-Checkliste

#### Navigation & Header

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Hamburger-Menue | Klar sichtbar, grosse Klickflaeche | [ ] PRUEFEN |
| Menue-Animation | Smooth open/close | [x] Framer Motion |
| **Sprachumschalter** | **Im Mobile-Menue erreichbar** | [ ] **KRITISCH -- PRUEFEN!** |
| Logo | Angemessene Groesse (w-10 h-10) | [x] Vorhanden |
| Telefonnummer | Hidden auf Mobile (im Menue?) | [ ] PRUEFEN |
| CTA-Button | Hidden auf Mobile (im Menue?) | [ ] PRUEFEN |
| Navigation-Links | Alle Links erreichbar | [ ] PRUEFEN |
| Menue-Schliessung | Schliesst nach Klick auf Link | [ ] PRUEFEN |

#### Cookie-Banner (Mobile -- RECHTLICH KRITISCH!)

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Sichtbarkeit | Vollstaendig sichtbar ohne Scrollen | [ ] PRUEFEN |
| Buttons | Alle 3 Buttons sichtbar und klickbar | [ ] PRUEFEN |
| Button-Groesse | Touch-freundlich (min. 44x44px) | [ ] PRUEFEN |
| Einstellungen-Modal | Oeffnet und schliesst korrekt | [ ] PRUEFEN |
| Kein Overlay-Problem | Banner verdeckt keinen wichtigen Inhalt | [ ] PRUEFEN |
| Scrollbar | Inhalt im Modal scrollbar auf kleinen Screens | [ ] PRUEFEN |
| Schriftgroesse | Lesbar auf kleinen Bildschirmen | [ ] PRUEFEN |

#### Kontaktformular (Mobile)

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Eingabefelder | Grosse Touch-Ziele, richtige Input-Typen | [ ] PRUEFEN |
| Input type="email" | Zeigt @-Tastatur auf Mobile | [ ] PRUEFEN |
| Input type="tel" | Zeigt Ziffern-Tastatur auf Mobile | [ ] PRUEFEN |
| Textarea | Ausreichende Hoehe, resize moeglich | [ ] PRUEFEN |
| Datenschutz-Checkbox | Gross genug zum Antippen (44x44px) | [ ] PRUEFEN |
| Submit-Button | Vollstaendig sichtbar, nicht verdeckt | [ ] PRUEFEN |
| Fehlermeldungen | Sichtbar ohne Scrollen | [ ] PRUEFEN |
| Erfolgsmeldung | Klar sichtbar | [ ] PRUEFEN |
| Karte (Google Maps) | Responsive Hoehe (h-64 md:h-80) | [ ] PRUEFEN |

#### Floating-Elemente

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| WhatsApp-Button | Sichtbar, nicht verdeckt (fixed bottom-6 right-6) | [ ] PRUEFEN |
| Booking-Button | Sichtbar auf Mobile (left side) | [ ] PRUEFEN |
| Ueberlappung | Buttons ueberdecken sich nicht | [ ] PRUEFEN |
| Cookie-Banner-Konflikt | Floating-Buttons nicht vom Banner verdeckt | [ ] PRUEFEN |
| Scroll-to-Top | Sichtbar und funktional | [ ] PRUEFEN |

#### Preisseite (Mobile -- RECHTLICH RELEVANT!)

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Preistabelle | Horizontal scrollbar oder responsive | [ ] PRUEFEN |
| MwSt-Hinweis | Sichtbar auf Mobile | [ ] PRUEFEN |
| Preis-Darstellung | Klar lesbar, nicht abgeschnitten | [ ] PRUEFEN |
| Kategorien | Navigation zwischen Kategorien funktioniert | [ ] PRUEFEN |

#### Shop-Seiten (Mobile)

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Produktkarten | Einspaltiges Layout auf Mobile | [ ] PRUEFEN |
| Produktbilder | Richtige Groesse, nicht verzerrt | [ ] PRUEFEN |
| Produktbeschreibungen | Vollstaendig lesbar | [ ] PRUEFEN |
| Preisanzeige | MwSt-Hinweis sichtbar | [ ] PRUEFEN |
| Grundpreise | Pro ml/g sichtbar (PAngV) | [ ] PRUEFEN |

#### Rechtstexte (Mobile -- ABMAHNRISIKO!)

| Pruefpunkt | Anforderung | Status |
|-----------|-------------|--------|
| Impressum | Vollstaendig lesbar auf Mobile | [ ] PRUEFEN |
| Datenschutz | Scrollbar, alle Abschnitte erreichbar | [ ] PRUEFEN |
| AGB | Scrollbar, alle Abschnitte erreichbar | [ ] PRUEFEN |
| Footer-Links | Impressum/Datenschutz/AGB erreichbar (2 Klicks!) | [ ] PRUEFEN |
| Schriftgroesse | Min. 14px fuer Rechtstexte | [ ] PRUEFEN |
| Tabellen | Responsive oder horizontal scrollbar | [ ] PRUEFEN |
| Inhaltsverzeichnis | Wenn vorhanden: funktioniert auf Mobile | [ ] PRUEFEN |

### Seiten-Audit: Mobile Responsive Design

#### Layout-Patterns pro Seite

| Seite | Desktop-Layout | Mobile-Layout | Status |
|-------|---------------|---------------|--------|
| Startseite | Multi-Section + Parallax | Einzelspaltig, reduzierter Parallax | [ ] PRUEFEN |
| Ueber uns | 2-Spalten Text+Bild | Einzelspaltig | [ ] PRUEFEN |
| Kontakt | 2-Spalten Form+Info | Einzelspaltig | [ ] PRUEFEN |
| Preise | Tabelle/Grid | Einzelspaltig/Scrollbar | [ ] PRUEFEN |
| Services | 3-4 Spalten Grid | 1 Spalte | [ ] PRUEFEN |
| Shop | Multi-Spalten Grid | 1 Spalte | [ ] PRUEFEN |
| Training | 2-3 Spalten | 1 Spalte | [ ] PRUEFEN |
| Laser | Galerie + Text | Gestapelt | [ ] PRUEFEN |
| PMU | Cards + Info | Gestapelt | [ ] PRUEFEN |
| Anti-Aging | Cards + Info | Gestapelt | [ ] PRUEFEN |
| Wimpern | Cards + Info | Gestapelt | [ ] PRUEFEN |
| Impressum | Textspalte | Textspalte (schmal) | [ ] PRUEFEN |
| Datenschutz | Textspalte | Textspalte (schmal) | [ ] PRUEFEN |
| AGB | Textspalte | Textspalte (schmal) | [ ] PRUEFEN |
| 404-Seite | Zentriert | Zentriert | [ ] PRUEFEN |

### Responsive Typografie-Skala

| Element | Mobile | Tablet (md) | Desktop (lg) | XL |
|---------|--------|-------------|-------------|-----|
| H1 (Hero) | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) |
| H2 (Section) | text-xl (20px) | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) |
| H3 (Card) | text-lg (18px) | text-xl (20px) | text-2xl (24px) | -- |
| Body | text-sm (14px) | text-base (16px) | text-base (16px) | -- |
| Caption | text-xs (12px) | text-sm (14px) | text-sm (14px) | -- |
| Button | text-sm (14px) | text-base (16px) | text-base (16px) | -- |

### Haeufige Mobile-Fehler

1. **Horizontales Scrollen**: Elemente breiter als Viewport (oft durch Tabellen oder lange Woerter)
2. **Text zu klein**: Unter 14px schwer lesbar auf Mobile
3. **Buttons zu nah beieinander**: Touch-Targets ueberlappen
4. **Bilder nicht responsive**: Feste Breite statt max-width: 100%
5. **Modals nicht scrollbar**: Cookie-Einstellungen-Modal ueberlappt auf kleinen Screens
6. **Floating-Button-Konflikte**: WhatsApp-Button verdeckt Cookie-Banner oder Content
7. **iOS Safari**: Position: fixed kann Probleme verursachen beim Scrollen
8. **Android Chrome**: Address-Bar aendert Viewport-Hoehe (100vh-Problem)
9. **Landscape-Modus**: Layout bricht bei Querformat
10. **Keyboard-Push**: Tastatur schiebt Formular-Layout hoch
11. **Font-Size unter 16px**: iOS Safari zoomt bei Input-Focus, wenn font-size < 16px
12. **Glass-Morphism**: `backdrop-filter: blur()` kann auf aelteren Mobilgeraeten langsam sein

### Performance auf Mobile

| Metrik | Zielwert | Messmethode |
|--------|---------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse |
| FID (First Input Delay) | < 100ms | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |
| Speed Index | < 3.4s | Lighthouse |
| Bundle-Groesse (JS) | < 200KB (komprimiert) | Build-Output |

### Mobile-spezifische rechtliche Anforderungen

1. **Impressum**: Auch auf Mobile mit maximal 2 Klicks erreichbar (SSSS 5 DDG + BGH-Rechtsprechung)
2. **Cookie-Banner**: Alle Optionen (Akzeptieren, Ablehnen, Einstellungen) muessen auf Mobile **ohne Scrollen** erreichbar sein
3. **Preisangaben**: MwSt-Hinweis muss auch auf kleinen Bildschirmen sichtbar sein (PAngV)
4. **Datenschutzerklaerung**: Muss auf Mobile vollstaendig lesbar sein
5. **Kontaktformular**: Datenschutz-Checkbox und -Hinweis muessen auf Mobile sichtbar und bedienbar sein
6. **Sprachumschalter**: Muss auf Mobile erreichbar sein (sonst koennen RU/UA-Nutzer nicht zur gewuenschten Sprache wechseln)

---

## ZUSAMMENFASSUNG: PRIORISIERTE AKTIONSLISTE

### HOHE PRIORITAET (Abmahnrisiko!)

| # | Problem | Datei | Status |
|---|---------|-------|--------|
| 1 | **DIKIDI = Datentransfer nach RUSSLAND** (kein Angemessenheitsbeschluss!) | Alle DIKIDI-Links | [ ] |
| 2 | Impressum: "SS 5 TMG" -> "SS 5 DDG" | `src/page-components/Impressum.tsx` | [ ] |
| 3 | Impressum: "SS 7 Abs.1 TMG" / "SSSS 8-10 TMG" -> DDG | `src/page-components/Impressum.tsx` | [ ] |
| 4 | **Widerrufsbelehrung fehlt komplett** (Shop verkauft Produkte!) | Neue Seite erstellen | [ ] |
| 5 | Cookie-Banner: Buttons nicht gleichwertig gestaltet (Dark Pattern) | `src/components/CookieConsent.tsx` | [ ] |
| 6 | Datenschutz: Falsche Rechtsgrundlage fuer notwendige Cookies (lit. c statt lit. f) | `src/page-components/Datenschutz.tsx` | [ ] |
| 7 | Reviews: Keine Verifizierungskennzeichnung (Omnibus-Richtlinie) | `src/page-components/Reviews.tsx` | [ ] |
| 8 | `<html lang="de">` hardcodiert -- aendert sich nicht bei Sprachwechsel | `app/layout.tsx` | [ ] |

### MITTLERE PRIORITAET (Vollstaendigkeit / Best Practice)

| # | Problem | Datei | Status |
|---|---------|-------|--------|
| 9 | Datenschutz: BayLDA als Aufsichtsbehoerde mit Adresse | `src/page-components/Datenschutz.tsx` | [ ] |
| 10 | Datenschutz: Hosting-Anbieter benennen | `src/page-components/Datenschutz.tsx` | [ ] |
| 11 | Datenschutz: WhatsApp-Datenverarbeitung fehlt | `src/page-components/Datenschutz.tsx` | [ ] |
| 12 | Datenschutz: Social-Media-Verarbeitung fehlt | `src/page-components/Datenschutz.tsx` | [ ] |
| 13 | Datenschutz: TDDDG-Verweis (statt TTDSG) | `src/page-components/Datenschutz.tsx` | [ ] |
| 14 | Datenschutz: Drittlandtransfer nach Russland (DIKIDI) detailliert | `src/page-components/Datenschutz.tsx` | [ ] |
| 15 | Datenschutz: Datum aktualisieren | `src/page-components/Datenschutz.tsx` | [ ] |
| 16 | AGB: Streitbeilegungshinweis SS 36 VSBG | `src/page-components/AGB.tsx` | [ ] |
| 17 | Cookie-Consent: Ad-Kategorien entfernen (keine Werbung) | `src/components/CookieConsent.tsx` | [ ] |
| 18 | Cookie-Consent: Zeitstempel protokollieren | `src/components/CookieConsent.tsx` | [ ] |
| 19 | AVVs mit allen Auftragsverarbeitern pruefen/abschliessen | Organisatorisch | [ ] |
| 20 | ALLE TMG/TTDSG -> DDG/TDDDG Verweise aktualisieren | Alle Rechtstexte | [ ] |
| 21 | NiSV: Fachkunde-Nachweis auf Laser-Seite erwaehnen | `src/page-components/Laser.tsx` | [ ] |
| 22 | HWG: Wirkversprechen auf Service-Seiten pruefen | Alle Service-Seiten | [ ] |
| 23 | hreflang-Tags hinzufuegen | `app/layout.tsx` | [ ] |
| 24 | Meta-Tags sprachspezifisch machen | `app/layout.tsx` | [ ] |
| 25 | LocalBusiness / BeautySalon JSON-LD Schema | `app/layout.tsx` / Hauptseite | [ ] |
| 26 | WhatsApp-Nachricht: UA-Text fehlt | `src/components/FloatingButtons.tsx` | [ ] |
| 27 | "Termin b..." abgeschnitten auf Mobile | `src/components/FloatingButtons.tsx` | [ ] |
| 28 | Grundpreise (pro 100ml/g) im Shop | Shop-Seiten | [ ] |

### HOHE PRIORITAET -- DREISPRACHIGKEIT & MOBILE

| # | Problem | Datei | Status |
|---|---------|-------|--------|
| 29 | **Sprachumschalter auf Mobile pruefen** -- moeglicherweise nicht erreichbar! | `src/components/Header.tsx` | [ ] |
| 30 | **Widerrufsbelehrung in ALLEN 3 Sprachen** erstellen (DE/RU/UA) | Neue Seite | [ ] |
| 31 | **Alle 17 Service-Unterseiten** auf DE/RU/UA Vollstaendigkeit pruefen | `src/page-components/services/` | [ ] |
| 32 | **Alle 15 Shop-Unterseiten** auf DE/RU/UA Vollstaendigkeit pruefen | `src/page-components/shop/renew/` | [ ] |
| 33 | **Cookie-Banner auf Mobile**: Alle Buttons sichtbar ohne Scrollen? | `src/components/CookieConsent.tsx` | [ ] |
| 34 | **TMG->DDG Aenderung** in ALLEN 3 Sprachversionen (Impressum, Datenschutz) | Alle Rechtstexte | [ ] |

### MITTLERE PRIORITAET -- DREISPRACHIGKEIT & MOBILE

| # | Problem | Datei | Status |
|---|---------|-------|--------|
| 35 | Training-Seite: RU/UA Uebersetzungen vollstaendig? | `src/page-components/Training.tsx` | [ ] |
| 36 | 404-Seite: In allen 3 Sprachen? | `src/page-components/NotFound.tsx` | [ ] |
| 37 | FloatingWhatsApp: Tooltip in allen 3 Sprachen? | `src/components/FloatingWhatsApp.tsx` | [ ] |
| 38 | SearchBar: Placeholder in allen 3 Sprachen? | `src/components/SearchBar.tsx` | [ ] |
| 39 | Toast-Nachrichten (Kontaktformular etc.): alle 3 Sprachen? | Diverse Komponenten | [ ] |
| 40 | Formular-Fehlermeldungen: alle 3 Sprachen? | `src/page-components/Contact.tsx` | [ ] |
| 41 | Mobile: Preistabelle responsive/scrollbar? | `src/page-components/Prices.tsx` | [ ] |
| 42 | Mobile: Floating-Buttons ueberlappen nicht mit Cookie-Banner? | Layout pruefen | [ ] |
| 43 | Mobile: Rechtstexte (Impressum/Datenschutz/AGB) mit 2 Klicks erreichbar? | Footer/Navigation | [ ] |

### NIEDRIGE PRIORITAET (Zukunftsplanung)

| # | Problem | Details | Status |
|---|---------|---------|--------|
| 44 | BFSG-Barrierefreiheit | Wenn >10 MA oder >2 Mio. EUR Umsatz: WCAG 2.1 AA Pflicht | [ ] |
| 45 | AI Act | Bei KI-Tools: Art. 50 Transparenzpflichten ab August 2026 | [ ] |
| 46 | VerpackG/LUCID | Wenn Produkte versandt werden: Registrierung noetig | [ ] |
| 47 | Farbkontraste pruefen | Besonders bei Glass-Morphism-Effekten | [ ] |
| 48 | Alt-Texte fuer alle Bilder | Barrierefreiheit + Dreisprachig | [ ] |
| 49 | Landscape-Modus | Layout-Test im Querformat auf Mobile | [ ] |
| 50 | iOS Safari 100vh-Problem | CSS-Fix fuer Viewport-Hoehe | [ ] |
| 51 | Input font-size >= 16px | Verhindert iOS-Auto-Zoom bei Focus | [ ] |
| 52 | Glass-Morphism Performance | backdrop-filter auf aelteren Mobilgeraeten | [ ] |
| 53 | INCI-Listen fuer Shop-Produkte | EU Kosmetik-Verordnung | [ ] |
| 54 | EU-Verantwortliche Person fuer RENEW-Produkte | VO 1223/2009 Art. 4 | [ ] |
| 55 | BreadcrumbList Schema fuer Navigation | SEO | [ ] |
| 56 | FAQ Schema fuer FAQ-Seite | SEO | [ ] |

---

## CHECKLISTE FUER NEUE SEITEN/FEATURES

Bei jeder neuen Seite oder jedem neuen Feature folgende Punkte pruefen:

### Rechtlich
- [ ] Impressum weiterhin von jeder Seite mit max. 2 Klicks erreichbar?
- [ ] Datenschutzerklaerung aktualisiert fuer neue Datenverarbeitungen?
- [ ] Cookie-Banner aktualisiert fuer neue Tracking-/Cookie-Kategorien?
- [ ] Keine externen Ressourcen geladen ohne Einwilligung?
- [ ] Keine irrefuehrenden Werbeaussagen?
- [ ] Preise korrekt mit MwSt-/SS 19 UStG-Hinweis?
- [ ] Bilder: Urheberrechte geklaert? Einwilligungen vorhanden?
- [ ] SSL/TLS bei Formularen sichergestellt?

### Dreisprachigkeit (DE / RU / UA)
- [ ] Alle sichtbaren Texte in allen 3 Sprachen vorhanden?
- [ ] Rechtstexte auch auf RU/UA aktualisiert?
- [ ] Buttons/CTAs passen in allen 3 Sprachen (Textlaenge)?
- [ ] Formular-Labels, Placeholder, Fehlermeldungen uebersetzt?
- [ ] Toast-Nachrichten in allen 3 Sprachen?
- [ ] Kein gemischter Sprachinhalt?
- [ ] Fachbegriffe korrekt uebersetzt?
- [ ] Meta-Tags sprachspezifisch?

### Mobile
- [ ] Responsive Layout getestet (320px, 375px, 414px, 768px)?
- [ ] Kein horizontales Scrollen?
- [ ] Touch-Targets mindestens 44x44px?
- [ ] Schriftgroesse mindestens 14px (Inputs: 16px)?
- [ ] Bilder responsive (max-width: 100%)?
- [ ] Tabellen responsive oder horizontal scrollbar?
- [ ] Cookie-Banner vollstaendig bedienbar auf Mobile?
- [ ] Floating-Buttons verdecken keinen wichtigen Inhalt?
- [ ] Sprachumschalter auf Mobile erreichbar?

### Barrierefreiheit
- [ ] Alt-Texte fuer alle Bilder (in allen 3 Sprachen)?
- [ ] Farbkontraste ausreichend (4.5:1)?
- [ ] Tastaturbedienbarkeit?
- [ ] ARIA-Labels vorhanden?

---

## WICHTIGE GERICHTSURTEILE UND ENTWICKLUNGEN (2024-2026)

| Datum | Urteil/Entwicklung | Auswirkung |
|-------|-------------------|------------|
| 14.05.2024 | DDG ersetzt TMG | Alle TMG-Verweise aktualisieren |
| 13.05.2024 | TTDSG -> TDDDG | Alle TTDSG-Verweise aktualisieren |
| 28.05.2022 | Omnibus-Richtlinie (UWG-Novelle) | Reviews: Verifizierung offenlegen |
| 31.12.2020 | NiSV in Kraft | Laser/RF-Fachkunde-Pflicht |
| 01.01.2022 | NiSV Fachkunde-Pflicht | Fachkundenachweis fuer Laser/IPL/RF |
| 01.01.2022 | LG Muenchen Google Fonts | Selbst-Hosting Pflicht |
| 28.06.2025 | BFSG in Kraft | Barrierefreiheitspflicht (Ausnahme fuer Kleinstunternehmen) |
| 20.07.2025 | OS-Plattform abgeschaltet | Alle Links entfernen |
| 19.03.2025 | VG Hannover Cookie-Urteil | "Alle ablehnen" gleichwertig gestalten |
| 19.03.2025 | VG Hannover GTM-Urteil | Google Tag Manager braucht Einwilligung |
| 01.04.2025 | EinwV in Kraft | Zentralisierte Einwilligungsverwaltung moeglich |
| 01.09.2025 | Neue CMR-Substanzen | 21 neue verbotene Stoffe in Kosmetik |
| Aug 2026 | AI Act Art. 50 | KI-Transparenzpflichten |

---

## HINWEIS

Dieser Leitfaden ersetzt keine Rechtsberatung. Fuer die finale Umsetzung wird empfohlen, einen auf IT-Recht/Datenschutzrecht spezialisierten Anwalt hinzuzuziehen. Die hier aufgefuehrten Anforderungen basieren auf dem Rechtsstand Februar 2026 und koennen sich aendern.
