import React, {useMemo, useState} from 'react';
import styles from './ToDoList.module.css';
import TagSetter from "@/components/toDoList/TagSetter";
import {ChipsGroupElement} from "@/components/chipsGroup";
import {Button} from "@/components/button";
import NewTaskForm from "./NewTaskForm";
import {ITask} from "./types";
import Task from "./Task";

const ToDoList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filters, setFilters] = useState<ChipsGroupElement[]>([]);
  const [dialogOpened, setDialogOpened] = useState(false);

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

  const onSubmit = (task: string, tags: ChipsGroupElement[]) => {
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
        <div className={'marginTop'}>
          <Button handler={() => setDialogOpened(true)}>
            <div className={'flex-content nowrap'}>
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
            return <div key={task.ID} className={index === filteredTasks.length ? '' : 'divideBottom'}
                        style={{padding: '10px 0'}}>
              <Task task={task} onDelete={deleteTask}/>
            </div>
          })
        }
      </div>

      {
        dialogOpened &&
        <NewTaskForm onSubmit={onSubmit} opened={dialogOpened} onCLose={() => setDialogOpened(false)}/>
      }
    </div>
  );
};

export default ToDoList;