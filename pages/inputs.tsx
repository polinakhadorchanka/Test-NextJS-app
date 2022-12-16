import React from 'react';
import Input from "../src/components/input/Input";

const Inputs = () => {
  return (
    <main className={'main'}>
      <div className={'container'}>
        <div className={'content'}>
          <div className={'content__description'}>
            <h1>Component INPUT</h1>
          </div>
          <div className={'content__column content__column_light'}>
            <Input type={'text'} label={'Input'} required={true} />
            <Input type={'text'} label={'Address'} required={false} primaryColor={'150'} />
            <Input type={'text'} label={'Input number three'} required={true} primaryColor={'210'} />
            <Input type={'text'} label={'Input'} required={false} primaryColor={'355'} />
            <Input type={'text'} label={'Disabled'} required={false} disabled={true} />
            <Input type={'text'} label={'Disabled input with default value'} required={false} disabled={true} defaultValue={'default value'} />

            <Input type={'text'} width={'fill'} label={'Login'} required={true} />
            <Input type={'text'} width={'fill'} label={'Login with default value'} required={true} defaultValue={'default value'} />
            <Input type={'password'} width={'fill'} label={'Password'} required={true} />
          </div>
          <div className={'content__column content__column_dark'}>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Inputs;