import React from 'react';
import farajLines from '../data/duas/farajLines';
import '../css/arabicFont.css';

export default function DuaFaraj() {
  return (
    <div>
      {farajLines.map((line, index) => (
        <p key={index} className="arabic-text">
          {line.arabic.join(' ')}
        </p>
      ))}
    </div>
  );
}
