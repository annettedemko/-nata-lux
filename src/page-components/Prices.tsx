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
      title: isGerman ? 'Wimpern & Augenbrauen' : 'Ресницы и брови',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Wimpernverlängerung' : 'Наращивание ресниц',
          items: [
            { name: isGerman ? 'Klassik 1:1' : 'Классика 1:1', price: '80 €' },
            { name: '2D', price: '90 €' },
            { name: '3D', price: '100 €' },
            { name: isGerman ? 'Mega-Volumen' : 'Мегаобъём', price: '120 €' },
            { name: isGerman ? 'Mix-Technik' : 'Микс-техника', price: isGerman ? 'Preis auf Anfrage' : 'цена по запросу' },
            { name: isGerman ? 'Strahlen / L-Curl / Untere Wimpern' : 'Лучики / изгиб L / нижнее наращивание', price: isGerman ? 'Preis auf Anfrage' : 'цена по запросу' },
          ],
          additional: [
            { name: isGerman ? 'Korrektur' : 'Коррекция', price: isGerman ? 'ab 50 €' : 'от 50 €' },
            { name: isGerman ? 'Entfernung (eigene Arbeit)' : 'Снятие своей работы', price: isGerman ? 'kostenlos' : 'бесплатно' },
            { name: isGerman ? 'Entfernung (fremde Arbeit)' : 'Снятие чужой работы', price: '15 €' },
          ]
        },
        {
          name: isGerman ? 'Wimpern-Laminierung (Lash Lifting)' : 'Ламинирование ресниц',
          items: [
            { name: isGerman ? 'Mit Färbung' : 'С окрашиванием', price: '55 €' },
            { name: isGerman ? 'Mit Vitaminen, Ölen, Keratin' : 'С витаминами, маслами, кератином', price: '65 €' },
          ]
        },
        {
          name: isGerman ? 'Augenbrauen-Laminierung (Brow Lifting)' : 'Ламинирование бровей',
          items: [
            { name: isGerman ? 'Mit Färbung' : 'С окрашиванием', price: '55 €' },
            { name: isGerman ? 'Mit Vitaminen, Ölen, Keratin' : 'С витаминами, маслами, кератином', price: '65 €' },
          ]
        },
        {
          name: isGerman ? 'Augenbrauen Styling' : 'Оформление бровей',
          items: [
            { name: isGerman ? 'Modellierung + Färbung' : 'Моделирование формы + окрашивание краской', price: '40 €' },
          ]
        },
      ]
    },
    // 2. Permanent Make-Up
    {
      id: 'pmu',
      icon: Heart,
      title: isGerman ? 'Permanent Make-Up' : 'Перманентный макияж',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Augenbrauen (Powder Brows)' : 'Брови (Powder Brows)',
          items: [
            { name: isGerman ? 'Pudertechnik' : 'Пудровая техника', price: '350 €' },
            { name: isGerman ? 'Korrektur' : 'Коррекция', price: '150 €' },
          ]
        },
        {
          name: isGerman ? 'Lippen (Aquarell Lips)' : 'Губы (Aquarell Lips)',
          items: [
            { name: isGerman ? 'Aquarell / Velvet-Technik' : 'Акварельная / Вельвет техника', price: '350 €' },
            { name: isGerman ? 'Korrektur' : 'Коррекция', price: '150 €' },
          ]
        },
        {
          name: isGerman ? 'Wimpernkranz (Lidstrich)' : 'Межресничка',
          items: [
            { name: isGerman ? 'Klassisch' : 'Классическая', price: '200 €' },
            { name: isGerman ? 'Korrektur' : 'Коррекция', price: '100 €' },
          ]
        },
        {
          name: isGerman ? 'PMU Entfernung (PMU Remover)' : 'Удаление перманентного макияжа',
          description: isGerman
            ? 'Biochemische Zusammensetzung löst Pigment sanft auf, ohne die Haut zu schädigen.'
            : 'Биохимический состав мягко растворяет пигмент, не повреждая кожу.',
          items: [
            { name: isGerman ? 'Salon + Heimpflege' : 'Процедура в салоне + домашний уход', price: '95 € + 25 €' },
            { name: isGerman ? 'Kurs (10 Behandlungen + Heimpflege)' : 'Курс (10 процедур + домашний уход)', price: '700 €' },
          ]
        },
      ]
    },
    // 3. Laser - Трёхволновой лазер
    {
      id: 'laser',
      icon: Zap,
      title: isGerman ? 'Laser Haarentfernung auf Dreiwellenlaser' : 'Лазерная эпиляция на трёхволновом лазере',
      subtitle: isGerman ? 'Alexandrit + Diode + Nd:YAG' : 'Александрит + Диод + Nd:YAG',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      isDualColumn: true,
      columns: [
        {
          name: isGerman ? 'Damen' : 'Женщины',
          items: [
            { name: isGerman ? 'Oberlippe' : 'Верхняя губа', price: '30 €' },
            { name: isGerman ? 'Kinn' : 'Подбородок', price: '30 €' },
            { name: isGerman ? 'Wangen' : 'Щёки', price: '30 €' },
            { name: isGerman ? 'Finger' : 'Пальцы', price: '30 €' },
            { name: isGerman ? 'Bauchstreifen' : 'Полоска на животе', price: '30 €' },
            { name: isGerman ? 'Nacken' : 'Шея', price: '50 €' },
            { name: isGerman ? 'Unterer Rücken' : 'Поясница', price: '50 €' },
            { name: isGerman ? 'Achselhöhlen' : 'Подмышки', price: '60 €' },
            { name: isGerman ? 'Gesicht komplett' : 'Лицо полностью', price: '70 €' },
            { name: isGerman ? 'Bauch' : 'Живот', price: '70 €' },
            { name: isGerman ? 'Brust' : 'Грудь', price: '70 €' },
            { name: isGerman ? 'Unterarme' : 'Предплечья', price: '70 €' },
            { name: isGerman ? 'Oberarme' : 'Плечи', price: '70 €' },
            { name: isGerman ? 'Pobacken' : 'Ягодицы', price: '70 €' },
            { name: isGerman ? 'Bikini komplett' : 'Бикини полностью', price: '90 €' },
            { name: isGerman ? 'Arme komplett' : 'Руки полностью', price: '90 €' },
            { name: isGerman ? 'Rücken' : 'Спина', price: '100 €' },
            { name: isGerman ? 'Unterschenkel' : 'Голени', price: '100 €' },
            { name: isGerman ? 'Oberschenkel + Knie' : 'Бёдра + колени', price: '100 €' },
            { name: isGerman ? 'Beine komplett' : 'Ноги полностью', price: '120 €' },
            { name: isGerman ? 'Bikini + Achseln' : 'Бикини + подмышки', price: '130 €' },
            { name: isGerman ? 'Bikini + Achseln + Unterschenkel' : 'Бикини + подмышки + голени', price: '170 €' },
            { name: isGerman ? 'Bikini + Achseln + Oberschenkel + Knie' : 'Бикини + подмышки + бёдра + колени', price: '170 €' },
            { name: isGerman ? 'Bikini + Achseln + Beine komplett' : 'Бикини + подмышки + ноги полностью', price: '210 €' },
            { name: isGerman ? 'Bikini + Achseln + Beine + Arme komplett' : 'Бикини + подмышки + ноги + руки', price: '240 €' },
            { name: isGerman ? 'Ganzer Körper' : 'Всё тело', price: '400 €' },
          ]
        },
        {
          name: isGerman ? 'Herren' : 'Мужчины',
          items: [
            { name: isGerman ? 'Oberlippe' : 'Верхняя губа', price: '30 €' },
            { name: isGerman ? 'Kinn' : 'Подбородок', price: '30 €' },
            { name: isGerman ? 'Wangen' : 'Щёки', price: '30 €' },
            { name: isGerman ? 'Finger' : 'Пальцы', price: '30 €' },
            { name: isGerman ? 'Bauchstreifen' : 'Полоска на животе', price: '30 €' },
            { name: isGerman ? 'Nacken' : 'Шея', price: '50 €' },
            { name: isGerman ? 'Achselhöhlen' : 'Подмышки', price: '60 €' },
            { name: isGerman ? 'Gesicht komplett' : 'Лицо полностью', price: '70 €' },
            { name: isGerman ? 'Unterarme' : 'Предплечья', price: '80 €' },
            { name: isGerman ? 'Oberarme' : 'Плечи', price: '80 €' },
            { name: isGerman ? 'Pobacken' : 'Ягодицы', price: '100 €' },
            { name: isGerman ? 'Unterer Rücken' : 'Поясница', price: '100 €' },
            { name: isGerman ? 'Unterschenkel' : 'Голени', price: '100 €' },
            { name: isGerman ? 'Oberschenkel + Knie' : 'Бёдра + колени', price: '100 €' },
            { name: isGerman ? 'Bauch' : 'Живот', price: '110 €' },
            { name: isGerman ? 'Brust' : 'Грудь', price: '110 €' },
            { name: isGerman ? 'Arme komplett' : 'Руки полностью', price: '120 €' },
            { name: isGerman ? 'Beine komplett' : 'Ноги полностью', price: '150 €' },
            { name: isGerman ? 'Bikini komplett' : 'Бикини полностью', price: '150 €' },
            { name: isGerman ? 'Rücken komplett' : 'Спина полностью', price: '180 €' },
            { name: isGerman ? 'Bikini + Achseln + Beine komplett' : 'Бикини + подмышки + ноги полностью', price: '300 €' },
            { name: isGerman ? 'Ganzer Körper' : 'Всё тело', price: '600 €' },
          ]
        },
      ]
    },
    // 4. Apparative Anti-Aging
    {
      id: 'apparative-antiaging',
      icon: Activity,
      title: isGerman ? 'Apparative Anti-Aging' : 'Аппаратный Anti-Aging',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'RF-Lifting (Radiofrequenz)' : 'RF-лифтинг (радиочастотный)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
          items: [
            { name: isGerman ? 'Behandlung' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: isGerman ? 'Lichttherapie (LED-Therapie)' : 'Световая терапия (LED)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
          items: [
            { name: isGerman ? 'Behandlung' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: isGerman ? 'Biostrom (Mikrostrom-Therapie)' : 'Биотоки (микротоковая терапия)',
          description: isGerman
            ? 'Dauer der Behandlung 1 Stunde (Reinigung, Tonisierung, Gerätenutzung 30 Min, Tonisierung, Massage mit Creme)'
            : 'Длительность процедуры 1 час (очищение, тонизация, аппаратная часть 30 мин, тонизация, массаж с кремом)',
          items: [
            { name: isGerman ? 'Behandlung' : 'Процедура', price: '75 €' },
          ]
        },
      ]
    },
    // 5. Körperbehandlungen
    {
      id: 'body-treatments',
      icon: Dumbbell,
      title: isGerman ? 'Körperbehandlungen' : 'Процедуры для тела',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'RF-Lifting + Vakuum-Massage + Infrarotlicht' : 'RF лифтинг + вакуумный массаж тела + инфракрасный свет',
          description: isGerman
            ? 'Dauer 30 Min'
            : 'Длительность 30 мин',
          items: [
            { name: isGerman ? 'Behandlung' : 'Процедура', price: '75 €' },
          ]
        },
        {
          name: isGerman ? 'Kavitation (Körper)' : 'Кавитация (тело)',
          description: isGerman
            ? 'Zonen: Po / Bauch / Hüften / Oberschenkel / über den Knien. Dauer 30 Min pro Zone. Intervall zwischen den Behandlungen 7-10 Tage.'
            : 'Зоны: попа / живот / ушки / галифе / над коленями. Длительность 30 мин на зону. Интервал между процедурами 7-10 дней.',
          items: [
            { name: isGerman ? '1 Zone' : '1 зона', price: '75 €' },
            { name: isGerman ? 'Kurs (10 Behandlungen)' : 'Курс (Абонемент на 10 процедур)', price: '650 €' },
          ]
        },
      ]
    },
    // 6. Gesichtspflege
    {
      id: 'facial-care',
      icon: Droplets,
      title: isGerman ? 'Gesichtspflege' : 'Уход за лицом',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Gesichtsreinigung' : 'Чистка лица',
          description: isGerman
            ? 'Kombinierte Ultraschallreinigung — 90 Min (Reinigung, Tonisierung, Peeling, Maske zum Öffnen der Poren, Geräte- + mechanische Reinigung, Masken zum Schließen der Poren, Creme + SPF, Darsonval / Phonophorese falls notwendig). Arbeit mit TM Renew, Derma Series u.a.'
            : 'Комбинированная ультразвуковая — 90 мин (очистка, тонизация, пилинг, маска открывающая поры, аппаратная + механическая, маски для закрытия пор, крем + SPF, дарсонваль / фонофорез если мастер считает необходимым). Работаю на косметике ТМ Renew, Derma Series и др.',
          items: [
            { name: isGerman ? 'Komplett (90 Min)' : 'Полная (90 мин)', price: '90 €' },
          ]
        },
      ]
    },
    // 7. Microneedling
    {
      id: 'microneedling',
      icon: Scissors,
      title: isGerman ? 'Microneedling' : 'Микронидлинг',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Microneedling-Behandlung' : 'Процедура микронидлинг',
          description: isGerman
            ? 'Behandlung inkl. Hautvorbereitung, Anästhetikum (bei Bedarf), Darsonval oder Peeling (falls nötig). Ampullen mit Exosomen, Vitaminen, Kollagen, Hyaluronsäure usw. gegen Aufpreis. Empfohlen: Wiederholung alle 2–3 Wochen je nach individuellen Zielen. Für Haarwuchsstimulation wird ein Behandlungskurs empfohlen.'
            : 'Процедура включает подготовку кожи, анестетик (при необходимости), дарсонваль или пилинг (при необходимости). Ампула экзосомы, витамины, коллаген, гиалурон и т.д. за доп. плату. Рекомендовано повторять через 2-3 недели, в зависимости от индивидуальных целей. Например для стимуляция роста волос необходимо пройти курсом терапию.',
          items: [
            { name: isGerman ? 'Gesicht + Hals + Dekolleté' : 'Лицо + шея + декольте', price: '159 €' },
            { name: isGerman ? 'Kopfhaut' : 'Кожа головы', price: isGerman ? 'auf Anfrage' : 'по запросу' },
            { name: isGerman ? 'Hände, Knie, Dehnungsstreifen' : 'Руки, колени, растяжки', price: isGerman ? 'auf Anfrage' : 'по запросу' },
          ]
        },
      ]
    },
    // 8. Darsonval
    {
      id: 'darsonval',
      icon: Wind,
      title: isGerman ? 'Darsonval für Haare' : 'Дарсонваль для волос',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Darsonval-Behandlung' : 'Процедура дарсонваль',
          items: [
            { name: isGerman ? 'Behandlung' : 'Процедура', price: isGerman ? 'auf Anfrage' : 'по запросу' },
          ]
        },
      ]
    },
    // 9. Hautveränderungen entfernen
    {
      id: 'skin-changes',
      icon: AlertCircle,
      title: isGerman ? 'Hautveränderungen entfernen' : 'Удаление новообразований кожи',
      consultation: isGerman ? '🕊 Konsultation vor der Behandlung — kostenlos.' : '🕊 Консультация перед процедурой — бесплатная.',
      sections: [
        {
          name: isGerman ? 'Entfernung von Hautveränderungen' : 'Удаление новообразований',
          description: isGerman
            ? '⚠️ Wichtig: Vor der Behandlung ist eine Konsultation mit einem Dermatologen (Histologie) erforderlich.'
            : '⚠️ Важно: Необходимо перед процедурой проконсультироваться с дерматологом (гистология).',
          items: [
            { name: isGerman ? 'Entfernung' : 'Удаление', price: isGerman ? 'ab 10 €' : 'от 10 €' },
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
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-8xl md:text-9xl font-heading font-bold tracking-tight leading-none mb-6"
              style={{
                color: 'hsl(25, 27%, 19%)',
                letterSpacing: '-0.02em',
              }}
            >
              {isGerman ? 'PREISE' : 'ЦЕНЫ'}
            </h1>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto opacity-80 mb-6"></div>
            <p className="text-lg text-brand-espresso/60 font-light italic">
              {isGerman ? 'Exklusive Beauty-Behandlungen' : 'Эксклюзивные бьюти-процедуры'}
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
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                    className="px-10 md:px-14 py-8"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201, 165, 106, 0.15) 0%, rgba(231, 207, 163, 0.08) 100%)',
                      borderBottom: '2px solid rgba(201, 165, 106, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-5 mb-3">
                      <div className="p-3 bg-brand-gold/20 rounded-xl">
                        <Icon className="w-7 h-7 text-brand-gold" strokeWidth={2} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-espresso tracking-tight">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                      {category.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-6 pb-4 border-b-2 border-brand-gold/30">
                            {column.name}
                          </h3>
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
                              {isGerman ? 'Zusätzlich' : 'Дополнительно'}
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
