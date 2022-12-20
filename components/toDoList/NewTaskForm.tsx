import React, {ChangeEventHandler, memo, useEffect, useState} from 'react';

import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {Dialog} from "@/components/dialog";
import {IChipsGroupElement} from "@/components/chipsGroup";
import TagSetter from "@/components/toDoList/TagSetter";

interface TaskProps {
  opened: boolean,
  onCLose: () => void,
  onSubmit: (task: string, tags: IChipsGroupElement[]) => void,
}

const NewTaskForm: React.FC<TaskProps> = ({opened, onCLose, onSubmit}) => {
  const [task, setTask] = useState('');
  const [tags, setTags] = useState<IChipsGroupElement[]>([]);

  const onChange: ChangeEventHandler = (e) => {
    setTask((e.target as HTMLInputElement).value);
  }

  const saveTask = () => {
    if (validate()) {
      onCLose();
      onSubmit(task, tags);
    }
  }

  const validate = () => {
    return task !== '';
  }

  return (
    <Dialog opened={opened} onClose={onCLose}>
      <div>
        <h2>Новая задача</h2>
        <Input label={'Задача'} required={true} width={'fill'} value={task} onChange={onChange}/>
        <TagSetter label={'Тег(и)'} tags={tags} setTags={setTags} maxLength={5}/>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
          <Button handler={saveTask}>Сохранить</Button>
          <Button handler={onCLose}>Отмена</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default memo(NewTaskForm);