// src/utils/normalizeArabic.js
export function normalizeArabic(word) {
  return word
    .normalize('NFC')
    .replace(/[\u0671]/g, '\u0627')          // Alef Wasla → Alef
    .replace(/[\u064B-\u0652]/g, '')         // Remove harakat (fatha, damma, kasra, sukun, shadda, tanween)
    .replace(/\u0670/g, '')                   // Remove superscript alif
    .replace(/[\uFEFB-\uFEFC]/g, '\u0644\u0627') // Lam-Alef ligatures
    .trim();
}
