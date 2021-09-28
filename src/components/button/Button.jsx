import React from 'react';
import './Button.css'

function Button({ children, style = {}, className = '' }) {
  return (
    <button className={`button button__login ${className}`} style={{ ...style }}>
      {children}
    </button>
  )
}

export default Button;