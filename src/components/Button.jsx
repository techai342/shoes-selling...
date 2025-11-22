import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${loading ? 'loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default Button;
