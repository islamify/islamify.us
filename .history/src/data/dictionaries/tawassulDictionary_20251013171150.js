// src/data/dictionaries/tawassulDictionary.js
import { normalizeArabic } from '../../utils/normalizeArabic';

const tawassulDictionary = {
  [normalizeArabic("اللهم")]: { transliteration: "Allahumma", translation: "O Allah" },
  [normalizeArabic("إني")]: { transliteration: "inni", translation: "indeed I" },
  [normalizeArabic("أسألك")]: { transliteration: "as'aluka", translation: "I ask You" },
  [normalizeArabic("وأتوجه")]: { transliteration: "wa atawajjahu", translation: "and I turn (in supplication)" },
  [normalizeArabic("إليك")]: { transliteration: "ilayka", translation: "toward You" },
  [normalizeArabic("بنبيك")]: { transliteration: "bi-nabiyyika", translation: "by Your Prophet" },
  [normalizeArabic("نبي")]: { transliteration: "nabiyyi", translation: "prophet" },
  [normalizeArabic("الرحمة")]: { transliteration: "ar-rahmah", translation: "of mercy" },
  [normalizeArabic("محمد")]: { transliteration: "Muhammad", translation: "Muhammad" },
  [normalizeArabic("صلى الله عليه وآله")]: { transliteration: "salla Allahu 'alayhi wa alihi", translation: "may Allah bless him and his family" },
  [normalizeArabic("يا")]: { transliteration: "ya", translation: "O" },
  [normalizeArabic("أبا القاسم")]: { transliteration: "aba al-qasim", translation: "father of al-Qasim" },
  [normalizeArabic("رسول الله")]: { transliteration: "rasul Allah", translation: "Messenger of Allah" },
  [normalizeArabic("إمام الرحمة")]: { transliteration: "imam ar-rahmah", translation: "leader of mercy" },
  [normalizeArabic("سيدنا")]: { transliteration: "sayyiduna", translation: "our master" },
  [normalizeArabic("مولانا")]: { transliteration: "mawlana", translation: "our guardian" },
  [normalizeArabic("إنا")]: { transliteration: "inna", translation: "indeed we" },
  [normalizeArabic("توجهنا")]: { transliteration: "tawajjahna", translation: "we have turned (in supplication)" },
  [normalizeArabic("واستشفعنا")]: { transliteration: "wa istashfa'na", translation: "and we have sought intercession" },
  [normalizeArabic("وتوسلنا")]: { transliteration: "wa tawassalna", translation: "and we have sought nearness" },
  [normalizeArabic("بك")]: { transliteration: "bika", translation: "by you" },
  [normalizeArabic("إلى الله")]: { transliteration: "ila Allah", translation: "toward Allah" },
  [normalizeArabic("وقدمناك")]: { transliteration: "wa qaddamnaka", translation: "and we have put you forward" },
  [normalizeArabic("بين يدي حاجاتنا")]: { transliteration: "bayna yaday hajatina", translation: "before our needs" },
  [normalizeArabic("وجيهاً عند الله")]: { transliteration: "wajihan 'inda Allah", translation: "honored in the presence of Allah" },
  [normalizeArabic("اشفع لنا عند الله")]: { transliteration: "ishfa' lana 'inda Allah", translation: "intercede for us before Allah" }
};

export default tawassulDictionary;
