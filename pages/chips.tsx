import React, {useState} from 'react';
import {ChipsGroup} from '@/components/chipsGroup';
import {Chip} from '@/components/chip';
import {Dialog} from "@/components/dialog";
import {Button} from "@/components/button";

const INITIAL = [
  {
    ID: 1,
    value: 'First'
  },
  {
    ID: 2,
    value: 'Second'
  },
  {
    ID: 3,
    value: 'Abc Abc'
  },
  {
    ID: 4,
    value: 'Four 4'
  },
  {
    ID: 5,
    value: 'Chip element'
  }];

const Chips = () => {
  const [elements, setElements] = useState(INITIAL);
  const [elements1, setElements1] = useState(INITIAL);
  const [elements2, setElements2] = useState(INITIAL);
  const [elements3, setElements3] = useState(INITIAL);

  const [opened, setOpened] = useState(false);

  return (
    <main className={'main'}>
      <Button handler={() => setOpened(true)}>Открыть</Button>
      <Dialog opened={opened} onClose={() => setOpened(false)}>
        <div>Hello!</div>
        <br/><br/>
        <Button handler={() => setOpened(false)}>Закрыть</Button>
      </Dialog>
      <div className={'container'}>
        <div className={'content'}>
          <div className={'content__description'}>
            <h1>Component CHIP & CHIPSGROUP</h1>
          </div>
          <div className={'content__column content__column_light'}>
            <ChipsGroup chips={elements} setChips={setElements} style={'contrast'}/>
            <ChipsGroup chips={elements1} setChips={setElements1} style={'outlined'} primaryColor={'240'}/>

            <Chip primaryColor={'300'}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                   stroke='currentColor' width={'25px'}>
                <path strokeLinecap='round' strokeLinejoin='round'
                      d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'/>
              </svg>
            </Chip>

            <Chip style={'outlined'} primaryColor={'55'}>
              <div className={'flex-content'}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                     stroke='currentColor' width={'25px'}>
                  <path strokeLinecap='round' strokeLinejoin='round'
                        d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'/>
                </svg>
                <span>Text</span>
              </div>
            </Chip>
          </div>
          <div className={'content__column content__column_dark'}>
            <ChipsGroup chips={elements2} setChips={setElements2} style={'contrast'} primaryColor={'169'}/>
            <ChipsGroup chips={elements3} setChips={setElements3} style={'light'}/>

            <Chip primaryColor={'135'}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                   stroke='currentColor' width={'25px'}>
                <path strokeLinecap='round' strokeLinejoin='round'
                      d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'/>
              </svg>
            </Chip>

            <Chip style={'light'} primaryColor={'55'} onClose={() => {
              alert('It won\'t be closed =)')
            }}>
              <div className={'flex-content'}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                     stroke='currentColor' width={'25px'}>
                  <path strokeLinecap='round' strokeLinejoin='round'
                        d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'/>
                </svg>
                <span>Try to close me!</span>
              </div>
            </Chip>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chips;