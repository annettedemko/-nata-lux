export interface SearchItem {
  id: string;
  title: {
    de: string;
    ru: string;
  };
  description: {
    de: string;
    ru: string;
  };
  category: {
    de: string;
    ru: string;
  };
  path: string;
  keywords: {
    de: string[];
    ru: string[];
  };
}

export const searchIndex: SearchItem[] = [
  // Categories
  {
    id: 'lashes-brows',
    title: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    description: {
      de: 'Wimpernverlängerung, Laminierung, Augenbrauen-Styling',
      ru: 'Наращивание, ламинирование, оформление бровей'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/lashes-brows',
    keywords: {
      de: ['wimpern', 'augenbrauen', 'lashes', 'brows', 'verlängerung', 'laminierung'],
      ru: ['ресницы', 'брови', 'наращивание', 'ламинирование', 'оформление']
    }
  },
  {
    id: 'permanent-makeup',
    title: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    description: {
      de: 'Augenbrauen, Lippen, Wimpernlinie. Natürlich & langanhaltend',
      ru: 'Брови, губы, межресничка. Натурально и долговечно'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/permanent-makeup',
    keywords: {
      de: ['permanent', 'makeup', 'pmu', 'augenbrauen', 'lippen', 'powder brows'],
      ru: ['перманент', 'макияж', 'пму', 'брови', 'губы', 'пудровые']
    }
  },
  {
    id: 'laser',
    title: { de: 'Laser Haarentfernung', ru: 'Лазерная эпиляция' },
    description: {
      de: 'Dauerhafte Haarentfernung mit modernsten Lasern',
      ru: 'Удаление волос навсегда с современными лазерами'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/laser',
    keywords: {
      de: ['laser', 'haarentfernung', 'epilation', 'alexandrit', 'diode'],
      ru: ['лазер', 'эпиляция', 'удаление волос', 'александрит', 'диод']
    }
  },
  {
    id: 'anti-aging',
    title: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    description: {
      de: 'Apparative Behandlungen für Gesicht und Körper',
      ru: 'Аппаратные процедуры для лица и тела'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/anti-aging',
    keywords: {
      de: ['anti-aging', 'rf-lifting', 'kosmetologie', 'gesichtsreinigung', 'microneedling'],
      ru: ['антиэйдж', 'рф-лифтинг', 'косметология', 'чистка лица', 'микронидлинг']
    }
  },
  {
    id: 'training',
    title: { de: 'Schulungen', ru: 'Обучение' },
    description: {
      de: 'Professionelle Ausbildung in der Beauty-Branche',
      ru: 'Профессиональное обучение в бьюти-индустрии'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/training',
    keywords: {
      de: ['schulung', 'ausbildung', 'kurse', 'training', 'zertifikat', 'weiterbildung'],
      ru: ['обучение', 'курсы', 'тренинг', 'сертификат', 'школа', 'повышение квалификации']
    }
  },
  {
    id: 'shop',
    title: { de: 'Home Care Shop', ru: 'Косметика для дома' },
    description: {
      de: 'Premium-Kosmetik für die Heimpflege',
      ru: 'Премиум-косметика для домашнего ухода'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/shop',
    keywords: {
      de: ['shop', 'kosmetik', 'pflege', 'renew', 'produkte'],
      ru: ['магазин', 'косметика', 'уход', 'средства', 'renew']
    }
  },

  // Lashes & Brows Subcategories
  {
    id: 'lash-extensions',
    title: { de: 'Wimpernverlängerung', ru: 'Наращивание ресниц' },
    description: {
      de: 'Klassik, 2D, 3D, Strahlen, L-Curl, untere Wimpern',
      ru: 'Классика, 2D, 3D, лучики, изгиб L, нижние ресницы'
    },
    category: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    path: '/services/wimpernverlaengerung',
    keywords: {
      de: ['wimpernverlängerung', 'lash extensions', '2d', '3d', 'volume'],
      ru: ['наращивание ресниц', 'объем', '2д', '3д', 'классика']
    }
  },
  {
    id: 'lash-lifting',
    title: { de: 'Wimpern Laminierung', ru: 'Ламинирование ресниц' },
    description: {
      de: 'Natürlicher Curl und Glanz für Ihre Wimpern',
      ru: 'Натуральный изгиб и блеск для ваших ресниц'
    },
    category: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    path: '/services/lash-lifting',
    keywords: {
      de: ['lash lifting', 'laminierung', 'curl', 'wimpern'],
      ru: ['ламинирование', 'лифтинг', 'изгиб', 'ресницы']
    }
  },
  {
    id: 'brow-lifting',
    title: { de: 'Augenbrauen Laminierung', ru: 'Ламинирование бровей' },
    description: {
      de: 'Gepflegte Form bis zu 6 Wochen',
      ru: 'Ухоженная форма до 6 недель'
    },
    category: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    path: '/services/brow-lifting',
    keywords: {
      de: ['brow lifting', 'augenbrauen', 'laminierung', 'form'],
      ru: ['ламинирование бровей', 'брови', 'форма', 'укладка']
    }
  },
  {
    id: 'brow-styling',
    title: { de: 'Augenbrauen Styling', ru: 'Оформление бровей' },
    description: {
      de: 'Zupfen, Färben, Formen',
      ru: 'Коррекция, окрашивание, форма'
    },
    category: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    path: '/services/brow-styling',
    keywords: {
      de: ['augenbrauen', 'styling', 'zupfen', 'färben', 'form'],
      ru: ['брови', 'оформление', 'коррекция', 'окрашивание', 'форма']
    }
  },

  // PMU Subcategories
  {
    id: 'powder-brows',
    title: { de: 'Powder Brows', ru: 'Пудровые брови' },
    description: {
      de: 'Pudertechnik für natürliche Augenbrauen',
      ru: 'Пудровая техника для естественных бровей'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/pmu-powder-brows',
    keywords: {
      de: ['powder brows', 'pmu', 'augenbrauen', 'permanent', 'pudertechnik'],
      ru: ['пудровые брови', 'пму', 'перманент', 'брови', 'напыление']
    }
  },
  {
    id: 'pmu-lips',
    title: { de: 'Aquarell Lips', ru: 'Акварельные губы' },
    description: {
      de: 'Aquarell & Velvet Techniken',
      ru: 'Акварель и Вельвет техники'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/pmu-lips',
    keywords: {
      de: ['aquarell lips', 'pmu', 'lippen', 'velvet', 'permanent'],
      ru: ['акварельные губы', 'пму', 'губы', 'вельвет', 'перманент']
    }
  },
  {
    id: 'pmu-eyeliner',
    title: { de: 'Wimpernkranz', ru: 'Межресничка' },
    description: {
      de: 'Klassisch oder intensiv',
      ru: 'Классическая или интенсивная'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/pmu-eyeliner',
    keywords: {
      de: ['wimpernkranz', 'eyeliner', 'pmu', 'lidstrich', 'permanent'],
      ru: ['межресничка', 'веко', 'пму', 'стрелки', 'перманент']
    }
  },
  {
    id: 'pmu-removal',
    title: { de: 'PMU Remover', ru: 'Удаление ПМ' },
    description: {
      de: '2-stufiges Verfahren: Salon + Heimpflege',
      ru: '2-этапная процедура: салон + домашний уход'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/pmu-removal',
    keywords: {
      de: ['remover', 'entfernung', 'pmu', 'korrektur', 'removal'],
      ru: ['ремувер', 'удаление', 'пму', 'коррекция', 'выведение']
    }
  },

  // Other Pages
  {
    id: 'about',
    title: { de: 'Über uns', ru: 'О нас' },
    description: {
      de: 'Erfahrung, Sterilität, Premium-Ausrüstung',
      ru: 'Опыт, стерильность, премиум-оборудование'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/about',
    keywords: {
      de: ['über uns', 'salon', 'team', 'erfahrung', 'qualität'],
      ru: ['о нас', 'салон', 'команда', 'опыт', 'качество']
    }
  },
  {
    id: 'prices',
    title: { de: 'Preise', ru: 'Цены' },
    description: {
      de: 'Unsere Preisliste für alle Dienstleistungen',
      ru: 'Наш прайс-лист на все услуги'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/prices',
    keywords: {
      de: ['preise', 'kosten', 'preis', 'tarife', 'preiseliste'],
      ru: ['цены', 'стоимость', 'прайс', 'тарифы', 'прайс-лист']
    }
  },
  {
    id: 'contact',
    title: { de: 'Kontakt', ru: 'Контакты' },
    description: {
      de: 'Kontaktieren Sie uns für einen Termin',
      ru: 'Свяжитесь с нами для записи'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/contact',
    keywords: {
      de: ['kontakt', 'termin', 'buchen', 'anrufen', 'whatsapp'],
      ru: ['контакты', 'запись', 'записаться', 'позвонить', 'whatsapp']
    }
  },
  {
    id: 'portfolio',
    title: { de: 'Portfolio', ru: 'Работы' },
    description: {
      de: 'Unsere Arbeiten und Ergebnisse',
      ru: 'Наши работы и результаты'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/portfolio',
    keywords: {
      de: ['portfolio', 'arbeiten', 'ergebnisse', 'bilder', 'galerie'],
      ru: ['портфолио', 'работы', 'результаты', 'фото', 'галерея']
    }
  },
  {
    id: 'reviews',
    title: { de: 'Bewertungen', ru: 'Отзывы' },
    description: {
      de: 'Was unsere Kunden sagen',
      ru: 'Что говорят наши клиенты'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/reviews',
    keywords: {
      de: ['bewertungen', 'rezensionen', 'kunden', 'feedback', 'meinungen'],
      ru: ['отзывы', 'рецензии', 'клиенты', 'мнения', 'feedback']
    }
  },
  {
    id: 'faq',
    title: { de: 'FAQ', ru: 'Частые вопросы' },
    description: {
      de: 'Häufig gestellte Fragen',
      ru: 'Часто задаваемые вопросы'
    },
    category: { de: 'Information', ru: 'Информация' },
    path: '/faq',
    keywords: {
      de: ['faq', 'fragen', 'antworten', 'hilfe', 'info'],
      ru: ['faq', 'вопросы', 'ответы', 'помощь', 'инфо']
    }
  },
];
