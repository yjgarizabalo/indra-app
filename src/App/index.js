import React, { useState } from "react";
import {Modal} from '../Modal'
import './app.css'

function App() {
  const [color, setColor] = useState('black');
  const [showModal, setShowModal] = useState(false);

  function changeRed() {
    const colores = ['red'];
    setColor(colores);
    setShowModal(true);
  }


  function changeBlue() {
    const colores = ['blue'];
    setColor(colores);
    setShowModal(true);
  }

  return (
    <div className="content">
      <div className="content-text">
        <p style={{ color: color }}>Prueba basica</p>
      </div>

      <div className="content-button">
        <button onClick={changeRed} className="button-red">R</button>
        <button onClick={changeBlue} className="button-blue">B</button>
        {showModal && <Modal color={color} onClose={() => setShowModal(false)} />}
      </div>
    </div>

  );
}
export default App;
