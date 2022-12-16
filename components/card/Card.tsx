import React, {memo, PropsWithChildren, useEffect, useState} from 'react';
import styles from './Card.module.css';

interface CardProps extends PropsWithChildren {
  width?: 'auto' | 'fill',
  height?: 'auto' | 'fill',
  primaryColor?: string,
}

const Card: React.FC<CardProps> = (
  {
    width = 'auto',
    height = 'auto',
    primaryColor = '336',
    children
  }) => {
  const [cssStyle, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      'width': `${width === 'fill' ? '100%' : 'auto'}`,
      'height': `${height === 'fill' ? '100%' : 'auto'}`,
      '--color': `hsl(${primaryColor}, 52%, 81%)`,
    });
  }, [width, height, primaryColor]);

  return (
    <div
      className={styles.card}
      style={cssStyle}>
      {children}
    </div>
  );
};

export default memo(Card);