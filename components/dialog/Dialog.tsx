import React, {memo, PropsWithChildren, useEffect, useState} from 'react';

import styles from './Dialog.module.css';
import {useMount} from "@/hooks/useMount";

interface IDialogProps extends PropsWithChildren {
  opened: boolean,
  onClose: () => void
}

const Dialog: React.FC<IDialogProps> = (
  {
    opened,
    onClose,
    children
  }) => {
  const mounted = useMount(opened);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(opened);
    }, 50)
  }, [opened]);

  return (
    <>
      {
        mounted &&
        <div className={`${styles.dialog} ${animation ? styles.opened : null}`} onClick={onClose}>
          <div className={`${styles.content}`} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      }
    </>
  );
};

export default memo(Dialog);