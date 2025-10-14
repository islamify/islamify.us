import { normalizeArabic } from '../utils/normalizeArabic';

export default function DictionaryBlock({ line, dictionary, showDictionary }) {
  return (
    <div className={`dictionary-block ${showDictionary ? '' : 'hidden'}`}>
      {line.arabic.map((word, i) => {
        const normalizedWord = normalizeArabic(word);

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
