import type { Metadata } from 'next'

const BASE_URL = 'https://munich-beauty.de'
const SITE_NAME = 'Nata Lux Beauty Studio'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`

interface PageSeoData {
  metadata: Metadata
  titles: {
    de: string
    ru: string
    ua: string
  }
}

function createPageMeta(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = `${BASE_URL}${path === '/' ? '/' : `${path}/`}`
  return {
    title,
    description,
    alternates: { canonical: path === '/' ? '/' : `${path}/` },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

export const PAGE_SEO: Record<string, PageSeoData> = {
  // ===== Main Pages =====
  '/': {
    metadata: createPageMeta(
      '/',
      'Nata Lux - Beauty Studio München | Kosmetik & Permanent Make-up',
      'Professionelles Beauty Studio in München-Haidhausen. Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging und Kosmetik. Jetzt Termin buchen!'
    ),
    titles: {
      de: 'Nata Lux - Beauty Studio München | Kosmetik & Permanent Make-up',
      ru: 'Nata Lux - Салон красоты Мюнхен | Косметология и перманентный макияж',
      ua: 'Nata Lux - Салон краси Мюнхен | Косметологія та перманентний макіяж',
    },
  },
  '/about': {
    metadata: createPageMeta(
      '/about',
      'Über uns – Nata Lux Beauty Studio München',
      'Lernen Sie Nataliia Koziukevych und das Nata Lux Beauty Studio in München-Haidhausen kennen. Erfahrung, Leidenschaft und Professionalität für Ihre Schönheit.'
    ),
    titles: {
      de: 'Über uns – Nata Lux Beauty Studio München',
      ru: 'О нас – Салон красоты Nata Lux Мюнхен',
      ua: 'Про нас – Салон краси Nata Lux Мюнхен',
    },
  },
  '/contact': {
    metadata: createPageMeta(
      '/contact',
      'Kontakt & Anfahrt – Nata Lux Beauty Studio München',
      'Kontaktieren Sie das Nata Lux Beauty Studio in München-Haidhausen. Elsässer Straße 33 – Terminvereinbarung per Telefon, WhatsApp oder Kontaktformular.'
    ),
    titles: {
      de: 'Kontakt & Anfahrt – Nata Lux Beauty Studio München',
      ru: 'Контакты и маршрут – Nata Lux Мюнхен',
      ua: 'Контакти та маршрут – Nata Lux Мюнхен',
    },
  },
  '/prices': {
    metadata: createPageMeta(
      '/prices',
      'Preise – Nata Lux Beauty Studio München',
      'Transparente Preisliste für alle Beauty-Behandlungen: Wimpern, Permanent Make-up, Laser, Anti-Aging, Gesichtspflege und mehr. Kein Ausweis von MwSt. gem. §19 UStG.'
    ),
    titles: {
      de: 'Preise – Nata Lux Beauty Studio München',
      ru: 'Цены – Nata Lux Мюнхен',
      ua: 'Ціни – Nata Lux Мюнхен',
    },
  },
  '/services': {
    metadata: createPageMeta(
      '/services',
      'Alle Behandlungen – Nata Lux Beauty Studio München',
      'Entdecken Sie unser Angebot: Wimpernverlängerung, Permanent Make-up, Laserbehandlungen, Anti-Aging, Gesichtsreinigung, Körperbehandlungen und mehr.'
    ),
    titles: {
      de: 'Alle Behandlungen – Nata Lux Beauty Studio München',
      ru: 'Все процедуры – Nata Lux Мюнхен',
      ua: 'Всі процедури – Nata Lux Мюнхен',
    },
  },
  '/shop': {
    metadata: createPageMeta(
      '/shop',
      'RENEW Kosmetik Shop – Nata Lux Beauty Studio München',
      'Professionelle RENEW Kosmetikprodukte aus Israel: Anti-Aging, Whitening, Peelings, Masken, Sonnenschutz und mehr. Beratung im Studio.'
    ),
    titles: {
      de: 'RENEW Kosmetik Shop – Nata Lux München',
      ru: 'Магазин косметики RENEW – Nata Lux Мюнхен',
      ua: 'Магазин косметики RENEW – Nata Lux Мюнхен',
    },
  },
  '/massagen': {
    metadata: createPageMeta(
      '/massagen',
      'Apparative Massagen München – Lymphdrainage, Anti-Cellulite, Bodyforming | Nata Lux',
      'Professionelle apparative Massagen in München: Lymphdrainage, Anti-Cellulite Massage, Bodyforming, Vakuum Massage, RF Massage, Hautstraffung. Ab 75€. Jetzt Termin buchen!'
    ),
    titles: {
      de: 'Apparative Massagen München – Nata Lux',
      ru: 'Аппаратные массажи Мюнхен – Nata Lux',
      ua: 'Апаратні масажі Мюнхен – Nata Lux',
    },
  },
  '/laser': {
    metadata: createPageMeta(
      '/laser',
      'Laserbehandlungen München – Dioden- & Alexandrit-Laser | Nata Lux',
      'Professionelle Laser-Haarentfernung in München mit Dioden-Laser (808nm) und Alexandrit-Laser. Schmerzarm, effektiv, für alle Hauttypen. NiSV-zertifiziert.'
    ),
    titles: {
      de: 'Laserbehandlungen – Nata Lux München',
      ru: 'Лазерные процедуры – Nata Lux Мюнхен',
      ua: 'Лазерні процедури – Nata Lux Мюнхен',
    },
  },
  '/training': {
    metadata: createPageMeta(
      '/training',
      'Schulungen & Kurse – Nata Lux Beauty Studio München',
      'Professionelle Beauty-Schulungen in München: Wimpernverlängerung, Permanent Make-up, Laminierung und mehr. Zertifizierte Ausbildung mit Praxiserfahrung.'
    ),
    titles: {
      de: 'Schulungen & Kurse – Nata Lux München',
      ru: 'Обучение и курсы – Nata Lux Мюнхен',
      ua: 'Навчання та курси – Nata Lux Мюнхен',
    },
  },
  '/permanent-makeup': {
    metadata: createPageMeta(
      '/permanent-makeup',
      'Permanent Make-up München – Powder Brows, Aquarell Lips | Nata Lux',
      'Professionelles Permanent Make-up in München: Powder Brows, Aquarell Lips, Wimpernkranz. Natürliche Ergebnisse mit modernsten Techniken.'
    ),
    titles: {
      de: 'Permanent Make-up – Nata Lux München',
      ru: 'Перманентный макияж – Nata Lux Мюнхен',
      ua: 'Перманентний макіяж – Nata Lux Мюнхен',
    },
  },
  '/anti-aging': {
    metadata: createPageMeta(
      '/anti-aging',
      'Anti-Aging Behandlungen München – RF-Lifting, Ultraschall | Nata Lux',
      'Apparative Anti-Aging-Behandlungen in München: RF-Lifting, Ultraschall, Lichttherapie, Biostrom. Hautverjüngung ohne OP.'
    ),
    titles: {
      de: 'Anti-Aging – Nata Lux München',
      ru: 'Антивозрастные процедуры – Nata Lux Мюнхен',
      ua: 'Антивікові процедури – Nata Lux Мюнхен',
    },
  },
  '/lashes-brows': {
    metadata: createPageMeta(
      '/lashes-brows',
      'Lash & Brow München – Wimpernverlängerung, Laminierung | Nata Lux',
      'Wimpernverlängerung, Wimpern- und Augenbrauen-Laminierung in München. Natürliche Fülle und perfekte Form. Jetzt Termin buchen!'
    ),
    titles: {
      de: 'Lash & Brow – Nata Lux München',
      ru: 'Lash & Brow – Nata Lux Мюнхен',
      ua: 'Lash & Brow – Nata Lux Мюнхен',
    },
  },

  // ===== Legal Pages =====
  '/impressum': {
    metadata: createPageMeta(
      '/impressum',
      'Impressum – Nata Lux Beauty Studio München',
      'Impressum gemäß § 5 DDG: Nata Lux, Nataliia Koziukevych, Rosenheimerstraße 159, 81671 München.'
    ),
    titles: {
      de: 'Impressum – Nata Lux München',
      ru: 'Импрессум – Nata Lux Мюнхен',
      ua: 'Імпресум – Nata Lux Мюнхен',
    },
  },
  '/datenschutz': {
    metadata: createPageMeta(
      '/datenschutz',
      'Datenschutzerklärung – Nata Lux Beauty Studio München',
      'Datenschutzerklärung gemäß DSGVO. Informationen zur Datenverarbeitung, Cookies, Google Analytics und Ihren Rechten.'
    ),
    titles: {
      de: 'Datenschutzerklärung – Nata Lux München',
      ru: 'Политика конфиденциальности – Nata Lux Мюнхен',
      ua: 'Політика конфіденційності – Nata Lux Мюнхен',
    },
  },
  '/agb': {
    metadata: createPageMeta(
      '/agb',
      'AGB – Allgemeine Geschäftsbedingungen | Nata Lux München',
      'Allgemeine Geschäftsbedingungen des Nata Lux Beauty Studios. Terminbuchung, Stornierung, Zahlungsbedingungen und Haftung.'
    ),
    titles: {
      de: 'AGB – Nata Lux München',
      ru: 'Общие условия – Nata Lux Мюнхен',
      ua: 'Загальні умови – Nata Lux Мюнхен',
    },
  },
  '/widerruf': {
    metadata: createPageMeta(
      '/widerruf',
      'Widerrufsbelehrung – Nata Lux Beauty Studio München',
      'Widerrufsbelehrung für Warenbestellungen. 14-tägiges Widerrufsrecht gemäß § 355 BGB. Muster-Widerrufsformular.'
    ),
    titles: {
      de: 'Widerrufsbelehrung – Nata Lux München',
      ru: 'Право на отзыв – Nata Lux Мюнхен',
      ua: 'Право на відкликання – Nata Lux Мюнхен',
    },
  },

  // ===== Service Pages: PMU & Lashes =====
  '/services/wimpernverlaengerung': {
    metadata: createPageMeta(
      '/services/wimpernverlaengerung',
      'Wimpernverlängerung München – Classic, Volume, Mega | Nata Lux',
      'Professionelle Wimpernverlängerung in München: Classic, 2D-5D Volume, Mega Volume. Langanhaltend, natürlich, schonend. Jetzt Termin buchen!'
    ),
    titles: {
      de: 'Wimpernverlängerung – Nata Lux München',
      ru: 'Наращивание ресниц – Nata Lux Мюнхен',
      ua: 'Нарощування вій – Nata Lux Мюнхен',
    },
  },
  '/services/wimpern-augenbrauen-laminierung': {
    metadata: createPageMeta(
      '/services/wimpern-augenbrauen-laminierung',
      'Wimpern- & Augenbrauen-Laminierung München | Nata Lux',
      'Wimpern- und Augenbrauen-Laminierung in München. Natürlicher Lifting-Effekt, mehr Volumen und perfekte Form. Hält 6-8 Wochen.'
    ),
    titles: {
      de: 'Wimpern- & Augenbrauen-Laminierung – Nata Lux München',
      ru: 'Ламинирование ресниц и бровей – Nata Lux Мюнхен',
      ua: 'Ламінування вій та брів – Nata Lux Мюнхен',
    },
  },
  '/services/powder-brows': {
    metadata: createPageMeta(
      '/services/powder-brows',
      'Powder Brows München – Permanent Make-up Augenbrauen | Nata Lux',
      'Powder Brows in München: Natürlicher Puder-Effekt für perfekte Augenbrauen. Professionelles Permanent Make-up mit modernster Technik.'
    ),
    titles: {
      de: 'Powder Brows – Nata Lux München',
      ru: 'Пудровые брови – Nata Lux Мюнхен',
      ua: 'Пудрові брови – Nata Lux Мюнхен',
    },
  },
  '/services/aquarell-lips': {
    metadata: createPageMeta(
      '/services/aquarell-lips',
      'Aquarell Lips München – Permanent Make-up Lippen | Nata Lux',
      'Aquarell Lips in München: Zarte, natürliche Lippenpigmentierung. Permanent Make-up für volle, definierte Lippen mit Aquarell-Technik.'
    ),
    titles: {
      de: 'Aquarell Lips – Nata Lux München',
      ru: 'Акварельные губы – Nata Lux Мюнхен',
      ua: 'Акварельні губи – Nata Lux Мюнхен',
    },
  },
  '/services/wimpernkranz': {
    metadata: createPageMeta(
      '/services/wimpernkranz',
      'Wimpernkranz München – Permanent Make-up Lidstrich | Nata Lux',
      'Wimpernkranzverdichtung in München: Dezente, natürliche Betonung der Wimpernlinie durch Permanent Make-up. Für ausdrucksstarke Augen.'
    ),
    titles: {
      de: 'Wimpernkranz – Nata Lux München',
      ru: 'Межресничный татуаж – Nata Lux Мюнхен',
      ua: 'Міжвійковий татуаж – Nata Lux Мюнхен',
    },
  },
  '/services/pmu-remover': {
    metadata: createPageMeta(
      '/services/pmu-remover',
      'PMU Remover München – Permanent Make-up Entfernung | Nata Lux',
      'Professionelle Entfernung von Permanent Make-up in München. Schonende Remover-Technik für Augenbrauen, Lippen und Lidstrich.'
    ),
    titles: {
      de: 'PMU Remover – Nata Lux München',
      ru: 'Удаление перманентного макияжа – Nata Lux Мюнхен',
      ua: 'Видалення перманентного макіяжу – Nata Lux Мюнхен',
    },
  },

  // ===== Service Pages: Facial =====
  '/services/gesichtsreinigung': {
    metadata: createPageMeta(
      '/services/gesichtsreinigung',
      'Gesichtsreinigung München – Professionelle Hautpflege | Nata Lux',
      'Professionelle Gesichtsreinigung in München: Tiefenreinigung, Peeling, Ausreinigung und Pflege. Für reine, strahlende Haut.'
    ),
    titles: {
      de: 'Gesichtsreinigung – Nata Lux München',
      ru: 'Чистка лица – Nata Lux Мюнхен',
      ua: 'Чистка обличчя – Nata Lux Мюнхен',
    },
  },
  '/services/microneedling': {
    metadata: createPageMeta(
      '/services/microneedling',
      'Microneedling München – Hautverfeinerung & Anti-Aging | Nata Lux',
      'Microneedling in München: Kollagenstimulation, Narbenbehandlung, Hautverjüngung. Professionelle Behandlung mit sterilen Mikronadeln.'
    ),
    titles: {
      de: 'Microneedling – Nata Lux München',
      ru: 'Микронидлинг – Nata Lux Мюнхен',
      ua: 'Мікронідлінг – Nata Lux Мюнхен',
    },
  },
  '/services/phonophorese': {
    metadata: createPageMeta(
      '/services/phonophorese',
      'Phonophorese München – Ultraschall-Wirkstoffeinschleusung | Nata Lux',
      'Phonophorese in München: Tiefenwirksame Einschleusung von Wirkstoffen mittels Ultraschall. Verbesserte Aufnahme von Seren und Pflegeprodukten.'
    ),
    titles: {
      de: 'Phonophorese – Nata Lux München',
      ru: 'Фонофорез – Nata Lux Мюнхен',
      ua: 'Фонофорез – Nata Lux Мюнхен',
    },
  },
  '/services/darsonval-haare': {
    metadata: createPageMeta(
      '/services/darsonval-haare',
      'Darsonval Haaretherapie München – Gegen Haarausfall | Nata Lux',
      'Darsonval-Behandlung für die Haare in München: Stimulation der Kopfhaut, Förderung des Haarwachstums, Verbesserung der Durchblutung.'
    ),
    titles: {
      de: 'Darsonval Haare – Nata Lux München',
      ru: 'Дарсонваль для волос – Nata Lux Мюнхен',
      ua: 'Дарсонваль для волосся – Nata Lux Мюнхен',
    },
  },

  // ===== Service Pages: Anti-Aging Hub =====
  '/services/apparative-anti-aging': {
    metadata: createPageMeta(
      '/services/apparative-anti-aging',
      'Apparative Anti-Aging München – RF, Ultraschall, Licht | Nata Lux',
      'Apparative Anti-Aging-Behandlungen in München: RF-Lifting, Ultraschall, Lichttherapie und Biostrom. Nicht-invasive Hautverjüngung.'
    ),
    titles: {
      de: 'Apparative Anti-Aging – Nata Lux München',
      ru: 'Аппаратный антивозрастной уход – Nata Lux Мюнхен',
      ua: 'Апаратний антивіковий догляд – Nata Lux Мюнхен',
    },
  },
  '/services/apparative-anti-aging/rf-lifting': {
    metadata: createPageMeta(
      '/services/apparative-anti-aging/rf-lifting',
      'RF-Lifting München – Radiofrequenz-Hautstraffung | Nata Lux',
      'RF-Lifting in München: Radiofrequenz-Behandlung für straffe Haut. Kollagenstimulation, Faltenreduktion, sofort sichtbare Ergebnisse.'
    ),
    titles: {
      de: 'RF-Lifting – Nata Lux München',
      ru: 'RF-лифтинг – Nata Lux Мюнхен',
      ua: 'RF-ліфтинг – Nata Lux Мюнхен',
    },
  },
  '/services/apparative-anti-aging/lichttherapie': {
    metadata: createPageMeta(
      '/services/apparative-anti-aging/lichttherapie',
      'Lichttherapie München – LED-Hautbehandlung | Nata Lux',
      'LED-Lichttherapie in München: Photobiomodulation für Hautverjüngung, Akne-Behandlung und Entzündungshemmung. Schmerzfrei und effektiv.'
    ),
    titles: {
      de: 'Lichttherapie – Nata Lux München',
      ru: 'Светотерапия – Nata Lux Мюнхен',
      ua: 'Світлотерапія – Nata Lux Мюнхен',
    },
  },
  '/services/apparative-anti-aging/biostrom': {
    metadata: createPageMeta(
      '/services/apparative-anti-aging/biostrom',
      'Biostrom München – Mikrostrom-Gesichtsbehandlung | Nata Lux',
      'Biostrom-Behandlung in München: Mikrostrom-Therapie für Gesichtsstraffung, Muskeltonus und Hautregeneration. Non-invasives Anti-Aging.'
    ),
    titles: {
      de: 'Biostrom – Nata Lux München',
      ru: 'Биоток – Nata Lux Мюнхен',
      ua: 'Біострум – Nata Lux Мюнхен',
    },
  },
  '/services/apparative-anti-aging/ultraschall': {
    metadata: createPageMeta(
      '/services/apparative-anti-aging/ultraschall',
      'Ultraschall-Gesichtsbehandlung München | Nata Lux',
      'Ultraschall-Behandlung in München: Tiefenreinigung, Wirkstoffeinschleusung und Hautverjüngung. Sanft und effektiv für alle Hauttypen.'
    ),
    titles: {
      de: 'Ultraschall – Nata Lux München',
      ru: 'Ультразвук – Nata Lux Мюнхен',
      ua: 'Ультразвук – Nata Lux Мюнхен',
    },
  },

  // ===== Service Pages: Body Treatments =====
  '/services/koerperbehandlungen': {
    metadata: createPageMeta(
      '/services/koerperbehandlungen',
      'Körperbehandlungen München – RF-Vakuum, Kavitation | Nata Lux',
      'Professionelle Körperbehandlungen in München: RF-Vakuum-Massage, Kavitation. Figurformung und Cellulite-Behandlung.'
    ),
    titles: {
      de: 'Körperbehandlungen – Nata Lux München',
      ru: 'Процедуры для тела – Nata Lux Мюнхен',
      ua: 'Процедури для тіла – Nata Lux Мюнхен',
    },
  },
  '/services/koerperbehandlungen/rf-vakuum': {
    metadata: createPageMeta(
      '/services/koerperbehandlungen/rf-vakuum',
      'RF-Vakuum München – Anti-Cellulite & Bodyforming | Nata Lux',
      'RF-Vakuum-Behandlung in München: Kombination aus Radiofrequenz und Vakuum-Massage. Effektiv gegen Cellulite und für Körperformung.'
    ),
    titles: {
      de: 'RF-Vakuum – Nata Lux München',
      ru: 'RF-вакуум – Nata Lux Мюнхен',
      ua: 'RF-вакуум – Nata Lux Мюнхен',
    },
  },
  '/services/koerperbehandlungen/kavitation': {
    metadata: createPageMeta(
      '/services/koerperbehandlungen/kavitation',
      'Kavitation München – Ultraschall-Fettreduktion | Nata Lux',
      'Kavitation in München: Ultraschallbasierte Fettreduktion und Körperformung. Non-invasiv, schmerzfrei, sichtbare Ergebnisse.'
    ),
    titles: {
      de: 'Kavitation – Nata Lux München',
      ru: 'Кавитация – Nata Lux Мюнхен',
      ua: 'Кавітація – Nata Lux Мюнхен',
    },
  },

  // ===== Shop Pages: RENEW Product Lines =====
  '/shop/renew/whitening': {
    metadata: createPageMeta(
      '/shop/renew/whitening',
      'RENEW Whitening – Aufhellende Kosmetik | Nata Lux München',
      'RENEW Whitening Kollektion: Professionelle aufhellende Kosmetikprodukte aus Israel. Serum, Creme, Maske gegen Pigmentflecken.'
    ),
    titles: {
      de: 'RENEW Whitening – Nata Lux München',
      ru: 'RENEW Whitening – Nata Lux Мюнхен',
      ua: 'RENEW Whitening – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/golden-age': {
    metadata: createPageMeta(
      '/shop/renew/golden-age',
      'RENEW Golden Age – Anti-Aging Luxuspflege | Nata Lux München',
      'RENEW Golden Age Serie: Premium Anti-Aging-Pflege mit Gold und hochwirksamen Inhaltsstoffen. Für reife, anspruchsvolle Haut.'
    ),
    titles: {
      de: 'RENEW Golden Age – Nata Lux München',
      ru: 'RENEW Golden Age – Nata Lux Мюнхен',
      ua: 'RENEW Golden Age – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/anti-age': {
    metadata: createPageMeta(
      '/shop/renew/anti-age',
      'RENEW Anti Age – Hautverjüngung | Nata Lux München',
      'RENEW Anti Age Serie: Wirkungsvolle Anti-Aging-Produkte mit Peptiden und Hyaluronsäure. Für glattere, straffere Haut.'
    ),
    titles: {
      de: 'RENEW Anti Age – Nata Lux München',
      ru: 'RENEW Anti Age – Nata Lux Мюнхен',
      ua: 'RENEW Anti Age – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/anti-aging': {
    metadata: createPageMeta(
      '/shop/renew/anti-aging',
      'RENEW Anti-Aging – Hautverjüngungspflege | Nata Lux München',
      'RENEW Anti-Aging Kollektion: Professionelle Hautverjüngung mit modernen Wirkstoffen. Faltenreduktion und Hautstraffung.'
    ),
    titles: {
      de: 'RENEW Anti-Aging – Nata Lux München',
      ru: 'RENEW Anti-Aging – Nata Lux Мюнхен',
      ua: 'RENEW Anti-Aging – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/retinol': {
    metadata: createPageMeta(
      '/shop/renew/retinol',
      'RENEW Retinol – Vitamin-A-Pflege | Nata Lux München',
      'RENEW Retinol Serie: Professionelle Retinol-Kosmetik für Hauterneuerung, Faltenreduktion und ebenmäßigen Teint.'
    ),
    titles: {
      de: 'RENEW Retinol – Nata Lux München',
      ru: 'RENEW Retinol – Nata Lux Мюнхен',
      ua: 'RENEW Retinol – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/biorepair-pro': {
    metadata: createPageMeta(
      '/shop/renew/biorepair-pro',
      'RENEW Biorepair Pro – Regenerierende Pflege | Nata Lux München',
      'RENEW Biorepair Pro: Intensiv regenerierende Kosmetikprodukte mit Stammzell-Technologie. Für geschädigte und empfindliche Haut.'
    ),
    titles: {
      de: 'RENEW Biorepair Pro – Nata Lux München',
      ru: 'RENEW Biorepair Pro – Nata Lux Мюнхен',
      ua: 'RENEW Biorepair Pro – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/dermo-control': {
    metadata: createPageMeta(
      '/shop/renew/dermo-control',
      'RENEW Dermo Control – Fettige Haut & Akne | Nata Lux München',
      'RENEW Dermo Control Serie: Professionelle Pflege für fettige und zu Akne neigende Haut. Reguliert Talg, verfeinert Poren.'
    ),
    titles: {
      de: 'RENEW Dermo Control – Nata Lux München',
      ru: 'RENEW Dermo Control – Nata Lux Мюнхен',
      ua: 'RENEW Dermo Control – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/propioguard': {
    metadata: createPageMeta(
      '/shop/renew/propioguard',
      'RENEW Propioguard – Anti-Akne Pflege | Nata Lux München',
      'RENEW Propioguard: Spezielle Anti-Akne-Kosmetik mit antibakteriellen Wirkstoffen. Professionelle Problemhaut-Pflege.'
    ),
    titles: {
      de: 'RENEW Propioguard – Nata Lux München',
      ru: 'RENEW Propioguard – Nata Lux Мюнхен',
      ua: 'RENEW Propioguard – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/peelings': {
    metadata: createPageMeta(
      '/shop/renew/peelings',
      'RENEW Peelings – Professionelle Hautpeeling | Nata Lux München',
      'RENEW Peelings: Professionelle chemische und enzymatische Peelings. AHA, BHA und Enzym-Peelings für strahlende Haut.'
    ),
    titles: {
      de: 'RENEW Peelings – Nata Lux München',
      ru: 'RENEW Пилинги – Nata Lux Мюнхен',
      ua: 'RENEW Пілінги – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/masks': {
    metadata: createPageMeta(
      '/shop/renew/masks',
      'RENEW Masken – Professionelle Gesichtsmasken | Nata Lux München',
      'RENEW Masken: Professionelle Gesichtsmasken für jeden Hauttyp. Feuchtigkeitsmasken, Anti-Aging-Masken und Reinigungsmasken.'
    ),
    titles: {
      de: 'RENEW Masken – Nata Lux München',
      ru: 'RENEW Маски – Nata Lux Мюнхен',
      ua: 'RENEW Маски – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/basic-care': {
    metadata: createPageMeta(
      '/shop/renew/basic-care',
      'RENEW Basic Care – Tägliche Basispflege | Nata Lux München',
      'RENEW Basic Care: Grundlegende tägliche Hautpflege. Reinigung, Tonisierung und Feuchtigkeitspflege für jeden Hauttyp.'
    ),
    titles: {
      de: 'RENEW Basic Care – Nata Lux München',
      ru: 'RENEW Basic Care – Nata Lux Мюнхен',
      ua: 'RENEW Basic Care – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/sun-protection': {
    metadata: createPageMeta(
      '/shop/renew/sun-protection',
      'RENEW Sonnenschutz – UV-Schutz Kosmetik | Nata Lux München',
      'RENEW Sonnenschutz-Produkte: Professioneller UV-Schutz für Gesicht und Körper. Leichte Texturen mit hohem Lichtschutzfaktor.'
    ),
    titles: {
      de: 'RENEW Sonnenschutz – Nata Lux München',
      ru: 'RENEW Солнцезащита – Nata Lux Мюнхен',
      ua: 'RENEW Сонцезахист – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/sensitive-skin': {
    metadata: createPageMeta(
      '/shop/renew/sensitive-skin',
      'RENEW Sensitive Skin – Empfindliche Haut | Nata Lux München',
      'RENEW Sensitive Skin: Sanfte Pflege für empfindliche und reaktive Haut. Beruhigende Inhaltsstoffe ohne Duftstoffe.'
    ),
    titles: {
      de: 'RENEW Sensitive Skin – Nata Lux München',
      ru: 'RENEW Sensitive Skin – Nata Lux Мюнхен',
      ua: 'RENEW Sensitive Skin – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/hydration': {
    metadata: createPageMeta(
      '/shop/renew/hydration',
      'RENEW Hydration – Feuchtigkeitspflege | Nata Lux München',
      'RENEW Hydration Serie: Intensive Feuchtigkeitspflege mit Hyaluronsäure. Für trockene und dehydrierte Haut.'
    ),
    titles: {
      de: 'RENEW Hydration – Nata Lux München',
      ru: 'RENEW Hydration – Nata Lux Мюнхен',
      ua: 'RENEW Hydration – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/aqualia': {
    metadata: createPageMeta(
      '/shop/renew/aqualia',
      'RENEW Aqualia – Tiefenfeuchtigkeitspflege | Nata Lux München',
      'RENEW Aqualia: Tiefenwirksame Feuchtigkeitspflege für dehydrierte Haut. Langanhaltende Hydratation und Schutz.'
    ),
    titles: {
      de: 'RENEW Aqualia – Nata Lux München',
      ru: 'RENEW Aqualia – Nata Lux Мюнхен',
      ua: 'RENEW Aqualia – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/vitamin-c': {
    metadata: createPageMeta(
      '/shop/renew/vitamin-c',
      'RENEW Vitamin C – Antioxidative Pflege | Nata Lux München',
      'RENEW Vitamin C Serie: Antioxidative Hautpflege für strahlenden Teint. Aufhellend, schützend und revitalisierend.'
    ),
    titles: {
      de: 'RENEW Vitamin C – Nata Lux München',
      ru: 'RENEW Vitamin C – Nata Lux Мюнхен',
      ua: 'RENEW Vitamin C – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/professional': {
    metadata: createPageMeta(
      '/shop/renew/professional',
      'RENEW Professional – Profi-Kosmetik | Nata Lux München',
      'RENEW Professional: Professionelle Kosmetikprodukte für die Kabine. Hochkonzentrierte Wirkstoffe für Behandlungen im Studio.'
    ),
    titles: {
      de: 'RENEW Professional – Nata Lux München',
      ru: 'RENEW Professional – Nata Lux Мюнхен',
      ua: 'RENEW Professional – Nata Lux Мюнхен',
    },
  },
  '/shop/renew/problem-skin': {
    metadata: createPageMeta(
      '/shop/renew/problem-skin',
      'RENEW Problem Skin – Problemhaut Pflege | Nata Lux München',
      'RENEW Problem Skin: Professionelle Pflege für Problemhaut. Gegen Akne, Unreinheiten und Entzündungen.'
    ),
    titles: {
      de: 'RENEW Problem Skin – Nata Lux München',
      ru: 'RENEW Problem Skin – Nata Lux Мюнхен',
      ua: 'RENEW Problem Skin – Nata Lux Мюнхен',
    },
  },

  // ===== Alternate Shop Route =====
  '/shop/renew-bio-repair-pro': {
    metadata: createPageMeta(
      '/shop/renew-bio-repair-pro',
      'RENEW Bio Repair Pro – Regeneration | Nata Lux München',
      'RENEW Bio Repair Pro: Intensiv regenerierende Kosmetikprodukte für geschädigte und empfindliche Haut.'
    ),
    titles: {
      de: 'RENEW Bio Repair Pro – Nata Lux München',
      ru: 'RENEW Bio Repair Pro – Nata Lux Мюнхен',
      ua: 'RENEW Bio Repair Pro – Nata Lux Мюнхен',
    },
  },
}
