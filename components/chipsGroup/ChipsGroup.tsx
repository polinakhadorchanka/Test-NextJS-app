import React, {memo} from 'react';
import styles from './ChipsGroup.module.css';
import Chip from "../chip/Chip";
import {ChipsGroupElement, style} from "./types";



interface ChipGroupProps {
  chips?: ChipsGroupElement[],
  style?: style,
  primaryColor?: string,
  setChips?: (chips: ChipsGroupElement[]) => void
}

const ChipsGroup: React.FC<ChipGroupProps> = (
  {
    style = 'contrast',
    primaryColor = '336',
    chips = [],
    setChips
  }) => {

  const deleteChip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, ID?: number) => {
    if (setChips) {
      setChips(chips.filter(chip => chip.ID !== ID));
    }
  }

  return (
    <div className={styles.chipsGroup}>
      {chips && chips.map(chip => {
        return <Chip
          key={chip.ID}
          ID={chip.ID}
          style={style}
          primaryColor={primaryColor}
          onClose={deleteChip}>
          {chip.value}
        </Chip>
      })}
    </div>
  );
};

export default memo(ChipsGroup);