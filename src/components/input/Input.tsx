import React, {memo, PropsWithChildren, ReactElement, useEffect, useRef, useState} from 'react';
import styles from './Input.module.css';
import css from "styled-jsx/css";

interface InputProps extends PropsWithChildren {
  type?: 'text' | 'password',
  name?: string,
  defaultValue?: string,
  width?: 'auto' | 'fill',
  primaryColor?: string,
  disabled?: boolean,
  placeholder?: string,
  required?: boolean,
  autoComplete?: boolean,
  handler?: () => void
}

const Input: React.FC<InputProps> = (
  {
    type = 'text',
    name,
    defaultValue = '',
    width = 'auto',
    primaryColor = '336',
    disabled = false,
    placeholder,
    required = false,
    autoComplete = false,
    handler,
    children
  }) => {
  const [value, setValue] = useState(defaultValue);
  const [cssStyle, setStyle] = useState({});
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStyle( {
      'width': `${width === 'fill' ? '100%' : `${labelRef.current?.offsetWidth}px`}`,
      '--color': `hsla(${primaryColor}, 25%, 50%, 0.4)`,
      '--color-hover': `hsl(${primaryColor}, 45%, 42%)`
    });
  }, [placeholder, primaryColor, placeholder]);

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
        autoComplete={autoComplete ? 'yes' : 'no'}
        onChange={(e) => {setValue(e.target.value)}}
      />
      <label
        className={`${value.length > 0 ? styles.up : ''}`}
        ref={labelRef}
        onClick={() => {inputRef.current?.focus()}}>
        {placeholder} {required && '*'}
      </label>
    </div>
  );
};

export default memo(Input);