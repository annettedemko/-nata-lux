'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Eye, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Wimpernverlaengerung = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/28.png)',
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
              {isGerman ? 'WIMPERN­VERLÄNGERUNG' : 'НАРАЩИВАНИЕ РЕСНИЦ'}
            </h1>
            <p className="text-2xl font-heading font-light text-brand-espresso/80 mb-4">
              {isGerman ? 'in München' : 'в Мюнхене'}
            </p>
            <div className="w-32 h-0.5 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-xl text-brand-espresso/70 leading-relaxed max-w-3xl mx-auto">
              {isGerman
                ? 'Красивый, выразительный взгляд без вреда натуральным ресницам'
                : 'Красивый, выразительный взгляд без вреда натуральным ресницам'}
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
                {isGerman
                  ? 'Was ist Wimpernverlängerung und für wen ist sie geeignet?'
                  : 'Что такое наращивание ресниц и кому подходит'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {isGerman ? (
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
                ) : (
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
                )}
              </div>
              <div className="mt-6 p-4 bg-brand-gold/10 rounded-xl">
                <p className="text-sm text-brand-espresso/70">
                  <strong>SEO:</strong> Wimpernverlängerung München, Lash Extensions München, Lash Stylist München
                </p>
              </div>
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
                {isGerman ? 'Was ist wichtig zu wissen' : 'Что важно знать'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Eye,
                    titleDE: 'Individuelle Auswahl',
                    titleRU: 'Индивидуальный подбор',
                    textDE: 'Jede Behandlung wird speziell auf Ihre Augenform, Ihren Stil und Ihre Wünsche abgestimmt.',
                    textRU: 'Каждая процедура подбирается специально под форму ваших глаз, стиль и пожелания.'
                  },
                  {
                    icon: Sparkles,
                    titleDE: 'Analyse natürlicher Wimpern',
                    titleRU: 'Анализ натуральных ресниц',
                    textDE: 'Vor der Behandlung analysiere ich Stärke, Länge und Zustand Ihrer natürlichen Wimpern.',
                    textRU: 'Перед процедурой я анализирую прочность, длину и состояние ваших натуральных ресниц.'
                  },
                  {
                    icon: Heart,
                    titleDE: 'Schonende Technik',
                    titleRU: 'Бережная техника',
                    textDE: 'Ich arbeite mit professionellen Methoden, die Ihre natürlichen Wimpern schützen und pflegen.',
                    textRU: 'Я работаю профессиональными методами, которые защищают и ухаживают за вашими натуральными ресницами.'
                  },
                  {
                    icon: CheckCircle2,
                    titleDE: 'Gesundheit der Wimpern',
                    titleRU: 'Здоровье ресниц',
                    textDE: 'Oberste Priorität hat die Gesundheit Ihrer natürlichen Wimpern – ohne Schädigung oder Überlastung.',
                    textRU: 'Главный приоритет — здоровье ваших натуральных ресниц, без повреждений или перегрузки.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {isGerman ? item.titleDE : item.titleRU}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {isGerman ? item.textDE : item.textRU}
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
                {isGerman ? 'Dauer & Haltbarkeit' : 'Длительность процедуры и носки'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    titleDE: 'Standard-Behandlung',
                    titleRU: 'Стандартная процедура',
                    valueDE: '2 Stunden',
                    valueRU: '2 часа'
                  },
                  {
                    titleDE: 'Express-Verlängerung',
                    titleRU: 'Экспресс-наращивание',
                    valueDE: '1 Stunde',
                    valueRU: '1 час'
                  },
                  {
                    titleDE: 'Haltbarkeit',
                    titleRU: 'Срок носки',
                    valueDE: '4–8 Wochen',
                    valueRU: '4–8 недель'
                  },
                  {
                    titleDE: 'Auffüllung',
                    titleRU: 'Коррекция',
                    valueDE: 'alle 3–4 Wochen',
                    valueRU: 'каждые 3–4 недели'
                  },
                  {
                    titleDE: 'Entfernung (eigene Arbeit)',
                    titleRU: 'Снятие своей работы',
                    valueDE: 'kostenlos',
                    valueRU: 'бесплатно'
                  },
                  {
                    titleDE: 'Entfernung (fremde Arbeit)',
                    titleRU: 'Снятие чужой работы',
                    valueDE: '15€',
                    valueRU: '15€'
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-brand-gold/5 rounded-2xl">
                    <Clock className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-heading font-semibold text-brand-espresso mb-2">
                      {isGerman ? item.titleDE : item.titleRU}
                    </h3>
                    <p className="text-2xl font-heading font-bold text-brand-gold">
                      {isGerman ? item.valueDE : item.valueRU}
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
                {isGerman ? 'Techniken & Stile' : 'Техники, с которыми работает мастер'}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    nameDE: 'Klassische 1:1 Verlängerung',
                    nameRU: 'Классика 1:1',
                    descDE: 'Eine Kunstwimper pro natürlicher Wimper. Natürlicher, eleganter Look für den Alltag. Betont die natürliche Schönheit ohne Übertreibung. Perfekt für Erstkundinnen und dezente Ergebnisse.',
                    descRU: 'Одна искусственная ресница на одну натуральную. Натуральный, элегантный образ для повседневной жизни. Подчеркивает естественную красоту без преувеличений. Идеально для новичков и сдержанных результатов.'
                  },
                  {
                    nameDE: '2D & 3D Volumen',
                    nameRU: '2D и 3D объем',
                    descDE: '2–3 feine Wimpern pro natürlicher Wimper. Mehr Volumen und Dichte bei natürlichem Aussehen. Ideal für besondere Anlässe oder wenn Sie mehr Dramatik wünschen. Leicht und schonend trotz Volumen.',
                    descRU: '2–3 тонкие ресницы на одну натуральную. Больше объема и густоты при естественном виде. Идеально для особых случаев или когда хотите больше драматичности. Легкие и бережные, несмотря на объем.'
                  },
                  {
                    nameDE: 'Leichtes / Weiches Volumen',
                    nameRU: 'Лёгкий / мягкий объём',
                    descDE: 'Feinste Wimpern in mehreren Ebenen. Maximales Volumen ohne schweren Look. Flauschig, weich und besonders natürlich wirkend.',
                    descRU: 'Тончайшие ресницы в несколько слоев. Максимальный объем без тяжелого вида. Пушистые, мягкие и особенно натурально выглядящие.'
                  },
                  {
                    nameDE: 'Kombinierte Technik',
                    nameRU: 'Комбинированная техника',
                    descDE: 'Mix aus Klassik und Volumen an verschiedenen Stellen. Individuelle Anpassung für perfekte Balance. Korrigiert optisch Asymmetrien und betont Ihre besten Züge.',
                    descRU: 'Микс классики и объема в разных местах. Индивидуальная адаптация для идеального баланса. Оптически корректирует асимметрию и подчеркивает ваши лучшие черты.'
                  },
                  {
                    nameDE: 'Verstreuter Effekt (Kim Kardashian Look)',
                    nameRU: 'Разреженный эффект',
                    descDE: 'Längere Wimpern im Wechsel mit kürzeren. Natürlicher „frisch aufgewacht" Look. Modern, trendy und pflegeleicht.',
                    descRU: 'Более длинные ресницы чередуются с короткими. Натуральный образ \"только проснулась\". Современный, модный и неприхотливый в уходе.'
                  },
                  {
                    nameDE: 'Cat-Eye Effekt (Streichholz-Look)',
                    nameRU: 'Эффект стрелочки (Cat-Eye)',
                    descDE: 'Längere Wimpern am äußeren Augenwinkel. Verführerischer, katzenartiger Blick. Optisch hebt und öffnet die Augen.',
                    descRU: 'Более длинные ресницы у внешнего уголка глаза. Соблазнительный, кошачий взгляд. Оптически приподнимает и открывает глаза.'
                  },
                  {
                    nameDE: 'Strahlen-Effekt',
                    nameRU: 'Эффект лучиков',
                    descDE: 'Einzelne längere Akzente zwischen normalen Wimpern. Verleiht Strahlkraft und Frische. Subtiler Glamour für jeden Tag.',
                    descRU: 'Отдельные более длинные акценты между обычными ресницами. Придает сияние и свежесть. Сдержанный гламур на каждый день.'
                  },
                  {
                    nameDE: 'Untere Wimpernverlängerung',
                    nameRU: 'Нижнее наращивание',
                    descDE: 'Auf Wunsch auch Verlängerung der unteren Wimpern möglich. Komplettiert den Look und öffnet den Blick rundherum. Besonders bei Fotoshootings oder Events beliebt.',
                    descRU: 'По желанию возможно наращивание нижних ресниц. Завершает образ и открывает взгляд со всех сторон. Особенно популярно на фотосессиях или мероприятиях.'
                  },
                ].map((tech, index) => (
                  <div key={index} className="p-6 bg-brand-gold/5 rounded-2xl">
                    <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-3">
                      {isGerman ? tech.nameDE : tech.nameRU}
                    </h3>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {isGerman ? tech.descDE : tech.descRU}
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
                {isGerman ? 'Korrektur der Augenform mit Wimpernverlängerung' : 'Коррекция формы глаз с помощью наращивания'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 leading-relaxed">
                {isGerman
                  ? 'Jede Augenform ist einzigartig. Mit der richtigen Technik lassen sich optische Effekte erzielen, die Ihre natürliche Schönheit unterstreichen und kleine Asymmetrien harmonisch ausgleichen.'
                  : 'Каждая форма глаз уникальна. С помощью правильной техники можно добиться оптических эффектов, которые подчеркнут вашу естественную красоту и гармонично скорректируют небольшие асимметрии.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    titleDE: 'Schlupflider',
                    titleRU: 'Нависшее веко',
                    descDE: 'Bei Schlupflidern setze ich kürzere Wimpern in der Mitte und längere an den Außenwinkeln – das öffnet den Blick optisch und hebt das Lid sanft an.',
                    descRU: 'При нависшем веке я использую более короткие ресницы в центре и более длинные у внешних уголков — это визуально открывает взгляд и мягко приподнимает веко.'
                  },
                  {
                    titleDE: 'Runde Augen',
                    titleRU: 'Круглые глаза',
                    descDE: 'Um runde Augen optisch zu strecken, arbeite ich mit längeren Wimpern am äußeren Rand – das verleiht eine elegante Mandelform.',
                    descRU: 'Чтобы визуально вытянуть круглые глаза, я работаю с более длинными ресницами у внешнего края — это придает элегантную миндалевидную форму.'
                  },
                  {
                    titleDE: 'Schmale Augen',
                    titleRU: 'Узкие глаза',
                    descDE: 'Bei schmalen Augen konzentriere ich mehr Volumen in der Mitte – das öffnet die Augen und lässt sie größer wirken.',
                    descRU: 'При узких глазах я концентрирую больше объема в центре — это открывает глаза и делает их визуально больше.'
                  },
                  {
                    titleDE: 'Hängende Augenwinkel',
                    titleRU: 'Опущенные уголки',
                    descDE: 'Längere Wimpern im äußeren oberen Bereich heben die Winkel optisch an und verleihen einen frischen, wachen Ausdruck.',
                    descRU: 'Более длинные ресницы в верхней внешней части визуально приподнимают уголки и придают свежий, бодрый вид.'
                  },
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-brand-gold/5 rounded-2xl">
                    <h3 className="text-2xl font-heading font-semibold text-brand-espresso mb-3">
                      {isGerman ? item.titleDE : item.titleRU}
                    </h3>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {isGerman ? item.descDE : item.descRU}
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
                {isGerman ? 'Mein Ansatz – über 10 Jahre Erfahrung' : 'Мой подход — более 10 лет опыта'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {isGerman ? (
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
                    <p className="font-semibold text-brand-gold text-xl italic">
                      Mein Ziel ist nicht nur schöne Wimpern – sondern Ihr Wohlbefinden, Ihre Gesundheit und ein Ergebnis, das Sie jeden Tag lieben werden.
                    </p>
                  </>
                ) : (
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
                    <p className="font-semibold text-brand-gold text-xl italic">
                      Моя цель — не просто красивые ресницы, а ваше благополучие, здоровье и результат, который вы будете любить каждый день.
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
                {isGerman ? 'Pflegeempfehlungen für Ihre Wimpernverlängerung' : 'Рекомендации по уходу за наращенными ресницами'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-8 leading-relaxed">
                {isGerman
                  ? 'Damit Ihre Wimpernverlängerung lange schön bleibt und gesund für Ihre natürlichen Wimpern ist, beachten Sie bitte folgende Tipps:'
                  : 'Чтобы ваше наращивание долго оставалось красивым и здоровым для ваших натуральных ресниц, следуйте этим советам:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    titleDE: 'Erste 24 Stunden',
                    titleRU: 'Первые 24 часа',
                    textDE: 'Vermeiden Sie Wasser, Dampf und Hitze – der Kleber braucht Zeit zum vollständigen Aushärten.',
                    textRU: 'Избегайте воды, пара и тепла — клею нужно время для полного затвердевания.'
                  },
                  {
                    titleDE: 'Keine ölhaltigen Produkte',
                    titleRU: 'Без масляных средств',
                    textDE: 'Öle lösen den Kleber. Verwenden Sie nur ölfreie Reinigungsprodukte und Make-up-Entferner.',
                    textRU: 'Масла растворяют клей. Используйте только безмасляные средства для очищения и снятия макияжа.'
                  },
                  {
                    titleDE: 'Sanfte Reinigung',
                    titleRU: 'Бережное очищение',
                    textDE: 'Reinigen Sie Ihre Wimpern täglich mit einem speziellen Schaum oder Gel – sanft und ohne Reiben.',
                    textRU: 'Очищайте ресницы ежедневно специальной пенкой или гелем — бережно и без трения.'
                  },
                  {
                    titleDE: 'Nicht ziehen oder reiben',
                    titleRU: 'Не тянуть и не тереть',
                    textDE: 'Vermeiden Sie es, an den Wimpern zu ziehen oder zu reiben – das schädigt sowohl die Verlängerung als auch Ihre natürlichen Wimpern.',
                    textRU: 'Не тяните и не трите ресницы — это повреждает как наращивание, так и ваши натуральные ресницы.'
                  },
                  {
                    titleDE: 'Schlafen',
                    titleRU: 'Сон',
                    textDE: 'Am besten auf dem Rücken schlafen – das schont die Wimpern und verhindert vorzeitigen Ausfall.',
                    textRU: 'Спите на спине — это защищает ресницы и предотвращает преждевременное выпадение.'
                  },
                  {
                    titleDE: 'Bürsten',
                    titleRU: 'Расчесывание',
                    textDE: 'Kämmen Sie Ihre Wimpern täglich mit einem sauberen Bürstchen, um sie in Form zu halten.',
                    textRU: 'Расчесывайте ресницы ежедневно чистой щеточкой, чтобы сохранить форму.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-brand-espresso mb-2">
                        {isGerman ? item.titleDE : item.titleRU}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {isGerman ? item.textDE : item.textRU}
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
                {isGerman ? 'Wie lange hält das Ergebnis?' : 'Сколько держится результат?'}
              </h2>
              <div className="space-y-4 text-brand-espresso/85 leading-relaxed text-lg">
                {isGerman ? (
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
                ) : (
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
                {isGerman ? 'Kontraindikationen' : 'Противопоказания'}
              </h2>
              <p className="text-lg text-brand-espresso/70 mb-6 leading-relaxed">
                {isGerman
                  ? 'In folgenden Fällen ist eine Wimpernverlängerung nicht empfehlenswert oder bedarf vorheriger ärztlicher Abklärung:'
                  : 'В следующих случаях наращивание ресниц не рекомендуется или требует предварительной консультации с врачом:'}
              </p>
              <div className="space-y-3">
                {[
                  {
                    de: 'Akute Augenerkrankungen (Bindehautentzündung, Gerstenkorn, Blepharitis)',
                    ru: 'Острые заболевания глаз (конъюнктивит, ячмень, блефарит)'
                  },
                  {
                    de: 'Allergien gegen Klebstoffe oder verwendete Materialien',
                    ru: 'Аллергия на клей или используемые материалы'
                  },
                  {
                    de: 'Sehr schwache oder brüchige eigene Wimpern',
                    ru: 'Очень слабые или ломкие собственные ресницы'
                  },
                  {
                    de: 'Chemotherapie oder andere Behandlungen, die Haarausfall verursachen',
                    ru: 'Химиотерапия или другие процедуры, вызывающие выпадение волос'
                  },
                  {
                    de: 'Trichotillomanie (zwanghaftes Ausreißen der Haare)',
                    ru: 'Трихотилломания (навязчивое выдергивание волос)'
                  },
                  {
                    de: 'Sehr empfindliche oder zu Allergien neigende Augen',
                    ru: 'Очень чувствительные или склонные к аллергии глаза'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-2"></div>
                    <p className="text-brand-espresso/70 leading-relaxed">
                      {isGerman ? item.de : item.ru}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-gold/10 rounded-xl">
                <p className="text-sm text-brand-espresso/70">
                  {isGerman
                    ? '💡 Im Zweifelsfall besprechen wir vor der Behandlung gemeinsam, ob eine Wimpernverlängerung für Sie geeignet ist.'
                    : '💡 В случае сомнений мы обсудим перед процедурой, подходит ли вам наращивание ресниц.'}
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
                {isGerman
                  ? 'Warum Sie mich als Ihren Lash Artist in München wählen sollten'
                  : 'Почему стоит выбрать меня как мастера по наращиванию ресниц в Мюнхене'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    titleDE: '✨ Über 10 Jahre Erfahrung',
                    titleRU: '✨ Более 10 лет опыта',
                    textDE: 'Jahrelange Praxis und kontinuierliche Weiterbildung garantieren höchste Qualität und Sicherheit.',
                    textRU: 'Многолетняя практика и постоянное обучение гарантируют высочайшее качество и безопасность.'
                  },
                  {
                    titleDE: '🎯 Individuelle Beratung',
                    titleRU: '🎯 Индивидуальная консультация',
                    textDE: 'Keine Massenabfertigung – jede Kundin bekommt eine persönliche Analyse und maßgeschneiderte Lösung.',
                    textRU: 'Никакого массового подхода — каждая клиентка получает персональный анализ и индивидуальное решение.'
                  },
                  {
                    titleDE: '💎 Premium-Materialien',
                    titleRU: '💎 Премиум-материалы',
                    textDE: 'Ich verwende ausschließlich hochwertige, hypoallergene Produkte von führenden Herstellern.',
                    textRU: 'Я использую только высококачественные, гипоаллергенные продукты от ведущих производителей.'
                  },
                  {
                    titleDE: '🌿 Schonende Methoden',
                    titleRU: '🌿 Бережные методы',
                    textDE: 'Gesundheit Ihrer natürlichen Wimpern steht an erster Stelle – ohne Kompromisse.',
                    textRU: 'Здоровье ваших натуральных ресниц на первом месте — без компромиссов.'
                  },
                  {
                    titleDE: '📍 Zentrale Lage in München',
                    titleRU: '📍 Центральное расположение в Мюнхене',
                    textDE: 'Bequem erreichbar im Herzen von München-Haidhausen, nur 5 Minuten vom Ostbahnhof.',
                    textRU: 'Удобное расположение в центре Мюнхена-Хайдхаузен, всего в 5 минутах от вокзала Остбанхоф.'
                  },
                  {
                    titleDE: '🏆 Zufriedene Kundinnen',
                    titleRU: '🏆 Довольные клиентки',
                    textDE: 'Hunderte zufriedene Kundinnen vertrauen auf meine Arbeit und kommen immer wieder.',
                    textRU: 'Сотни довольных клиенток доверяют моей работе и возвращаются снова и снова.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-brand-espresso mb-2">
                        {isGerman ? item.titleDE : item.titleRU}
                      </h3>
                      <p className="text-brand-espresso/70 leading-relaxed">
                        {isGerman ? item.textDE : item.textRU}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-2xl font-heading font-semibold text-brand-gold mb-6">
                  {isGerman
                    ? 'Bereit für Ihren Traumblick?'
                    : 'Готовы к взгляду мечты?'}
                </p>
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl px-8 py-6 text-lg">
                  {isGerman ? 'Jetzt Termin vereinbaren' : 'Записаться на процедуру'}
                </Button>
              </div>
            </div>
          </motion.section>

          {/* SEO Footer Note */}
          <div className="text-center text-sm text-brand-espresso/50 pb-8">
            <p>
              {isGerman
                ? 'Wimpernverlängerung München • Lash Extensions München • Wimpern München • Lash Lifting München • Wimpernstylist München Haidhausen • Permanent Make-up München • Beauty Studio München'
                : 'Наращивание ресниц Мюнхен • Lash Extensions München • Ресницы Мюнхен • Мастер по ресницам Мюнхен • Перманентный макияж Мюнхен • Бьюти-студия Мюнхен'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wimpernverlaengerung;
