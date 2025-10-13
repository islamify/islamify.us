// src/components/FontModal.jsx
import React from 'react';
import '@site/src/css/toggleText.css';

export default function FontModal({
  isOpen,
  onClose,
  arabicFont,
  setArabicFont,
  sortedArabicFonts,
  arabicFontSize,
  setArabicFontSize,
  transliterationFontSize,
  setTransliterationFontSize,
  translationFontSize,
  setTranslationFontSize,
  poeFontSize,
  setPoeFontSize,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Font Settings</h3>

        <div className="font-dropdown-container">
          <label>Arabic Font:</label>
          <select value={arabicFont} onChange={(e) => setArabicFont(e.target.value)}>
            {sortedArabicFonts.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="font-controls">
          <div>
            <label>Arabic</label>
            <input
              type="range"
              min="1" max="5" step="0.1"
              value={arabicFontSize}
              onChange={(e) => setArabicFontSize(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Transliteration</label>
            <input
              type="range"
              min="0.5" max="2" step="0.05"
              value={transliterationFontSize}
              onChange={(e) => setTransliterationFontSize(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Translation</label>
            <input
              type="range"
              min="0.5" max="3" step="0.05"
              value={translationFontSize}
              onChange={(e) => setTranslationFontSize(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Poe</label>
            <input
              type="range"
              min="0.5" max="3"
              step="0.05"
              value={poeFontSize}
              onChange={(e) => setPoeFontSize(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
