import React, {memo, useMemo, useState} from 'react';

import {IChipsGroupElement} from "@/components/chipsGroup";
import {Button} from "@/components/button";

import styles from './ToDoList.module.css';
import TagSetter from "./TagSetter";
import NewTaskForm from "./NewTaskForm";
import {ITask} from "./types";
import Task from "./Task";
import {useMount} from "@/hooks/useMount";

interface IToDoListProps {
  defaultTasks?: ITask[],
  defaultFilters?: IChipsGroupElement[]
}

const ToDoList: React.FC<IToDoListProps> = (
  {
    defaultTasks = [],
    defaultFilters = []
  }) => {
  const [tasks, setTasks] = useState<ITask[]>(defaultTasks);
  const [filters, setFilters] = useState<IChipsGroupElement[]>(defaultFilters);
  const [dialogOpened, setDialogOpened] = useState(false);
  const mounted = useMount(dialogOpened);

  const filteredTasks = useMemo(() => {
    if (filters.length > 0) {
      const filterValues = filters.map(filter => filter.value.toString().toUpperCase());
      return tasks.filter(task => {
        const taskTags = task.tags.map(tag => tag.value.toString().toUpperCase());
        const resArray = filterValues.map(value => taskTags.includes(value));

        return !resArray.includes(false);
      })
    } else return tasks;
  }, [tasks, filters]);

  const onSubmit = (task: string, tags: IChipsGroupElement[]) => {
    setTasks(prev => {
      return [...tasks, {ID: prev.slice(-1)[0] ? prev.slice(-1)[0].ID + 1 : 1, name: task, tags}]
    })
  }

  const deleteTask = (ID: number) => {
    setTasks(tasks.filter(task => task.ID !== ID));
  }

  return (
    <div>
      <div className={styles.todoContainer}>
        <div className={`${styles.btnWidth} m-t-small`}>
          <Button handler={() => setDialogOpened(true)} width={'fill'}>
            <div className={'flex-content text-nowrap'}>
              Добавить задачу
            </div>
          </Button>
        </div>
        <TagSetter label={'Тег для поиска'} tags={filters} setTags={setFilters}/>
      </div>

      <div>
        {
          filteredTasks &&
          filteredTasks.map((task, index) => {
            return <div key={task.ID}
                        className={index === filteredTasks.length - 1 ? '' : 'divideBottom'}
                        style={{padding: '10px 0'}}>
              <Task task={task} onDelete={deleteTask}/>
            </div>
          })
        }
      </div>

      {
        mounted &&
        <NewTaskForm onSubmit={onSubmit} opened={dialogOpened} onCLose={() => setDialogOpened(false)}/>
      }
    </div>
  );
};

export default memo(ToDoList);