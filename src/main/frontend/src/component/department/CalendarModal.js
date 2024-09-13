import React, { useEffect, useState } from 'react';
import '../../css/CalendarModal.css';

const CalendarModal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal && !isOpen) return null;

  return (
    <div className={`calendarModal-overlay ${isOpen ? 'open' : ''}`}>
      <div className={`calendarModal-content ${isOpen ? 'open' : ''}`}>
        <button className='calendarModal-close' onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default CalendarModal;
