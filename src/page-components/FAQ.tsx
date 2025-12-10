'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t, language } = useLanguage();
  const isGerman = language === 'de';

  const faqCategories = language === 'de' ? [
    {
      category: 'Wimpernverlängerung',
      questions: [
        {
          q: 'Wie lange dauert eine Wimpernverlängerung?',
          a: 'Eine vollständige Wimpernverlängerung (Neuanlage) dauert je nach gewünschtem Look zwischen 60 und 150 Minuten. Classic Lashes benötigen etwa 60-90 Minuten, während 3D Volume bis zu 150 Minuten dauern kann.',
        },
        {
          q: 'Wie lange halten die Wimpern?',
          a: 'Die Wimpernverlängerung hält 3-4 Wochen. Da unsere natürlichen Wimpern einem Wachstumszyklus unterliegen, empfehlen wir ein Auffüllen alle 2-3 Wochen, um das volle Aussehen zu bewahren.',
        },
        {
          q: 'Kann ich mit Wimpernverlängerungen schwimmen gehen?',
          a: 'Ja! Nach den ersten 24-48 Stunden, in denen der Kleber vollständig aushärtet, können Sie normal schwimmen, duschen und Sport treiben. Vermeiden Sie jedoch starkes Reiben.',
        },
        {
          q: 'Tut die Behandlung weh?',
          a: 'Nein, die Behandlung ist schmerzfrei. Die meisten Kunden entspannen sich so sehr, dass sie einschlafen. Nur bei sehr empfindlichen Augen kann es zu leichtem Kribbeln kommen.',
        },
      ],
    },
    {
      category: 'Permanent Make-up',
      questions: [
        {
          q: 'Wie lange hält Permanent Make-up?',
          a: 'Je nach Technik und Hauttyp hält PMU 1-3 Jahre. Powder Brows halten meist länger als Microblading. Eine Auffrischung alle 12-18 Monate erhält die Farbintensität.',
        },
        {
          q: 'Ist PMU schmerzhaft?',
          a: 'Wir arbeiten mit betäubender Creme, sodass die Behandlung nur minimal unangenehm ist. Die meisten Kunden empfinden es als leichtes Kratzen oder Kribbeln.',
        },
        {
          q: 'Kann ich die Form und Farbe selbst wählen?',
          a: 'Absolut! Bei der Beratung besprechen wir gemeinsam Form, Farbe und Technik. Wir zeichnen die Form vor und Sie geben die finale Zustimmung, bevor wir beginnen.',
        },
        {
          q: 'Was ist nach der Behandlung zu beachten?',
          a: 'Die ersten 7-10 Tage sind wichtig für die Heilung. Vermeiden Sie Wasser, Schwitzen, Sonne und Makeup auf der behandelten Stelle. Wir geben Ihnen detaillierte Pflegehinweise.',
        },
      ],
    },
    {
      category: 'Laser Haarentfernung',
      questions: [
        {
          q: 'Wie viele Sitzungen brauche ich?',
          a: 'In der Regel sind 6-10 Sitzungen nötig für ein optimales Ergebnis. Der genaue Bedarf hängt von Ihrer Haarstruktur, Hauttyp und behandelten Bereich ab.',
        },
        {
          q: 'Ist die Behandlung schmerzhaft?',
          a: 'Die meisten Kunden beschreiben es als leichtes Kribbeln oder warmes Gummiband-Gefühl. Wir verwenden moderne Geräte mit Kühlsystem für maximalen Komfort.',
        },
        {
          q: 'Für welche Hauttypen ist Laser geeignet?',
          a: 'Unsere Alexandrit- und Dioden-Laser sind für die meisten Haut- und Haartypen geeignet. Bei der Erstberatung prüfen wir, welches Gerät optimal für Sie ist.',
        },
        {
          q: 'Wann sehe ich erste Ergebnisse?',
          a: 'Nach 2-3 Sitzungen werden Sie bereits eine deutliche Reduktion bemerken. Die Haare wachsen dünner und langsamer nach.',
        },
      ],
    },
    {
      category: 'Schulungen',
      questions: [
        {
          q: 'Brauche ich Vorkenntnisse?',
          a: 'Nein! Unsere Kurse beginnen bei den Grundlagen. Wir schulen sowohl Anfänger als auch Fortgeschrittene, die ihre Technik verbessern möchten.',
        },
        {
          q: 'Bekomme ich ein Zertifikat?',
          a: 'Ja, nach erfolgreichem Abschluss erhalten Sie ein offizielles Zertifikat, das Ihre Qualifikation bestätigt.',
        },
        {
          q: 'Was ist im Kurspreis enthalten?',
          a: 'Je nach Kurs sind Modelle, Starter-Kit mit Produkten, Arbeitsunterlagen, Zertifikat und lebenslange Nachbetreuung enthalten.',
        },
        {
          q: 'Kann ich nach dem Kurs direkt arbeiten?',
          a: 'Nach dem Kurs haben Sie das theoretische und praktische Wissen. Für bestimmte Behandlungen (z.B. Laser) benötigen Sie zusätzlich ein NiSV-Zertifikat.',
        },
      ],
    },
    {
      category: 'Allgemein',
      questions: [
        {
          q: 'Wie buche ich einen Termin?',
          a: 'Am einfachsten über WhatsApp, telefonisch oder über das Kontaktformular. Wir melden uns zeitnah zurück.',
        },
        {
          q: 'Welche Zahlungsmethoden akzeptieren Sie?',
          a: 'Wir akzeptieren Bargeld, EC-Karte und Kreditkarte. Für größere Behandlungen oder Kurse bieten wir auch Ratenzahlung an.',
        },
        {
          q: 'Kann ich einen Termin absagen?',
          a: 'Ja, bitte informieren Sie uns mindestens 24 Stunden vorher. Bei kurzfristigen Absagen behalten wir uns eine Stornogebühr vor.',
        },
        {
          q: 'Bieten Sie Geschenkgutscheine an?',
          a: 'Ja! Unsere Gutscheine sind das perfekte Geschenk und für alle Behandlungen einlösbar.',
        },
      ],
    },
  ] : language === 'ru' ? [
    {
      category: 'Наращивание ресниц',
      questions: [
        {
          q: 'Сколько длится наращивание ресниц?',
          a: 'Полное наращивание ресниц занимает от 60 до 150 минут в зависимости от желаемого эффекта. Классика требует около 60-90 минут, а 3D объём — до 150 минут.',
        },
        {
          q: 'Как долго держатся ресницы?',
          a: 'Наращенные ресницы держатся 3-4 недели. Поскольку наши натуральные ресницы имеют цикл роста, мы рекомендуем коррекцию каждые 2-3 недели для поддержания объёма.',
        },
        {
          q: 'Можно ли плавать с наращенными ресницами?',
          a: 'Да! После первых 24-48 часов, пока клей полностью застынет, вы можете плавать, принимать душ и заниматься спортом. Избегайте сильного трения.',
        },
        {
          q: 'Больно ли делать процедуру?',
          a: 'Нет, процедура безболезненна. Большинство клиентов так расслабляются, что засыпают. Только при очень чувствительных глазах может быть лёгкое покалывание.',
        },
      ],
    },
    {
      category: 'Перманентный макияж',
      questions: [
        {
          q: 'Как долго держится перманентный макияж?',
          a: 'В зависимости от техники и типа кожи ПМ держится 1-3 года. Пудровые брови обычно держатся дольше микроблейдинга. Коррекция каждые 12-18 месяцев сохраняет яркость цвета.',
        },
        {
          q: 'Болезненна ли процедура ПМ?',
          a: 'Мы используем анестезирующий крем, поэтому процедура минимально дискомфортна. Большинство клиентов ощущают лёгкое царапание или покалывание.',
        },
        {
          q: 'Могу ли я выбрать форму и цвет?',
          a: 'Конечно! На консультации мы вместе обсуждаем форму, цвет и технику. Мы рисуем форму заранее, и вы даёте окончательное согласие перед началом.',
        },
        {
          q: 'Что нужно соблюдать после процедуры?',
          a: 'Первые 7-10 дней важны для заживления. Избегайте воды, потоотделения, солнца и макияжа на обработанном участке. Мы даём подробные рекомендации по уходу.',
        },
      ],
    },
    {
      category: 'Лазерная эпиляция',
      questions: [
        {
          q: 'Сколько сеансов мне нужно?',
          a: 'Обычно требуется 6-10 сеансов для оптимального результата. Точное количество зависит от структуры волос, типа кожи и обрабатываемой зоны.',
        },
        {
          q: 'Болезненна ли процедура?',
          a: 'Большинство клиентов описывают ощущение как лёгкое покалывание или тёплый щелчок резинки. Мы используем современное оборудование с системой охлаждения для максимального комфорта.',
        },
        {
          q: 'Для каких типов кожи подходит лазер?',
          a: 'Наши александритовые и диодные лазеры подходят для большинства типов кожи и волос. На первичной консультации мы определим, какой аппарат оптимален для вас.',
        },
        {
          q: 'Когда я увижу первые результаты?',
          a: 'После 2-3 сеансов вы заметите значительное уменьшение волос. Волосы растут тоньше и медленнее.',
        },
      ],
    },
    {
      category: 'Обучение',
      questions: [
        {
          q: 'Нужен ли опыт?',
          a: 'Нет! Наши курсы начинаются с основ. Мы обучаем как новичков, так и тех, кто хочет улучшить свою технику.',
        },
        {
          q: 'Получу ли я сертификат?',
          a: 'Да, после успешного завершения вы получите официальный сертификат, подтверждающий вашу квалификацию.',
        },
        {
          q: 'Что входит в стоимость курса?',
          a: 'В зависимости от курса включены модели, стартовый набор с материалами, учебные пособия, сертификат и пожизненная поддержка.',
        },
        {
          q: 'Могу ли я работать сразу после курса?',
          a: 'После курса у вас будут теоретические и практические знания. Для некоторых процедур (например, лазер) дополнительно требуется сертификат NiSV.',
        },
      ],
    },
    {
      category: 'Общие вопросы',
      questions: [
        {
          q: 'Как записаться на приём?',
          a: 'Проще всего через WhatsApp, по телефону или через контактную форму. Мы свяжемся с вами в ближайшее время.',
        },
        {
          q: 'Какие способы оплаты вы принимаете?',
          a: 'Мы принимаем наличные, карту EC и кредитную карту. Для крупных процедур или курсов предлагаем рассрочку.',
        },
        {
          q: 'Могу ли я отменить запись?',
          a: 'Да, пожалуйста, сообщите нам минимум за 24 часа. При поздней отмене мы оставляем за собой право взимать плату за отмену.',
        },
        {
          q: 'Предлагаете ли вы подарочные сертификаты?',
          a: 'Да! Наши сертификаты — идеальный подарок, их можно использовать для любых процедур.',
        },
      ],
    },
  ] : [
    {
      category: 'Нарощування вій',
      questions: [
        {
          q: 'Скільки триває нарощування вій?',
          a: 'Повне нарощування вій займає від 60 до 150 хвилин залежно від бажаного ефекту. Класика потребує близько 60-90 хвилин, а 3D об\'єм — до 150 хвилин.',
        },
        {
          q: 'Як довго тримаються вії?',
          a: 'Наро��ені вії тримаються 3-4 тижні. Оскільки наші натуральні вії мають цикл росту, ми рекомендуємо корекцію кожні 2-3 тижні для підтримання об\'єму.',
        },
        {
          q: 'Чи можна плавати з нарощеними віями?',
          a: 'Так! Після перших 24-48 годин, поки клей повністю застигне, ви можете плавати, приймати душ і займатися спортом. Уникайте сильного тертя.',
        },
        {
          q: 'Чи боляче робити процедуру?',
          a: 'Ні, процедура безболісна. Більшість клієнтів так розслабляються, що засинають. Тільки при дуже чутливих очах може бути легке поколювання.',
        },
      ],
    },
    {
      category: 'Перманентний макіяж',
      questions: [
        {
          q: 'Як довго тримається перманентний макіяж?',
          a: 'Залежно від техніки та типу шкіри ПМ тримається 1-3 роки. Пудрові брови зазвичай тримаються довше ніж мікроблейдинг. Корекція кожні 12-18 місяців зберігає яскравість кольору.',
        },
        {
          q: 'Чи болісна процедура ПМ?',
          a: 'Ми використовуємо знеболювальний крем, тому процедура мінімально дискомфортна. Більшість клієнтів відчувають легке подряпування або поколювання.',
        },
        {
          q: 'Чи можу я обрати форму і колір?',
          a: 'Звичайно! На консультації ми разом обговорюємо форму, колір і техніку. Ми малюємо форму заздалегідь, і ви даєте остаточну згоду перед початком.',
        },
        {
          q: 'Що потрібно дотримуватися після процедури?',
          a: 'Перші 7-10 днів важливі для загоєння. Уникайте води, потовиділення, сонця та макіяжу на обробленій ділянці. Ми даємо детальні рекомендації з догляду.',
        },
      ],
    },
    {
      category: 'Лазерна епіляція',
      questions: [
        {
          q: 'Скільки сеансів мені потрібно?',
          a: 'Зазвичай потрібно 6-10 сеансів для оптимального результату. Точна кількість залежить від структури волосся, типу шкіри та зони обробки.',
        },
        {
          q: 'Чи болісна процедура?',
          a: 'Більшість клієнтів описують відчуття як легке поколювання або теплий клацок гумки. Ми використовуємо сучасне обладнання з системою охолодження для максимального комфорту.',
        },
        {
          q: 'Для яких типів шкіри підходить лазер?',
          a: 'Наші олександритові та діодні лазери підходять для більшості типів шкіри та волосся. На первинній консультації ми визначимо, який апарат оптимальний для вас.',
        },
        {
          q: 'Коли я побачу перші результати?',
          a: 'Після 2-3 сеансів ви помітите значне зменшення волосся. Волосся росте тоншим і повільніше.',
        },
      ],
    },
    {
      category: 'Навчання',
      questions: [
        {
          q: 'Чи потрібен досвід?',
          a: 'Ні! Наші курси починаються з основ. Ми навчаємо як новачків, так і тих, хто хоче покращити свою техніку.',
        },
        {
          q: 'Чи отримаю я сертифікат?',
          a: 'Так, після успішного завершення ви отримаєте офіційний сертифікат, що підтверджує вашу кваліфікацію.',
        },
        {
          q: 'Що входить у вартість курсу?',
          a: 'Залежно від курсу включені моделі, стартовий набір з матеріалами, навчальні посібники, сертифікат та довічна підтримка.',
        },
        {
          q: 'Чи можу я працювати одразу після курсу?',
          a: 'Після курсу у вас будуть теоретичні та практичні знання. Для деяких процедур (наприклад, лазер) додатково потрібен сертифікат NiSV.',
        },
      ],
    },
    {
      category: 'Загальні питання',
      questions: [
        {
          q: 'Як записатися на прийом?',
          a: 'Найпростіше через WhatsApp, по телефону або через контактну форму. Ми зв\'яжемося з вами найближчим часом.',
        },
        {
          q: 'Які способи оплати ви приймаєте?',
          a: 'Ми приймаємо готівку, картку EC та кредитну картку. Для великих процедур або курсів пропонуємо розстрочку.',
        },
        {
          q: 'Чи можу я скасувати запис?',
          a: 'Так, будь ласка, повідомте нас мінімум за 24 години. При пізній відміні ми залишаємо за собою право стягувати плату за скасування.',
        },
        {
          q: 'Чи пропонуєте ви подарункові сертифікати?',
          a: 'Так! Наші сертифікати — ідеальний подарунок, їх можна використовувати для будь-яких процедур.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-espresso mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-brand-coffee/80 leading-relaxed">
            {language === 'de'
              ? 'Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Behandlungen und Services.'
              : language === 'ru'
              ? 'Здесь вы найдёте ответы на самые частые вопросы о наших процедурах и услугах.'
              : 'Тут ви знайдете відповіді на найпоширеніші питання про наші процедури та послуги.'}
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {faqCategories.map((category, index) => (
            <div 
              key={category.category}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-6">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem 
                    key={qIndex} 
                    value={`${category.category}-${qIndex}`}
                    className="glass rounded-xl px-6 border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-brand-espresso hover:text-brand-gold py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-coffee/70 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-espresso mb-4">
            {language === 'de' ? 'Noch Fragen?' : language === 'ru' ? 'Остались вопросы?' : 'Залишилися питання?'}
          </h2>
          <p className="text-brand-coffee/70 mb-6 leading-relaxed">
            {language === 'de'
              ? 'Wenn Sie weitere Fragen haben, kontaktieren Sie uns gerne direkt.'
              : language === 'ru'
              ? 'Если у вас есть другие вопросы, свяжитесь с нами напрямую.'
              : 'Якщо у вас є інші питання, зв\'яжіться з нами напряму.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4917677267269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium rounded-xl transition-all shadow-medium hover:shadow-glow inline-block"
            >
              WhatsApp
            </a>
            <a
              href="tel:+4917677267269"
              className="px-8 py-3 border-2 border-brand-gold text-brand-espresso hover:bg-brand-gold/10 font-medium rounded-xl transition-all inline-block"
            >
              {language === 'de' ? 'Anrufen' : language === 'ru' ? 'Позвонить' : 'Подзвонити'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
