import React, {memo, PropsWithChildren, useEffect, useState} from 'react';

import styles from './Chip.module.css';
import {OnCloseInterface, style} from './types';

interface IChipProps extends PropsWithChildren {
  ID?: number,
  style?: style,
  primaryColor?: string,
  onClose?: OnCloseInterface
}

const Chip: React.FC<IChipProps> = (
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
            onClick={(e) => onClose(e, ID)}>
          </div>
        }
      </div>
    </div>
  );
};

export default memo(Chip);