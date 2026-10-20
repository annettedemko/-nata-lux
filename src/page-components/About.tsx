'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Train } from 'lucide-react';
import { GoogleMapsEmbed } from '@/components/GoogleMapsEmbed';

const About = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/renew-biorepair-pro-maske.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>


      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Editorial Hero */}
        <div className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-12 lg:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-gold mb-4 md:mb-6 font-light">
              {language === 'de' ? 'Natalia' : language === 'ru' ? 'Наталья' : 'Наталія'}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-light tracking-tight leading-[0.95] md:leading-[0.9] mb-8 md:mb-12 lg:mb-16 text-brand-espresso px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {language === 'de' ? 'Über mich' : language === 'ru' ? 'Обо мне' : 'Про мене'}
            </h1>
          </motion.div>
        </div>

        {/* Main Content - Text First */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 md:space-y-6 text-brand-espresso leading-relaxed text-sm md:text-base">
              {isGerman ? (
                <>
                  <p>
                    Ich bin Kosmetikerin und Expertin für systemische Hautverjüngung – eine Spezialistin, die medizinisches Wissen über die Haut mit modernen, wissenschaftlich fundierten Beauty-Behandlungen verbindet. Meine Arbeit basiert auf einem tiefen Verständnis der Hautphysiologie, der altersbedingten Veränderungen und der individuellen Bedürfnisse jedes einzelnen Menschen.
                  </p>
                  <p>
                    Durch viele Jahre Erfahrung mit unterschiedlichen Kunden und vielfältigen Hautsituationen bin ich zu einer klaren Erkenntnis gekommen:<br />
                    <strong className="text-brand-gold">Man kann in jedem Alter – und mit jedem Budget – jung, gesund und gepflegt aussehen.</strong><br />
                    Der Schlüssel liegt nicht in Wundern, sondern in einem strukturierten, ganzheitlichen Ansatz und dem Verständnis dafür, wie unser Körper funktioniert.
                  </p>
                  <p>
                    Ich bin überzeugt: In jedem Menschen steckt natürliche Schönheit.<br />
                    Meine Aufgabe ist es, diese sanft hervorzuheben, zu unterstützen und in Einklang zu bringen.<br />
                    Deshalb gibt es bei mir keine standardisierten Programme.<br />
                    Ich entwickle individuelle Behandlungspläne, abgestimmt auf Hautzustand, Ziele, Lebensstil und die persönlichen Wünsche meiner Kunden.
                  </p>
                  <p>
                    Permanent Make-up zum Beispiel muss nicht auffällig sein –<br />
                    in professionellen Händen wirkt es sehr natürlich, unterstreicht Ihre eigenen Gesichtszüge und verleiht Ihnen jeden Tag ein gepflegtes, frisches Aussehen.
                  </p>
                  <p>
                    Hautverjüngung ist kein Zauberstab-Effekt.<br />
                    Es ist ein anspruchsvoller, kontinuierlicher Prozess – eine langfristige Investition in Ihre Gesundheit, Ausstrahlung und Ihr Wohlbefinden.
                  </p>
                  <p className="text-brand-gold font-semibold text-lg italic">
                    Ich lade Sie ein, in die Welt meiner Erfahrungen und Expertise einzutauchen.<br />
                    Erleben Sie, wie sich Ihre Haut verändert – und wie Ihr Selbstbewusstsein wächst.<br />
                    Willkommen in einem Raum, in dem Ihre natürliche Schönheit aufblüht.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Я — мастер-косметолог и эксперт в системном омоложении, соединяющий медицинские знания о коже с современными, научно обоснованными бьюти-технологиями. Мой подход основан на глубоком понимании физиологии, процессов старения и индивидуальных особенностей каждого человека.
                  </p>
                  <p>
                    Много лет работая с клиентами, разными запросами и ситуациями, я убедилась:<br />
                    <strong className="text-brand-gold">выглядеть молодо, здорово и ухоженно возможно в любом возрасте и с любым бюджетом.</strong><br />
                    Секрет — не в чуде и не в идеальных условиях, а в грамотном, системном подходе и понимании того, как работает наш организм.
                  </p>
                  <p>
                    Я твердо верю, что природная красота заложена в каждом.<br />
                    Моя задача — мягко подчеркнуть её, раскрыть потенциал и сохранить гармонию.<br />
                    Поэтому в моей практике нет стандартных программ «для всех».<br />
                    Я создаю индивидуальные протоколы, учитывая состояние кожи, цели, образ жизни и пожелания клиента.
                  </p>
                  <p>
                    Например, перманентный макияж — это не яркий рисунок.<br />
                    В умелых руках он может быть максимально натуральным, деликатно подчёркивающим ваши черты и создающим эффект здоровой, ухоженной кожи каждый день.
                  </p>
                  <p>
                    Процесс омоложения — это не взмах волшебной палочки.<br />
                    Это продуманный комплексный путь, который даёт устойчивый результат и становится инвестицией в ваше здоровье и красоту на многие годы.
                  </p>
                  <p className="text-brand-gold font-semibold text-lg italic">
                    Я приглашаю вас в мир знаний, профессионального подхода и эстетики.<br />
                    Позвольте себе почувствовать перемены — и увидеть, как трансформируется ваша кожа, настроение и уверенность.<br />
                    Добро пожаловать в пространство, где ваша красота раскрывается естественно.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/natalia-koziukevych-kosmetikerin-muenchen.jpeg"
                alt="Natalia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/natalia-koziukevych-behandlung.jpeg"
                alt="Natalia - Professional"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/natalia-studio-arbeit.png"
                alt="Natalia - Studio work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/natalia-kosmetik-behandlung.png"
                alt="Natalia - Treatment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-16 md:pb-24 lg:pb-32"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-light text-brand-espresso text-center mb-8 md:mb-12 lg:mb-16 px-4 break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'none' }}>
              {language === 'de' ? 'So finden Sie uns' : language === 'ru' ? 'Как нас найти' : 'Як нас знайти'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Address */}
              <div className="text-center p-4 md:p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-espresso mb-2">
                  {language === 'de' ? 'Adresse' : language === 'ru' ? 'Адрес' : 'Адреса'}
                </h3>
                <p className="text-sm md:text-base text-brand-espresso/70 leading-relaxed">
                  Elsässer Straße 33<br />
                  81667 München
                </p>
              </div>

              {/* Hours */}
              <div className="text-center p-4 md:p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-espresso mb-2">
                  {language === 'de' ? 'Öffnungszeiten' : language === 'ru' ? 'Часы работы' : 'Години роботи'}
                </h3>
                <p className="text-sm md:text-base text-brand-espresso/70 leading-relaxed">
                  {language === 'de' ? 'Mo-Fr: 10:00 - 20:00' : language === 'ru' ? 'Пн-Пт: 10:00 - 20:00' : 'Пн-Пт: 10:00 - 20:00'}<br />
                  {language === 'de' ? 'Sa: 10:00 - 18:00' : language === 'ru' ? 'Сб: 10:00 - 18:00' : 'Сб: 10:00 - 18:00'}<br />
                  {language === 'de' ? 'So: Geschlossen' : language === 'ru' ? 'Вс: Закрыто' : 'Нд: Зачинено'}
                </p>
              </div>

              {/* Transit */}
              <div className="text-center p-4 md:p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Train className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-espresso mb-2">
                  {language === 'de' ? 'Anfahrt' : language === 'ru' ? 'Как добраться' : 'Как добраться'}
                </h3>
                <p className="text-sm md:text-base text-brand-espresso/70 leading-relaxed">
                  {language === 'de' ? 'S-Bahn / U5: Ostbahnhof' : language === 'ru' ? 'S-Bahn / U5: Ostbahnhof' : 'S-Bahn / U5: Ostbahnhof'}<br />
                  {language === 'de' ? 'Tram/Bus: Orleansplatz' : language === 'ru' ? 'Трамвай/автобус: Orleansplatz' : 'Трамвай/автобус: Orleansplatz'}<br />
                  {language === 'de' ? '5–7 Min zu Fuß' : language === 'ru' ? '5–7 мин пешком' : '5–7 хв пішки'}
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(58, 44, 34, 0.15)',
              }}
            >
              <GoogleMapsEmbed
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2662.8!2d11.603257!3d48.129653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7534ffb1bdb1%3A0x751e036a37717a9f!2s%E2%80%9ENataLux%E2%80%9C%20Permanent%20Make%20Up%20Studio!5e0!3m2!1sde!2sde"
                className="rounded-2xl md:rounded-3xl"
                height="400"
              />
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
