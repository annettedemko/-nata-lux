'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const reviews = language === 'de' ? [
    {
      name: 'Anna M.',
      rating: 5,
      date: '2 Wochen her',
      text: 'Ich bin absolut begeistert von meinen neuen Wimpern! Das Team ist super professionell und die Atmosphäre im Salon ist sehr angenehm. Die Behandlung war schmerzfrei und das Ergebnis übertrifft alle meine Erwartungen. Natürlich, voluminös und einfach perfekt!',
      service: 'Wimpernverlängerung',
    },
    {
      name: 'Maria Schmidt',
      rating: 5,
      date: '3 Wochen her',
      text: 'Die beste PMU-Behandlung, die ich je hatte! Die Beratung war ausführlich und ich fühlte mich sehr gut aufgehoben. Meine Augenbrauen sehen jetzt jeden Tag perfekt aus, ohne dass ich Zeit mit Schminken verbringen muss. Absolut empfehlenswert!',
      service: 'Permanent Make-up',
    },
    {
      name: 'Julia K.',
      rating: 5,
      date: '1 Monat her',
      text: 'Nach nur 3 Sitzungen sehe ich bereits deutliche Ergebnisse bei der Laser-Haarentfernung. Die Behandlung war viel angenehmer als erwartet. Das Personal ist sehr freundlich und kompetent. Preis-Leistung stimmt definitiv!',
      service: 'Laser Haarentfernung',
    },
    {
      name: 'Sophie Weber',
      rating: 5,
      date: '1 Monat her',
      text: 'Die Augenbrauen-Laminierung hält schon über 5 Wochen und sieht immer noch top aus! Endlich habe ich die gepflegten, gleichmäßigen Brauen, die ich mir immer gewünscht habe. Der Salon ist modern und sehr sauber.',
      service: 'Laminierung',
    },
    {
      name: 'Elena P.',
      rating: 5,
      date: '2 Monate her',
      text: 'Ich habe den Anti-Aging-Kurs gemacht und bin mehr als zufrieden. Meine Haut ist straffer und frischer. Die Behandlungen waren entspannend und die Ergebnisse sprechen für sich. Gerne wieder!',
      service: 'Anti-Aging',
    },
    {
      name: 'Natalia H.',
      rating: 5,
      date: '2 Monate her',
      text: 'Tolle Erfahrung! Ich habe hier den Wimpernverlängerungs-Kurs gemacht und kann es nur empfehlen. Die Trainerin war sehr geduldig und hat alles super erklärt. Jetzt arbeite ich selbst als Lash-Stylistin!',
      service: 'Schulung',
    },
    {
      name: 'Lisa M.',
      rating: 5,
      date: '3 Monate her',
      text: 'Hygiene und Professionalität auf höchstem Niveau. Ich fühle mich hier immer gut aufgehoben. Die Preise sind fair und die Qualität der Arbeit ist ausgezeichnet. Mein Stammsalon!',
      service: 'Verschiedene Behandlungen',
    },
    {
      name: 'Christina B.',
      rating: 5,
      date: '3 Monate her',
      text: 'Die Gesichtsbehandlung war fantastisch! Meine Haut fühlt sich so weich und erfrischt an. Die Produkte, die verwendet wurden, sind hochwertig und man merkt den Unterschied sofort.',
      service: 'Gesichtspflege',
    },
    {
      name: 'Olga K.',
      rating: 5,
      date: '4 Monate her',
      text: 'Ich kann NATA LUX nur wärmstens empfehlen! Besonders die PMU-Entfernung war ein Erfolg. Professionell, sauber und mit tollem Ergebnis. Das Team nimmt sich wirklich Zeit für jeden Kunden.',
      service: 'PMU Entfernung',
    },
  ] : language === 'ru' ? [
    {
      name: 'Анна М.',
      rating: 5,
      date: '2 недели назад',
      text: 'Я в полном восторге от новых ресниц! Команда супер профессиональная, а атмосфера в салоне очень приятная. Процедура была безболезненной, а результат превзошёл все мои ожидания. Естественно, объёмно и просто идеально!',
      service: 'Наращивание ресниц',
    },
    {
      name: 'Мария Ш.',
      rating: 5,
      date: '3 недели назад',
      text: 'Лучшая процедура ПМ, которую я когда-либо делала! Консультация была подробной, и я чувствовала себя в надёжных руках. Мои брови теперь выглядят идеально каждый день, без траты времени на макияж. Абсолютно рекомендую!',
      service: 'Перманентный макияж',
    },
    {
      name: 'Юлия К.',
      rating: 5,
      date: '1 месяц назад',
      text: 'После всего 3 сеансов я уже вижу значительные результаты лазерной эпиляции. Процедура была намного комфортнее, чем я ожидала. Персонал очень дружелюбный и компетентный. Соотношение цены и качества отличное!',
      service: 'Лазерная эпиляция',
    },
    {
      name: 'София В.',
      rating: 5,
      date: '1 месяц назад',
      text: 'Ламинирование бровей держится уже больше 5 недель и выглядит всё ещё отлично! Наконец-то у меня ухоженные, ровные брови, о которых я всегда мечтала. Салон современный и очень чистый.',
      service: 'Ламинирование',
    },
    {
      name: 'Елена П.',
      rating: 5,
      date: '2 месяца назад',
      text: 'Прошла курс Anti-Aging и более чем довольна. Моя кожа стала более упругой и свежей. Процедуры были расслабляющими, а результаты говорят сами за себя. С удовольствием приду снова!',
      service: 'Anti-Aging',
    },
    {
      name: 'Наталья Х.',
      rating: 5,
      date: '2 месяца назад',
      text: 'Отличный опыт! Я прошла здесь курс наращивания ресниц и могу только рекомендовать. Тренер была очень терпеливой и всё отлично объяснила. Теперь я сама работаю лэш-мастером!',
      service: 'Обучение',
    },
    {
      name: 'Лиза М.',
      rating: 5,
      date: '3 месяца назад',
      text: 'Гигиена и профессионализм на высшем уровне. Здесь я всегда чувствую себя в надёжных руках. Цены справедливые, а качество работы отличное. Мой постоянный салон!',
      service: 'Разные процедуры',
    },
    {
      name: 'Кристина Б.',
      rating: 5,
      date: '3 месяца назад',
      text: 'Уход за лицом был фантастическим! Моя кожа такая мягкая и свежая. Продукты, которые использовались, высокого качества, и разница заметна сразу.',
      service: 'Уход за лицом',
    },
    {
      name: 'Ольга К.',
      rating: 5,
      date: '4 месяца назад',
      text: 'Могу только горячо рекомендовать NATA LUX! Особенно удаление ПМ прошло успешно. Профессионально, чисто и с отличным результатом. Команда действительно уделяет время каждому клиенту.',
      service: 'Удаление ПМ',
    },
  ] : [
    {
      name: 'Анна М.',
      rating: 5,
      date: '2 тижні тому',
      text: 'Я у повному захваті від нових вій! Команда супер професійна, а атмосфера в салоні дуже приємна. Процедура була безболісною, а результат перевершив усі мої очікування. Природньо, об\'ємно і просто ідеально!',
      service: 'Нарощування вій',
    },
    {
      name: 'Марія Ш.',
      rating: 5,
      date: '3 тижні тому',
      text: 'Найкраща процедура ПМ, яку я коли-небудь робила! Консультація була детальною, і я почувалася в надійних руках. Мої брови тепер виглядають ідеально щодня, без витрати часу на макіяж. Абсолютно рекомендую!',
      service: 'Перманентний макіяж',
    },
    {
      name: 'Юлія К.',
      rating: 5,
      date: '1 місяць тому',
      text: 'Після лише 3 сеансів я вже бачу значні результати лазерної епіляції. Процедура була набагато комфортнішою, ніж я очікувала. Персонал дуже доброзичливий і компетентний. Співвідношення ціни і якості чудове!',
      service: 'Лазерна епіляція',
    },
    {
      name: 'Софія В.',
      rating: 5,
      date: '1 місяць тому',
      text: 'Ламінування брів тримається вже більше 5 тижнів і виглядає все ще чудово! Нарешті у мене доглянуті, рівні брови, про які я завжди мріяла. Салон сучасний і дуже чистий.',
      service: 'Ламінування',
    },
    {
      name: 'Олена П.',
      rating: 5,
      date: '2 місяці тому',
      text: 'Пройшла курс Anti-Aging і більш ніж задоволена. Моя шкіра стала більш пружною і свіжою. Процедури були розслаблюючими, а результати говорять самі за себе. З задоволенням прийду знову!',
      service: 'Anti-Aging',
    },
    {
      name: 'Наталія Х.',
      rating: 5,
      date: '2 місяці тому',
      text: 'Чудовий досвід! Я пройшла тут курс нарощування вій і можу тільки рекомендувати. Тренер була дуже терплячою і все чудово пояснила. Тепер я сама працюю лешмейкером!',
      service: 'Навчання',
    },
    {
      name: 'Ліза М.',
      rating: 5,
      date: '3 місяці тому',
      text: 'Гігієна та професіоналізм на найвищому рівні. Тут я завжди почуваюся в надійних руках. Ціни справедливі, а якість роботи відмінна. Мій постійний салон!',
      service: 'Різні процедури',
    },
    {
      name: 'Крістіна Б.',
      rating: 5,
      date: '3 місяці тому',
      text: 'Догляд за обличчям був фантастичним! Моя шкіра така м\'яка і свіжа. Продукти, які використовувалися, високої якості, і різниця помітна одразу.',
      service: 'Догляд за обличчям',
    },
    {
      name: 'Ольга К.',
      rating: 5,
      date: '4 місяці тому',
      text: 'Можу тільки гаряче рекомендувати NATA LUX! Особливо видалення ПМ пройшло успішно. Професійно, чисто і з чудовим результатом. Команда справді приділяє час кожному клієнту.',
      service: 'Видалення ПМ',
    },
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('reviews.title')}
          </h1>
          
          {/* Rating Summary */}
          <div className="glass rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <div className="text-4xl font-heading font-semibold text-brand-gold mb-2">
              {averageRating.toFixed(1)}
            </div>
            <p className="text-brand-coffee/70">
              {language === 'de'
                ? `Basierend auf ${totalReviews} Bewertungen`
                : language === 'ru'
                ? `На основе ${totalReviews} отзывов`
                : `На основі ${totalReviews} відгуків`}
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover-lift animate-slide-up relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/20" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-sm text-brand-coffee/60">{review.date}</span>
              </div>
              
              <p className="text-brand-coffee/80 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-brand-gold/10 pt-4">
                <p className="font-semibold text-brand-espresso mb-1">
                  {review.name}
                </p>
                <p className="text-sm text-brand-gold">
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {language === 'de' ? 'Teilen Sie Ihre Erfahrung' : language === 'ru' ? 'Поделитесь своим опытом' : 'Поділіться своїм досвідом'}
          </h2>
          <p className="text-brand-coffee/70 mb-6 leading-relaxed">
            {language === 'de'
              ? 'Waren Sie zufrieden mit unserer Behandlung? Wir freuen uns über Ihr Feedback!'
              : language === 'ru'
              ? 'Остались довольны нашей процедурой? Мы будем рады вашему отзыву!'
              : 'Залишилися задоволені нашою процедурою? Ми будемо раді вашому відгуку!'}
          </p>
          <a
            href="https://g.page/r/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all shadow-medium hover:shadow-glow"
          >
            {language === 'de' ? 'Bewertung auf Google schreiben' : language === 'ru' ? 'Написать отзыв на Google' : 'Написати відгук на Google'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
