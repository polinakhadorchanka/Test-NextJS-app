import React, {memo} from 'react';

import {ITask} from "@/components/toDoList/types";
import {Chip} from "@/components/chip";
import styles from './ToDoList.module.css';

interface ITaskProps {
  task: ITask,
  onDelete: (ID: number) => void
}

const Task:React.FC<ITaskProps> = ({task, onDelete}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.columnFirst}`}>
        <span>{task.name}</span>
        <div className={styles.tagList}>
          {
            task.tags.map((tag, index) => {
              return <Chip key={tag.ID} ID={tag.ID}>
                <div className={'nowrap'}>
                  {tag.value}
                </div>
              </Chip>
            })
          }
        </div>
      </div>
      <div className={styles.columnSecond}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             width={'20px'} cursor={'pointer'} onClick={() => onDelete(task.ID)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
    </div>
  );
};

export default memo(Task);