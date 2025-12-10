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
      title: language === 'de' ? 'Wimpern & Augenbrauen' : language === 'ru' ? 'Ресницы и брови' : 'Війы и брови',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Wimpernverlängerung' : language === 'ru' ? 'Наращивание ресниц' : 'Нарощування вій',
          items: [
            { name: language === 'de' ? 'Klassik 1:1' : language === 'ru' ? 'Классика 1:1' : 'Классика 1:1', price: '80 €' },
            { name: '2D', price: '90 €' },
            { name: '3D', price: '100 €' },
            { name: language === 'de' ? 'Mega-Volumen' : language === 'ru' ? 'Мегаобъём' : 'Мегаобъём', price: '120 €' },
            { name: language === 'de' ? 'Mix-Technik' : language === 'ru' ? 'Микс-техника' : 'Микс-техника', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'цена по запросу' },
            { name: language === 'de' ? 'Strahlen / L-Curl / Untere Wimpern' : language === 'ru' ? 'Лучики / изгиб L / нижнее наращивание' : 'Лучики / изгиб L / нижнее наращивание', price: language === 'de' ? 'Preis auf Anfrage' : language === 'ru' ? 'цена по запросу' : 'цена по запросу' },
          ],
          additional: [
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: language === 'de' ? 'ab 50 €' : language === 'ru' ? 'от 50 €' : 'от 50 €' },
            { name: language === 'de' ? 'Entfernung (eigene Arbeit)' : language === 'ru' ? 'Снятие своей работы' : 'Снятие своей работы', price: language === 'de' ? 'kostenlos' : language === 'ru' ? 'бесплатно' : 'бесплатно' },
            { name: language === 'de' ? 'Entfernung (fremde Arbeit)' : language === 'ru' ? 'Снятие чужой работы' : 'Снятие чужой работы', price: '15 €' },
          ]
        },
        {
          name: language === 'de' ? 'Wimpern-Laminierung (Lash Lifting)' : language === 'ru' ? 'Ламинирование ресниц' : 'Ламинирование вій',
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'С окрашиванием', price: '55 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin' : language === 'ru' ? 'С витаминами, маслами, кератином' : 'С витаминами, маслами, кератином', price: '65 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augenbrauen-Laminierung (Brow Lifting)' : language === 'ru' ? 'Ламинирование бровей' : 'Ламинирование брів',
          items: [
            { name: language === 'de' ? 'Mit Färbung' : language === 'ru' ? 'С окрашиванием' : 'С окрашиванием', price: '55 €' },
            { name: language === 'de' ? 'Mit Vitaminen, Ölen, Keratin' : language === 'ru' ? 'С витаминами, маслами, кератином' : 'С витаминами, маслами, кератином', price: '65 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augenbrauen Styling' : language === 'ru' ? 'Оформление бровей' : 'Оформление брів',
          items: [
            { name: language === 'de' ? 'Modellierung + Färbung' : language === 'ru' ? 'Моделирование формы + окрашивание краской' : 'Моделирование формы + окрашивание краской', price: '40 €' },
          ]
        },
      ]
    },
    // 2. Permanent Make-Up
    {
      id: 'pmu',
      icon: Heart,
      title: language === 'de' ? 'Permanent Make-Up' : language === 'ru' ? 'Перманентный макияж' : 'Перманентный макияж',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Augenbrauen (Powder Brows)' : language === 'ru' ? 'Брови (Powder Brows)' : 'Брови (Powder Brows)',
          items: [
            { name: language === 'de' ? 'Pudertechnik' : language === 'ru' ? 'Пудровая техника' : 'Пудровая техника', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '150 €' },
          ]
        },
        {
          name: language === 'de' ? 'Lippen (Aquarell Lips)' : language === 'ru' ? 'Губы (Aquarell Lips)' : 'Губы (Aquarell Lips)',
          items: [
            { name: language === 'de' ? 'Aquarell / Velvet-Technik' : language === 'ru' ? 'Акварельная / Вельвет техника' : 'Акварельная / Вельвет техника', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '150 €' },
          ]
        },
        {
          name: language === 'de' ? 'Augen (Eyes)' : language === 'ru' ? 'Глаза (Eyes)' : 'Глаза (Eyes)',
          items: [
            { name: language === 'de' ? 'Wimpernkranzverdichtung' : language === 'ru' ? 'Межресничка' : 'Межресничка', price: '200 €' },
            { name: language === 'de' ? 'Lidstrich' : language === 'ru' ? 'Стрелка' : 'Стрелка', price: '300 €' },
            { name: language === 'de' ? 'Lidstrich mit Schattierung' : language === 'ru' ? 'Стрелка с растушевкой' : 'Стрелка с растушевкой', price: '350 €' },
            { name: language === 'de' ? 'Korrektur' : language === 'ru' ? 'Коррекция' : 'Корекція', price: '100 €' },
          ]
        },
        {
          name: language === 'de' ? 'PMU Entfernung (PMU Remover)' : language === 'ru' ? 'Удаление перманентного макияжа' : 'Видалення перманентного макияжа',
          description: isGerman
            ? 'Biochemische Zusammensetzung löst Pigment sanft auf, ohne die Haut zu schädigen.'
            : 'Биохимический состав мягко растворяет пигмент, не повреждая кожу.',
          items: [
            { name: language === 'de' ? 'Salon + Heimpflege' : language === 'ru' ? 'Процедура в салоне + домашний уход' : 'Процедура в салоне + домашний уход', price: '95 € + 25 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen + Heimpflege)' : language === 'ru' ? 'Курс (10 процедур + домашний уход)' : 'Курс (10 процедур + домашний уход)', price: '700 €' },
          ]
        },
      ]
    },
    // 3. Laser - Трёхволновой лазер
    {
      id: 'laser',
      icon: Zap,
      title: language === 'de' ? 'Laser Haarentfernung auf Dreiwellenlaser' : language === 'ru' ? 'Лазерная эпиляция на трёхволновом лазере' : 'Лазерная эпиляция на трёхволновом лазере',
      subtitle: language === 'de' ? 'Alexandrit + Diode + Nd:YAG' : language === 'ru' ? 'Александрит + Диод + Nd:YAG' : 'Александрит + Диод + Nd:YAG',
      consultation: language === 'de' ? 'Beratung inklusive' : language === 'ru' ? 'Консультация включена' : 'Консультація включена',
      isDualColumn: true,
      columns: [
        {
          name: language === 'de' ? 'Damen' : language === 'ru' ? 'Женщины' : 'Женщины',
          sections: [
            {
              name: language === 'de' ? 'Gesicht' : language === 'ru' ? 'Лицо' : 'Лицо',
              items: [
                { name: language === 'de' ? 'Kinn' : language === 'ru' ? 'Подбородок' : 'Подбородок', price: '29 €' },
                { name: language === 'de' ? 'Oberlippe' : language === 'ru' ? 'Верхняя губа' : 'Верхняя губа', price: '25 €' },
                { name: language === 'de' ? 'Wangen' : language === 'ru' ? 'Щёки' : 'Щёки', price: '34 €' },
                { name: language === 'de' ? 'Gesicht komplett' : language === 'ru' ? 'Лицо полностью' : 'Лицо полностью', price: '64 €' },
              ]
            },
            {
              name: language === 'de' ? 'Oberkörper' : language === 'ru' ? 'Верхняя часть тела' : 'Верхняя часть тела',
              items: [
                { name: language === 'de' ? 'Achseln' : language === 'ru' ? 'Подмышки' : 'Подмышки', price: '49 €' },
                { name: language === 'de' ? 'Oberarme' : language === 'ru' ? 'Плечи' : 'Плечи', price: '64 €' },
                { name: language === 'de' ? 'Unterarme' : language === 'ru' ? 'Предплечья' : 'Предплечья', price: '64 €' },
                { name: language === 'de' ? 'Arme komplett' : language === 'ru' ? 'Руки полностью' : 'Руки полностью', price: '99 €' },
                { name: language === 'de' ? 'Bauchhaarlinie' : language === 'ru' ? 'Полоска на животе' : 'Полоска на животе', price: '35 €' },
              ]
            },
            {
              name: language === 'de' ? 'Unterkörper & Po' : language === 'ru' ? 'Нижняя часть тела и ягодицы' : 'Нижняя часть тела и ягодицы',
              items: [
                { name: language === 'de' ? 'Pofalte' : language === 'ru' ? 'Складка ягодиц' : 'Складка ягодиц', price: '44 €' },
                { name: language === 'de' ? 'Po' : language === 'ru' ? 'Ягодицы' : 'Ягодицы', price: '64 €' },
                { name: language === 'de' ? 'Bikini' : language === 'ru' ? 'Бикини' : 'Бикини', price: '39 €' },
                { name: language === 'de' ? 'Bikini & Intim' : language === 'ru' ? 'Бикини и интим' : 'Бикини и интим', price: '84 €' },
                { name: language === 'de' ? 'Bikini & Intim & Po komplett' : language === 'ru' ? 'Бикини, интим и ягодицы' : 'Бикини, интим и ягодицы', price: '114 €' },
              ]
            },
            {
              name: language === 'de' ? 'Beine & Füße' : language === 'ru' ? 'Ноги и стопы' : 'Ноги и стопы',
              items: [
                { name: language === 'de' ? 'Füße' : language === 'ru' ? 'Стопы' : 'Стопы', price: '34 €' },
                { name: language === 'de' ? 'Oberschenkel' : language === 'ru' ? 'Бёдра' : 'Бёдра', price: '68 €' },
                { name: language === 'de' ? 'Unterschenkel' : language === 'ru' ? 'Голени' : 'Голени', price: '68 €' },
                { name: language === 'de' ? 'Komplett Beine' : language === 'ru' ? 'Ноги полностью' : 'Ноги полностью', price: '119 €' },
              ]
            },
            {
              name: language === 'de' ? 'Ganzkörper' : language === 'ru' ? 'Всё тело' : 'Всё тело',
              items: [
                { name: language === 'de' ? 'Ganzkörper' : language === 'ru' ? 'Всё тело' : 'Всё тело', price: '289 €' },
              ]
            },
          ]
        },
        {
          name: language === 'de' ? 'Herren' : language === 'ru' ? 'Мужчины' : 'Мужчины',
          sections: [
            {
              name: language === 'de' ? 'Gesicht' : language === 'ru' ? 'Лицо' : 'Лицо',
              items: [
                { name: language === 'de' ? 'Kinn' : language === 'ru' ? 'Подбородок' : 'Подбородок', price: '35 €' },
                { name: language === 'de' ? 'Oberlippe' : language === 'ru' ? 'Верхняя губа' : 'Верхняя губа', price: '35 €' },
                { name: language === 'de' ? 'Koteletten' : language === 'ru' ? 'Бакенбарды' : 'Бакенбарды', price: '35 €' },
                { name: language === 'de' ? 'Wangen' : language === 'ru' ? 'Щёки' : 'Щёки', price: '40 €' },
                { name: language === 'de' ? 'Gesicht komplett' : language === 'ru' ? 'Лицо полностью' : 'Лицо полностью', price: '135 €' },
              ]
            },
            {
              name: language === 'de' ? 'Oberkörper' : language === 'ru' ? 'Верхняя часть тела' : 'Верхняя часть тела',
              items: [
                { name: language === 'de' ? 'Brustwarzen' : language === 'ru' ? 'Соски' : 'Соски', price: '39 €' },
                { name: language === 'de' ? 'Hals (ohne Nacken)' : language === 'ru' ? 'Шея (без затылка)' : 'Шея (без затылка)', price: '39 €' },
                { name: language === 'de' ? 'Nacken' : language === 'ru' ? 'Затылок' : 'Затылок', price: '39 €' },
                { name: language === 'de' ? 'Achseln' : language === 'ru' ? 'Подмышки' : 'Подмышки', price: '49 €' },
                { name: language === 'de' ? 'Hände' : language === 'ru' ? 'Кисти рук' : 'Кисти рук', price: '39 €' },
                { name: language === 'de' ? 'Schultern' : language === 'ru' ? 'Плечи' : 'Плечи', price: '56 €' },
                { name: language === 'de' ? 'Oberarme' : language === 'ru' ? 'Верхняя часть рук' : 'Верхняя часть рук', price: '66 €' },
                { name: language === 'de' ? 'Unterarme' : language === 'ru' ? 'Предплечья' : 'Предплечья', price: '66 €' },
                { name: language === 'de' ? 'Bauch' : language === 'ru' ? 'Живот' : 'Живот', price: '66 €' },
                { name: language === 'de' ? 'Brust' : language === 'ru' ? 'Грудь' : 'Грудь', price: '66 €' },
                { name: language === 'de' ? 'Rücken oben' : language === 'ru' ? 'Верхняя часть спины' : 'Верхняя часть спины', price: '66 €' },
                { name: language === 'de' ? 'Rücken unten' : language === 'ru' ? 'Нижняя часть спины' : 'Нижняя часть спины', price: '66 €' },
                { name: language === 'de' ? 'Rücken komplett' : language === 'ru' ? 'Спина полностью' : 'Спина полностью', price: '118 €' },
              ]
            },
            {
              name: language === 'de' ? 'Unterkörper & Po' : language === 'ru' ? 'Нижняя часть тела и ягодицы' : 'Нижняя часть тела и ягодицы',
              items: [
                { name: language === 'de' ? 'Pofalte' : language === 'ru' ? 'Складка ягодиц' : 'Складка ягодиц', price: '52 €' },
                { name: language === 'de' ? 'Bikini' : language === 'ru' ? 'Бикини' : 'Бикини', price: '52 €' },
                { name: language === 'de' ? 'Po komplett' : language === 'ru' ? 'Ягодицы полностью' : 'Ягодицы полностью', price: '79 €' },
              ]
            },
            {
              name: language === 'de' ? 'Beine & Füße' : language === 'ru' ? 'Ноги и стопы' : 'Ноги и стопы',
              items: [
                { name: language === 'de' ? 'Füße' : language === 'ru' ? 'Стопы' : 'Стопы', price: '39 €' },
                { name: language === 'de' ? 'Oberschenkel' : language === 'ru' ? 'Бёдра' : 'Бёдра', price: '80 €' },
                { name: language === 'de' ? 'Unterschenkel' : language === 'ru' ? 'Голени' : 'Голени', price: '80 €' },
                { name: language === 'de' ? 'Beine komplett' : language === 'ru' ? 'Ноги полностью' : 'Ноги полностью', price: '149 €' },
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
      title: language === 'de' ? 'Apparative Anti-Aging' : language === 'ru' ? 'Аппаратный Anti-Aging' : 'Аппаратный Anti-Aging',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'RF-Lifting (Radiofrequenz)' : language === 'ru' ? 'RF-лифтинг (радиочастотный)' : 'RF-лифтинг (радиочастотный)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: language === 'de' ? 'Lichttherapie (LED-Therapie)' : language === 'ru' ? 'Световая терапия (LED)' : 'Световая терапия (LED)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: language === 'de' ? 'Biostrom (Mikrostrom-Therapie)' : language === 'ru' ? 'Биотоки (микротоковая терапия)' : 'Биотоки (микротоковая терапия)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
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
      title: language === 'de' ? 'Körperbehandlungen' : language === 'ru' ? 'Процедуры для тела' : 'Процедуры для тела',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'RF-Lifting + Vakuum-Massage + Infrarotlicht' : language === 'ru' ? 'RF лифтинг + вакуумный массаж тела + инфракрасный свет' : 'RF лифтинг + вакуумный массаж тела + инфракрасный свет',
          description: isGerman
            ? 'Dauer 30 Min'
            : 'Длительность 30 мин',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: language === 'de' ? 'Kavitation (Körper)' : language === 'ru' ? 'Кавитация (тело)' : 'Кавитация (тело)',
          description: isGerman
            ? 'Zonen: Po / Bauch / Hüften / Oberschenkel / über den Knien. Dauer 30 Min pro Zone. Intervall zwischen den Behandlungen 7-10 Tage.'
            : 'Зоны: попа / живот / ушки / галифе / над коленями. Длительность 30 мин на зону. Интервал между процедурами 7-10 дней.',
          items: [
            { name: language === 'de' ? '1 Zone' : language === 'ru' ? '1 зона' : '1 зона', price: '75 €' },
            { name: language === 'de' ? 'Kurs (10 Behandlungen)' : language === 'ru' ? 'Курс (Абонемент на 10 процедур)' : 'Курс (Абонемент на 10 процедур)', price: '650 €' },
          ]
        },
      ]
    },
    // 6. Gesichtspflege
    {
      id: 'facial-care',
      icon: Droplets,
      title: language === 'de' ? 'Gesichtspflege' : language === 'ru' ? 'Уход за лицом' : 'Уход за лицом',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Gesichtsreinigung' : language === 'ru' ? 'Чистка лица' : 'Чистка лица',
          description: isGerman
            ? 'Kombinierte Ultraschallreinigung — 90 Min (Reinigung, Tonisierung, Peeling, Maske zum Öffnen der Poren, Geräte- + mechanische Reinigung, Masken zum Schließen der Poren, Creme + SPF, Darsonval / Phonophorese falls notwendig). Arbeit mit TM Renew, Derma Series u.a.'
            : 'Комбинированная ультразвуковая — 90 мин (очистка, тонизация, пилинг, маска открывающая поры, аппаратная + механическая, маски для закрытия пор, крем + SPF, дарсонваль / фонофорез если мастер считает необходимым). Работаю на косметике ТМ Renew, Derma Series и др.',
          items: [
            { name: language === 'de' ? 'Komplett (90 Min)' : language === 'ru' ? 'Полная (90 мин)' : 'Полная (90 мин)', price: '90 €' },
          ]
        },
      ]
    },
    // 7. Microneedling
    {
      id: 'microneedling',
      icon: Scissors,
      title: language === 'de' ? 'Microneedling' : language === 'ru' ? 'Микронидлинг' : 'Микронидлинг',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Microneedling-Behandlung' : language === 'ru' ? 'Процедура микронидлинг' : 'Процедура микронидлинг',
          description: isGerman
            ? 'Behandlung inkl. Hautvorbereitung, Anästhetikum (bei Bedarf), Darsonval oder Peeling (falls nötig). Ampullen mit Exosomen, Vitaminen, Kollagen, Hyaluronsäure usw. gegen Aufpreis. Empfohlen: Wiederholung alle 2–3 Wochen je nach individuellen Zielen. Für Haarwuchsstimulation wird ein Behandlungskurs empfohlen.'
            : 'Процедура включает подготовку кожи, анестетик (при необходимости), дарсонваль или пилинг (при необходимости). Ампула экзосомы, витамины, коллаген, гиалурон и т.д. за доп. плату. Рекомендовано повторять через 2-3 недели, в зависимости от индивидуальных целей. Например для стимуляция роста волос необходимо пройти курсом терапию.',
          items: [
            { name: language === 'de' ? 'Gesicht + Hals + Dekolleté' : language === 'ru' ? 'Лицо + шея + декольте' : 'Лицо + шея + декольте', price: '159 €' },
            { name: language === 'de' ? 'Kopfhaut' : language === 'ru' ? 'Кожа головы' : 'Кожа головы', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'по запросу' },
            { name: language === 'de' ? 'Hände, Knie, Dehnungsstreifen' : language === 'ru' ? 'Руки, колени, растяжки' : 'Руки, колени, растяжки', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'по запросу' },
          ]
        },
      ]
    },
    // 8. Darsonval
    {
      id: 'darsonval',
      icon: Wind,
      title: language === 'de' ? 'Darsonval für Haare' : language === 'ru' ? 'Дарсонваль для волос' : 'Дарсонваль для волос',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Darsonval-Behandlung' : language === 'ru' ? 'Процедура дарсонваль' : 'Процедура дарсонваль',
          items: [
            { name: language === 'de' ? 'Behandlung' : language === 'ru' ? 'Процедура' : 'Процедура', price: language === 'de' ? 'auf Anfrage' : language === 'ru' ? 'по запросу' : 'по запросу' },
          ]
        },
      ]
    },
    // 9. Hautveränderungen entfernen
    {
      id: 'skin-changes',
      icon: AlertCircle,
      title: language === 'de' ? 'Hautveränderungen entfernen' : language === 'ru' ? 'Удаление новообразований кожи' : 'Видалення новообразований кожи',
      consultation: language === 'de' ? '🕊 Konsultation vor der Behandlung — kostenlos.' : language === 'ru' ? '🕊 Консультация перед процедурой — бесплатная.' : '🕊 Консультація перед процедурой — бесплатная.',
      sections: [
        {
          name: language === 'de' ? 'Entfernung von Hautveränderungen' : language === 'ru' ? 'Удаление новообразований' : 'Видалення новообразований',
          description: isGerman
            ? '⚠️ Wichtig: Vor der Behandlung ist eine Konsultation mit einem Dermatologen (Histologie) erforderlich.'
            : '⚠️ Важно: Необходимо перед процедурой проконсультироваться с дерматологом (гистология).',
          items: [
            { name: language === 'de' ? 'Entfernung' : language === 'ru' ? 'Удаление' : 'Видалення', price: language === 'de' ? 'ab 10 €' : language === 'ru' ? 'от 10 €' : 'от 10 €' },
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
              {language === 'de' ? 'PREISE' : language === 'ru' ? 'ЦЕНЫ' : 'ЦЕНЫ'}
            </h1>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto opacity-80 mb-6"></div>
            <p className="text-lg text-brand-espresso/60 font-light italic">
              {language === 'de' ? 'Exklusive Beauty-Behandlungen' : language === 'ru' ? 'Эксклюзивные бьюти-процедуры' : 'Эксклюзивные бьюти-процедуры'}
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
                              {language === 'de' ? 'Zusätzlich' : language === 'ru' ? 'Дополнительно' : 'Дополнительно'}
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
