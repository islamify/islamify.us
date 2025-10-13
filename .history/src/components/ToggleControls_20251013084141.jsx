import React from 'react';
// Only controls CSS is needed here
import '../css/toggleText.controls.css';


export default function ToggleControls({
  showArabic, setShowArabic,
  showTransliteration, setShowTransliteration,
  showTranslation, setShowTranslation,
  showDictionary, setShowDictionary,
  showPoe, setShowPoe,
  resetDefaults
}) {
  return (
    <div className="toggle-controls" role="group" aria-label="Show/hide sections">
      <label>
        <input type="checkbox" checked={showArabic} onChange={() => setShowArabic((s) => !s)} /> Arabic
      </label>
      <label>
        <input type="checkbox" checked={showTransliteration} onChange={() => setShowTransliteration((s) => !s)} /> Transliteration
      </label>
      <label>
        <input type="checkbox" checked={showTranslation} onChange={() => setShowTranslation((s) => !s)} /> Translation
      </label>
      <label>
        <input type="checkbox" checked={showDictionary} onChange={() => setShowDictionary((s) => !s)} /> Dictionary
      </label>
      <label>
        <input type="checkbox" checked={showPoe} onChange={() => setShowPoe((s) => !s)} /> Poe Rendition
      </label>

      <button type="button" onClick={resetDefaults}>Reset</button>
    </div>
  );
}
