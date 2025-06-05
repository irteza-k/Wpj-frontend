import React from 'react';
import '../styles/Button.css'; 

function Button({ children, onClick, variant = 'primary', size = 'medium', type = 'button', disabled = false }) {
  const className = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`;
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;