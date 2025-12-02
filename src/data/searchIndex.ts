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
    title: { de: 'Kosmetik-Shop', ru: 'Магазин косметики' },
    description: {
      de: 'Premium-Produkte für zu Hause und professionelle Anwendung',
      ru: 'Премиум-продукты для дома и профессионального использования'
    },
    category: { de: 'Kategorie', ru: 'Категория' },
    path: '/shop',
    keywords: {
      de: ['shop', 'kosmetik', 'pflege', 'renew', 'produkte', 'b2b', 'professionell'],
      ru: ['магазин', 'косметика', 'уход', 'средства', 'renew', 'б2б', 'профессионально']
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
    id: 'lash-brow-lifting',
    title: { de: 'Wimpern + Augenbrauen Laminierung', ru: 'Ламинирование ресниц + бровей' },
    description: {
      de: 'Natürlicher Curl und gepflegte Form',
      ru: 'Натуральный изгиб и ухоженная форма'
    },
    category: { de: 'Lashes & Brows', ru: 'Брови и ресницы' },
    path: '/services/wimpern-augenbrauen-laminierung',
    keywords: {
      de: ['lash lifting', 'brow lifting', 'laminierung', 'curl', 'wimpern', 'augenbrauen', 'form'],
      ru: ['ламинирование', 'лифтинг', 'изгиб', 'ресницы', 'брови', 'форма', 'укладка']
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
    path: '/services/powder-brows',
    keywords: {
      de: ['powder brows', 'pmu', 'augenbrauen', 'permanent', 'pudertechnik'],
      ru: ['пудровые брови', 'пму', 'перманент', 'брови', 'напыление']
    }
  },
  {
    id: 'aquarell-lips',
    title: { de: 'Aquarell Lips', ru: 'Акварельные губы' },
    description: {
      de: 'Aquarell & Velvet Techniken',
      ru: 'Акварель и Вельвет техники'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/aquarell-lips',
    keywords: {
      de: ['aquarell lips', 'pmu', 'lippen', 'velvet', 'permanent'],
      ru: ['акварельные губы', 'пму', 'губы', 'вельвет', 'перманент']
    }
  },
  {
    id: 'wimpernkranz',
    title: { de: 'Wimpernkranz', ru: 'Межресничка' },
    description: {
      de: 'Klassisch oder intensiv',
      ru: 'Классическая или интенсивная'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/wimpernkranz',
    keywords: {
      de: ['wimpernkranz', 'eyeliner', 'pmu', 'lidstrich', 'permanent'],
      ru: ['межресничка', 'веко', 'пму', 'стрелки', 'перманент']
    }
  },
  {
    id: 'pmu-remover',
    title: { de: 'PMU Remover', ru: 'Удаление ПМ' },
    description: {
      de: '2-stufiges Verfahren: Salon + Heimpflege',
      ru: '2-этапная процедура: салон + домашний уход'
    },
    category: { de: 'Permanent Make-up', ru: 'Перманентный макияж' },
    path: '/services/pmu-remover',
    keywords: {
      de: ['remover', 'entfernung', 'pmu', 'korrektur', 'removal'],
      ru: ['ремувер', 'удаление', 'пму', 'коррекция', 'выведение']
    }
  },

  // Anti-Aging Subcategories
  {
    id: 'apparative-anti-aging',
    title: { de: 'Apparative Anti-Aging', ru: 'Аппаратный Anti-Aging' },
    description: {
      de: 'RF-Lifting, Lichttherapie, Biostrom, Ultraschall',
      ru: 'RF-лифтинг, световая терапия, биотоки, УЗ'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/apparative-anti-aging',
    keywords: {
      de: ['rf-lifting', 'radiofrequenz', 'lichttherapie', 'biostrom', 'ultraschall', 'apparative', 'anti-aging'],
      ru: ['рф-лифтинг', 'радиочастотный', 'световая терапия', 'биотоки', 'узи', 'аппаратный', 'антиэйдж']
    }
  },
  {
    id: 'koerperbehandlungen',
    title: { de: 'Körperbehandlungen', ru: 'Процедуры для тела' },
    description: {
      de: 'RF-Vakuum, Kavitation für Bauch, Gesäß, Oberschenkel',
      ru: 'RF-вакуум, кавитация для живота, ягодиц, бёдер'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/koerperbehandlungen',
    keywords: {
      de: ['körperbehandlung', 'rf-vakuum', 'kavitation', 'bauch', 'gesäß', 'oberschenkel', 'körper', 'cellulite'],
      ru: ['тело', 'процедуры', 'рф-вакуум', 'кавитация', 'живот', 'ягодицы', 'бёдра', 'целлюлит']
    }
  },
  {
    id: 'gesichtsreinigung',
    title: { de: 'Gesichtsreinigung', ru: 'Чистка лица' },
    description: {
      de: '90 Min kombiniert: Reinigung, Peeling, Masken, Darsonval',
      ru: '90 мин комплекс: очищение, пилинг, маски, дарсонваль'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/gesichtsreinigung',
    keywords: {
      de: ['gesichtsreinigung', 'facial', 'reinigung', 'peeling', 'maske', 'darsonval', 'gesicht'],
      ru: ['чистка лица', 'чистка', 'очищение', 'пилинг', 'маска', 'дарсонваль', 'лицо']
    }
  },
  {
    id: 'phonophorese',
    title: { de: 'Phonophorese', ru: 'Фонофорез' },
    description: {
      de: 'Tiefenpflege mit Kollagen, Vitaminen, Ölen, Exosomen',
      ru: 'Глубокое питание коллагеном, витаминами, маслами, экзосомами'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/phonophorese',
    keywords: {
      de: ['phonophorese', 'ultraschall', 'kollagen', 'vitamine', 'exosome', 'tiefenpflege'],
      ru: ['фонофорез', 'ультразвук', 'коллаген', 'витамины', 'экзосомы', 'питание']
    }
  },
  {
    id: 'microneedling',
    title: { de: 'Microneedling', ru: 'Микронидлинг' },
    description: {
      de: 'Gesicht, Hals, Dekolleté, Kopfhaut',
      ru: 'Лицо, шея, декольте, кожа головы'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/microneedling',
    keywords: {
      de: ['microneedling', 'gesicht', 'hals', 'dekolleté', 'kopfhaut', 'nadeln', 'kollagen'],
      ru: ['микронидлинг', 'лицо', 'шея', 'декольте', 'голова', 'иглы', 'коллаген']
    }
  },
  {
    id: 'darsonval-haare',
    title: { de: 'Darsonval für Haare', ru: 'Дарсонваль для волос' },
    description: {
      de: 'Wachstumsstimulation, Wurzelstärkung',
      ru: 'Стимуляция роста, укрепление луковиц'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/darsonval-haare',
    keywords: {
      de: ['darsonval', 'haare', 'haarwachstum', 'haarausfall', 'kopfhaut', 'wurzeln'],
      ru: ['дарсонваль', 'волосы', 'рост волос', 'выпадение', 'кожа головы', 'луковицы']
    }
  },
  {
    id: 'hautveraenderungen-entfernen',
    title: { de: 'Hautveränderungen entfernen', ru: 'Удаление новообразований' },
    description: {
      de: 'Papillome, Warzen (mit Dermatologe)',
      ru: 'Папилломы, бородавки (с дерматологом)'
    },
    category: { de: 'Anti-Aging & Kosmetologie', ru: 'Anti-Aging и косметология' },
    path: '/services/hautveraenderungen-entfernen',
    keywords: {
      de: ['hautveränderungen', 'entfernen', 'papillome', 'warzen', 'neoplasie', 'dermatologe'],
      ru: ['удаление', 'новообразования', 'папилломы', 'бородавки', 'дерматолог', 'образования']
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
