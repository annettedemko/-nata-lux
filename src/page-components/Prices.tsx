'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Star, Info, Activity, Dumbbell, Droplets, Wind, AlertCircle, Scissors } from 'lucide-react';
import Image from 'next/image';

const Prices = () => {
  const { language } = useLanguage();

  const isGerman = language === 'de';

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
            { name: language === 'de' ? 'Klassik 1:1' : language === 'ru' ? 'Классика 1:1' : 'Класика 1:1', price: '80 €' },
            { name: '2D', price: '90 €' },
            { name: '3D', price: '100 €' },
            { name: language === 'de' ? 'Mega-Volumen' : language === 'ru' ? 'Мегаобъём' : 'Мегаоб\'єм', price: '120 €' },
            { name: language === 'de' ? 'Mix-Technik' : language === 'ru' ? 'Микс-техника' : 'Мікс-техніка', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'ціна за запитом' },
            { name: language === 'de' ? 'Strahlen / L-Curl / Untere Wimpern' : language === 'ru' ? 'Лучики / изгиб L / нижнее наращивание' : 'Промінчики / вигин L / нижнє нарощування', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'ціна за запитом' },
          ],
          additional: [
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: language === 'de' ? 'ab 50 €' : language === 'ru' ? 'от 50 €' : 'від 50 €' },
            { name: language === 'de' ? 'Entfernung (eigene Arbeit)' : language === 'ru' ? 'Снятие своей работы' : 'Зняття своєї роботи', price: language === 'de' ? 'kostenlos' : language === 'ru' ? 'бесплатно' : 'безкоштовно' },
            { name: language === 'de' ? 'Entfernung (fremde Arbeit)' : language === 'ru' ? 'Снятие чужой работы' : 'Зняття чужої роботи', price: '15 €' },
          ]
        },
        {
          name: language === 'de' ? 'Wimpern-Laminierung (Lash Lifting)' : language === 'ru' ? 'Ламинирование ресниц' : 'Ламінування вій',
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'З фарбуванням', price: '55 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin' : language === 'ru' ? 'С витаминами, маслами, кератином' : 'З вітамінами, оліями, кератином', price: '65 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augenbrauen-Laminierung (Brow Lifting)' : language === 'ru' ? 'Ламинирование бровей' : 'Ламінування брів',
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'З фарбуванням', price: '55 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin' : language === 'ru' ? 'С витаминами, маслами, кератином' : 'З вітамінами, оліями, кератином', price: '65 €' },
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
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
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
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
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
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
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
            { name: language === 'de' ? '1 Zone' : language === 'ru' ? '1 зона' : '1 зона', price: '75 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen)' : language === 'ru' ? 'Курс (Абонемент на 10 процедур)' : 'Курс (Абонемент на 10 процедур)', price: '650 €' },
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
            { name: language === 'de' ? 'Einzelbehandlung' : language === 'ru' ? 'Разовая процедура' : 'Разова процедура', price: '75 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen)' : language === 'ru' ? 'Курс (10 процедур)' : 'Курс (10 процедур)', price: '650 €' },
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
          name: language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка обличчя',
          description: language === 'de'
            ? 'Kombinierte Ultraschallreinigung — 90 Min (Reinigung, Tonisierung, Peeling, Maske zum Öffnen der Poren, Geräte- + mechanische Reinigung, Masken zum Schließen der Poren, Creme + SPF, Darsonval / Phonophorese falls notwendig). Arbeit mit TM Renew, Derma Series u.a.'
            : language === 'ru'
            ? 'Комбинированная ультразвуковая — 90 мин (очистка, тонизация, пилинг, маска открывающая поры, аппаратная + механическая, маски для закрытия пор, крем + SPF, дарсонваль / фонофорез если мастер считает необходимым). Работаю на косметике ТМ Renew, Derma Series и др.'
            : 'Комбіноване ультразвукове — 90 хв (очищення, тонізація, пілінг, маска для відкриття пор, апаратне + механічне, маски для закриття пор, крем + SPF, дарсонваль / фонофорез якщо майстер вважає за необхідне). Працюю на косметиці ТМ Renew, Derma Series та ін.',
          items: [
            { name: language === 'de' ? 'Komplett (90 Min)' : language === 'ru' ? 'Полная (90 мин)' : 'Повна (90 хв)', price: '90 €' },
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
            { name: language === 'de' ? 'Gesicht + Hals + Dekolleté' : language === 'ru' ? 'Лицо + шея + декольте' : 'Обличчя + шия + декольте', price: '159 €' },
            { name: language === 'de' ? 'Kopfhaut' : language === 'ru' ? 'Кожа головы' : 'Шкіра голови', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'за запитом' },
            { name: language === 'de' ? 'Hände, Knie, Dehnungsstreifen' : language === 'ru' ? 'Руки, колени, растяжки' : 'Руки, коліна, розтяжки', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'за запитом' },
          ]
        },
      ]
    },
    // 8. Darsonval
    {
      id: 'darsonval',
      icon: Wind,
      title: language === 'de' ? 'Darsonval für Haare' : language === 'ru' ? 'Дарсонваль для волос' : 'Дарсонваль для волосся',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Darsonval-Behandlung' : language === 'ru' ? 'Процедура дарсонваль' : 'Процедура дарсонваль',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'за запитом' },
          ]
        },
      ]
    },
    // 9. Hautveränderungen entfernen
    {
      id: 'skin-changes',
      icon: AlertCircle,
      title: language === 'de' ? 'Hautveränderungen entfernen' : language === 'ru' ? 'Удаление новообразований кожи' : 'Видалення новоутворень шкіри',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурою — безкоштовна.',
      sections: [
        {
          name: language === 'de' ? 'Entfernung von Hautveränderungen' : language === 'ru' ? 'Удаление новообразований' : 'Видалення новоутворень',
          description: language === 'de'
            ? '⚠️ Wichtig: Vor der Behandlung ist eine Konsultation mit einem Dermatologen (Histologie) erforderlich.'
            : language === 'ru'
            ? '⚠️ Важно: Необходимо перед процедурой проконсультироваться с дерматологом (гистология).'
            : '⚠️ Важливо: Необхідно перед процедурою проконсультуватися з дерматологом (гістологія).',
          items: [
            { name: language === 'de' ? 'Entfernung' : language === 'ru' ? 'Удаление' : 'Видалення', price: language === 'de' ? 'ab 10 €' : language === 'ru' ? 'от 10 €' : 'від 10 €' },
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
          src="/17.png"
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
