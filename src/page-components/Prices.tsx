'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Star, Info, Activity, Dumbbell, Droplets, Wind, Scissors } from 'lucide-react';
import Image from 'next/image';

const Prices = () => {
  const { language } = useLanguage();

  const isGerman = language === 'de';
  const tr = (de: string, ru: string, ua: string) => (language === 'de' ? de : language === 'ru' ? ru : ua);

  const priceCategories = [
    // 1. Wimpern & Augenbrauen
    {
      id: 'lashes-brows',
      icon: Sparkles,
      title: 'Lash & Brow',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Wimpernverlängerung' : language === 'ru' ? 'Наращивание ресниц' : 'Нарощування вій',
          items: [
            { name: language === 'de' ? 'Klassik 1:1' : language === 'ru' ? 'Классика 1:1' : 'Класика 1:1', price: '90 €' },
            { name: '2D', price: '100 €' },
            { name: '3D', price: '120 €' },
            { name: language === 'de' ? 'Mega-Volumen' : language === 'ru' ? 'Мегаобъём' : 'Мегаоб\'єм', price: '130 €' },
            { name: language === 'de' ? 'Mix-Technik' : language === 'ru' ? 'Микс-техника' : 'Мікс-техніка', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'ціна за запитом' },
            { name: language === 'de' ? 'Strahlen / L-Curl / Untere Wimpern' : language === 'ru' ? 'Лучики / изгиб L / нижнее наращивание' : 'Промінчики / вигин L / нижнє нарощування', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'ціна за запитом' },
          ],
          additional: [
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: language === 'de' ? 'ab 50 €' : language === 'ru' ? 'от 50 €' : 'від 50 €' },
            { name: language === 'de' ? 'Entfernung (eigene Arbeit)' : language === 'ru' ? 'Снятие своей работы' : 'Зняття своєї роботи', price: language === 'de' ? 'kostenlos' : language === 'ru' ? 'бесплатно' : 'безкоштовно' },
            { name: language === 'de' ? 'Entfernung (fremde Arbeit)' : language === 'ru' ? 'Снятие чужой работы' : 'Зняття чужої роботи', price: '20 €' },
          ]
        },
        {
          name: language === 'de' ? 'Wimpern-Laminierung (Lash Lifting)' : language === 'ru' ? 'Ламинирование ресниц' : 'Ламінування вій',
          description: tr('Dauer ca. 1 Std. · auch als Wimpernwelle bekannt', 'Длительность около 1 часа · также известно как «волна ресниц»', 'Тривалість близько 1 години · також відоме як «хвиля вій»'),
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'З фарбуванням', price: '65 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin („Lash Botox“, ohne Botulinumtoxin)' : language === 'ru' ? 'С витаминами, маслами, кератином («ботокс для ресниц», без ботулотоксина)' : 'З вітамінами, оліями, кератином («ботокс для вій», без ботулотоксину)', price: '75 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augenbrauen-Laminierung (Brow Lifting)' : language === 'ru' ? 'Ламинирование бровей' : 'Ламінування брів',
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'З фарбуванням', price: '65 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin' : language === 'ru' ? 'С витаминами, маслами, кератином' : 'З вітамінами, оліями, кератином', price: '75 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augenbrauen Styling' : language === 'ru' ? 'Оформление бровей' : 'Оформлення брів',
          items: [
            { name: language === 'de' ? 'Modellierung + Färbung' : language === 'ru' ? 'Моделирование формы + окрашивание краской' : 'Моделювання форми + фарбування фарбою', price: '40 €' },
          ]
        },
      ]
    },
    // 2. Permanent Make-Up
    {
      id: 'pmu',
      icon: Heart,
      title: language === 'de' ? 'Permanent Make-Up' : language === 'ru' ? 'Перманентный макияж' : 'Перманентний макіяж',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Augenbrauen (Powder Brows)' : language === 'ru' ? 'Брови (Powder Brows)' : 'Брови (Powder Brows)',
          items: [
            { name: language === 'de' ? 'Pudertechnik' : language === 'ru' ? 'Пудровая техника' : 'Пудрова техніка', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '150 €' },
          ]
        },
        {
          name: language === 'de' ? 'Lippen (Aquarell Lips)' : language === 'ru' ? 'Губы (Aquarell Lips)' : 'Губи (Aquarell Lips)',
          items: [
            { name: language === 'de' ? 'Aquarell / Velvet-Technik' : language === 'ru' ? 'Акварельная / Вельвет техника' : 'Акварельна / Вельвет техніка', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '150 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augen (Eyes)' : language === 'ru' ? 'Глаза (Eyes)' : 'Очі (Eyes)',
          items: [
            { name: language === 'de' ? 'Wimpernkranzverdichtung' : language === 'ru' ? 'Межресничка' : 'Міжвійкова', price: '200 €' },
            { name: language === 'de' ? 'Lidstrich' : language === 'ru' ? 'Стрелка' : 'Стрілка', price: '300 €' },
            { name: language === 'de' ? 'Lidstrich mit Schattierung' : language === 'ru' ? 'Стрелка с растушевкой' : 'Стрілка з розтушовкою', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '100 €' },
          ]
        },
        {
          name: language === 'de' ? 'PMU Entfernung (PMU Remover)' : language === 'ru' ? 'Удаление перманентного макияжа' : 'Видалення перманентного макіяжу',
          description: language === 'de'
            ? 'Biochemische Zusammensetzung löst Pigment sanft auf, ohne die Haut zu schädigen.'
            : language === 'ru'
            ? 'Биохимический состав мягко растворяет пигмент, не повреждая кожу.'
            : 'Біохімічний склад м\'яко розчиняє пігмент, не пошкоджуючи шкіру.',
          items: [
            { name: language === 'de' ? 'Salon + Heimpflege' : language === 'ru' ? 'Процедура в салоне + домашний уход' : 'Процедура в салоні + домашній догляд', price: '95 € + 25 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen + Heimpflege)' : language === 'ru' ? 'Курс (10 процедур + домашний уход)' : 'Курс (10 процедур + домашній догляд)', price: '700 €' },
          ]
        },
      ]
    },
    // 3. Laser - Трёхволновой лазер
    {
      id: 'laser',
      icon: Zap,
      title: language === 'de' ? 'Laser Haarentfernung auf Dreiwellenlaser' : language === 'ru' ? 'Лазерная эпиляция на трёхволновом лазере' : 'Лазерна епіляція на трихвильовому лазері',
      subtitle: language === 'de' ? 'Alexandrit + Diode + Nd:YAG' : language === 'ru' ? 'Александрит + Диод + Nd:YAG' : 'Олександрит + Діод + Nd:YAG',
      consultation: language === 'de' ? 'Beratung inklusive' : language === 'ru' ? 'Консультация включена' : 'Консультація включена',
      isDualColumn: true,
      columns: [
        {
          name: language === 'de' ? 'Damen' : language === 'ru' ? 'Женщины' : 'Жінки',
          sections: [
            {
              name: language === 'de' ? 'Gesicht' : language === 'ru' ? 'Лицо' : 'Обличчя',
              items: [
                { name: language === 'de' ? 'Kinn' : language === 'ru' ? 'Подбородок' : 'Підборіддя', price: '29 €' },
                { name: language === 'de' ? 'Oberlippe' : language === 'ru' ? 'Верхняя губа' : 'Верхня губа', price: '25 €' },
                { name: language === 'de' ? 'Wangen' : language === 'ru' ? 'Щёки' : 'Щоки', price: '34 €' },
                { name: language === 'de' ? 'Gesicht komplett' : language === 'ru' ? 'Лицо полностью' : 'Обличчя повністю', price: '64 €' },
              ]
            },
            {
              name: language === 'de' ? 'Oberkörper' : language === 'ru' ? 'Верхняя часть тела' : 'Верхня частина тіла',
              items: [
                { name: language === 'de' ? 'Achseln' : language === 'ru' ? 'Подмышки' : 'Пахви', price: '49 €' },
                { name: language === 'de' ? 'Oberarme' : language === 'ru' ? 'Плечи' : 'Плечі', price: '64 €' },
                { name: language === 'de' ? 'Unterarme' : language === 'ru' ? 'Предплечья' : 'Передпліччя', price: '64 €' },
                { name: language === 'de' ? 'Arme komplett' : language === 'ru' ? 'Руки полностью' : 'Руки повністю', price: '99 €' },
                { name: language === 'de' ? 'Bauchhaarlinie' : language === 'ru' ? 'Полоска на животе' : 'Смужка на животі', price: '35 €' },
              ]
            },
            {
              name: language === 'de' ? 'Unterkörper & Po' : language === 'ru' ? 'Нижняя часть тела и ягодицы' : 'Нижня частина тіла та сідниці',
              items: [
                { name: language === 'de' ? 'Pofalte' : language === 'ru' ? 'Складка ягодиц' : 'Складка сідниць', price: '44 €' },
                { name: language === 'de' ? 'Po' : language === 'ru' ? 'Ягодицы' : 'Сідниці', price: '64 €' },
                { name: language === 'de' ? 'Bikini' : language === 'ru' ? 'Бикини' : 'Бікіні', price: '39 €' },
                { name: language === 'de' ? 'Bikini & Intim' : language === 'ru' ? 'Бикини и интим' : 'Бікіні та інтим', price: '84 €' },
                { name: language === 'de' ? 'Bikini & Intim & Po komplett' : language === 'ru' ? 'Бикини, интим и ягодицы' : 'Бікіні, інтим та сідниці', price: '114 €' },
              ]
            },
            {
              name: language === 'de' ? 'Beine & Füße' : language === 'ru' ? 'Ноги и стопы' : 'Ноги та стопи',
              items: [
                { name: language === 'de' ? 'Füße' : language === 'ru' ? 'Стопы' : 'Стопи', price: '34 €' },
                { name: language === 'de' ? 'Oberschenkel' : language === 'ru' ? 'Бёдра' : 'Стегна', price: '68 €' },
                { name: language === 'de' ? 'Unterschenkel' : language === 'ru' ? 'Голени' : 'Гомілки', price: '68 €' },
                { name: language === 'de' ? 'Komplett Beine' : language === 'ru' ? 'Ноги полностью' : 'Ноги повністю', price: '119 €' },
              ]
            },
            {
              name: language === 'de' ? 'Ganzkörper' : language === 'ru' ? 'Всё тело' : 'Все тіло',
              items: [
                { name: language === 'de' ? 'Ganzkörper' : language === 'ru' ? 'Всё тело' : 'Все тіло', price: '289 €' },
              ]
            },
          ]
        },
        {
          name: language === 'de' ? 'Herren' : language === 'ru' ? 'Мужчины' : 'Чоловіки',
          sections: [
            {
              name: language === 'de' ? 'Gesicht' : language === 'ru' ? 'Лицо' : 'Обличчя',
              items: [
                { name: language === 'de' ? 'Kinn' : language === 'ru' ? 'Подбородок' : 'Підборіддя', price: '35 €' },
                { name: language === 'de' ? 'Oberlippe' : language === 'ru' ? 'Верхняя губа' : 'Верхня губа', price: '35 €' },
                { name: language === 'de' ? 'Koteletten' : language === 'ru' ? 'Бакенбарды' : 'Бакенбарди', price: '35 €' },
                { name: language === 'de' ? 'Wangen' : language === 'ru' ? 'Щёки' : 'Щоки', price: '40 €' },
                { name: language === 'de' ? 'Gesicht komplett' : language === 'ru' ? 'Лицо полностью' : 'Обличчя повністю', price: '135 €' },
              ]
            },
            {
              name: language === 'de' ? 'Oberkörper' : language === 'ru' ? 'Верхняя часть тела' : 'Верхня частина тіла',
              items: [
                { name: language === 'de' ? 'Brustwarzen' : language === 'ru' ? 'Соски' : 'Соски', price: '39 €' },
                { name: language === 'de' ? 'Hals (ohne Nacken)' : language === 'ru' ? 'Шея (без затылка)' : 'Шия (без потилиці)', price: '39 €' },
                { name: language === 'de' ? 'Nacken' : language === 'ru' ? 'Затылок' : 'Потилиця', price: '39 €' },
                { name: language === 'de' ? 'Achseln' : language === 'ru' ? 'Подмышки' : 'Пахви', price: '49 €' },
                { name: language === 'de' ? 'Hände' : language === 'ru' ? 'Кисти рук' : 'Кисті рук', price: '39 €' },
                { name: language === 'de' ? 'Schultern' : language === 'ru' ? 'Плечи' : 'Плечі', price: '56 €' },
                { name: language === 'de' ? 'Oberarme' : language === 'ru' ? 'Верхняя часть рук' : 'Верхня частина рук', price: '66 €' },
                { name: language === 'de' ? 'Unterarme' : language === 'ru' ? 'Предплечья' : 'Передпліччя', price: '66 €' },
                { name: language === 'de' ? 'Bauch' : language === 'ru' ? 'Живот' : 'Живіт', price: '66 €' },
                { name: language === 'de' ? 'Brust' : language === 'ru' ? 'Грудь' : 'Груди', price: '66 €' },
                { name: language === 'de' ? 'Rücken oben' : language === 'ru' ? 'Верхняя часть спины' : 'Верхня частина спини', price: '66 €' },
                { name: language === 'de' ? 'Rücken unten' : language === 'ru' ? 'Нижняя часть спины' : 'Нижня частина спини', price: '66 €' },
                { name: language === 'de' ? 'Rücken komplett' : language === 'ru' ? 'Спина полностью' : 'Спина повністю', price: '118 €' },
              ]
            },
            {
              name: language === 'de' ? 'Unterkörper & Po' : language === 'ru' ? 'Нижняя часть тела и ягодицы' : 'Нижня частина тіла та сідниці',
              items: [
                { name: language === 'de' ? 'Pofalte' : language === 'ru' ? 'Складка ягодиц' : 'Складка сідниць', price: '52 €' },
                { name: language === 'de' ? 'Bikini' : language === 'ru' ? 'Бикини' : 'Бікіні', price: '52 €' },
                { name: language === 'de' ? 'Po komplett' : language === 'ru' ? 'Ягодицы полностью' : 'Сідниці повністю', price: '79 €' },
              ]
            },
            {
              name: language === 'de' ? 'Beine & Füße' : language === 'ru' ? 'Ноги и стопы' : 'Ноги та стопи',
              items: [
                { name: language === 'de' ? 'Füße' : language === 'ru' ? 'Стопы' : 'Стопи', price: '39 €' },
                { name: language === 'de' ? 'Oberschenkel' : language === 'ru' ? 'Бёдра' : 'Стегна', price: '80 €' },
                { name: language === 'de' ? 'Unterschenkel' : language === 'ru' ? 'Голени' : 'Гомілки', price: '80 €' },
                { name: language === 'de' ? 'Beine komplett' : language === 'ru' ? 'Ноги полностью' : 'Ноги повністю', price: '149 €' },
              ]
            },
          ]
        },
      ]
    },
    // 4. Apparative Anti-Aging
    {
      id: 'apparative-antiaging',
      icon: Activity,
      title: language === 'de' ? 'Apparative Anti-Aging' : language === 'ru' ? 'Аппаратный Anti-Aging' : 'Апаратний Anti-Aging',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'RF-Lifting (Radiofrequenz)' : language === 'ru' ? 'RF-лифтинг (радиочастотный)' : 'RF-ліфтинг (радіочастотний)',
          description: language === 'de'
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : language === 'ru'
            ? 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)'
            : 'Тривалість процедури 1 година (очищення, тонізація, апаратна частина 30 хв, тонізація, масаж з кремом)',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '99 €' },
          ]
        },
        {
          name: language === 'de' ? 'Lichttherapie (LED-Therapie)' : language === 'ru' ? 'Световая терапия (LED)' : 'Світлова терапія (LED)',
          description: language === 'de'
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : language === 'ru'
            ? 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)'
            : 'Тривалість процедури 1 година (очищення, тонізація, апаратна частина 30 хв, тонізація, масаж з кремом)',
          items: [
            { name: tr('Mit AHA+PHA-Maske', 'С маской AHA+PHA', 'З маскою AHA+PHA'), price: '79 €' },
            { name: tr('Mit Hyaluronsäure', 'С гиалуроновой кислотой', 'З гіалуроновою кислотою'), price: '79 €' },
            { name: tr('Mit Niacinamid (Vitamin B3)', 'С ниацинамидом (витамин B3)', 'З ніацинамідом (вітамін B3)'), price: '79 €' },
          ]
        },
        {
          name: language === 'de' ? 'Biostrom (Mikrostrom-Therapie)' : language === 'ru' ? 'Биотоки (микротоковая терапия)' : 'Біотоки (мікрострумова терапія)',
          description: language === 'de'
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : language === 'ru'
            ? 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)'
            : 'Тривалість процедури 1 година (очищення, тонізація, апаратна частина 30 хв, тонізація, масаж з кремом)',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
          ]
        },
      ]
    },
    // 5. Körperbehandlungen
    {
      id: 'body-treatments',
      icon: Dumbbell,
      title: language === 'de' ? 'Körperbehandlungen' : language === 'ru' ? 'Процедуры для тела' : 'Процедури для тіла',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'RF-Lifting + Vakuum-Massage + Infrarotlicht' : language === 'ru' ? 'RF лифтинг + вакуумный массаж тела + инфракрасный свет' : 'RF ліфтинг + вакуумний масаж тіла + інфрачервоне світло',
          description: language === 'de'
            ? 'Dauer 30 Min'
            : language === 'ru'
            ? 'Длительность 30 мин'
            : 'Тривалість 30 хв',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '79 €' },
            { name: tr('Kurs (10 Behandlungen)', 'Курс (10 процедур)', 'Курс (10 процедур)'), price: '699 €' },
          ]
        },
        {
          name: language === 'de' ? 'Kavitation (Körper)' : language === 'ru' ? 'Кавитация (тело)' : 'Кавітація (тіло)',
          description: language === 'de'
            ? 'Zonen: Po / Bauch / Hüften / Oberschenkel / über den Knien. Dauer 30 Min pro Zone. Intervall zwischen den Behandlungen 7-10 Tage.'
            : language === 'ru'
            ? 'Зоны: попа / живот / ушки / галифе / над коленями. Длительность 30 мин на зону. Интервал между процедурами 7-10 дней.'
            : 'Зони: сідниці / живіт / вушка / галіфе / над колінами. Тривалість 30 хв на зону. Інтервал між процедурами 7-10 днів.',
          items: [
            { name: language === 'de' ? '1 Zone' : language === 'ru' ? '1 зона' : '1 зона', price: '79 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen)' : language === 'ru' ? 'Курс (Абонемент на 10 процедур)' : 'Курс (Абонемент на 10 процедур)', price: '699 €' },
          ]
        },
      ]
    },
    // 6. Massagen
    {
      id: 'massagen',
      icon: Heart,
      title: language === 'de' ? 'Apparative Massagen' : language === 'ru' ? 'Аппаратные массажи' : 'Апаратні масажі',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Apparative Massage (30 Min)' : language === 'ru' ? 'Аппаратный массаж (30 мин)' : 'Апаратний масаж (30 хв)',
          description: language === 'de'
            ? 'Lymphdrainage · Anti-Cellulite · Bodyforming · Hautstraffung · Fettverbrennung. RF + Vakuum + Infrarot.'
            : language === 'ru'
            ? 'Лимфодренаж · Антицеллюлитный · Бодиформинг · Подтяжка кожи · Жиросжигание. RF + вакуум + инфракрасный свет.'
            : 'Лімфодренаж · Антицелюлітний · Бодіформінг · Підтяжка шкіри · Жироспалювання. RF + вакуум + інфрачервоне світло.',
          items: [
            { name: language === 'de' ? 'Einzelbehandlung' : language === 'ru' ? 'Разовая процедура' : 'Разова процедура', price: '79 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen)' : language === 'ru' ? 'Курс (10 процедур)' : 'Курс (10 процедур)', price: '699 €' },
          ]
        },
      ]
    },
    // 7. Gesichtspflege
    {
      id: 'facial-care',
      icon: Droplets,
      title: language === 'de' ? 'Gesichtspflege' : language === 'ru' ? 'Уход за лицом' : 'Догляд за обличчям',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: tr('Gesichtsreinigung', 'Чистка лица', 'Чистка обличчя'),
          description: tr('Arbeit mit Kosmetik von TM Renew, Derma Series u.a.', 'Работаю на косметике ТМ Renew, Derma Series и др.', 'Працюю на косметиці ТМ Renew, Derma Series та ін.'),
          items: [
            { name: tr('Reinigung mit Ultraschall · 45 Min', 'Ультразвуковая чистка · 45 мин', 'Ультразвукова чистка · 45 хв'), price: '79 €' },
            { name: tr('Ultraschall + manuelle Reinigung · 1 Std. 15 Min', 'Ультразвуковая + механическая чистка · 1 ч 15 мин', 'Ультразвукова + механічна чистка · 1 год 15 хв'), price: '99 €' },
            { name: tr('Tiefenreinigung mit Maske · 1 Std. 30 Min', 'Глубокая чистка с маской · 1 ч 30 мин', 'Глибока чистка з маскою · 1 год 30 хв'), price: '139 €' },
          ]
        },
        {
          name: tr('Gesichtsbehandlungen', 'Уходовые процедуры для лица', 'Доглядові процедури для обличчя'),
          items: [
            { name: tr('BioEnzyme Therapy · 90 Min', 'BioEnzyme Therapy · 90 мин', 'BioEnzyme Therapy · 90 хв'), price: '129 €' },
            { name: tr('Anti-Aging-Gesichtsbehandlung · 1 Std.', 'Anti-Age уход · 1 ч', 'Anti-Age догляд · 1 год'), price: '79 €' },
            { name: tr('Feuchtigkeitsbehandlung · 45 Min', 'Увлажняющий уход · 45 мин', 'Зволожувальний догляд · 45 хв'), price: '79 €' },
            { name: tr('Anti-Wrinkle Algenmaske · 45 Min', 'Маска с водорослями Anti-Wrinkle · 45 мин', 'Маска з водоростями Anti-Wrinkle · 45 хв'), price: '75 €' },
            { name: tr('Express-Behandlung · 30 Min', 'Экспресс-уход · 30 мин', 'Експрес-догляд · 30 хв'), price: '55 €' },
          ]
        },
        {
          name: tr('Ultraschall-Gesichtsbehandlung', 'Ультразвуковой уход за лицом', 'Ультразвуковий догляд за обличчям'),
          items: [
            { name: tr('Ultraschall mit Maske und LED-Lampe · 1 Std.', 'Ультразвук с маской и LED-лампой · 1 ч', 'Ультразвук з маскою та LED-лампою · 1 год'), price: '100 €' },
            { name: tr('Ultraschall mit Maske, LED-Lampe und Peeling · 1 Std.', 'Ультразвук с маской, LED-лампой и пилингом · 1 ч', 'Ультразвук з маскою, LED-лампою та пілінгом · 1 год'), price: '110 €' },
          ]
        },
        {
          name: tr('Gesichtsmassage', 'Массаж лица', 'Масаж обличчя'),
          items: [
            { name: tr('Spa-Facelift-Massage · 1 Std.', 'Spa Facelift массаж · 1 ч', 'Spa Facelift масаж · 1 год'), price: '110 €' },
            { name: tr('Lymphdrainage-Gesichtsmassage · 1 Std.', 'Лимфодренажный массаж лица · 1 ч', 'Лімфодренажний масаж обличчя · 1 год'), price: '99 €' },
            { name: tr('Facelift-Massage (Straffung des Gesichtsovals) · 1 Std.', 'Массаж Facelift (подтяжка овала лица) · 1 ч', 'Масаж Facelift (підтяжка овалу обличчя) · 1 год'), price: '99 €' },
          ]
        },
        {
          name: tr('Peeling ENZYME PURE SKIN (RENEW Enzyme Exfoliator)', 'Пилинг ENZYME PURE SKIN (RENEW Enzyme Exfoliator)', 'Пілінг ENZYME PURE SKIN (RENEW Enzyme Exfoliator)'),
          description: tr('Geeignet für normale, Misch-, fettige, reife und fahle Haut; verdickte Hornschicht und unebene Hautstruktur; verstopfte, vergrößerte Poren und Mitesser; raue Haut und fahler Teint.', 'Показания: нормальная, комбинированная, жирная, зрелая и тусклая кожа; кожа с повышенным ороговением и неровным рельефом; загрязнённые/расширенные поры и комедоны; шероховатость и тусклый цвет лица.', 'Показання: нормальна, комбінована, жирна, зріла та тьмяна шкіра; шкіра з підвищеним зроговінням і нерівним рельєфом; забруднені/розширені пори та комедони; шорсткість і тьмяний колір обличчя.'),
          items: [
            { name: tr('Enzym- + sanftes mechanisches Peeling · 45 Min', 'Ферментативное + мягкое механическое отшелушивание · 45 мин', 'Ферментативне + м’яке механічне відлущування · 45 хв'), price: '95 €' },
          ]
        },
        {
          name: tr('Peeling AHA FRESH GLOW (RENEW AHA Refreshing Exfoliator)', 'Пилинг AHA FRESH GLOW (RENEW AHA Refreshing Exfoliator)', 'Пілінг AHA FRESH GLOW (RENEW AHA Refreshing Exfoliator)'),
          description: tr('Geeignet für normale, trockene, Misch-, fettige und reife Haut mit intakter Hautbarriere; fahler Teint und fehlende Ausstrahlung; oberflächliche Verhornung und raue Haut; ungleichmäßiger Hautton und erste Zeichen der Hautalterung.', 'Показания: нормальная, сухая, комбинированная, жирная и зрелая кожа при сохранённом барьере; тусклый цвет лица и недостаток сияния; поверхностный гиперкератоз и шероховатость; неровный тон и лёгкие возрастные изменения.', 'Показання: нормальна, суха, комбінована, жирна та зріла шкіра за збереженого бар’єру; тьмяний колір обличчя та брак сяйва; поверхневий гіперкератоз і шорсткість; нерівний тон і легкі вікові зміни.'),
          items: [
            { name: tr('Sanfte oberflächliche Säurepflege · 45 Min', 'Мягкий поверхностный кислотный уход · 45 мин', 'М’який поверхневий кислотний догляд · 45 хв'), price: '89 €' },
          ]
        },
        {
          name: tr('Peeling PRO GLOW MULTI-ACID (RENEW Pro Glow Foaming Peeling)', 'Пилинг PRO GLOW MULTI-ACID (RENEW Pro Glow Foaming Peeling)', 'Пілінг PRO GLOW MULTI-ACID (RENEW Pro Glow Foaming Peeling)'),
          description: tr('Geeignet für normale, Misch- und fettige Haut mit intakter Hautbarriere; lichtbedingte Hautveränderungen und ungleichmäßiger Hautton; Pigmentflecken; vergrößerte Poren und unebene Hautstruktur.', 'Показания: нормальная, комбинированная и жирная кожа при сохранённом барьере; фотоповреждение и неровный тон; гиперпигментация и поствоспалительная пигментация; расширенные поры и неровная текстура.', 'Показання: нормальна, комбінована та жирна шкіра за збереженого бар’єру; фотопошкодження та нерівний тон; гіперпігментація та післязапальна пігментація; розширені пори та нерівна текстура.'),
          items: [
            { name: tr('Aktives Multi-Säure-Peeling · 1 Std.', 'Активный мультикислотный пилинг · 1 ч', 'Активний мультикислотний пілінг · 1 год'), price: '129 €' },
          ]
        },
      ]
    },
    // 7. Microneedling
    {
      id: 'microneedling',
      icon: Scissors,
      title: language === 'de' ? 'Microneedling' : language === 'ru' ? 'Микронидлинг' : 'Мікронідлінг',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Microneedling-Behandlung' : language === 'ru' ? 'Процедура микронидлинг' : 'Процедура мікронідлінг',
          description: language === 'de'
            ? 'Behandlung inkl. Hautvorbereitung, Anästhetikum (bei Bedarf), Darsonval oder Peeling (falls nötig). Ampullen mit Exosomen, Vitaminen, Kollagen, Hyaluronsäure usw. gegen Aufpreis. Empfohlen: Wiederholung alle 2–3 Wochen je nach individuellen Zielen. Für Haarwuchsstimulation wird ein Behandlungskurs empfohlen.'
            : language === 'ru'
            ? 'Процедура включает подготовку кожи, анестетик (при необходимости), дарсонваль или пилинг (при необходимости). Ампула экзосомы, витамины, коллаген, гиалурон и т.д. за доп. плату. Рекомендовано повторять через 2-3 недели, в зависимости от индивидуальных целей. Например для стимуляция роста волос необходимо пройти курсом терапию.'
            : 'Процедура включає підготовку шкіри, анестетик (за необхідності), дарсонваль або пілінг (за необхідності). Ампула екзосоми, вітаміни, колаген, гіалурон тощо за дод. плату. Рекомендовано повторювати через 2-3 тижні, залежно від індивідуальних цілей. Наприклад, для стимуляції росту волосся необхідно пройти курс терапії.',
          items: [
            { name: tr('Gesicht · 1 Std.', 'Лицо · 1 ч', 'Обличчя · 1 год'), price: '159 €' },
            { name: tr('Gesicht + Hals + Dekolleté · 1 Std. 30 Min', 'Лицо + шея + декольте · 1 ч 30 мин', 'Обличчя + шия + декольте · 1 год 30 хв'), price: '249 €' },
            { name: tr('Kopfhaut', 'Кожа головы', 'Шкіра голови'), price: tr('100 € zzgl. Ampulle 30–59 €', '100 € + ампула 30–59 €', '100 € + ампула 30–59 €') },
            { name: language === 'de' ? 'Hände, Knie, Dehnungsstreifen' : language === 'ru' ? 'Руки, колени, растяжки' : 'Руки, коліна, розтяжки', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'за запитом' },
          ]
        },
      ]
    },
    // 8. Darsonval
    {
      id: 'darsonval',
      icon: Wind,
      title: tr('Kopfhaut & Haare', 'Кожа головы и волосы', 'Шкіра голови та волосся'),
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Darsonval-Behandlung' : language === 'ru' ? 'Процедура дарсонваль' : 'Процедура дарсонваль',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'за запитом' },
          ]
        },
        {
          name: tr('Ganzheitliche Kopfhaut- & Haarpflege', 'Комплексный уход за кожей головы и волосами', 'Комплексний догляд за шкірою голови та волоссям'),
          description: tr('Individuell abgestimmtes Pflegekonzept für Kopfhaut und Haar, das das Haarwachstum unterstützen kann.', 'Индивидуально подобранная программа ухода за кожей головы и волосами, которая может поддержать рост волос.', 'Індивідуально підібрана програма догляду за шкірою голови та волоссям, яка може підтримати ріст волосся.'),
          items: [
            { name: tr('Individuelles Konzept', 'Индивидуальная программа', 'Індивідуальна програма'), price: tr('ab 100 €', 'от 100 €', 'від 100 €') },
          ]
        },
        {
          name: tr('Kopfhaut-Kombibehandlung', 'Комплексная процедура для кожи головы', 'Комплексна процедура для шкіри голови'),
          items: [
            { name: tr('Darsonval + Microneedling + ENHAIR BioRepair Pro · 1 Std.', 'Дарсонваль + микронидлинг + ENHAIR BioRepair Pro · 1 ч', 'Дарсонваль + мікронідлінг + ENHAIR BioRepair Pro · 1 год'), price: '249 €' },
            { name: tr('Kopfmassage · 20 Min', 'Массаж головы · 20 мин', 'Масаж голови · 20 хв'), price: '25 €' },
          ]
        },
      ]
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/kosmetik-behandlung-preise.png"
          alt="Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">

        {/* Dramatic Hero */}
        <div className="pt-36 pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-tight leading-none mb-6"
              style={{
                color: 'hsl(25, 27%, 19%)',
                letterSpacing: '-0.02em',
              }}
            >
              {language === 'de' ? 'PREISE' : language === 'ru' ? 'ЦЕНЫ' : 'ЦІНИ'}
            </h1>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto opacity-80 mb-6"></div>
            <p className="text-lg text-brand-espresso/60 font-light italic mb-4">
              {language === 'de' ? 'Exklusive Beauty-Behandlungen' : language === 'ru' ? 'Эксклюзивные бьюти-процедуры' : 'Ексклюзивні бьюті-процедури'}
            </p>
            <p className="text-sm text-brand-espresso/70 font-normal">
              {language === 'de'
                ? 'Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.'
                : language === 'ru'
                ? 'Все указанные цены являются окончательными. Согласно § 19 UStG НДС не взимается.'
                : 'Всі зазначені ціни є остаточними. Згідно з § 19 UStG ПДВ не стягується.'}
            </p>
          </motion.div>
        </div>

        {/* Price Categories - Bold & Clear */}
        <div className="space-y-12 pb-32">
          {priceCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                id={category.id}
                style={{ scrollMarginTop: '6rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0
                }}
              >
                {/* Bold Card with Strong Separation */}
                <div
                  className="bg-white/95 rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(58, 44, 34, 0.1)',
                  }}
                >
                  {/* Bold Header with Gradient */}
                  <div
                    className="px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-8"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201, 165, 106, 0.15) 0%, rgba(231, 207, 163, 0.08) 100%)',
                      borderBottom: '2px solid rgba(201, 165, 106, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-5 mb-3">
                      <div className="p-3 bg-brand-gold/20 rounded-xl">
                        <Icon className="w-7 h-7 text-brand-gold" strokeWidth={2} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-espresso tracking-tight">
                        {category.title}
                      </h2>
                    </div>
                    {category.subtitle && (
                      <p className="text-brand-espresso/70 text-lg font-light ml-16 mb-2">
                        {category.subtitle}
                      </p>
                    )}
                    <p className="text-brand-espresso/50 text-sm ml-16">{category.consultation}</p>
                  </div>

                {/* Dual Column Layout */}
                {category.isDualColumn ? (
                  <div className="px-10 md:px-14 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                      {category.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-6 pb-4 border-b-2 border-brand-gold/30">
                            {column.name}
                          </h3>
                          {column.sections ? (
                            <div className="space-y-8">
                              {column.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  <h4 className="text-lg font-heading font-semibold text-brand-espresso/80 mb-4 uppercase tracking-wide">
                                    {section.name}
                                  </h4>
                                  <div className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-start justify-between gap-6 py-1.5"
                                      >
                                        <span className="text-brand-espresso/85 text-base leading-relaxed flex-grow">
                                          {item.name}
                                        </span>
                                        <span className="text-brand-gold font-heading font-semibold text-xl whitespace-nowrap text-right flex-shrink-0">
                                          {item.price}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {column.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start justify-between gap-6 py-2"
                                >
                                  <span className="text-brand-espresso/85 text-base leading-relaxed flex-grow">
                                    {item.name}
                                  </span>
                                  <span className="text-brand-gold font-heading font-semibold text-xl whitespace-nowrap text-right flex-shrink-0">
                                    {item.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Regular Layout */
                  <div className="px-10 md:px-14 py-12 space-y-10">
                    {category.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-5">
                          {section.name}
                        </h3>

                        {section.description && (
                          <div className="flex items-start gap-3 mb-6 p-5 bg-brand-gold/8 rounded-2xl border-l-4 border-brand-gold/40">
                            <Info className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <p className="text-sm text-brand-espresso/70 leading-relaxed">
                              {section.description}
                            </p>
                          </div>
                        )}

                        {section.items && section.items.length > 0 && (
                          <div className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start justify-between gap-6 py-2 border-b border-brand-gold/10 last:border-0"
                              >
                                <span className="text-brand-espresso/85 text-base leading-relaxed flex-grow">
                                  {item.name}
                                </span>
                                {item.price && (
                                  <span className="text-brand-gold font-heading font-semibold text-xl whitespace-nowrap text-right flex-shrink-0">
                                    {item.price}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {section.additional && (
                          <div className="mt-8 pt-6 border-t-2 border-brand-gold/20">
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand-espresso/60 mb-5">
                              {language === 'de' ? 'Zusätzlich' : language === 'ru' ? 'Дополнительно' : 'Додатково'}
                            </p>
                            <div className="space-y-3">
                              {section.additional.map((item, idx) => (
                                <div key={idx} className="flex items-start justify-between gap-6 py-2">
                                  <span className="text-brand-espresso/80 text-base flex-grow">{item.name}</span>
                                  <span className="text-brand-gold font-heading font-semibold text-lg whitespace-nowrap text-right flex-shrink-0">{item.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
