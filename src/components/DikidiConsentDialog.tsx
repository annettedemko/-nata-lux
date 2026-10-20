'use client'

import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const DIKIDI_URL = 'https://dikidi.ru/1904110';

interface DikidiConsentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DikidiConsentDialog = ({ isOpen, onClose }: DikidiConsentDialogProps) => {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleAccept = () => {
    localStorage.setItem('dikidi-consent', 'accepted');
    localStorage.setItem('dikidi-consent-timestamp', new Date().toISOString());
    const win = window.open(DIKIDI_URL, '_blank');
    if (!win) {
      window.location.href = DIKIDI_URL;
    }
    onClose();
  };

  const content = {
    de: {
      title: 'Hinweis zur Online-Terminbuchung',
      warning: 'Datenübermittlung in ein Drittland',
      description: 'Die Online-Terminbuchung erfolgt über den externen Dienst DIKIDI, ein Unternehmen mit Sitz in der Russischen Föderation. Die Russische Föderation verfügt über keinen Angemessenheitsbeschluss der EU-Kommission gemäß Art. 45 DSGVO.',
      data: 'Bei der Nutzung des Buchungssystems können personenbezogene Daten (Name, Telefonnummer, E-Mail-Adresse, Terminwünsche) in die Russische Föderation übermittelt werden.',
      consent: 'Mit dem Klick auf „Weiter zu DIKIDI" erteilen Sie Ihre ausdrückliche Einwilligung in die Datenübermittlung gemäß Art. 49 Abs. 1 lit. a DSGVO.',
      alternative: 'Alternativ können Sie Ihren Termin telefonisch, per E-Mail oder über WhatsApp buchen – ohne Datenübermittlung nach Russland.',
      accept: 'Weiter zu DIKIDI',
      decline: 'Abbrechen',
      altBook: 'Alternativ buchen',
    },
    ru: {
      title: 'Информация об онлайн-записи',
      warning: 'Передача данных в третью страну',
      description: 'Онлайн-запись осуществляется через внешний сервис DIKIDI — компанию, зарегистрированную в Российской Федерации. Российская Федерация не имеет решения ЕС об адекватности защиты данных согласно Art. 45 DSGVO.',
      data: 'При использовании системы бронирования персональные данные (имя, номер телефона, адрес электронной почты, желаемое время записи) могут быть переданы в Российскую Федерацию.',
      consent: 'Нажимая „Перейти в DIKIDI", вы даёте своё явное согласие на передачу данных в соответствии с Art. 49 Abs. 1 lit. a DSGVO.',
      alternative: 'Вы также можете записаться на приём по телефону, электронной почте или через WhatsApp — без передачи данных в Россию.',
      accept: 'Перейти в DIKIDI',
      decline: 'Отмена',
      altBook: 'Записаться иначе',
    },
    ua: {
      title: 'Інформація про онлайн-запис',
      warning: 'Передача даних до третьої країни',
      description: 'Онлайн-запис здійснюється через зовнішній сервіс DIKIDI — компанію, зареєстровану в Російській Федерації. Російська Федерація не має рішення ЄС про адекватність захисту даних згідно з Art. 45 DSGVO.',
      data: 'При використанні системи бронювання персональні дані (ім\'я, номер телефону, адреса електронної пошти, бажаний час запису) можуть бути передані до Російської Федерації.',
      consent: 'Натискаючи „Перейти в DIKIDI", ви надаєте свою явну згоду на передачу даних відповідно до Art. 49 Abs. 1 lit. a DSGVO.',
      alternative: 'Ви також можете записатися на прийом телефоном, електронною поштою або через WhatsApp — без передачі даних до Росії.',
      accept: 'Перейти в DIKIDI',
      decline: 'Скасувати',
      altBook: 'Записатися інакше',
    },
  };

  const t = content[language];

  // Use portal to render dialog in document.body.
  // This avoids CSS stacking context issues when the dialog is inside
  // a parent with CSS transform (e.g. motion.header from Framer Motion),
  // which breaks position:fixed positioning.
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-heading font-semibold text-brand-espresso">{t.title}</h2>
            <p className="text-sm text-amber-600 font-medium">{t.warning}</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 text-sm text-brand-coffee/80 mb-6">
          <p>{t.description}</p>
          <p>{t.data}</p>
          <p className="font-medium text-brand-espresso">{t.consent}</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
            <p className="text-green-800">{t.alternative}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleAccept}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-espresso text-white font-medium rounded-xl hover:bg-brand-espresso/90 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            {t.accept}
          </button>
          <a
            href="/contact"
            className="w-full flex items-center justify-center px-6 py-3 bg-brand-gold text-white font-medium rounded-xl hover:bg-brand-gold/90 transition-all duration-300"
          >
            {t.altBook}
          </a>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-transparent border border-brand-coffee/20 text-brand-coffee font-medium rounded-xl hover:bg-brand-coffee/5 transition-all duration-300"
          >
            {t.decline}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

/**
 * Hook that provides a function to open DIKIDI with consent check.
 * If the user has already consented, opens directly.
 * Otherwise, shows the consent dialog.
 */
export const useDikidiConsent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDikidi = useCallback(() => {
    const consent = localStorage.getItem('dikidi-consent');
    if (consent === 'accepted') {
      const win = window.open(DIKIDI_URL, '_blank');
      if (!win) {
        window.location.href = DIKIDI_URL;
      }
    } else {
      setIsDialogOpen(true);
    }
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  return { isDialogOpen, openDikidi, closeDialog };
};

export default DikidiConsentDialog;
