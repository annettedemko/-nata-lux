'use client'

import { Link } from '@/components/LinkAdapter'
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/HeroSection';
import { GlassServiceCard, GlassFeatureCard, GlassReviewCard } from '@/components/GlassCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchBar } from '@/components/SearchBar';
import { SectionDivider } from '@/components/SectionDivider';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import {
  Sparkles,
  Zap,
  Heart,
  Star,
  CheckCircle2,
  Award,
  Shield,
  Briefcase,
  Palette,
  Scissors,
  GraduationCap,
  ShoppingBag,
  Search,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
;
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GoogleMapsEmbed } from '@/components/GoogleMapsEmbed';

const Index = () => {
  const { t, language } = useLanguage();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const serviceCategories = [
    {
      title: t('categories.lashesbrows'),
      description: t('categories.lashesbrows.desc'),
      icon: Sparkles,
      href: '/services#lashes-brows',
      image: '/30.png',
    },
    {
      title: t('categories.pmu'),
      description: t('categories.pmu.desc'),
      icon: Palette,
      href: '/services#pmu',
      image: '/35.png',
    },
    {
      title: t('categories.laser'),
      description: t('categories.laser.desc'),
      icon: Zap,
      href: '/laser',
      image: '/36.png',
    },
    {
      title: t('categories.antiaging'),
      description: t('categories.antiaging.desc'),
      icon: Star,
      href: '/services#anti-aging',
      image: '/32.png',
    },
    {
      title: t('categories.massagen'),
      description: t('categories.massagen.desc'),
      icon: Heart,
      href: '/massagen',
      image: '/101.png',
    },
    {
      title: t('categories.training'),
      description: t('categories.training.desc'),
      icon: GraduationCap,
      href: '/training',
      image: '/33.png',
    },
    {
      title: t('categories.shop'),
      description: t('categories.shop.desc'),
      icon: ShoppingBag,
      href: '/shop',
      image: '/38.jpeg',
    },
  ];

  const topServices = [
    {
      title: language === 'de' ? 'Wimpernverlängerung mit Zwischenwimpern-Technik' : language === 'ru' ? 'Межресничка (наращивание ресниц)' : 'Міжвійка (нарощування вій)',
      description: language === 'de'
        ? 'Natürliche Verdichtung der Wimpern für einen ausdrucksstarken Blick'
        : language === 'ru'
        ? 'Естественное уплотнение ресниц для выразительного взгляда'
        : 'Природне ущільнення вій для виразного погляду',
      icon: Sparkles,
      href: '/services/wimpernverlaengerung',
      image: '/43.png',
    },
    {
      title: language === 'de' ? 'Diodenlaser-Haarentfernung' : language === 'ru' ? 'Диодный лазер (удаление волос)' : 'Діодний лазер (видалення волосся)',
      description: language === 'de'
        ? 'Dauerhafte Haarentfernung mit modernster Diodenlaser-Technologie'
        : language === 'ru'
        ? 'Перманентное удаление волос с помощью современной диодной лазерной технологии'
        : 'Перманентне видалення волосся за допомогою сучасної діодної лазерної технології',
      icon: Zap,
      href: '/laser',
      image: '/41.jpg',
    },
    {
      title: language === 'de' ? 'RF-Lifting für den Körper' : language === 'ru' ? 'РФ лифтинг для тела' : 'РФ ліфтинг для тіла',
      description: language === 'de'
        ? 'Straffung und Konturierung des Körpers mit Radiofrequenz-Technologie'
        : language === 'ru'
        ? 'Подтяжка и контурирование тела с помощью радиочастотной технологии'
        : 'Підтяжка та контурування тіла за допомогою радіочастотної технології',
      icon: Star,
      href: '/services/koerperbehandlungen/rf-vakuum',
      image: '/39.jpeg',
    },
    {
      title: language === 'de' ? 'Microneedling' : language === 'ru' ? 'Микронидлинг' : 'Мікронідлінг',
      description: language === 'de'
        ? 'Innovative Hautbehandlung für Kollagenbildung und Hautregeneration'
        : language === 'ru'
        ? 'Инновационная процедура для выработки коллагена и регенерации кожи'
        : 'Інноваційна процедура для вироблення колагену та регенерації шкіри',
      icon: Star,
      href: '/services/microneedling',
      image: '/44.png',
    },
  ];

  const aboutFeatures = [
    {
      icon: Award,
      title: t('about.experience'),
      description: t('about.experience.desc'),
    },
    {
      icon: Shield,
      title: t('about.sterility'),
      description: t('about.sterility.desc'),
    },
    {
      icon: Briefcase,
      title: t('about.equipment'),
      description: t('about.equipment.desc'),
    },
  ];

  const reviews = language === 'de' ? [
    {
      name: 'Maria Gorskina',
      rating: 5,
      text: 'Der Service ist top und die Behandlung selbst ist perfekt. Alles in allem ist nur zu empfehlen. 👍',
    },
    {
      name: 'Lili Tenzera',
      rating: 5,
      text: 'Die Nataliia leistet super Arbeit! Kann ich wirklich nur weiterempfehlen. Man fühlt sich sehr wohl und gut aufgehoben. Top Beratung. Nur ihr vertraue ich ab jetzt meine Wimpern an! 🤍',
    },
    {
      name: 'Robert Obertreis',
      rating: 5,
      text: 'Ich war heute zur Gesichtsbehandlung bei Nataliya. Nataliya hat mich sehr freundlich empfangen und ich habe mich gleich von Anfang an wohl bei ihr gefühlt. Das Ergebnis ist deutlich revitalisiert. Ich komme gerne wieder.',
    },
    {
      name: 'Alisa Khairam',
      rating: 5,
      text: 'Bin eigentlich aus Berlin und war in München zum Urlaub machen, musste aber irgendwo noch meine Lashes machen lassen und ich muss ehrlich gestehen, dass meine Erwartungen total übertroffen worden sind! Unfassbar natürliches und perfektes Ergebnis, bin sehr sehr happy!!',
    },
    {
      name: 'Olga Hahn',
      rating: 5,
      text: 'Ich habe eine Wimpernkranzverdichtung von Natalia machen lassen. Es war eine sehr schöne Erfahrung! Bin sehr gut beraten worden. Fühlte mich super komfortabel und aufgehoben. Das Ergebnis ist PERFEKT! Vielen lieben DANK!!',
    },
    {
      name: 'Olga Boykova',
      rating: 5,
      text: 'Die Korrektur und das Färben meiner Augenbrauen sind einfach perfekt geworden. Vielen lieben Dank Natalia für deine Professionalität und die großartige Arbeit. Absolut empfehlenswert! Ich komme sehr gerne wieder! 💖',
    },
    {
      name: 'S K',
      rating: 5,
      text: 'Nur noch bei Natalia 👍 Nach einer Behandlung in einem anderen Studio (meine Augenbrauen färbten sich rosa/Horror) kam ich zu Natalia. Hatte noch nie so schöne natürliche Augenbrauen – nach fast einem Jahr immer noch top, auch die Farbe Hammer. Vielen lieben Dank für deine tolle Arbeit, Natalia 🥰',
    },
    {
      name: 'Lesya Gnatko',
      rating: 5,
      text: 'Ich habe bei Natalia eine Schulung zur Wimpernverlängerung gemacht. Ich habe viele Informationen erhalten, alles war sehr verständlich, interessant und herzlich. Eine geduldige und weise Frau. Danke, dass es dich gibt! ❤️',
    },
  ] : language === 'ru' ? [
    {
      name: 'Мария Горскина',
      rating: 5,
      text: 'Сервис на высшем уровне, а сама процедура — просто идеальна. В целом могу только рекомендовать! 👍',
    },
    {
      name: 'Лили Тензера',
      rating: 5,
      text: 'Наталия делает потрясающую работу! Могу только искренне рекомендовать. У неё чувствуешь себя спокойно и в надёжных руках. Отличная консультация. Теперь доверяю ресницы только ей! 🤍',
    },
    {
      name: 'Роберт Обертрейс',
      rating: 5,
      text: 'Сегодня был у Наталии на уходе за лицом. Она встретила очень дружелюбно, сразу чувствовалась комфортная атмосфера. Наталия учла все мои пожелания, и кожа после процедуры чувствовалась заметно обновлённой. С удовольствием приду снова.',
    },
    {
      name: 'Алиса Хайрам',
      rating: 5,
      text: 'Я из Берлина, была в Мюнхене в отпуске и решила сделать ресницы. Честно говоря, мои ожидания были полностью превзойдены! Результат невероятно естественный и идеальный, я очень-очень довольна!!',
    },
    {
      name: 'Ольга Хан',
      rating: 5,
      text: 'Делала у Наталии межресничку. Очень приятный опыт! Отличная консультация, чувствовала себя максимально комфортно и спокойно. Во время процедуры — никаких болевых ощущений, после — лишь лёгкая припухлость. Результат ПЕРФЕКТНЫЙ! Огромное спасибо!!',
    },
    {
      name: 'Ольга Бойкова',
      rating: 5,
      text: 'Коррекция и окрашивание бровей получились просто идеально! Большое спасибо, Наталия, за профессионализм и отличную работу. Абсолютно рекомендую! С радостью вернусь снова 💖',
    },
    {
      name: 'S K',
      rating: 5,
      text: 'Теперь только к Наталии 👍 После неудачной процедуры в другой студии (брови стали розовыми — ужас!) пришла к ней. Никогда не имела таких красивых естественных бровей! Даже спустя почти год цвет и форма остаются отличными. Большое спасибо за прекрасную работу, Наталия 🥰',
    },
    {
      name: 'Леся Гнатко',
      rating: 5,
      text: 'Прошла у Натальи обучение по наращиванию ресниц. Получила много информации, всё было понятно, интересно и душевно. Очень терпеливая и мудрая девушка. Очень рада, что выбрала именно Наталью и её студию. Даже после курса она всегда на связи, советует материалы и помогает выбрать лучшее. Спасибо, что ты есть ❤️',
    },
  ] : [
    {
      name: 'Марія Горскіна',
      rating: 5,
      text: 'Сервіс на найвищому рівні, а сама процедура — просто ідеальна. В цілому можу тільки рекомендувати! 👍',
    },
    {
      name: 'Лілі Тензера',
      rating: 5,
      text: 'Наталія робить приголомшливу роботу! Можу тільки щиро рекомендувати. У неї почуваєшся спокійно і в надійних руках. Чудова консультація. Тепер довіряю вії тільки їй! 🤍',
    },
    {
      name: 'Роберт Обертрейс',
      rating: 5,
      text: 'Сьогодні був у Наталії на догляді за обличчям. Вона зустріла дуже доброзичливо, одразу відчувалася комфортна атмосфера. Наталія врахувала всі мої побажання, і шкіра після процедури відчувалася помітно оновленою. З задоволенням прийду знову.',
    },
    {
      name: 'Аліса Хайрам',
      rating: 5,
      text: 'Я з Берліна, була в Мюнхені у відпустці і вирішила зробити вії. Чесно кажучи, мої очікування були повністю перевершені! Результат неймовірно природній та ідеальний, я дуже-дуже задоволена!!',
    },
    {
      name: 'Ольга Хан',
      rating: 5,
      text: 'Робила у Наталії міжвійку. Дуже приємний досвід! Чудова консультація, почувалася максимально комфортно і спокійно. Під час процедури — ніяких больових відчуттів, після — лише легка припухлість. Результат ПЕРФЕКТНИЙ! Величезне спасибі!!',
    },
    {
      name: 'Ольга Бойкова',
      rating: 5,
      text: 'Корекція та фарбування брів вийшли просто ідеально! Велике спасибі, Наталіє, за професіоналізм і чудову роботу. Абсолютно рекомендую! З радістю повернуся знову 💖',
    },
    {
      name: 'S K',
      rating: 5,
      text: 'Тепер тільки до Наталії 👍 Після невдалої процедури в іншій студії (брови стали рожевими — жах!) прийшла до неї. Ніколи не мала таких гарних природних брів! Навіть спустя майже рік колір і форма залишаються чудовими. Велике спасибі за прекрасну роботу, Наталіє 🥰',
    },
    {
      name: 'Леся Гнатко',
      rating: 5,
      text: 'Пройшла у Наталі навчання з нарощування вій. Отримала багато інформації, все було зрозуміло, цікаво і душевно. Дуже терпляча і мудра дівчина. Дуже рада, що обрала саме Наталю та її студію. Навіть після курсу вона завжди на зв\'язку, радить матеріали і допомагає вибрати найкраще. Спасибі, що ти є ❤️',
    },
  ];


  return (
    <div className="relative">
      {/* Глобальный видео фон для всей страницы */}
      <BackgroundVideo />

      {/* Hero Section with Parallax */}
      <HeroSection />

      <SectionDivider />

      {/* Search Section */}
      <section className="py-4 pb-8 md:py-9 md:pb-32 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <div className="glass-strong rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 text-center hover-glow">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/20 mb-4 md:mb-6 backdrop-blur-sm"
              >
                <Search className="w-8 h-8 md:w-10 md:h-10 text-brand-gold drop-shadow-sm" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-2">
                {language === 'de' ? 'Finden Sie Ihre perfekte Behandlung' : language === 'ru' ? 'Найдите вашу идеальную процедуру' : 'Знайдіть вашу ідеальну процедуру'}
              </h2>
              <p className="text-brand-coffee/80 mb-6 md:mb-8 leading-relaxed text-base md:text-lg px-2">
                {language === 'de'
                  ? 'Durchsuchen Sie unser gesamtes Angebot an Beauty-Dienstleistungen'
                  : 'Поиск по всему нашему ассортименту бьюти-услуг'}
              </p>
              <div className="max-w-xl mx-auto mb-6 md:mb-8">
                <SearchBar />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Service Categories */}
      <section className="py-6 md:py-11 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 md:mb-9"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
              </div>
            </motion.div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {t('categories.title')}
            </h2>
            <p className="text-base md:text-lg text-brand-coffee/70 max-w-2xl mx-auto leading-relaxed px-4">
              {language === 'de'
                ? 'Entdecken Sie unser komplettes Serviceangebot — von Lash&Brow und Permanent Make-up bis Anti-Aging, Massagen und Laser'
                : language === 'ru'
                ? 'Откройте для себя наш полный спектр услуг — от Lash&Brow и перманента до anti-aging, массажей и лазера'
                : 'Відкрийте для себе наш повний спектр послуг — від Lash&Brow і перманенту до anti-aging, масажів та лазера'}
            </p>
          </motion.div>

          {/* AGB Hinweis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <div className="glass-strong rounded-xl p-4 md:p-5 border border-brand-gold/20">
              <p className="text-sm md:text-base text-brand-coffee/80 text-center">
                <span className="inline-flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>
                    {language === 'de' ? 'Hinweis: ' : language === 'ru' ? 'Уведомление: ' : 'Повідомлення: '}
                    {language === 'de'
                      ? 'Mit jeder Terminbuchung gelten unsere '
                      : language === 'ru'
                      ? 'При каждом бронировании действуют наши '
                      : 'При кожному бронюванні діють наші '}
                    <Link
                      href="/agb"
                      className="font-medium text-brand-gold hover:text-brand-gold-light underline decoration-brand-gold/50 hover:decoration-brand-gold-light transition-colors"
                    >
                      {language === 'de' ? 'AGB' : language === 'ru' ? 'Общие условия' : 'Загальні умови'}
                    </Link>
                    .
                  </span>
                </span>
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Massagen Promo Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12 max-w-4xl mx-auto"
          >
            <Link href="/massagen" className="block group">
              <div className="relative overflow-hidden rounded-2xl bg-gold-gradient p-6 md:p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01]">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2">
                      {language === 'de' ? 'Apparative Massagen — NEU!' : language === 'ru' ? 'Аппаратные массажи — НОВИНКА!' : 'Апаратні масажі — НОВИНКА!'}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-3">
                      {language === 'de'
                        ? 'Lymphdrainage · Anti-Cellulite · Bodyforming · Hautstraffung · Figurformung'
                        : language === 'ru'
                        ? 'Лимфодренаж · Антицеллюлитный · Похудение · Омоложение кожи · Убирает объёмы'
                        : 'Лімфодренаж · Антицелюлітний · Схуднення · Омолодження шкіри · Прибирає об\'єми'}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                      <span className="text-white font-heading font-bold text-2xl md:text-3xl">
                        75 €
                        <span className="text-white/70 text-sm font-normal ml-1">
                          {language === 'de' ? '/ Behandlung' : language === 'ru' ? '/ процедура' : '/ процедура'}
                        </span>
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/30">
                        {language === 'de'
                          ? '10 Sitzungen = 650 € (100 € Rabatt!)'
                          : language === 'ru'
                          ? '10 сеансов = 650 € (скидка 100 €!)'
                          : '10 сеансів = 650 € (знижка 100 €!)'}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
                <p className="relative z-10 text-center text-white/80 text-xs md:text-sm mt-3 font-medium">
                  {language === 'de'
                    ? '⚡ Anzahl der Angebote begrenzt! Beeilen Sie sich!'
                    : language === 'ru'
                    ? '⚡ Количество предложений ограничено! Поторопитесь!'
                    : '⚡ Кількість пропозицій обмежена! Поспішайте!'}
                </p>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      <SectionDivider />

      {/* Top Services */}
      <section className="py-8 md:py-11 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 md:mb-9"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/20 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
              </div>
            </motion.div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {t('services.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {topServices.map((service, index) => (
              <GlassServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-7"
          >
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-3xl px-10 py-6 font-semibold text-base transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderWidth: '2px',
                    borderColor: '#9C7438',
                    color: '#2B1F18',
                    boxShadow: '0 8px 24px rgba(197,151,80,0.15), 0 2px 8px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(197,151,80,0.1)';
                    e.currentTarget.style.borderColor = '#C59750';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(197,151,80,0.25), 0 4px 12px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                    e.currentTarget.style.borderColor = '#9C7438';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(197,151,80,0.15), 0 2px 8px rgba(0,0,0,0.05)';
                  }}
                >
                  {language === 'de' ? 'Alle Dienstleistungen ansehen' : language === 'ru' ? 'Смотреть все услуги' : 'Дивитися всі послуги'}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-11 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 md:mb-9"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/20 flex items-center justify-center backdrop-blur-sm">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
              </div>
            </motion.div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {t('about.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {aboutFeatures.map((feature, index) => (
              <GlassFeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Reviews */}
      <section className="py-8 md:py-11 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 md:mb-9"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/20 flex items-center justify-center backdrop-blur-sm">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
              </div>
            </motion.div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {t('reviews.title')}
            </h2>

            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <div className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-strong">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-brand-espresso">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-brand-coffee/60 font-medium">{language === 'de' ? 'Google Bewertungen' : language === 'ru' ? 'Отзывы Google' : 'Відгуки Google'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Modern Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mb-4 md:mb-6 px-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentReviewIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1))}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-strong flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-all"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>

              <div className="flex items-center gap-1.5 md:gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index * 3)}
                    className={`h-1.5 md:h-2 rounded-full transition-all ${
                      Math.floor(currentReviewIndex / 3) === index
                        ? 'w-6 md:w-8 bg-brand-gold'
                        : 'w-1.5 md:w-2 bg-brand-gold/30 hover:bg-brand-gold/50'
                    }`}
                    aria-label={`Go to review set ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentReviewIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1))}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-strong flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-all"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
                >
                  {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
                    <GlassReviewCard
                      key={`${review.name}-${currentReviewIndex}-${index}`}
                      {...review}
                      delay={index * 0.1}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Google Reviews Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="text-center mt-8"
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Elsässer+Straße+33+81667+München"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 glass-strong hover:scale-105"
              >
                <span className="text-brand-espresso">{language === 'de' ? 'Mehr auf Google Maps' : language === 'ru' ? 'Больше на Google Maps' : 'Більше на Google Maps'}</span>
                <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Google Maps Section */}
      <section className="py-8 md:py-11 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-5 md:mb-7"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-brand-espresso mb-3 md:mb-4 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {language === 'de' ? 'Besuchen Sie uns' : language === 'ru' ? 'Посетите нас' : 'Відвідайте нас'}
            </h2>
            <p className="text-base md:text-lg text-brand-coffee/70 max-w-2xl mx-auto px-4">
              {language === 'de'
                ? 'Wir freuen uns auf Ihren Besuch in unserem Studio'
                : 'Мы будем рады видеть вас в нашей студии'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              style={{
                boxShadow: '0 20px 60px rgba(197,151,80,0.2), 0 8px 24px rgba(0,0,0,0.1)',
                border: '2px solid rgba(197,151,80,0.2)',
              }}
            >
              {/* Clickable overlay with address */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Elsässer+Straße+33+81667+München"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent flex items-end justify-center pb-8 opacity-100 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/95 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-2xl border border-brand-gold/20" style={{
                    boxShadow: '0 10px 40px rgba(197,151,80,0.3), 0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                  }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-brand-espresso font-bold text-xl mb-1">
                          NataLux Studio
                        </p>
                        <p className="text-brand-coffee/90 text-base font-medium mb-0.5">
                          Elsässer Straße 33
                        </p>
                        <p className="text-brand-coffee/70 text-sm mb-3">
                          81667 München-Haidhausen
                        </p>
                        <p className="text-brand-gold text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                          <span>{language === 'de' ? 'Route in Google Maps öffnen' : language === 'ru' ? 'Открыть маршрут в Google Maps' : 'Відкрити маршрут в Google Maps'}</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Google Maps Embed - DSGVO two-click consent */}
              <GoogleMapsEmbed
                src="https://www.google.com/maps?q=Elsässer+Straße+33,+81667+München&output=embed&z=17"
                className="rounded-xl"
                height="400"
              />
            </div>

            {/* Transport & Parking Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="mt-4 md:mt-6"
            >
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-brand-espresso text-lg">
                        {language === 'de' ? 'Anfahrt & Parken' : language === 'ru' ? 'Как добраться и парковка' : 'Як дістатися та парковка'}
                      </h3>
                    </div>
                    <p className="text-sm text-brand-coffee/70 mb-3">
                      {language === 'de' ? 'Zu Fuß: 5–7 Min. vom Ostbahnhof/Orleansplatz' : language === 'ru' ? 'Пешком: 5–7 мин. от Остбанхоф/Орлеансплатц' : 'Пішки: 5–7 хв. від Остбанхоф/Орлеансплатц'}
                    </p>
                    <ul className="text-sm text-brand-coffee/70 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span>
                        <a
                          href="https://maps.app.goo.gl/aamBNHd7cQLSozwt7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-gold transition-colors underline"
                        >
                          {language === 'de' ? 'Parkhaus am Ostbahnhof' : language === 'ru' ? 'Паркинг у Остбанхоф' : 'Паркінг біля Остбанхоф'}
                        </a>
                        <span className="text-brand-coffee/50">(6 Min.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span>
                        <a
                          href="https://maps.app.goo.gl/RkUPoRsZS3BNMPQy7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-gold transition-colors underline"
                        >
                          Motel One Parkplatz
                        </a>
                        <span className="text-brand-coffee/50">(5 Min.)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-brand-espresso text-lg">{language === 'de' ? 'ÖPNV' : language === 'ru' ? 'Общ. транспорт' : 'Громад. транспорт'}</h3>
                    </div>
                    <ul className="text-sm text-brand-coffee/70 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span>
                        <span>S-Bahn München Ost (5–7 Min.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span>
                        <span>U5 Ostbahnhof (5–7 Min.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5">•</span>
                        <span>Tram/Bus Orleansplatz</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
