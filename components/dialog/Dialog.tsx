import React, {memo, PropsWithChildren, useEffect, useState} from 'react';
import styles from './Dialog.module.css';
import {Portal} from "next/dist/client/portal";
import {useMount} from "../../hooks/useMount";

interface DialogProps extends PropsWithChildren {
  opened: boolean,
  onClose: () => void
}

const Dialog: React.FC<DialogProps> = (
  {
    opened,
    onClose,
    children
  }) => {
  const {mounted} = useMount(opened);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(opened);
    }, 50)
  }, [opened])

  return (
    <>
      {
        mounted &&
        <Portal type={'portal'}>
          <div className={`${styles.dialog} ${animation ? styles.opened : null}`} onClick={onClose}>
            <div className={`${styles.content}`} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

export default memo(Dialog);