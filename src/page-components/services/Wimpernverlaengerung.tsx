'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Eye, Sparkles, Heart, Palette, Layers } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/components/LinkAdapter';
import { ServiceCard } from '@/components/ServiceCard';
import { PremiumGallery } from '@/components/PremiumGallery';

const Wimpernverlaengerung = () => {
  const { language } = useLanguage();

  const galleryImages = ['/wimpernverlaengerung-ergebnis-muenchen.png', '/wimpernverlaengerung-vorher-nachher.jpg', '/wimpernverlaengerung-volume-muenchen.jpg', '/wimpernverlaengerung-classic-muenchen.jpg', '/wimpernverlaengerung-mega-volume.jpg', '/wimpernverlaengerung-natural-look.jpg', '/wimpernverlaengerung-3d-volume.jpg', '/wimpernverlaengerung-ergebnis-nah.jpg', '/wimpernverlaengerung-arbeit.jpeg', '/wimpernverlaengerung-resultat.jpeg', '/wimpernverlaengerung-detail.jpeg', '/wimpernverlaengerung-vorher.jpeg', '/wimpernverlaengerung-nachher.jpeg'];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/nata-lux-beauty-studio-muenchen.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 pt-16"
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight text-brand-espresso mb-8">
              {language === 'de' ? 'WIMPERN­VERLÄNGERUNG' : language === 'ru' ? 'НАРАЩИВАНИЕ РЕСНИЦ' : 'НАРОЩУВАННЯ ВІЙ'}
            </h1>
            <p className="text-2xl font-heading font-light text-brand-espresso/80 mb-4">
              {language === 'de' ? 'in München' : language === 'ru' ? 'в Мюнхене' : 'у Мюнхені'}
            </p>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl text-brand-espresso/70 leading-relaxed max-w-3xl mx-auto">
              {language === 'de'
                ? 'Schöner, ausdrucksstarker Blick ohne Schaden für Ihre natürlichen Wimpern'
                : language === 'ru' ? 'Красивый, выразительный взгляд без вреда натуральным ресницам'
                : 'Гарний, виразний погляд без шкоди натуральним віям'}
            </p>
          </motion.div>

          {/* Section 1: Что такое наращивание */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de'
                  ? 'Was ist Wimpernverlängerung und für wen ist sie geeignet?'
                  : language === 'ru' ? 'Что такое наращивание ресниц и кому подходит'
                  : 'Що таке нарощування вій та кому підходить'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {language === 'de' ? (
                  <>
                    <p>
                      <strong>Wimpernverlängerung</strong> ist eine professionelle Technik, bei der einzelne Kunstwimpern präzise auf Ihre natürlichen Wimpern aufgetragen werden. Das Ergebnis betont Ihre natürliche Schönheit, verleiht Ihrem Blick mehr Tiefe und Ausdruck – ganz ohne künstlichen Look.
                    </p>
                    <p>
                      Diese <strong>sichere und schonende Methode</strong> eignet sich für jede Frau, die von volleren, längeren Wimpern träumt. Jede Behandlung wird individuell angepasst – an Ihre Augenform, Ihren Wimperntyp und Ihren persönlichen Stil.
                    </p>
                    <p>
                      Ob natürlicher Look für den Alltag oder dramatischer Effekt für besondere Anlässe – mit der richtigen Technik und hochwertigen Materialien erreichen wir genau das Ergebnis, das zu Ihnen passt.
                    </p>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <p>
                      <strong>Наращивание ресниц</strong> — это профессиональная техника, при которой искусственные ресницы точно наклеиваются на ваши натуральные. Результат подчеркивает вашу естественную красоту, придает взгляду глубину и выразительность — без искусственного вида.
                    </p>
                    <p>
                      Этот <strong>безопасный и бережный метод</strong> подходит каждой женщине, мечтающей о более густых и длинных ресницах. Каждая процедура подбирается индивидуально — с учетом формы глаз, типа ресниц и вашего личного стиля.
                    </p>
                    <p>
                      Натуральный образ для повседневной жизни или драматичный эффект для особых случаев — с правильной техникой и качественными материалами мы достигнем именно того результата, который вам подходит.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Нарощування вій</strong> — це професійна техніка, при якій штучні вії точно наклеюються на ваші натуральні. Результат підкреслює вашу природну красу, надає погляду глибину та виразність — без штучного вигляду.
                    </p>
                    <p>
                      Цей <strong>безпечний та дбайливий метод</strong> підходить кожній жінці, яка мріє про густіші та довші вії. Кожна процедура підбирається індивідуально — з урахуванням форми очей, типу вій та вашого особистого стилю.
                    </p>
                    <p>
                      Природний образ для повсякденного життя або драматичний ефект для особливих подій — з правильною технікою та якісними матеріалами ми досягнемо саме того результату, який вам підходить.
                    </p>
                  </>
                )}
              </div>
{/* SEO keywords hidden */}
            </div>
          </motion.section>

          {/* Section 2: Что важно знать */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-8">
                {language === 'de' ? 'Was ist wichtig zu wissen' : language === 'ru' ? 'Что важно знать' : 'Що важливо знати'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Eye,
                    titleDE: 'Individuelle Auswahl',
                    titleRU: 'Индивидуальный подбор',
                    titleUA: 'Індивідуальний підбір',
                    textDE: 'Jede Behandlung wird speziell auf Ihre Augenform, Ihren Stil und Ihre Wünsche abgestimmt.',
                    textRU: 'Каждая процедура подбирается специально под форму ваших глаз, стиль и пожелания.',
                    textUA: 'Кожна процедура підбирається спеціально під форму ваших очей, стиль та побажання.'
                  },
                  {
                    icon: Sparkles,
                    titleDE: 'Analyse natürlicher Wimpern',
                    titleRU: 'Анализ натуральных ресниц',
                    titleUA: 'Аналіз натуральних вій',
                    textDE: 'Vor der Behandlung analysiere ich Stärke, Länge und Zustand Ihrer natürlichen Wimpern.',
                    textRU: 'Перед процедурой я анализирую прочность, длину и состояние ваших натуральных ресниц.',
                    textUA: 'Перед процедурою я аналізую міцність, довжину та стан ваших натуральних вій.'
                  },
                  {
                    icon: Heart,
                    titleDE: 'Schonende Technik',
                    titleRU: 'Бережная техника',
                    titleUA: 'Дбайлива техніка',
                    textDE: 'Ich arbeite mit professionellen Methoden, die Ihre natürlichen Wimpern schützen und pflegen.',
                    textRU: 'Я работаю профессиональными методами, которые защищают и ухаживают за вашими натуральными ресницами.',
                    textUA: 'Я працюю професійними методами, які захищають та доглядають за вашими натуральними віями.'
                  },
                  {
                    icon: CheckCircle2,
                    titleDE: 'Gesundheit der Wimpern',
                    titleRU: 'Здоровье ресниц',
                    titleUA: 'Здоров\'я вій',
                    textDE: 'Oberste Priorität hat die Gesundheit Ihrer natürlichen Wimpern – ohne Schädigung oder Überlastung.',
                    textRU: 'Главный приоритет — здоровье ваших натуральных ресниц, без повреждений или перегрузки.',
                    textUA: 'Головний пріоритет — здоров\'я ваших натуральних вій, без пошкоджень або перевантаження.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {language === 'de' ? item.titleDE : language === 'ru' ? item.titleRU : item.titleUA}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {language === 'de' ? item.textDE : language === 'ru' ? item.textRU : item.textUA}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 3: Длительность */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-8">
                {language === 'de' ? 'Dauer & Haltbarkeit' : language === 'ru' ? 'Длительность процедуры и носки' : 'Тривалість процедури та носіння'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titleDE: 'Standard-Behandlung',
                    titleRU: 'Стандартная процедура',
                    titleUA: 'Стандартна процедура',
                    valueDE: '2 Stunden',
                    valueRU: '2 часа',
                    valueUA: '2 години'
                  },
                  {
                    titleDE: 'Express-Verlängerung',
                    titleRU: 'Экспресс-наращивание',
                    titleUA: 'Експрес-нарощування',
                    valueDE: '1 Stunde',
                    valueRU: '1 час',
                    valueUA: '1 година'
                  },
                  {
                    titleDE: 'Haltbarkeit',
                    titleRU: 'Срок носки',
                    titleUA: 'Термін носіння',
                    valueDE: '4–8 Wochen',
                    valueRU: '4–8 недель',
                    valueUA: '4–8 тижнів'
                  },
                  {
                    titleDE: 'Auffüllung',
                    titleRU: 'Коррекция',
                    titleUA: 'Корекція',
                    valueDE: 'alle 3–4 Wochen',
                    valueRU: 'каждые 3–4 недели',
                    valueUA: 'кожні 3–4 тижні'
                  },
                  {
                    titleDE: 'Entfernung (eigene Arbeit)',
                    titleRU: 'Снятие своей работы',
                    titleUA: 'Зняття своєї роботи',
                    valueDE: 'kostenlos',
                    valueRU: 'бесплатно',
                    valueUA: 'безкоштовно'
                  },
                  {
                    titleDE: 'Entfernung (fremde Arbeit)',
                    titleRU: 'Снятие чужой работы',
                    titleUA: 'Зняття чужої роботи',
                    valueDE: '15€',
                    valueRU: '15€',
                    valueUA: '15€'
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-brand-gold/5 rounded-2xl">
                    <Clock className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-heading font-semibold text-brand-espresso mb-2">
                      {language === 'de' ? item.titleDE : language === 'ru' ? item.titleRU : item.titleUA}
                    </h3>
                    <p className="text-2xl font-heading font-bold text-brand-gold">
                      {language === 'de' ? item.valueDE : language === 'ru' ? item.valueRU : item.valueUA}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: Техники */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-8">
                {language === 'de' ? 'Techniken & Stile' : language === 'ru' ? 'Техники, с которыми работает мастер' : 'Техніки, з якими працює майстер'}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    nameDE: 'Klassische 1:1 Verlängerung',
                    nameRU: 'Классика 1:1',
                    nameUA: 'Класика 1:1',
                    descDE: 'Eine Kunstwimper pro natürlicher Wimper. Natürlicher, eleganter Look für den Alltag. Betont die natürliche Schönheit ohne Übertreibung. Perfekt für Erstkundinnen und dezente Ergebnisse.',
                    descRU: 'Одна искусственная ресница на одну натуральную. Натуральный, элегантный образ для повседневной жизни. Подчеркивает естественную красоту без преувеличений. Идеально для новичков и сдержанных результатов.',
                    descUA: 'Одна штучна вія на одну натуральну. Природний, елегантний образ для повсякденного життя. Підкреслює природну красу без перебільшень. Ідеально для новачків та стриманих результатів.'
                  },
                  {
                    nameDE: '2D & 3D Volumen',
                    nameRU: '2D и 3D объем',
                    nameUA: '2D та 3D об\'єм',
                    descDE: '2–3 feine Wimpern pro natürlicher Wimper. Mehr Volumen und Dichte bei natürlichem Aussehen. Ideal für besondere Anlässe oder wenn Sie mehr Dramatik wünschen. Leicht und schonend trotz Volumen.',
                    descRU: '2–3 тонкие ресницы на одну натуральную. Больше объема и густоты при естественном виде. Идеально для особых случаев или когда хотите больше драматичности. Легкие и бережные, несмотря на объем.',
                    descUA: '2–3 тонкі вії на одну натуральну. Більше об\'єму та густоти при природному вигляді. Ідеально для особливих подій або коли хочете більше драматичності. Легкі та дбайливі, незважаючи на об\'єм.'
                  },
                  {
                    nameDE: 'Leichtes / Weiches Volumen',
                    nameRU: 'Лёгкий / мягкий объём',
                    nameUA: 'Легкий / м\'який об\'єм',
                    descDE: 'Feinste Wimpern in mehreren Ebenen. Maximales Volumen ohne schweren Look. Flauschig, weich und besonders natürlich wirkend.',
                    descRU: 'Тончайшие ресницы в несколько слоев. Максимальный объем без тяжелого вида. Пушистые, мягкие и особенно натурально выглядящие.',
                    descUA: 'Найтонші вії у кілька шарів. Максимальний об\'єм без важкого вигляду. Пухнасті, м\'які та особливо природно виглядаючі.'
                  },
                  {
                    nameDE: 'Kombinierte Technik',
                    nameRU: 'Комбинированная техника',
                    nameUA: 'Комбінована техніка',
                    descDE: 'Mix aus Klassik und Volumen an verschiedenen Stellen. Individuelle Anpassung für perfekte Balance. Korrigiert optisch Asymmetrien und betont Ihre besten Züge.',
                    descRU: 'Микс классики и объема в разных местах. Индивидуальная адаптация для идеального баланса. Оптически корректирует асимметрию и подчеркивает ваши лучшие черты.',
                    descUA: 'Мікс класики та об\'єму в різних місцях. Індивідуальна адаптація для ідеального балансу. Оптично коригує асиметрію та підкреслює ваші найкращі риси.'
                  },
                  {
                    nameDE: 'Verstreuter Effekt (Kim Kardashian Look)',
                    nameRU: 'Разреженный эффект',
                    nameUA: 'Розріджений ефект',
                    descDE: 'Längere Wimpern im Wechsel mit kürzeren. Natürlicher „frisch aufgewacht" Look. Modern, trendy und pflegeleicht.',
                    descRU: 'Более длинные ресницы чередуются с короткими. Натуральный образ \"только проснулась\". Современный, модный и неприхотливый в уходе.',
                    descUA: 'Довші вії чергуються з короткими. Природний образ "щойно прокинулася". Сучасний, модний та невибагливий у догляді.'
                  },
                  {
                    nameDE: 'Cat-Eye Effekt (Streichholz-Look)',
                    nameRU: 'Эффект стрелочки (Cat-Eye)',
                    nameUA: 'Ефект стрілочки (Cat-Eye)',
                    descDE: 'Längere Wimpern am äußeren Augenwinkel. Verführerischer, katzenartiger Blick. Optisch hebt und öffnet die Augen.',
                    descRU: 'Более длинные ресницы у внешнего уголка глаза. Соблазнительный, кошачий взгляд. Оптически приподнимает и открывает глаза.',
                    descUA: 'Довші вії біля зовнішнього куточка ока. Спокусливий, котячий погляд. Оптично піднімає та відкриває очі.'
                  },
                  {
                    nameDE: 'Strahlen-Effekt',
                    nameRU: 'Эффект лучиков',
                    nameUA: 'Ефект промінчиків',
                    descDE: 'Einzelne längere Akzente zwischen normalen Wimpern. Verleiht Strahlkraft und Frische. Subtiler Glamour für jeden Tag.',
                    descRU: 'Отдельные более длинные акценты между обычными ресницами. Придает сияние и свежесть. Сдержанный гламур на каждый день.',
                    descUA: 'Окремі довші акценти між звичайними віями. Надає сяяння та свіжість. Стриманий гламур на кожен день.'
                  },
                  {
                    nameDE: 'Untere Wimpernverlängerung',
                    nameRU: 'Нижнее наращивание',
                    nameUA: 'Нижнє нарощування',
                    descDE: 'Auf Wunsch auch Verlängerung der unteren Wimpern möglich. Komplettiert den Look und öffnet den Blick rundherum. Besonders bei Fotoshootings oder Events beliebt.',
                    descRU: 'По желанию возможно наращивание нижних ресниц. Завершает образ и открывает взгляд со всех сторон. Особенно популярно на фотосессиях или мероприятиях.',
                    descUA: 'За бажанням можливе нарощування нижніх вій. Завершує образ та відкриває погляд з усіх боків. Особливо популярне на фотосесіях або заходах.'
                  },
                ].map((tech, index) => (
                  <div key={index} className="p-6 bg-brand-gold/5 rounded-2xl">
                    <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-3">
                      {language === 'de' ? tech.nameDE : language === 'ru' ? tech.nameRU : tech.nameUA}
                    </h3>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {language === 'de' ? tech.descDE : language === 'ru' ? tech.descRU : tech.descUA}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 5: Коррекция формы глаз */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-4">
                {language === 'de' ? 'Korrektur der Augenform mit Wimpernverlängerung' : language === 'ru' ? 'Коррекция формы глаз с помощью наращивания' : 'Корекція форми очей за допомогою нарощування'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 leading-relaxed">
                {language === 'de'
                  ? 'Jede Augenform ist einzigartig. Mit der richtigen Technik lassen sich optische Effekte erzielen, die Ihre natürliche Schönheit unterstreichen und kleine Asymmetrien harmonisch ausgleichen.'
                  : language === 'ru' ? 'Каждая форма глаз уникальна. С помощью правильной техники можно добиться оптических эффектов, которые подчеркнут вашу естественную красоту и гармонично скорректируют небольшие асимметрии.'
                  : 'Кожна форма очей унікальна. За допомогою правильної техніки можна досягти оптичних ефектів, які підкреслять вашу природну красу та гармонійно скоригують невеликі асиметрії.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    titleDE: 'Schlupflider',
                    titleRU: 'Нависшее веко',
                    titleUA: 'Нависла повіка',
                    descDE: 'Bei Schlupflidern setze ich kürzere Wimpern in der Mitte und längere an den Außenwinkeln – das öffnet den Blick optisch und hebt das Lid sanft an.',
                    descRU: 'При нависшем веке я использую более короткие ресницы в центре и более длинные у внешних уголков — это визуально открывает взгляд и мягко приподнимает веко.',
                    descUA: 'При навислій повіці я використовую коротші вії в центрі та довші біля зовнішніх куточків — це візуально відкриває погляд та м\'яко піднімає повіку.'
                  },
                  {
                    titleDE: 'Runde Augen',
                    titleRU: 'Круглые глаза',
                    titleUA: 'Круглі очі',
                    descDE: 'Um runde Augen optisch zu strecken, arbeite ich mit längeren Wimpern am äußeren Rand – das verleiht eine elegante Mandelform.',
                    descRU: 'Чтобы визуально вытянуть круглые глаза, я работаю с более длинными ресницами у внешнего края — это придает элегантную миндалевидную форму.',
                    descUA: 'Щоб візуально витягнути круглі очі, я працюю з довшими віями біля зовнішнього краю — це надає елегантну мигдалеподібну форму.'
                  },
                  {
                    titleDE: 'Schmale Augen',
                    titleRU: 'Узкие глаза',
                    titleUA: 'Вузькі очі',
                    descDE: 'Bei schmalen Augen konzentriere ich mehr Volumen in der Mitte – das öffnet die Augen und lässt sie größer wirken.',
                    descRU: 'При узких глазах я концентрирую больше объема в центре — это открывает глаза и делает их визуально больше.',
                    descUA: 'При вузьких очах я концентрую більше об\'єму в центрі — це відкриває очі та робить їх візуально більшими.'
                  },
                  {
                    titleDE: 'Hängende Augenwinkel',
                    titleRU: 'Опущенные уголки',
                    titleUA: 'Опущені куточки',
                    descDE: 'Längere Wimpern im äußeren oberen Bereich heben die Winkel optisch an und verleihen einen frischen, wachen Ausdruck.',
                    descRU: 'Более длинные ресницы в верхней внешней части визуально приподнимают уголки и придают свежий, бодрый вид.',
                    descUA: 'Довші вії у верхній зовнішній частині візуально піднімають куточки та надають свіжий, бадьорий вигляд.'
                  },
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-brand-gold/5 rounded-2xl">
                    <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-3">
                      {language === 'de' ? item.titleDE : language === 'ru' ? item.titleRU : item.titleUA}
                    </h3>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {language === 'de' ? item.descDE : language === 'ru' ? item.descRU : item.descUA}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 6: Мой подход — 10+ лет опыта */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-brand-gold/20">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Mein Ansatz – über 10 Jahre Erfahrung' : language === 'ru' ? 'Мой подход — более 10 лет опыта' : 'Мій підхід — понад 10 років досвіду'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {language === 'de' ? (
                  <>
                    <p>
                      Seit über <strong>10 Jahren</strong> arbeite ich mit Wimpernverlängerung – und in dieser Zeit habe ich gelernt: <strong>Jede Kundin ist einzigartig.</strong>
                    </p>
                    <p>
                      Mein Ansatz basiert nicht auf Massenproduktion, sondern auf <strong>individueller Beratung, präziser Analyse und schonender Technik</strong>. Ich nehme mir Zeit, Ihre Wünsche zu verstehen, Ihre natürlichen Wimpern zu beurteilen und gemeinsam mit Ihnen das beste Ergebnis zu planen.
                    </p>
                    <p>
                      Ich verwende ausschließlich <strong>hochwertige, hypoallergene Materialien</strong>, die sanft zu Ihren natürlichen Wimpern sind und langanhaltende, natürliche Ergebnisse garantieren.
                    </p>
                    <p className="font-semibold text-brand-espresso text-xl italic">
                      Mein Ziel ist nicht nur schöne Wimpern – sondern Ihr Wohlbefinden, Ihre Gesundheit und ein Ergebnis, das Sie jeden Tag lieben werden.
                    </p>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <p>
                      Более <strong>10 лет</strong> я работаю с наращиванием ресниц — и за это время я поняла: <strong>каждая клиентка уникальна.</strong>
                    </p>
                    <p>
                      Мой подход основан не на массовом производстве, а на <strong>индивидуальной консультации, точном анализе и бережной технике</strong>. Я уделяю время, чтобы понять ваши желания, оценить ваши натуральные ресницы и вместе с вами спланировать лучший результат.
                    </p>
                    <p>
                      Я использую исключительно <strong>высококачественные, гипоаллергенные материалы</strong>, которые бережно относятся к вашим натуральным ресницам и гарантируют долговечные, естественные результаты.
                    </p>
                    <p className="font-semibold text-brand-espresso text-xl italic">
                      Моя цель — не просто красивые ресницы, а ваше благополучие, здоровье и результат, который вы будете любить каждый день.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Понад <strong>10 років</strong> я працюю з нарощуванням вій — і за цей час я зрозуміла: <strong>кожна клієнтка унікальна.</strong>
                    </p>
                    <p>
                      Мій підхід базується не на масовому виробництві, а на <strong>індивідуальній консультації, точному аналізі та дбайливій техніці</strong>. Я приділяю час, щоб зрозуміти ваші бажання, оцінити ваші натуральні вії та разом з вами спланувати найкращий результат.
                    </p>
                    <p>
                      Я використовую виключно <strong>високоякісні, гіпоалергенні матеріали</strong>, які дбайливо ставляться до ваших натуральних вій та гарантують довготривалі, природні результати.
                    </p>
                    <p className="font-semibold text-brand-espresso text-xl italic">
                      Моя мета — не просто гарні вії, а ваш добробут, здоров&#39;я та результат, який ви будете любити кожен день.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.section>

          {/* Section 7: Рекомендации по уходу */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Pflegeempfehlungen für Ihre Wimpernverlängerung' : language === 'ru' ? 'Рекомендации по уходу за наращенными ресницами' : 'Рекомендації з догляду за нарощеними віями'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 leading-relaxed">
                {language === 'de'
                  ? 'Damit Ihre Wimpernverlängerung lange schön bleibt und gesund für Ihre natürlichen Wimpern ist, beachten Sie bitte folgende Tipps:'
                  : language === 'ru' ? 'Чтобы ваше наращивание долго оставалось красивым и здоровым для ваших натуральных ресниц, следуйте этим советам:'
                  : 'Щоб ваше нарощування довго залишалося гарним та здоровим для ваших натуральних вій, дотримуйтесь цих порад:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    titleDE: 'Erste 24 Stunden',
                    titleRU: 'Первые 24 часа',
                    titleUA: 'Перші 24 години',
                    textDE: 'Vermeiden Sie Wasser, Dampf und Hitze – der Kleber braucht Zeit zum vollständigen Aushärten.',
                    textRU: 'Избегайте воды, пара и тепла — клею нужно время для полного затвердевания.',
                    textUA: 'Уникайте води, пари та тепла — клею потрібен час для повного затвердіння.'
                  },
                  {
                    titleDE: 'Keine ölhaltigen Produkte',
                    titleRU: 'Без масляных средств',
                    titleUA: 'Без олійних засобів',
                    textDE: 'Öle lösen den Kleber. Verwenden Sie nur ölfreie Reinigungsprodukte und Make-up-Entferner.',
                    textRU: 'Масла растворяют клей. Используйте только безмасляные средства для очищения и снятия макияжа.',
                    textUA: 'Олії розчиняють клей. Використовуйте тільки безолійні засоби для очищення та зняття макіяжу.'
                  },
                  {
                    titleDE: 'Sanfte Reinigung',
                    titleRU: 'Бережное очищение',
                    titleUA: 'Дбайливе очищення',
                    textDE: 'Reinigen Sie Ihre Wimpern täglich mit einem speziellen Schaum oder Gel – sanft und ohne Reiben.',
                    textRU: 'Очищайте ресницы ежедневно специальной пенкой или гелем — бережно и без трения.',
                    textUA: 'Очищуйте вії щодня спеціальною пінкою або гелем — дбайливо та без тертя.'
                  },
                  {
                    titleDE: 'Nicht ziehen oder reiben',
                    titleRU: 'Не тянуть и не тереть',
                    titleUA: 'Не тягнути та не терти',
                    textDE: 'Vermeiden Sie es, an den Wimpern zu ziehen oder zu reiben – das schädigt sowohl die Verlängerung als auch Ihre natürlichen Wimpern.',
                    textRU: 'Не тяните и не трите ресницы — это повреждает как наращивание, так и ваши натуральные ресницы.',
                    textUA: 'Не тягніть та не тріть вії — це пошкоджує як нарощування, так і ваші натуральні вії.'
                  },
                  {
                    titleDE: 'Schlafen',
                    titleRU: 'Сон',
                    titleUA: 'Сон',
                    textDE: 'Am besten auf dem Rücken schlafen – das schont die Wimpern und verhindert vorzeitigen Ausfall.',
                    textRU: 'Спите на спине — это защищает ресницы и предотвращает преждевременное выпадение.',
                    textUA: 'Спіть на спині — це захищає вії та запобігає передчасному випадінню.'
                  },
                  {
                    titleDE: 'Bürsten',
                    titleRU: 'Расчесывание',
                    titleUA: 'Розчісування',
                    textDE: 'Kämmen Sie Ihre Wimpern täglich mit einem sauberen Bürstchen, um sie in Form zu halten.',
                    textRU: 'Расчесывайте ресницы ежедневно чистой щеточкой, чтобы сохранить форму.',
                    textUA: 'Розчісуйте вії щодня чистою щіточкою, щоб зберегти форму.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                        {language === 'de' ? item.titleDE : language === 'ru' ? item.titleRU : item.titleUA}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {language === 'de' ? item.textDE : language === 'ru' ? item.textRU : item.textUA}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 8: Сколько держится результат */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Wie lange hält das Ergebnis?' : language === 'ru' ? 'Сколько держится результат?' : 'Скільки тримається результат?'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {language === 'de' ? (
                  <>
                    <p>
                      Die Haltbarkeit Ihrer Wimpernverlängerung hängt von mehreren Faktoren ab:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Natürlicher Wimpernzyklus:</strong> Wimpern wachsen und fallen natürlicherweise aus – dieser Prozess dauert etwa 6–8 Wochen. Die Kunstwimpern fallen mit den natürlichen Wimpern aus.</li>
                      <li><strong>Hauttyp:</strong> Bei öliger Haut kann die Haltbarkeit etwas kürzer sein, da Öle den Kleber schwächen.</li>
                      <li><strong>Pflege:</strong> Mit der richtigen Pflege halten die Wimpern deutlich länger.</li>
                      <li><strong>Lebensweise:</strong> Schwimmen, Sauna oder häufiges Berühren kann die Haltbarkeit verringern.</li>
                    </ul>
                    <p className="font-semibold text-brand-gold">
                      Im Durchschnitt hält eine Wimpernverlängerung 4–8 Wochen. Für ein durchgehend perfektes Ergebnis empfehle ich eine Auffüllung alle 3–4 Wochen.
                    </p>
                  </>
                ) : language === 'ru' ? (
                  <>
                    <p>
                      Срок носки наращенных ресниц зависит от нескольких факторов:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Естественный цикл ресниц:</strong> Ресницы растут и выпадают естественным образом — этот процесс занимает около 6–8 недель. Искусственные ресницы выпадают вместе с натуральными.</li>
                      <li><strong>Тип кожи:</strong> При жирной коже срок носки может быть немного короче, так как масла ослабляют клей.</li>
                      <li><strong>Уход:</strong> При правильном уходе ресницы держатся значительно дольше.</li>
                      <li><strong>Образ жизни:</strong> Плавание, сауна или частые прикосновения могут сократить срок носки.</li>
                    </ul>
                    <p className="font-semibold text-brand-gold">
                      В среднем наращивание держится 4–8 недель. Для постоянно идеального результата рекомендую коррекцию каждые 3–4 недели.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Термін носіння нарощених вій залежить від кількох факторів:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Природний цикл вій:</strong> Вії ростуть та випадають природним чином — цей процес займає близько 6–8 тижнів. Штучні вії випадають разом з натуральними.</li>
                      <li><strong>Тип шкіри:</strong> При жирній шкірі термін носіння може бути трохи коротшим, оскільки олії послаблюють клей.</li>
                      <li><strong>Догляд:</strong> При правильному догляді вії тримаються значно довше.</li>
                      <li><strong>Спосіб життя:</strong> Плавання, сауна або часті дотики можуть скоротити термін носіння.</li>
                    </ul>
                    <p className="font-semibold text-brand-gold">
                      В середньому нарощування тримається 4–8 тижнів. Для постійно ідеального результату рекомендую корекцію кожні 3–4 тижні.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.section>

          {/* Section 9: Противопоказания */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6">
                {language === 'de' ? 'Kontraindikationen' : language === 'ru' ? 'Противопоказания' : 'Протипоказання'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-6 leading-relaxed">
                {language === 'de'
                  ? 'In folgenden Fällen ist eine Wimpernverlängerung nicht empfehlenswert oder bedarf vorheriger ärztlicher Abklärung:'
                  : language === 'ru' ? 'В следующих случаях наращивание ресниц не рекомендуется или требует предварительной консультации с врачом:'
                  : 'У наступних випадках нарощування вій не рекомендується або потребує попередньої консультації з лікарем:'}
              </p>
              <div className="space-y-3">
                {[
                  {
                    de: 'Akute Augenerkrankungen (Bindehautentzündung, Gerstenkorn, Blepharitis)',
                    ru: 'Острые заболевания глаз (конъюнктивит, ячмень, блефарит)',
                    ua: 'Гострі захворювання очей (кон\'юнктивіт, ячмінь, блефарит)'
                  },
                  {
                    de: 'Allergien gegen Klebstoffe oder verwendete Materialien',
                    ru: 'Аллергия на клей или используемые материалы',
                    ua: 'Алергія на клей або використовувані матеріали'
                  },
                  {
                    de: 'Sehr schwache oder brüchige eigene Wimpern',
                    ru: 'Очень слабые или ломкие собственные ресницы',
                    ua: 'Дуже слабкі або ламкі власні вії'
                  },
                  {
                    de: 'Chemotherapie oder andere Behandlungen, die Haarausfall verursachen',
                    ru: 'Химиотерапия или другие процедуры, вызывающие выпадение волос',
                    ua: 'Хіміотерапія або інші процедури, що спричиняють випадіння волосся'
                  },
                  {
                    de: 'Trichotillomanie (zwanghaftes Ausreißen der Haare)',
                    ru: 'Трихотилломания (навязчивое выдергивание волос)',
                    ua: 'Трихотиломанія (нав\'язливе висмикування волосся)'
                  },
                  {
                    de: 'Sehr empfindliche oder zu Allergien neigende Augen',
                    ru: 'Очень чувствительные или склонные к аллергии глаза',
                    ua: 'Дуже чутливі або схильні до алергії очі'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2"></div>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {language === 'de' ? item.de : language === 'ru' ? item.ru : item.ua}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-gold/10 rounded-xl">
                <p className="text-sm text-brand-espresso/70">
                  {language === 'de'
                    ? '💡 Im Zweifelsfall besprechen wir vor der Behandlung gemeinsam, ob eine Wimpernverlängerung für Sie geeignet ist.'
                    : language === 'ru' ? '💡 В случае сомнений мы обсудим перед процедурой, подходит ли вам наращивание ресниц.'
                    : '💡 У разі сумнівів ми обговоримо перед процедурою, чи підходить вам нарощування вій.'}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 10: Почему выбирают именно этого мастера */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-brand-espresso/5 via-brand-gold/10 to-brand-espresso/5 backdrop-blur-xl rounded-3xl p-10 md:p-12 border-2 border-brand-gold/30">
              <h2 className="text-4xl font-heading font-bold text-brand-espresso mb-6 text-center">
                {language === 'de'
                  ? 'Warum Sie mich als Ihren Lash Artist in München wählen sollten'
                  : language === 'ru' ? 'Почему стоит выбрать меня как мастера по наращиванию ресниц в Мюнхене'
                  : 'Чому варто обрати мене як майстра з нарощування вій у Мюнхені'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    titleDE: '✨ Über 10 Jahre Erfahrung',
                    titleRU: '✨ Более 10 лет опыта',
                    titleUA: '✨ Понад 10 років досвіду',
                    textDE: 'Jahrelange Praxis und kontinuierliche Weiterbildung garantieren höchste Qualität und Sicherheit.',
                    textRU: 'Многолетняя практика и постоянное обучение гарантируют высочайшее качество и безопасность.',
                    textUA: 'Багаторічна практика та постійне навчання гарантують найвищу якість та безпеку.'
                  },
                  {
                    titleDE: '🎯 Individuelle Beratung',
                    titleRU: '🎯 Индивидуальная консультация',
                    titleUA: '🎯 Індивідуальна консультація',
                    textDE: 'Keine Massenabfertigung – jede Kundin bekommt eine persönliche Analyse und maßgeschneiderte Lösung.',
                    textRU: 'Никакого массового подхода — каждая клиентка получает персональный анализ и индивидуальное решение.',
                    textUA: 'Жодного масового підходу — кожна клієнтка отримує персональний аналіз та індивідуальне рішення.'
                  },
                  {
                    titleDE: '💎 Premium-Materialien',
                    titleRU: '💎 Премиум-материалы',
                    titleUA: '💎 Преміум-матеріали',
                    textDE: 'Ich verwende ausschließlich hochwertige, hypoallergene Produkte von führenden Herstellern.',
                    textRU: 'Я использую только высококачественные, гипоаллергенные продукты от ведущих производителей.',
                    textUA: 'Я використовую тільки високоякісні, гіпоалергенні продукти від провідних виробників.'
                  },
                  {
                    titleDE: '🌿 Schonende Methoden',
                    titleRU: '🌿 Бережные методы',
                    titleUA: '🌿 Дбайливі методи',
                    textDE: 'Gesundheit Ihrer natürlichen Wimpern steht an erster Stelle – ohne Kompromisse.',
                    textRU: 'Здоровье ваших натуральных ресниц на первом месте — без компромиссов.',
                    textUA: 'Здоров\'я ваших натуральних вій на першому місці — без компромісів.'
                  },
                  {
                    titleDE: '📍 Zentrale Lage in München',
                    titleRU: '📍 Центральное расположение в Мюнхене',
                    titleUA: '📍 Центральне розташування у Мюнхені',
                    textDE: 'Bequem erreichbar im Herzen von München-Haidhausen, nur 5 Minuten vom Ostbahnhof.',
                    textRU: 'Удобное расположение в центре Мюнхена-Хайдхаузен, всего в 5 минутах от вокзала Остбанхоф.',
                    textUA: 'Зручне розташування в центрі Мюнхена-Хайдхаузен, всього за 5 хвилин від вокзалу Остбанхоф.'
                  },
                  {
                    titleDE: '🏆 Zufriedene Kundinnen',
                    titleRU: '🏆 Довольные клиентки',
                    titleUA: '🏆 Задоволені клієнтки',
                    textDE: 'Hunderte zufriedene Kundinnen vertrauen auf meine Arbeit und kommen immer wieder.',
                    textRU: 'Сотни довольных клиенток доверяют моей работе и возвращаются снова и снова.',
                    textUA: 'Сотні задоволених клієнток довіряють моїй роботі та повертаються знову і знову.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {language === 'de' ? item.titleDE : language === 'ru' ? item.titleRU : item.titleUA}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {language === 'de' ? item.textDE : language === 'ru' ? item.textRU : item.textUA}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-2xl font-heading font-semibold text-brand-gold mb-6">
                  {language === 'de'
                    ? 'Bereit für Ihren Traumblick?'
                    : language === 'ru' ? 'Готовы к взгляду мечты?'
                    : 'Готові до погляду мрії?'}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/prices#lashes-brows">
                    <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl px-8 py-6 text-lg">
                      {language === 'de' ? 'Preise ansehen' : language === 'ru' ? 'Посмотреть цены' : 'Переглянути ціни'}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-2 border-brand-gold text-brand-espresso hover:bg-brand-gold/10 font-medium rounded-xl px-8 py-6 text-lg">
                      {language === 'de' ? 'Kontakt' : language === 'ru' ? 'Контакты' : 'Контакти'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Gallery */}
          <PremiumGallery images={galleryImages} />

          {/* Recommended Services */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12">
              <h2 className="text-3xl font-heading font-bold text-brand-espresso mb-8 text-center">
                {language === 'de' ? 'Weitere Behandlungen' : language === 'ru' ? 'Другие процедуры' : 'Інші процедури'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Powder Brows"
                  description={language === 'de' ? 'Permanent Make-up für perfekte Augenbrauen' : language === 'ru' ? 'Перманентный макияж для идеальных бровей' : 'Перманентний макіяж для ідеальних брів'}
                  icon={Palette}
                  href="/services/powder-brows"
                  image="/powder-brows-permanent-makeup-muenchen.jpg"
                />
                <ServiceCard
                  title={language === 'de' ? 'Wimpern- & Augenbrauenlaminierung' : language === 'ru' ? 'Ламинирование ресниц и бровей' : 'Ламінування вій та брів'}
                  description={language === 'de' ? 'Lash Lift & Brow Lift' : language === 'ru' ? 'Lash Lift и Brow Lift' : 'Lash Lift та Brow Lift'}
                  icon={Layers}
                  href="/services/wimpern-augenbrauen-laminierung"
                  image="/wimpernverlaengerung-behandlung.jpeg"
                />
                <ServiceCard
                  title={language === 'de' ? 'Wimpernkranz' : language === 'ru' ? 'Межресничка' : 'Міжвійковий простір'}
                  description={language === 'de' ? 'Permanent Make-up Wimpernkranz' : language === 'ru' ? 'Перманентный макияж межресничного пространства' : 'Перманентний макіяж міжвійкового простору'}
                  icon={Eye}
                  href="/services/wimpernkranz"
                  image="/permanent-makeup-ergebnis-muenchen.jpg"
                />
              </div>
            </div>
          </motion.section>

          {/* SEO Footer Note */}
          <div className="text-center text-sm text-brand-espresso/50 pb-8">
            <p>
              {language === 'de'
                ? 'Wimpernverlängerung München • Lash Extensions München • Wimpern München • Lash Lifting München • Wimpernstylist München Haidhausen • Permanent Make-up München • Beauty Studio München'
                : language === 'ru' ? 'Наращивание ресниц Мюнхен • Lash Extensions München • Ресницы Мюнхен • Мастер по ресницам Мюнхен • Перманентный макияж Мюнхен • Бьюти-студия Мюнхен'
                : 'Нарощування вій Мюнхен • Lash Extensions München • Вії Мюнхен • Майстер з вій Мюнхен • Перманентний макіяж Мюнхен • Б\'юті-студія Мюнхен'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wimpernverlaengerung;
