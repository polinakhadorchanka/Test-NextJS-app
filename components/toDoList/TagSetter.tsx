import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';

import styles from './ToDoList.module.css';
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {ChipsGroup, IChipsGroupElement} from "@/components/chipsGroup";

interface TagSetterProps {
  label: string,
  tags: IChipsGroupElement[],
  maxLength?: number,
  setTags: (tags: IChipsGroupElement[]) => void
}

const TagSetter: React.FC<TagSetterProps> = (
  {
    label,
    tags,
    maxLength,
    setTags
  }) => {
  const [currentTag, setCurrentTag] = useState<IChipsGroupElement>(
    {
      ID: 0,
      value: ''
    });

  const onChangeTag: ChangeEventHandler = (e) => {
    setCurrentTag(
      {
        ...currentTag,
        value: (e.target as HTMLInputElement).value
      });
  }

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (currentTag.value.length > 0 && !tags.find(tag => tag.value === currentTag.value)) {
      setTags([...tags, currentTag]);

      setCurrentTag(prev => {
        return {
          ID: prev.ID + 1,
          value: ''
        }
      })
    } else {
      setCurrentTag(prev => {
        return {
          ID: prev.ID,
          value: ''
        }
      })
    }
  }

  return (
    <div style={{width: '100%'}}>
      <form className={styles.tagSetter} onSubmit={onSubmit}>
        <Input
          name={'currentTag'}
          label={label}
          width={'fill'}
          value={currentTag.value}
          onChange={onChangeTag}/>
        <div className={'m-t-small'}>
          <Button type={'submit'} disabled={maxLength ? (tags.length >= maxLength) : false}>
            <div className={'flex-content text-nowrap'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" width={'20px'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </div>
          </Button>
        </div>
      </form>
      <div style={{minHeight: '40px', padding: '10px 0'}}>
        <ChipsGroup chips={tags} setChips={setTags} style={'outlined'}/>
      </div>
    </div>
  );
};

export default TagSetter;