export function normalizeArabic(word) {
  return word
    .replace(/[\u0671]/g, '\u0627')           // Alef Wasla → Alef
    .replace(/[\u064B-\u0652\u0670]/g, '')          // Remove diacritics
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627'); // Lam-Alef ligature
}
