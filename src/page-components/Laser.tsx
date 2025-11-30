'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, CheckCircle2, Shield, Clock, Sparkles, Target, Sun, Moon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

const Laser = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = ['/70.PNG', '/41.jpg', '/42.jpg', '/75.jpg', '/76.jpg'];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);

  const wavelengths = isGerman ? [
    {
      name: 'Alexandrit (755 nm)',
      icon: Sun,
      color: 'from-red-400 to-red-600',
      skinTypes: 'Hauttyp I-III',
      description: 'Goldstandard für helle Haut. Höchste Absorption von Melanin, extrem effektiv bei feinen und hellen Haaren. Schnellste Behandlung großer Flächen.',
      benefits: ['Ideal für helle Haut', 'Effektiv bei feinen Haaren', 'Schnelle Behandlung', 'Höchste Melanin-Absorption']
    },
    {
      name: 'Diode (808 nm)',
      icon: Target,
      color: 'from-amber-400 to-amber-600',
      skinTypes: 'Hauttyp I-V',
      description: 'Der vielseitigste Laser. Dringt tiefer in die Haut ein und erreicht auch tiefliegende Haarfollikel. Geeignet für fast alle Haut- und Haartypen.',
      benefits: ['Universell einsetzbar', 'Tiefe Penetration', 'Für alle Haartypen', 'Sichere Anwendung']
    },
    {
      name: 'Nd:YAG (1064 nm)',
      icon: Moon,
      color: 'from-violet-400 to-violet-600',
      skinTypes: 'Hauttyp IV-VI',
      description: 'Speziell für dunkle und gebräunte Haut. Die längste Wellenlänge minimiert das Risiko von Pigmentstörungen und ist sicher auch bei Sonnenbräune.',
      benefits: ['Sicher für dunkle Haut', 'Auch bei Bräune möglich', 'Minimales Pigmentrisiko', 'Tiefste Penetration']
    }
  ] : [
    {
      name: 'Александрит (755 нм)',
      icon: Sun,
      color: 'from-red-400 to-red-600',
      skinTypes: 'Фототип I-III',
      description: 'Золотой стандарт для светлой кожи. Максимальное поглощение меланина, крайне эффективен для тонких и светлых волос. Самая быстрая обработка больших зон.',
      benefits: ['Идеален для светлой кожи', 'Эффективен для тонких волос', 'Быстрая процедура', 'Максимум поглощения меланина']
    },
    {
      name: 'Диод (808 нм)',
      icon: Target,
      color: 'from-amber-400 to-amber-600',
      skinTypes: 'Фототип I-V',
      description: 'Самый универсальный лазер. Глубже проникает в кожу и достигает глубоко расположенных фолликулов. Подходит практически для всех типов кожи и волос.',
      benefits: ['Универсальное применение', 'Глубокое проникновение', 'Для всех типов волос', 'Безопасное воздействие']
    },
    {
      name: 'Nd:YAG (1064 нм)',
      icon: Moon,
      color: 'from-violet-400 to-violet-600',
      skinTypes: 'Фототип IV-VI',
      description: 'Специально для тёмной и загорелой кожи. Самая длинная волна минимизирует риск пигментации и безопасна даже при загаре.',
      benefits: ['Безопасен для тёмной кожи', 'Можно при загаре', 'Минимальный риск пигментации', 'Самое глубокое проникновение']
    }
  ];

  const advantages = isGerman ? [
    {
      icon: Zap,
      title: '3 Wellenlängen in einem Gerät',
      description: 'Optimale Behandlung für jeden Haut- und Haartyp ohne Gerätewechsel'
    },
    {
      icon: Shield,
      title: 'Integriertes Kühlsystem',
      description: 'Schmerzfreie Behandlung durch Kontaktkühlung auf -4°C'
    },
    {
      icon: Clock,
      title: 'Schnelle Ergebnisse',
      description: '80-90% dauerhafte Haarreduktion nach 6-8 Sitzungen'
    },
    {
      icon: Sparkles,
      title: 'Alle Körperzonen',
      description: 'Von Oberlippe bis kompletter Körper – für Damen und Herren'
    }
  ] : [
    {
      icon: Zap,
      title: '3 длины волны в одном аппарате',
      description: 'Оптимальная процедура для любого типа кожи и волос без смены оборудования'
    },
    {
      icon: Shield,
      title: 'Встроенная система охлаждения',
      description: 'Безболезненная процедура благодаря контактному охлаждению до -4°C'
    },
    {
      icon: Clock,
      title: 'Быстрые результаты',
      description: '80-90% стойкое удаление волос после 6-8 сеансов'
    },
    {
      icon: Sparkles,
      title: 'Все зоны тела',
      description: 'От верхней губы до всего тела — для женщин и мужчин'
    }
  ];

  const treatmentAreas = isGerman ? [
    { zone: 'Gesicht', areas: 'Oberlippe, Kinn, Wangen, Koteletten' },
    { zone: 'Oberkörper', areas: 'Achseln, Brust, Bauch, Rücken, Schultern' },
    { zone: 'Arme', areas: 'Komplett, Oberarme, Unterarme, Finger' },
    { zone: 'Intimbereich', areas: 'Bikini klassisch, Bikini tief, Bikini komplett' },
    { zone: 'Beine', areas: 'Komplett, Oberschenkel, Unterschenkel, Knie' },
    { zone: 'Sonstiges', areas: 'Nacken, Gesäß, Pofalte' },
  ] : [
    { zone: 'Лицо', areas: 'Верхняя губа, подбородок, щёки, бакенбарды' },
    { zone: 'Верхняя часть тела', areas: 'Подмышки, грудь, живот, спина, плечи' },
    { zone: 'Руки', areas: 'Полностью, плечи, предплечья, пальцы' },
    { zone: 'Интимная зона', areas: 'Бикини классическое, глубокое, тотальное' },
    { zone: 'Ноги', areas: 'Полностью, бёдра, голени, колени' },
    { zone: 'Другое', areas: 'Шея, ягодицы, межъягодичная зона' },
  ];

  const processSteps = isGerman ? [
    {
      step: 1,
      title: 'Kostenlose Beratung',
      description: 'Hauttyp-Analyse, Kontraindikationen-Check, individueller Behandlungsplan'
    },
    {
      step: 2,
      title: 'Vorbereitung',
      description: 'Rasur der Zone 24h vorher, kein Sonnenbad 2 Wochen vor der Behandlung'
    },
    {
      step: 3,
      title: 'Behandlung',
      description: 'Auswahl der optimalen Wellenlänge, Kühlung, präzise Laserimpulse'
    },
    {
      step: 4,
      title: 'Nachsorge',
      description: 'Beruhigende Pflege, Sonnenschutz, nächster Termin in 4-6 Wochen'
    }
  ] : [
    {
      step: 1,
      title: 'Бесплатная консультация',
      description: 'Анализ фототипа, проверка противопоказаний, индивидуальный план'
    },
    {
      step: 2,
      title: 'Подготовка',
      description: 'Бритьё зоны за 24ч, без загара 2 недели до процедуры'
    },
    {
      step: 3,
      title: 'Процедура',
      description: 'Подбор оптимальной длины волны, охлаждение, точные импульсы лазера'
    },
    {
      step: 4,
      title: 'Уход после',
      description: 'Успокаивающий уход, защита от солнца, следующий визит через 4-6 недель'
    }
  ];

  const faqs = isGerman ? [
    {
      q: 'Warum ist ein Dreiwellenlaser besser als ein einzelner Laser?',
      a: 'Ein Dreiwellenlaser kombiniert die Vorteile aller drei Technologien: Alexandrit für helle Haut und feine Haare, Diode für universelle Anwendung, Nd:YAG für dunkle Haut. Der Spezialist kann die optimale Wellenlänge für Ihren Hauttyp wählen oder sogar kombinieren – für maximale Effektivität und Sicherheit.'
    },
    {
      q: 'Ist die Behandlung schmerzhaft?',
      a: 'Dank des integrierten Kühlsystems (bis -4°C) ist die Behandlung nahezu schmerzfrei. Die meisten Kunden beschreiben ein leichtes Kribbeln oder Wärmegefühl. Empfindliche Zonen wie Bikini können etwas intensiver sein, bleiben aber gut tolerierbar.'
    },
    {
      q: 'Wie viele Sitzungen brauche ich?',
      a: 'Für 80-90% dauerhafte Haarreduktion sind 6-8 Sitzungen im Abstand von 4-6 Wochen erforderlich. Die genaue Anzahl hängt von Ihrem Haartyp, der Zone und dem Hormonhaushalt ab. Bei hormonellen Erkrankungen können mehr Sitzungen nötig sein.'
    },
    {
      q: 'Kann ich mich im Sommer behandeln lassen?',
      a: 'Ja! Der Nd:YAG-Laser ist auch bei leichter Bräune sicher. Allerdings sollten Sie 2 Wochen vor und nach der Behandlung direkte Sonneneinstrahlung meiden. Wir beraten Sie individuell zur optimalen Wellenlänge für Ihre aktuelle Hautfarbe.'
    },
    {
      q: 'Für wen ist Laser-Haarentfernung nicht geeignet?',
      a: 'Kontraindikationen sind: Schwangerschaft, aktive Hautinfektionen, Einnahme photosensibilisierender Medikamente, frische Bräune (2 Wochen), Epilepsie, Herzschrittmacher, Krebs. Bei chronischen Erkrankungen beraten wir Sie individuell.'
    }
  ] : [
    {
      q: 'Почему трёхволновой лазер лучше обычного?',
      a: 'Трёхволновой лазер объединяет преимущества всех технологий: Александрит для светлой кожи и тонких волос, Диод для универсального применения, Nd:YAG для тёмной кожи. Мастер подбирает оптимальную длину волны для вашего фототипа или комбинирует их — для максимальной эффективности и безопасности.'
    },
    {
      q: 'Это больно?',
      a: 'Благодаря встроенной системе охлаждения (до -4°C) процедура практически безболезненна. Большинство клиентов описывают лёгкое покалывание или ощущение тепла. Чувствительные зоны вроде бикини могут ощущаться интенсивнее, но вполне терпимо.'
    },
    {
      q: 'Сколько сеансов нужно?',
      a: 'Для 80-90% стойкого удаления волос требуется 6-8 сеансов с интервалом 4-6 недель. Точное количество зависит от типа волос, зоны и гормонального фона. При гормональных нарушениях может потребоваться больше сеансов.'
    },
    {
      q: 'Можно ли делать летом?',
      a: 'Да! Nd:YAG лазер безопасен даже при лёгком загаре. Однако следует избегать прямых солнечных лучей 2 недели до и после процедуры. Мы индивидуально подберём оптимальную длину волны для вашего текущего оттенка кожи.'
    },
    {
      q: 'Кому не подходит лазерная эпиляция?',
      a: 'Противопоказания: беременность, активные инфекции кожи, приём фотосенсибилизирующих препаратов, свежий загар (2 недели), эпилепсия, кардиостимулятор, онкология. При хронических заболеваниях проконсультируем индивидуально.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - SEO optimized */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brand-latte via-brand-cream to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-brand-gold/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-brand-gold/5 rounded-full blur-3xl -z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-brand-gold/10 mb-6 md:mb-8">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-brand-gold" />
            </div>

            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-heading font-bold text-brand-espresso mb-6 leading-tight px-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman
                ? 'Laser-Haarentfernung auf Dreiwellenlaser'
                : 'Лазерная эпиляция на трёхволновом лазере'}
            </h1>

            <p className="text-xl md:text-2xl text-brand-gold font-heading font-medium mb-4">
              {isGerman
                ? 'Alexandrit + Diode + Nd:YAG'
                : 'Александрит + Диод + Nd:YAG'}
            </p>

            <p className="text-lg md:text-xl text-brand-coffee/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              {isGerman
                ? 'Modernste Technologie für alle Hauttypen. Schmerzfrei dank Kühlung bis -4°C. Dauerhafte Haarreduktion in München-Haidhausen.'
                : 'Новейшая технология для всех типов кожи. Безболезненно благодаря охлаждению до -4°C. Стойкое удаление волос в Мюнхене.'}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/prices#laser">
                <Button
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-2xl px-10 py-7 text-lg"
                >
                  {isGerman ? 'Preise ansehen' : 'Смотреть цены'}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-gold text-brand-espresso hover:bg-brand-gold/10 font-medium rounded-2xl px-10 py-7 text-lg"
                asChild
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {isGerman ? 'Beratung buchen' : 'Записаться на консультацию'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Triple-Wave Laser */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Warum Dreiwellenlaser?' : 'Почему трёхволновой лазер?'}
            </h2>
            <p className="text-brand-coffee/70 max-w-3xl mx-auto text-lg">
              {isGerman
                ? 'Ein Gerät – drei Wellenlängen – optimale Ergebnisse für jeden Hauttyp'
                : 'Один аппарат — три длины волны — оптимальные результаты для любого типа кожи'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 md:p-8 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-coffee/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Wavelengths Detailed */}
      <section className="py-16 md:py-20 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Drei Wellenlängen – Drei Stärken' : 'Три длины волны — три преимущества'}
            </h2>
            <p className="text-brand-coffee/70 max-w-3xl mx-auto text-lg">
              {isGerman
                ? 'Jede Wellenlänge hat ihre Stärke. Wir wählen die optimale für Ihren Hauttyp.'
                : 'Каждая длина волны имеет своё преимущество. Мы подберём оптимальную для вашего фототипа.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {wavelengths.map((wave, index) => {
              const Icon = wave.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass rounded-3xl p-8 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${wave.color} opacity-10 rounded-full blur-2xl -mr-10 -mt-10`} />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${wave.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-brand-espresso">
                          {wave.name}
                        </h3>
                        <p className="text-sm text-brand-gold font-medium">{wave.skinTypes}</p>
                      </div>
                    </div>

                    <p className="text-brand-coffee/80 leading-relaxed mb-6">
                      {wave.description}
                    </p>

                    <div className="space-y-2">
                      {wave.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                          <span className="text-sm text-brand-coffee/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Wie läuft die Behandlung ab?' : 'Как проходит процедура?'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-brand-gold">{item.step}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-coffee/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16 md:py-20 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Behandlungszonen' : 'Зоны обработки'}
            </h2>
            <p className="text-brand-coffee/70 max-w-2xl mx-auto">
              {isGerman
                ? 'Laser-Haarentfernung für Damen und Herren – alle Körperzonen'
                : 'Лазерная эпиляция для женщин и мужчин — все зоны тела'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentAreas.map((item, index) => (
                <div key={index} className="border-b border-brand-gold/10 pb-4 last:border-0">
                  <h4 className="font-heading font-semibold text-brand-espresso mb-1">
                    {item.zone}
                  </h4>
                  <p className="text-sm text-brand-coffee/70">{item.areas}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-brand-gold/20 text-center">
              <Link to="/prices#laser">
                <Button
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl"
                >
                  {isGerman ? 'Alle Preise ansehen' : 'Смотреть все цены'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-4 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Häufige Fragen' : 'Частые вопросы'}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-3">
                  {faq.q}
                </h3>
                <p className="text-brand-coffee/80 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Photo Gallery */}
      <section className="py-16 md:py-20 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
            />
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-brand-espresso mb-2 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Unsere Arbeiten' : 'Наши работы'}
            </h2>
            <p className="text-brand-coffee/60 text-sm tracking-widest uppercase">
              {isGerman ? 'Galerie' : 'Галерея'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${isGerman ? 'Laser-Haarentfernung' : 'Лазерная эпиляция'} ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl border-2 border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {isGerman ? 'Ansehen' : 'Смотреть'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={galleryImages[selectedImage]} alt="" fill className="object-contain" sizes="90vw" priority />
          </motion.div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold text-white mb-6 max-w-full" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              {isGerman ? 'Glatte Haut – dauerhaft' : 'Гладкая кожа — надолго'}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {isGerman
                ? 'Kostenlose Beratung mit Hauttyp-Analyse. Wir erstellen Ihren individuellen Behandlungsplan.'
                : 'Бесплатная консультация с анализом фототипа. Составим индивидуальный план процедур.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-brand-cream text-brand-espresso font-medium rounded-2xl text-lg px-10 py-7"
                asChild
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {isGerman ? 'Termin buchen' : 'Записаться'}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-medium rounded-2xl text-lg px-10 py-7"
                asChild
              >
                <a href="https://wa.me/4917677267269" target="_blank" rel="noopener noreferrer">
                  {isGerman ? 'Beratung anfragen' : 'Запросить консультацию'}
                </a>
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-medium rounded-2xl text-lg px-10 py-7"
                >
                  {isGerman ? 'Kontakt' : 'Контакты'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Laser;
