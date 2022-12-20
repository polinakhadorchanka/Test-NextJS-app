import React, {memo} from 'react';

import styles from './ChipsGroup.module.css';
import {Chip} from "../chip";
import {IChipsGroupElement, style} from "./types";
import {OnCloseInterface} from "@/components/chip";

interface IChipGroupProps {
  chips?: IChipsGroupElement[],
  style?: style,
  primaryColor?: string,
  setChips?: (chips: IChipsGroupElement[]) => void
}

const ChipsGroup: React.FC<IChipGroupProps> = (
  {
    style = 'contrast',
    primaryColor = '336',
    chips = [],
    setChips
  }) => {
  const deleteChip: OnCloseInterface = (e, ID) => {
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