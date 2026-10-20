'use client'

import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PremiumGallery } from '@/components/PremiumGallery';
import { ProcedureSchema } from '@/components/ProcedureSchema';

const Microneedling = () => {
  const { language } = useLanguage();

  const galleryImages = ['/microneedling-gesicht-muenchen.jpg', '/microneedling-behandlung.jpg', '/microneedling-ergebnis.jpg', '/microneedling-vorher-nachher.jpg', '/microneedling-resultat.jpg'];

  // Schema section
  const schemaSection = (
    <ProcedureSchema
      germanImages={['/microneedling-zertifikat-muenchen.png']}
      russianImages={['/microneedling-detail.jpg']}
      ukrainianImages={['/microneedling-detail.jpg']}
      altTextGerman="Microneedling Schema"
      altTextRussian="Схема микронидлинга"
      altTextUkrainian="Схема мікронідлінгу"
      scale={0.67}
    />
  );

  const photoGallery = (
    <PremiumGallery images={galleryImages} />
  );

  return (
    <ServicePageLayout
      icon={Scissors}
      title="Microneedling"
      subtitle={language === 'de'
        ? "Kollagen-Induktion für ein frischeres Hautbild, eine ebenmäßigere Hautstruktur und gepflegte Kopfhaut"
        : language === 'ru' ? "Коллаген-индукция для более свежего вида кожи, выравнивания рельефа и ухода за кожей головы"
        : "Колаген-індукція для свіжішого вигляду шкіри, вирівнювання рельєфу та догляду за шкірою голови"}
      aboutTitle={language === 'de' ? "Was ist Microneedling?" : language === 'ru' ? "Что такое микронидлинг?" : "Що таке мікронідлінг?"}
      aboutDescription={language === 'de' ? [
        'Microneedling (auch Kollagen-Induktionstherapie genannt) ist eine moderne kosmetische Behandlung für ein frischeres, ebenmäßigeres Hautbild. Mit einem speziellen Gerät werden feine Mikrokanäle in der Haut erzeugt, die die hauteigene Kollagen- und Elastinbildung anregen können.',
        'Dieser gezielte Reiz aktiviert die natürlichen Erneuerungsprozesse der Haut und verbessert die Aufnahme von Pflegewirkstoffen wie Hyaluronsäure, Vitaminen und Exosomen – die Haut kann dadurch straffer, glatter und frischer wirken.',
        'Microneedling eignet sich sehr gut, um das Erscheinungsbild von feinen Linien, Fältchen, Aknenarben, Pigmentflecken, vergrößerten Poren und Dehnungsstreifen zu mildern. An der Kopfhaut wird es als pflegende Behandlung eingesetzt, die das Haarwachstum unterstützen kann.',
        'Die Behandlung ist für Gesicht, Hals, Dekolleté, Kopfhaut und andere Körperzonen geeignet und kann je nach Hautzustand und Behandlungsziel individuell angepasst werden.'
      ] : language === 'ru' ? [
        'Микронидлинг (также называемый коллаген-индукционной терапией) — современная косметическая процедура для более свежего и ровного вида кожи. С помощью специального аппарата в коже создаются тонкие микроканалы, которые могут стимулировать естественную выработку коллагена и эластина.',
        'Этот направленный стимул активирует естественные процессы обновления кожи и улучшает проникновение ухаживающих активных веществ — гиалуроновой кислоты, витаминов и экзосом. Кожа может выглядеть более упругой, гладкой и свежей.',
        'Микронидлинг хорошо подходит для того, чтобы смягчить внешний вид мелких морщин, следов постакне, пигментных пятен, расширенных пор и растяжек. На коже головы процедура применяется как ухаживающая и может поддержать рост волос.',
        'Процедура подходит для лица, шеи, декольте, кожи головы и других зон тела и может быть индивидуально адаптирована в зависимости от состояния кожи и целей процедуры.'
      ] : [
        'Мікронідлінг (також відомий як колаген-індукційна терапія) — сучасна косметична процедура для свіжішого та рівнішого вигляду шкіри. За допомогою спеціального апарату у шкірі створюються тонкі мікроканали, які можуть стимулювати природне вироблення колагену та еластину.',
        'Цей спрямований стимул активує природні процеси оновлення шкіри та покращує проникнення доглядових активних речовин — гіалуронової кислоти, вітамінів та екзосом. Шкіра може виглядати пружнішою, гладшою та свіжішою.',
        'Мікронідлінг добре підходить для того, щоб пом’якшити вигляд дрібних зморшок, слідів постакне, пігментних плям, розширених пор та розтяжок. На шкірі голови процедура застосовується як доглядова і може підтримати ріст волосся.',
        'Процедура підходить для обличчя, шиї, декольте, шкіри голови та інших зон тіла і може бути індивідуально адаптована залежно від стану шкіри та цілей процедури.'
      ]}
      benefits={language === 'de' ? [
        'Kann die hauteigene Kollagen- und Elastinbildung anregen',
        'Kann feine Linien und Fältchen mildern',
        'Kann das Erscheinungsbild von Aknenarben mildern',
        'Poren können feiner wirken',
        'Für einen ebenmäßigeren Hautton',
        'Für ein strafferes, festeres Hautgefühl',
        'Kann das Haarwachstum unterstützen',
        'Verbessert die Aufnahme von Pflegewirkstoffen',
        'Kann Dehnungsstreifen optisch mildern',
        'Für viele Hauttypen geeignet',
        'Geringe Ausfallzeit',
        'Natürliche Ergebnisse ohne Füllstoffe'
      ] : language === 'ru' ? [
        'Может стимулировать естественную выработку коллагена и эластина',
        'Может смягчить мелкие морщины',
        'Может сделать следы постакне менее заметными',
        'Поры могут выглядеть менее заметными',
        'Для более ровного тона кожи',
        'Для ощущения более упругой и подтянутой кожи',
        'Может поддержать рост волос',
        'Улучшает проникновение ухаживающих веществ',
        'Может визуально смягчить растяжки',
        'Подходит для многих типов кожи',
        'Минимальный период восстановления',
        'Естественные результаты без филлеров'
      ] : [
        'Може стимулювати природне вироблення колагену та еластину',
        'Може пом’якшити дрібні зморшки',
        'Може зробити сліди постакне менш помітними',
        'Пори можуть виглядати менш помітними',
        'Для рівнішого тону шкіри',
        'Для відчуття пружнішої та підтягнутої шкіри',
        'Може підтримати ріст волосся',
        'Покращує проникнення доглядових речовин',
        'Може візуально пом’якшити розтяжки',
        'Підходить для багатьох типів шкіри',
        'Мінімальний період відновлення',
        'Природні результати без філерів'
      ]}
      steps={language === 'de' ? [
        {
          title: 'Hautvorbereitung',
          description: 'Gründliche Reinigung und Desinfektion. Bei Bedarf Auftragen einer betäubenden Creme für mehr Komfort.'
        },
        {
          title: 'Microneedling-Behandlung',
          description: 'Präzise Behandlung mit dem Microneedling-Gerät. Tiefe und Intensität werden individuell angepasst.'
        },
        {
          title: 'Wirkstoff-Infusion',
          description: 'Auftragen von Seren mit Exosomen, Hyaluronsäure, Vitaminen oder Kollagen – abgestimmt auf Ihr Behandlungsziel.'
        },
        {
          title: 'Abschluss & Pflege',
          description: 'Beruhigende Maske, Darsonval oder Peeling falls nötig. Pflegeanweisungen für zu Hause.'
        }
      ] : language === 'ru' ? [
        {
          title: 'Подготовка кожи',
          description: 'Тщательное очищение и дезинфекция. При необходимости нанесение анестезирующего крема для большего комфорта.'
        },
        {
          title: 'Процедура микронидлинг',
          description: 'Точная обработка аппаратом для микронидлинга. Глубина и интенсивность подбираются индивидуально.'
        },
        {
          title: 'Инфузия активных веществ',
          description: 'Нанесение сывороток с экзосомами, гиалуроновой кислотой, витаминами или коллагеном — с учётом ваших целей.'
        },
        {
          title: 'Завершение и уход',
          description: 'Успокаивающая маска, дарсонваль или пилинг при необходимости. Инструкции по уходу дома.'
        }
      ] : [
        {
          title: 'Підготовка шкіри',
          description: 'Ретельне очищення та дезінфекція. За потреби нанесення знеболювального крему для більшого комфорту.'
        },
        {
          title: 'Процедура мікронідлінг',
          description: 'Точна обробка апаратом для мікронідлінгу. Глибина та інтенсивність підбираються індивідуально.'
        },
        {
          title: 'Інфузія активних речовин',
          description: 'Нанесення сироваток з екзосомами, гіалуроновою кислотою, вітамінами або колагеном — з урахуванням ваших цілей.'
        },
        {
          title: 'Завершення та догляд',
          description: 'Заспокійлива маска, дарсонваль або пілінг за потреби. Інструкції з догляду вдома.'
        }
      ]}
      procedureSchema={schemaSection}
      additionalSections={photoGallery}
      priceSection="microneedling"
      contraindications={language === 'de' ? [
        'Aktive Akne oder Hautinfektionen',
        'Herpes (mind. 2 Wochen vorher behandeln)',
        'Schwangerschaft und Stillzeit',
        'Einnahme von Blutverdünnern oder Isotretinoin',
        'Diabetes (nur mit ärztlicher Erlaubnis)',
        'Keloidneigung',
        'Frische Sonnenbräune oder Sonnenbrand',
        'Rosacea im aktiven Stadium',
        'Autoimmunerkrankungen'
      ] : language === 'ru' ? [
        'Активные акне или кожные инфекции',
        'Герпес (лечить минимум за 2 недели)',
        'Беременность и период кормления',
        'Приём препаратов, разжижающих кровь, или изотретиноина',
        'Диабет (только с разрешения врача)',
        'Склонность к келоидным рубцам',
        'Свежий загар или солнечный ожог',
        'Розацеа в активной стадии',
        'Аутоиммунные заболевания'
      ] : [
        'Активне акне або шкірні інфекції',
        'Герпес (лікувати мінімум за 2 тижні)',
        'Вагітність та період годування',
        'Прийом препаратів, що розріджують кров, або ізотретиноїну',
        'Діабет (тільки з дозволу лікаря)',
        'Схильність до келоїдних рубців',
        'Свіжа засмага або сонячний опік',
        'Розацеа в активній стадії',
        'Автоімунні захворювання'
      ]}
      faq={language === 'de' ? [
        {
          q: 'Ist Microneedling schmerzhaft?',
          a: 'Mit betäubender Creme ist die Behandlung gut erträglich. Sie spüren ein leichtes Kribbeln oder Prickeln. Die Empfindlichkeit variiert je nach behandelter Zone.'
        },
        {
          q: 'Wie viele Behandlungen brauche ich?',
          a: 'Je nach Ziel empfehlen wir in der Regel 3-6 Sitzungen im Abstand von 2-4 Wochen. Bei der Kopfhautbehandlung ist eine Kur über mehrere Monate sinnvoll.'
        },
        {
          q: 'Wie lange dauert die Erholungsphase?',
          a: 'Die Haut ist 1-3 Tage gerötet (wie leichter Sonnenbrand). Nach 5-7 Tagen hat sich die Haut in der Regel wieder vollständig beruhigt. Make-up ist nach 24h möglich.'
        },
        {
          q: 'Wann sehe ich Ergebnisse?',
          a: 'Erste sichtbare Veränderungen zeigen sich häufig nach 1-2 Wochen, das volle Ergebnis meist nach 4-6 Wochen. Ergebnisse sind individuell verschieden.'
        },
        {
          q: 'Was sind Exosome und warum werden sie verwendet?',
          a: 'Exosome sind winzige Botenstoff-Bläschen, die in der Kosmetik als Pflegewirkstoff eingesetzt werden. Sie sollen die natürliche Erneuerung der Haut unterstützen und ergänzen die Microneedling-Behandlung ideal.'
        }
      ] : language === 'ru' ? [
        {
          q: 'Болезненен ли микронидлинг?',
          a: 'С анестезирующим кремом процедура хорошо переносится. Вы ощущаете лёгкое покалывание. Чувствительность варьируется в зависимости от обрабатываемой зоны.'
        },
        {
          q: 'Сколько процедур мне нужно?',
          a: 'В зависимости от цели обычно рекомендуем 3-6 сеансов с интервалом 2-4 недели. Для процедур на коже головы целесообразен курс в течение нескольких месяцев.'
        },
        {
          q: 'Как долго длится восстановление?',
          a: 'Кожа покрасневшая 1-3 дня (как лёгкий загар). Через 5-7 дней кожа, как правило, полностью успокаивается. Макияж возможен через 24 часа.'
        },
        {
          q: 'Когда я увижу результаты?',
          a: 'Первые заметные изменения часто видны через 1-2 недели, полный результат — обычно через 4-6 недель. Результаты индивидуальны.'
        },
        {
          q: 'Что такое экзосомы и зачем они используются?',
          a: 'Экзосомы — крошечные везикулы-мессенджеры, которые используются в косметологии как ухаживающий компонент. Они призваны поддерживать естественное обновление кожи и отлично дополняют микронидлинг.'
        }
      ] : [
        {
          q: 'Чи болісний мікронідлінг?',
          a: 'Зі знеболювальним кремом процедура добре переноситься. Ви відчуваєте легке поколювання. Чутливість варіюється залежно від оброблюваної зони.'
        },
        {
          q: 'Скільки процедур мені потрібно?',
          a: 'Залежно від мети зазвичай рекомендуємо 3-6 сеансів з інтервалом 2-4 тижні. Для процедур на шкірі голови доцільний курс протягом кількох місяців.'
        },
        {
          q: 'Як довго триває відновлення?',
          a: 'Шкіра почервоніла 1-3 дні (як легка засмага). Через 5-7 днів шкіра, як правило, повністю заспокоюється. Макіяж можливий через 24 години.'
        },
        {
          q: 'Коли я побачу результати?',
          a: 'Перші помітні зміни часто видно через 1-2 тижні, повний результат — зазвичай через 4-6 тижнів. Результати індивідуальні.'
        },
        {
          q: 'Що таке екзосоми і навіщо вони використовуються?',
          a: 'Екзосоми — крихітні везикули-месенджери, які використовуються в косметології як доглядовий компонент. Вони покликані підтримувати природне оновлення шкіри та чудово доповнюють мікронідлінг.'
        }
      ]}
      ctaTitle={language === 'de' ? "Bereit für ein strahlendes, frisches Hautbild?" : language === 'ru' ? "Готовы к сияющей, свежей коже?" : "Готові до сяючої, свіжої шкіри?"}
      ctaDescription={language === 'de'
        ? "Buchen Sie jetzt Ihre Microneedling-Behandlung oder vereinbaren Sie eine kostenlose Beratung."
        : language === 'ru' ? "Запишитесь на процедуру микронидлинг или договоритесь о бесплатной консультации."
        : "Запишіться на процедуру мікронідлінг або домовтеся про безкоштовну консультацію."}
    />
  );
};

export default Microneedling;
