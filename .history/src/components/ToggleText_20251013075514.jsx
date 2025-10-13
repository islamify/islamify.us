import React, { useEffect, useState } from 'react';
import FontModal from './FontModal';
import ToggleControls from './ToggleControls';
import DictionaryBlock from './DictionaryBlock';
import '@site/src/css/toggleText.css';
import '@site/src/css/typography.css';

export default function ToggleText({ lines = [], storageKey = 'textToggle', dictionary = {} }) {
  const keyA = `${storageKey}_showArabic`;
  const keyT = `${storageKey}_showTransliteration`;
  const keyR = `${storageKey}_showTranslation`;
  const keyD = `${storageKey}_showDictionary`;
  const keyAF = `${storageKey}_arabicFontSize`;
  const keyTF = `${storageKey}_transliterationFontSize`;
  const keySF = `${storageKey}_translationFontSize`;
  const keyFont = `${storageKey}_arabicFont`;
  const keyP = `${storageKey}_showPoe`;

  const [showArabic, setShowArabic] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showDictionary, setShowDictionary] = useState(true);
  const [showPoe, setShowPoe] = useState(false);

  const [arabicFontSize, setArabicFontSize] = useState(2);
  const [transliterationFontSize, setTransliterationFontSize] = useState(1.0);
  const [translationFontSize, setTranslationFontSize] = useState(1.2);
  const [poeFontSize, setPoeFontSize] = useState(1.0);

  const [arabicFont, setArabicFont] = useState('Amiri');
  const arabicFonts = ['Amiri', 'Scheherazade New', 'Noto Naskh Arabic', 'Lateef', 'Cairo'];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load and save states (same as before)
  useEffect(() => { /* ... same as before ... */ }, []);
  useEffect(() => { /* ... same as before ... */ }, [/* ... */]);

  const sortedArabicFonts = [
    arabicFont,
    ...arabicFonts.filter((f) => f !== arabicFont).sort((a, b) => a.localeCompare(b)),
  ];

  const resetDefaults = () => {
    setArabicFontSize(3);
    setTransliterationFontSize(1.2);
    setTranslationFontSize(1.5);
    setPoeFontSize(1.0);
    setArabicFont('Scheherazade New');
  };

  return (
    <div className="toggle-container center-text">
      <div className="control-panel">
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>⚙️ Font Settings</button>
        <FontModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          arabicFont={arabicFont}
          setArabicFont={setArabicFont}
          sortedArabicFonts={sortedArabicFonts}
          arabicFontSize={arabicFontSize}
          setArabicFontSize={setArabicFontSize}
          transliterationFontSize={transliterationFontSize}
          setTransliterationFontSize={setTransliterationFontSize}
          translationFontSize={translationFontSize}
          setTranslationFontSize={setTranslationFontSize}
          poeFontSize={poeFontSize}
          setPoeFontSize={setPoeFontSize}
        />
      </div>

      <ToggleControls
        showArabic={showArabic} setShowArabic={setShowArabic}
        showTransliteration={showTransliteration} setShowTransliteration={setShowTransliteration}
        showTranslation={showTranslation} setShowTranslation={setShowTranslation}
        showDictionary={showDictionary} setShowDictionary={setShowDictionary}
        showPoe={showPoe} setShowPoe={setShowPoe}
        resetDefaults={resetDefaults}
      />

      {lines.map((line, i) => (
        <div className="line-block" key={i}>
          <p
            className={`arabic ${showArabic ? '' : 'hidden'}`}
            style={{
              fontSize: `${arabicFontSize}rem`,
              direction: 'rtl',
              textAlign: 'center',
              fontFamily: arabicFont,
            }}
          >
            {line.arabic}
          </p>
          <p className={`transliteration ${showTransliteration ? '' : 'hidden'}`} style={{ fontSize: `${transliterationFontSize}rem` }}>
            {line.transliteration}
          </p>
          <p className={`translation ${showTranslation ? '' : 'hidden'}`} style={{ fontSize: `${translationFontSize}rem` }}>
            {line.translation}
          </p>
          <p className={`poe ${showPoe ? '' : 'hidden'}`} style={{ fontSize: `${poeFontSize}rem` }}>
            {line.poe}
          </p>

          <DictionaryBlock line={line} dictionary={dictionary} showDictionary={showDictionary} />
          <hr className="line-separator" />
        </div>
      ))}
    </div>
  );
}
