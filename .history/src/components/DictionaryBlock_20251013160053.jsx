import React from 'react';
import '../css/toggleText.dictionary.css';
import '../css/arabicFont.css'; // Arabic font and spacing

// Normalization function
function normalizeArabic(word) {
  return word
    .replace(/[\u0671]/g, '\u0627')           // Alef Wasla → Alef
    .replace(/[\u064B-\u0652]/g, '')          // Remove diacritics
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627'); // Lam-Alef ligatures
}

export default function DictionaryBlock({ line, dictionary, showDictionary }) {
  if (!line || !line.arabic) return null;

  return (
    <div className={`dictionary-block ${showDictionary ? '' : 'hidden'}`}>
      {/* Render Arabic line with proper spacing */}
      <p className="arabic-text">{line.arabic.join(' ')}</p>

      {/* Optional: Transliteration and translation */}
      {line.arabic.map((word, i) => {
        const normalizedWord = normalizeArabic(word);
        const dictKey = Object.keys(dictionary).find(
          (key) => normalizeArabic(key) === normalizedWord
        );

        if (!dictKey)
          return (
            <span key={i} className="missing-entry arabic-text">
              {word}{' '}
            </span>
          );

        const entry = dictionary[dictKey];

        return (
          <span key={i} className="dictionary-entry">
            {entry.transliteration} – {entry.translation}{' '}
          </span>
        );
      })}
    </div>
  );
}
