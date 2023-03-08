import React from "react";

import './modal.css'

function Modal({ color, onClose }) {
	return (
    <div className={`modal-${color}`}>
      <div className="modal-content">
        <p style={{ color: 'white' }}>señor usuario el color de la pantalla ha cambiado {color}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
);
}

export { Modal }