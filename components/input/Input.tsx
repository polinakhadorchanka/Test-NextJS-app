import React, {ChangeEventHandler, memo, useEffect, useRef, useState} from 'react';
import styles from './Input.module.css';

interface InputProps {
  name?: string,
  type?: 'text' | 'password',
  value?: string,
  width?: 'auto' | 'fill',
  primaryColor?: string,
  disabled?: boolean,
  label?: string,
  required?: boolean,
  autoComplete?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (
  {
    name,
    type = 'text',
    value = '',
    width = 'auto',
    primaryColor = '336',
    disabled = false,
    label,
    required = false,
    autoComplete = false,
    onChange
  }) => {
  const [cssStyle, setStyle] = useState({});
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStyle( {
      'width': `${width === 'fill' ? '100%' : `${labelRef.current?.offsetWidth}px`}`,
      '--color': `hsla(${primaryColor}, 25%, 50%, 0.4)`,
      '--color-hover': `hsl(${primaryColor}, 45%, 42%)`
    });
  }, [label, width, primaryColor]);

  return (
    <div
      className={`${styles.inputContainer}`}
      style={cssStyle}>
      <input
        ref={inputRef}
        name={name}
        type={type}
        required={required}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete ? 'on' : 'off'}
        onChange={(e) => {onChange && onChange(e)}}
      />
      <label
        className={`${value.length > 0 ? styles.up : ''}`}
        ref={labelRef}
        onClick={() => {inputRef.current?.focus()}}>
        {label} {required && '*'}
      </label>
    </div>
  );
};

export default memo(Input);