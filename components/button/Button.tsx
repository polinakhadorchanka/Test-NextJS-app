import React, {memo, PropsWithChildren, useEffect, useState} from 'react';
import styles from './Button.module.css';
import {btnType, style} from "./types";

interface ButtonProps extends PropsWithChildren {
  type?: btnType,
  style?: style,
  width?: 'auto' | 'fill',
  primaryColor?: string,
  disabled?: boolean,
  handler?: any
}

const Button: React.FC<ButtonProps> = (
  {
    type = 'button',
    style = 'contrast',
    width = 'auto',
    primaryColor = '336',
    disabled = false,
    handler,
    children
  }) => {
  const [cssStyle, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      'width': `${width === 'fill' ? '100%' : 'auto'}`,
      '--color': `hsl(${primaryColor}, 25%, 50%)`,
      '--color-disabled': `hsla(${primaryColor}, 25%, 50%, 0.4)`,
      '--color-hover': `hsl(${primaryColor}, 45%, 42%)`
    });
  }, [width, primaryColor]);

  return (
    <button
      className={`${styles.button} ${styles[style]}`}
      type={type}
      style={cssStyle}
      disabled={disabled}
      onClick={handler}>
      {children}
    </button>
  );
};

export default memo(Button);