import React from 'react';
// Only dictionary CSS is needed here
import '../css/toggleText.dictionary.css';


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
