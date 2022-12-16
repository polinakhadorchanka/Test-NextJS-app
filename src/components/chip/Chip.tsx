import React, {memo, PropsWithChildren, useEffect, useState} from 'react';
import styles from './Chip.module.css';


interface ChipProps extends PropsWithChildren {
  style?: 'light' | 'contrast' | 'outlined',
  primaryColor?: string,
  onClose?: () => void
}

const Chip: React.FC<ChipProps> = (
  {
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
            onClick={onClose}></div>
        }
      </div>
    </div>
  );
};

export default memo(Chip);