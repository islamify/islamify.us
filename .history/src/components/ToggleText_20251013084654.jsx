import React, { useEffect, useState } from 'react';
import FontModal from './FontModal';
import ToggleControls from './ToggleControls';
import DictionaryBlock from './DictionaryBlock';

// Import all relevant CSS pieces
import '../css/toggleText.base.css';
import '../css/toggleText.controls.css';
import '../css/toggleText.dictionary.css';
import '../css/toggleText.modal.css';
import '../css/typography.css';

export default function ToggleText({ lines = [], storageKey = 'textToggle', dictionary = {} }) {
  // Local storage keys
  const keyA = `${storageKey}_showArabic`;
  const keyT = `${storageKey}_showTransliteration`;
  const keyR = `${storageKey}_showTranslation`;
  const keyD = `${storageKey}_showDictionary`;
  const keyAF = `${storageKey}_arabicFontSize`;
  const keyTF = `${storageKey}_transliterationFontSize`;
  const keySF = `${storageKey}_translationFontSize`;
  const keyFont = `${storageKey}_arabicFont`;
  const keyP = `${storageKey}_showPoe`;

  // Toggle states
  const [showArabic, setShowArabic] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showDictionary, setShowDictionary] = useState(true);
  const [showPoe, setShowPoe] = useState(false);

  // Font sizes
  const [arabicFontSize, setArabicFontSize] = useState(2);
  const [transliterationFontSize, setTransliterationFontSize] = useState(1.0);
  const [translationFontSize, setTranslationFontSize] = useState(1.2);
  const [poeFontSize, setPoeFontSize] = useState(1.0);

  // Arabic font
  const [arabicFont, setArabicFont] = useState('Amiri');
  const arabicFonts = ['Amiri', 'Scheherazade New', 'Noto Naskh Arabic', 'Lateef', 'Cairo'];

  // Font modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load saved preferences from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sa = localStorage.getItem(keyA);
    const st = localStorage.getItem(keyT);
    const sr = localStorage.getItem(keyR);
    const sd = localStorage.getItem(keyD);
    const af = localStorage.getItem(keyAF);
    const tf = localStorage.getItem(keyTF);
    const sf = localStorage.getItem(keySF);
    const font = localStorage.getItem(keyFont);
    const sp = localStorage.getItem(keyP);

    if (sa !== null) setShowArabic(sa === 'true');
    if (st !== null) setShowTransliteration(st === 'true');
    if (sr !== null) setShowTranslation(sr === 'true');
    if (sd !== null) setShowDictionary(sd === 'true');
    if (sp !== null) setShowPoe(sp === 'true');
    if (af !== null) setArabicFontSize(parseFloat(af));
    if (tf !== null) setTransliterationFontSize(parseFloat(tf));
    if (sf !== null) setTranslationFontSize(parseFloat(sf));
    if (font && arabicFonts.includes(font)) setArabicFont(font);
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(keyA, String(showArabic));
    localStorage.setItem(keyT, String(showTransliteration));
    localStorage.setItem(keyR, String(showTranslation));
    localStorage.setItem(keyD, String(showDictionary));
    localStorage.setItem(keyAF, String(arabicFontSize));
    localStorage.setItem(keyTF, String(transliterationFontSize));
    localStorage.setItem(keySF, String(translationFontSize));
    localStorage.setItem(keyP, String(showPoe));
    localStorage.setItem(keyFont, arabicFont);
  }, [
    showArabic,
    showTransliteration,
    showTranslation,
    showDictionary,
    arabicFontSize,
    transliterationFontSize,
    translationFontSize,
    arabicFont,
    showPoe,
  ]);

  // Sort fonts: currently selected first
  const sortedArabicFonts = [
    arabicFont,
    ...arabicFonts.filter((f) => f !== arabicFont).sort((a, b) => a.localeCompare(b)),
  ];

  // Reset to default font sizes and font
  const resetDefaults = () => {
    setArabicFontSize(3);
    setTransliterationFontSize(1.2);
    setTranslationFontSize(1.5);
    setPoeFontSize(1.0);
    setArabicFont('Scheherazade New');
  };

  return (
    <div className="toggle-container center-text">
      {/* Control panel: Font settings + toggles */}
      <div className="control-panel">
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          ⚙️ Font Settings
        </button>

        {/* Show/hide checkboxes + Reset below the Font Settings button */}
        <ToggleControls
          showArabic={showArabic} setShowArabic={setShowArabic}
          showTransliteration={showTransliteration} setShowTransliteration={setShowTransliteration}
          showTranslation={showTranslation} setShowTranslation={setShowTranslation}
          showDictionary={showDictionary} setShowDictionary={setShowDictionary}
          showPoe={showPoe} setShowPoe={setShowPoe}
          resetDefaults={resetDefaults}
        />

        {/* Font modal */}
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

      {/* Lines of text */}
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

          <p
            className={`transliteration ${showTransliteration ? '' : 'hidden'}`}
            style={{ fontSize: `${transliterationFontSize}rem` }}
          >
            {line.transliteration}
          </p>

          <p
            className={`translation ${showTranslation ? '' : 'hidden'}`}
            style={{ fontSize: `${translationFontSize}rem` }}
          >
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
