// src/components/DictionaryBlock.jsx
import React from 'react';
// import '@site/src/css/toggleText.css';

export default function DictionaryBlock({ line, dictionary, showDictionary }) {
  return (
    <div className={`dictionary-block ${showDictionary ? '' : 'hidden'}`}>
      {line.arabic.map((word, i) => {
        const entry = dictionary[word];
        if (!entry) return <span key={i} className="missing-entry">{word}</span>;

        return (
          <span key={i} className="dictionary-entry">
            {word} ({entry.transliteration}) – {entry.translation}
          </span>
        );
      })}
    </div>
  );
}
