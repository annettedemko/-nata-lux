'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'de' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.services': 'Dienstleistungen',
    'nav.training': 'Schulung',
    'nav.prices': 'Preise',
    'nav.kosmetik': 'Kosmetik',
    'nav.about': 'Über mich',
    'nav.portfolio': 'Portfolio',
    'nav.reviews': 'Bewertungen',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Münchner Salon für Ästhetik',
    'hero.subtitle': 'Wimpern, Permanent Make-up, Laser, Anti-Aging',
    'hero.description': 'Natürlicher Effekt ohne Schmerzen und Ausfallzeiten. Kostenlose Beratung vor der Behandlung.',
    'hero.cta.book': 'Termin buchen',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.prices': 'Preise ansehen',

    // Services
    'services.title': 'Unsere Top-Dienstleistungen',
    'services.lashes.title': 'Wimpernverlängerung',
    'services.lashes.desc': 'Seidige, haltbare Wimpern in 60–90 Min. Natürliche Optik.',
    'services.pmu.title': 'Permanent Make-up',
    'services.pmu.desc': 'Augenbrauen, Lippen, Wimpernlinie. Natürlicher Look, 1-3 Jahre haltbar.',
    'services.laser.title': 'Laser Haarentfernung',
    'services.laser.desc': 'Alexandrit/Diode. Schnell & schonend. Dauerhafte Ergebnisse.',
    'services.antiaging.title': 'Anti-Aging',
    'services.antiaging.desc': 'RF, Licht, Biostrom, Ultraschall. Lifting ohne Injektionen.',
    'services.browlamination.title': 'Augenbrauen-Laminierung',
    'services.browlamination.desc': 'Gepflegte Form, natürlicher Glanz. Bis zu 6 Wochen.',
    'services.facial.title': 'Gesichtspflege',
    'services.facial.desc': 'Tiefe Reinigung, Ernährung, Hydratation.',

    // About
    'about.title': 'Über unseren Salon',
    'about.experience': 'Erfahrung und Expertise',
    'about.experience.desc': 'Zertifizierte Fachkräfte mit langjähriger Erfahrung.',
    'about.sterility': 'Sterilität und Hygiene',
    'about.sterility.desc': 'Deutsche Standards für Sauberkeit und Sicherheit.',
    'about.equipment': 'Premium-Ausrüstung',
    'about.equipment.desc': 'Modernste deutsche Geräte für beste Ergebnisse.',

    // Training
    'training.title': 'Schulung',
    'training.subtitle': 'Werden Sie ein Profi in der Beauty-Branche',
    'training.lashes': 'Wimpernverlängerung Kurs',
    'training.lashes.desc': 'Umfassendes Training von Grund auf. Zertifikat inklusive.',
    'training.pmu': 'PMU Remover Kurs',
    'training.pmu.desc': 'Sichere Entfernungstechniken. Praktische Übungen.',
    'training.advanced': 'Weiterbildung',
    'training.advanced.desc': 'Fortgeschrittene Techniken und neue Trends.',
    'training.consulting': 'Business Consulting',
    'training.consulting.desc': 'Salon-Eröffnung und Geschäftsführung in Deutschland.',
    'training.cta': 'Mehr erfahren',

    // Reviews
    'reviews.title': 'Was unsere Kunden sagen',

    // FAQ
    'faq.title': 'Häufig gestellte Fragen',

    // CTA
    'cta.questions': 'Haben Sie noch Fragen?',
    'cta.whatsapp': 'Schreiben Sie uns auf WhatsApp',

    // Footer
    'footer.hours': 'Öffnungszeiten',
    'footer.hours.weekdays': 'Mo-Fr: 10:00 - 20:00',
    'footer.hours.saturday': 'Sa: 10:00 - 18:00',
    'footer.hours.sunday': 'So: Geschlossen',
    'footer.address': 'Elsasser Straße 33, München',
    'footer.legal': 'Rechtliches',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',

    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.message': 'Nachricht',
    'contact.privacy': 'Ich akzeptiere die Datenschutzerklärung',
    'contact.submit': 'Senden',

    // Common
    'common.book': 'Termin buchen',
    'common.learnMore': 'Mehr erfahren',
    'common.viewPrices': 'Preise ansehen',

    // Search
    'search.placeholder': 'Suchen...',
    'search.noResults': 'Keine Ergebnisse gefunden',
    'search.tryOther': 'Versuchen Sie andere Suchbegriffe',

    // Service Categories (Main)
    'categories.title': 'Unsere Dienstleistungen',
    'categories.lashesbrows': 'Lashes & Brows',
    'categories.lashesbrows.desc': 'Wimpernverlängerung, Laminierung, Augenbrauen-Styling',
    'categories.pmu': 'Permanent Make-up',
    'categories.pmu.desc': 'Augenbrauen, Lippen, Wimpernlinie. Natürlich & langanhaltend',
    'categories.laser': 'Laser Haarentfernung',
    'categories.laser.desc': 'Dauerhafte Haarentfernung mit modernsten Lasern',
    'categories.antiaging': 'Anti-Aging & Kosmetologie',
    'categories.antiaging.desc': 'Apparative Behandlungen für Gesicht und Körper',
    'categories.training': 'Schulungen',
    'categories.training.desc': 'Professionelle Ausbildung in der Beauty-Branche',
    'categories.shop': 'Home Care Shop',
    'categories.shop.desc': 'Premium-Kosmetik für die Heimpflege',

    // Lashes & Brows subcategories
    'lashesbrows.title': 'Lashes & Brows',
    'lashesbrows.subtitle': 'Perfekte Wimpern und Augenbrauen',
    'lashesbrows.extensions': 'Wimpernverlängerung',
    'lashesbrows.extensions.desc': 'Klassik, 2D, 3D, Strahlen, L-Curl, untere Wimpern',
    'lashesbrows.lashlifting': 'Wimpern Laminierung',
    'lashesbrows.lashlifting.desc': 'Natürlicher Curl und Glanz für Ihre Wimpern',
    'lashesbrows.browlifting': 'Augenbrauen Laminierung',
    'lashesbrows.browlifting.desc': 'Gepflegte Form bis zu 6 Wochen',
    'lashesbrows.browstyling': 'Augenbrauen Styling',
    'lashesbrows.browstyling.desc': 'Zupfen, Färben, Formen',

    // PMU subcategories
    'pmu.title': 'Permanent Make-up',
    'pmu.subtitle': 'Natürliche Schönheit jeden Tag',
    'pmu.brows': 'Powder Brows',
    'pmu.brows.desc': 'Pudertechnik für natürliche Augenbrauen',
    'pmu.lips': 'Aquarell Lips',
    'pmu.lips.desc': 'Aquarell & Velvet Techniken',
    'pmu.eyeliner': 'Wimpernkranz',
    'pmu.eyeliner.desc': 'Klassisch oder intensiv',
    'pmu.removal': 'PMU Remover',
    'pmu.removal.desc': '2-stufiges Verfahren: Salon + Heimpflege',

    // Laser subcategories
    'laser.title': 'Laser Haarentfernung',
    'laser.subtitle': 'Dauerhafte Ergebnisse',
    'laser.triwave': 'Laser Haarentfernung auf Dreiwell enslaser',
    'laser.triwave.desc': 'Alexandrit + Diode + Nd:YAG. Für alle Haut- und Haartypen',
    'laser.areas': 'Behandlungsbereiche',
    'laser.areas.desc': 'Gesicht, Achseln, Arme, Beine, Bikini, Rücken, Bauch',

    // Anti-Aging subcategories
    'antiaging.title': 'Anti-Aging & Kosmetologie',
    'antiaging.subtitle': 'Natürliche Verjüngung ohne Injektionen',
    'antiaging.devices': 'Apparative Anti-Aging',
    'antiaging.devices.desc': 'RF-Lifting, Lichttherapie, Biostrom, Ultraschall',
    'antiaging.body': 'Körperbehandlungen',
    'antiaging.body.desc': 'RF-Vakuum, Kavitation für Bauch, Gesäß, Oberschenkel',
    'antiaging.facial': 'Gesichtsreinigung',
    'antiaging.facial.desc': '90 Min kombiniert: Reinigung, Peeling, Masken, Darsonval',
    'antiaging.phonophoresis': 'Phonophorese',
    'antiaging.phonophoresis.desc': 'Tiefenpflege mit Kollagen, Vitaminen, Ölen, Exosomen',
    'antiaging.microneedling': 'Microneedling',
    'antiaging.microneedling.desc': 'Gesicht, Hals, Dekolleté, Kopfhaut',
    'antiaging.darsonval': 'Darsonval für Haare',
    'antiaging.darsonval.desc': 'Wachstumsstimulation, Wurzelstärkung',
    'antiaging.removal': 'Hautveränderungen entfernen',
    'antiaging.removal.desc': 'Papillome, Warzen (mit Dermatologe)',

    // Training subcategories
    'training.lashes.title': 'Wimpernverlängerung Schulung',
    'training.lashes.description': 'Theorie und Praxis, Zertifikat inklusive',
    'training.pmuremoval.title': 'PMU Remover Schulung',
    'training.pmuremoval.description': 'Theorie und Praxis, Zertifikat inklusive',
    'training.business.title': 'Business Consulting',
    'training.business.description': 'Schritt-für-Schritt-Anleitung für Beauty-Business in Deutschland',

    // Shop subcategories
    'shop.title': 'Home Care Shop',
    'shop.subtitle': 'Premium-Kosmetik für zu Hause',
    'shop.brands': 'Unsere Marken',
    'shop.renew': 'RENEW',
    'shop.renew.desc': 'Bio-Repair Produkte für professionelle Hautpflege',
  },
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.training': 'Обучение',
    'nav.prices': 'Цены',
    'nav.kosmetik': 'Косметика',
    'nav.about': 'Обо мне',
    'nav.portfolio': 'Работы',
    'nav.reviews': 'Отзывы',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'Салон эстетики в Мюнхене',
    'hero.subtitle': 'Ресницы, перманент, лазер, anti-aging',
    'hero.description': 'Натуральный эффект без боли и простоев. Консультация перед процедурой — бесплатно.',
    'hero.cta.book': 'Записаться',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.prices': 'Прайс',

    // Services
    'services.title': 'Наши топ-услуги',
    'services.lashes.title': 'Наращивание ресниц',
    'services.lashes.desc': 'Шелковистые, стойкие ресницы за 60–90 мин. Натуральный эффект.',
    'services.pmu.title': 'Перманентный макияж',
    'services.pmu.desc': 'Брови, губы, межресничка. Натуральный вид, держится 1-3 года.',
    'services.laser.title': 'Лазерная эпиляция',
    'services.laser.desc': 'Александрит/диод. Быстро и безболезненно. Навсегда.',
    'services.antiaging.title': 'Anti-Aging',
    'services.antiaging.desc': 'RF, свет, биотоки, УЗ. Лифтинг без инъекций.',
    'services.browlamination.title': 'Ламинирование бровей',
    'services.browlamination.desc': 'Ухоженная форма, естественный блеск. До 6 недель.',
    'services.facial.title': 'Уход за лицом',
    'services.facial.desc': 'Глубокая чистка, питание, увлажнение.',

    // About
    'about.title': 'О нашем салоне',
    'about.experience': 'Опыт и экспертиза',
    'about.experience.desc': 'Сертифицированные специалисты с многолетним опытом.',
    'about.sterility': 'Стерильность и гигиена',
    'about.sterility.desc': 'Немецкие стандарты чистоты и безопасности.',
    'about.equipment': 'Премиум-оборудование',
    'about.equipment.desc': 'Новейшее немецкое оборудование для лучших результатов.',

    // Training
    'training.title': 'Обучение',
    'training.subtitle': 'Станьте профи в бьюти-индустрии',
    'training.lashes': 'Курс наращивания ресниц',
    'training.lashes.desc': 'Полное обучение с нуля. Сертификат включён.',
    'training.pmu': 'Курс удаления ПМ',
    'training.pmu.desc': 'Безопасные техники удаления. Практика.',
    'training.advanced': 'Повышение квалификации',
    'training.advanced.desc': 'Продвинутые техники и новые тренды.',
    'training.consulting': 'Бизнес-консалтинг',
    'training.consulting.desc': 'Открытие и ведение салона в Германии.',
    'training.cta': 'Узнать больше',

    // Reviews
    'reviews.title': 'Что говорят наши клиенты',

    // FAQ
    'faq.title': 'Частые вопросы',

    // CTA
    'cta.questions': 'Остались вопросы?',
    'cta.whatsapp': 'Напишите в WhatsApp',

    // Footer
    'footer.hours': 'Часы работы',
    'footer.hours.weekdays': 'Пн-Пт: 10:00 - 20:00',
    'footer.hours.saturday': 'Сб: 10:00 - 18:00',
    'footer.hours.sunday': 'Вс: Выходной',
    'footer.address': 'Elsasser Straße 33, Мюнхен',
    'footer.legal': 'Правовая информация',
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.phone': 'Телефон',
    'contact.message': 'Сообщение',
    'contact.privacy': 'Я принимаю политику конфиденциальности',
    'contact.submit': 'Отправить',

    // Common
    'common.book': 'Записаться',
    'common.learnMore': 'Узнать больше',
    'common.viewPrices': 'Смотреть цены',

    // Search
    'search.placeholder': 'Поиск...',
    'search.noResults': 'Ничего не найдено',
    'search.tryOther': 'Попробуйте другие ключевые слова',

    // Service Categories (Main)
    'categories.title': 'Наши услуги',
    'categories.lashesbrows': 'Брови и ресницы',
    'categories.lashesbrows.desc': 'Наращивание, ламинирование, оформление бровей',
    'categories.pmu': 'Перманентный макияж',
    'categories.pmu.desc': 'Брови, губы, межресничка. Натурально и долговечно',
    'categories.laser': 'Лазерная эпиляция',
    'categories.laser.desc': 'Удаление волос навсегда с современными лазерами',
    'categories.antiaging': 'Anti-Aging и косметология',
    'categories.antiaging.desc': 'Аппаратные процедуры для лица и тела',
    'categories.training': 'Обучение',
    'categories.training.desc': 'Профессиональное обучение в бьюти-индустрии',
    'categories.shop': 'Косметика для дома',
    'categories.shop.desc': 'Премиум-косметика для домашнего ухода',

    // Lashes & Brows subcategories
    'lashesbrows.title': 'Брови и ресницы',
    'lashesbrows.subtitle': 'Идеальные ресницы и брови',
    'lashesbrows.extensions': 'Наращивание ресниц',
    'lashesbrows.extensions.desc': 'Классика, 2D, 3D, лучики, изгиб L, нижние ресницы',
    'lashesbrows.lashlifting': 'Ламинирование ресниц',
    'lashesbrows.lashlifting.desc': 'Натуральный изгиб и блеск для ваших ресниц',
    'lashesbrows.browlifting': 'Ламинирование бровей',
    'lashesbrows.browlifting.desc': 'Ухоженная форма до 6 недель',
    'lashesbrows.browstyling': 'Оформление бровей',
    'lashesbrows.browstyling.desc': 'Коррекция, окрашивание, форма',

    // PMU subcategories
    'pmu.title': 'Перманентный макияж',
    'pmu.subtitle': 'Естественная красота каждый день',
    'pmu.brows': 'Пудровые брови',
    'pmu.brows.desc': 'Пудровая техника для естественных бровей',
    'pmu.lips': 'Акварельные губы',
    'pmu.lips.desc': 'Акварель и Вельвет техники',
    'pmu.eyeliner': 'Межресничка',
    'pmu.eyeliner.desc': 'Классическая или интенсивная',
    'pmu.removal': 'Удаление ПМ',
    'pmu.removal.desc': '2-этапная процедура: салон + домашний уход',

    // Laser subcategories
    'laser.title': 'Лазерная эпиляция',
    'laser.subtitle': 'Долговременный результат',
    'laser.triwave': 'Лазерная эпиляция на трёхволновом лазере',
    'laser.triwave.desc': 'Александрит + Диод + Nd:YAG. Для всех типов кожи и волос',
    'laser.areas': 'Зоны обработки',
    'laser.areas.desc': 'Лицо, подмышки, руки, ноги, бикини, спина, живот',

    // Anti-Aging subcategories
    'antiaging.title': 'Anti-Aging и косметология',
    'antiaging.subtitle': 'Естественное омоложение без инъекций',
    'antiaging.devices': 'Аппаратный Anti-Aging',
    'antiaging.devices.desc': 'RF-лифтинг, световая терапия, биотоки, УЗ',
    'antiaging.body': 'Процедуры для тела',
    'antiaging.body.desc': 'RF-вакуум, кавитация для живота, ягодиц, бёдер',
    'antiaging.facial': 'Чистка лица',
    'antiaging.facial.desc': '90 мин комплекс: очищение, пилинг, маски, дарсонваль',
    'antiaging.phonophoresis': 'Фонофорез',
    'antiaging.phonophoresis.desc': 'Глубокое питание коллагеном, витаминами, маслами, экзосомами',
    'antiaging.microneedling': 'Микронидлинг',
    'antiaging.microneedling.desc': 'Лицо, шея, декольте, кожа головы',
    'antiaging.darsonval': 'Дарсонваль для волос',
    'antiaging.darsonval.desc': 'Стимуляция роста, укрепление луковиц',
    'antiaging.removal': 'Удаление новообразований',
    'antiaging.removal.desc': 'Папилломы, бородавки (с дерматологом)',

    // Training subcategories
    'training.lashes.title': 'Курс наращивания ресниц',
    'training.lashes.description': 'Теория и практика, сертификат включен',
    'training.pmuremoval.title': 'Курс удаления ПМ',
    'training.pmuremoval.description': 'Теория и практика, сертификат включен',
    'training.business.title': 'Бизнес-консалтинг',
    'training.business.description': 'Пошаговая инструкция по открытию бьюти-бизнеса в Германии',

    // Shop subcategories
    'shop.title': 'Косметика для дома',
    'shop.subtitle': 'Премиум-косметика для домашнего ухода',
    'shop.brands': 'Наши бренды',
    'shop.renew': 'RENEW',
    'shop.renew.desc': 'Bio-Repair продукция для профессионального ухода',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('de');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'de' || savedLang === 'ru')) {
      setLanguageState(savedLang);
    }
  }, []);

  // Update language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
