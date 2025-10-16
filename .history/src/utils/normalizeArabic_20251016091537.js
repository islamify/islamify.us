// src/utils/normalizeArabic.js
export function normalizeArabic(word) {
  return word
    .normalize('NFC')
    .replace(/[\u0671]/g, '\u0627')           // Alef Wasla → Alef
    .replace(/[\u0622\u0623\u0625\u0672-\u0675]/g, '\u0627') // All Alef variants → Alef
    .replace(/[\u064B-\u0652]/g, '')          // Remove harakat (fatha, damma, kasra, sukun, shadda, tanween)
    .replace(/\u0670/g, '')                   // Remove superscript alif (ٰ)
    .replace(/[\u06E5\u06E6]/g, '')           // Remove small waw/ya
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627') // Lam-Alef ligatures
    .trim();
}
