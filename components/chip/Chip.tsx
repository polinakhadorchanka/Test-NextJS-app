import React, {memo, PropsWithChildren, useEffect, useState} from 'react';
import styles from './Chip.module.css';
import { style } from './types';

interface ChipProps extends PropsWithChildren {
  ID?: number,
  style?: style,
  primaryColor?: string,
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ID?: number) => void
}

const Chip: React.FC<ChipProps> = (
  {
    ID,
    style = 'contrast',
    primaryColor = '336',
    onClose,
    children
  }) => {
  const [cssStyle, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      '--color': `hsl(${primaryColor}, 25%, 50%)`,
    });
  }, [primaryColor]);

  return (
    <div className={styles.chipContainer}>
      <div
        className={`${styles.chip} ${styles[style]}`}
        style={cssStyle}>
        {children}
        {
          onClose &&
          <div
            className={styles.closeBtn}
            onClick={(e) => onClose(e, ID)}></div>
        }
      </div>
    </div>
  );
};

export default memo(Chip);