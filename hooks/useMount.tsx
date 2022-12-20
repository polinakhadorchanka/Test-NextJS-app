import React, {useEffect, useState} from "react";

const ANIMATION_TIME = 300;

export const useMount = (opened: boolean) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if(opened && !mounted) {
      setMounted(true);
    } else if(!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME)
    }
  }, [opened]);

  return mounted;
}