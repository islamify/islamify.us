// checkMissingWords.js
import farajLines from '../data/farajLines';
import farajDictionary from '../data/farajDictionary';

// Normalization function
function normalizeArabic(word) {
  return word
    // Replace ALEF WASLA with regular ALEF
    .replace(/[\u0671]/g, '\u0627')
    // Remove diacritics (harakat + shadda + sukun + tanween)
    .replace(/[\u064B-\u0652]/g, '')
    // Normalize ligatures (Lam-Alef)
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627');
}

// Function to check missing words in a lines array
function checkMissingWords(lines, dictionary) {
  const missingWords = new Set();

  lines.forEach((line) => {
    line.arabic.forEach((word) => {
      const normalizedWord = normalizeArabic(word);
      let found = false;

      for (const key of Object.keys(dictionary)) {
        if (normalizeArabic(key) === normalizedWord) {
          found = true;
          break;
        }
      }

      if (!found) {
        missingWords.add(word);
      }
    });
  });

  return Array.from(missingWords);
}

// Run the check
const missing = checkMissingWords(farajLines, farajDictionary);
if (missing.length === 0) {
  console.log('✅ All words found in dictionary!');
} else {
  console.log('❌ Missing words:', missing);
}

export { checkMissingWords, normalizeArabic };
