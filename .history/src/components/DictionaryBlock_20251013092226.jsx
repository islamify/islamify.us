import React from 'react';
// Only dictionary CSS is needed here
import '../css/toggleText.dictionary.css';

// Normalization function
function normalizeArabic(word) {
  return word
    .replace(/[\u0671]/g, '\u0627')           // Alef Wasla → Alef
    .replace(/[\u064B-\u0652]/g, '')          // Remove diacritics (harakat, sukun, shadda, tanween)
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627'); // Lam-Alef ligatures
}

export default function DictionaryBlock({ line, dictionary, showDictionary }) {
  return (
    <div className={`dictionary-block ${showDictionary ? '' : 'hidden'}`}>
      {line.arabic.map((word, i) => {
        const normalizedWord = normalizeArabic(word);

        // Find the dictionary entry using normalized comparison
        const dictKey = Object.keys(dictionary).find(
          (key) => normalizeArabic(key) === normalizedWord
        );

        if (!dictKey) return <span key={i} className="missing-entry">{word}</span>;

        const entry = dictionary[dictKey];

        return (
          <span key={i} className="dictionary-entry">
            {word} ({entry.transliteration}) – {entry.translation}
          </span>
        );
      })}
    </div>
  );
}
