import React, {MouseEventHandler} from "react";

export type style = 'light' | 'contrast' | 'outlined';
export type OnCloseInterface = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, ID?: number) => void | MouseEventHandler;