import React, {ChangeEventHandler, memo, useRef, useState} from 'react';
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {ChipsGroupElement} from "@/components/chipsGroup";
import TagSetter from "@/components/toDoList/TagSetter";
import {Dialog} from "@/components/dialog";

interface TaskProps {
  opened: boolean,
  onCLose: () => void,
  onSubmit: (task: string, tags: ChipsGroupElement[]) => void,
}

const NewTaskForm: React.FC<TaskProps> = ({opened, onCLose, onSubmit}) => {
  const [task, setTask] = useState('');
  const [tags, setTags] = useState<ChipsGroupElement[]>([]);

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