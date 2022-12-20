import React, {ChangeEventHandler, useState} from 'react';
import {Input} from '@/components/input';
import {Layout} from "../layout";

const Inputs = () => {
  const [values, setValues] = useState(
    {
      i1: '',
      i2: '',
      i3: '',
      i4: '',
      i5: '',
      i6: 'default value',
      i7: '',
      i8: 'default',
      i9: '',
    }
  );

  const onChange:ChangeEventHandler = (e) => {
    setValues({...values, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value});
  }

  return (
    <Layout>
      <div className={'container'}>
        <div className={'content'}>
          <div className={'content__description'}>
            <h1>Component INPUT</h1>
          </div>
          <div className={'content__column content__column_light'}>
            <Input name={'i1'} type={'text'} label={'Input'} required={true}
                   value={values.i1} onChange={onChange}/>
            <Input name={'i2'} type={'text'} label={'Address'} required={false} primaryColor={'150'}
                   value={values.i2}  onChange={onChange}/>
            <Input name={'i3'} type={'text'} label={'Input number three'} required={true} primaryColor={'210'}
                   value={values.i3} onChange={onChange} />
            <Input name={'i4'} type={'text'} label={'Input'} required={false} primaryColor={'355'}
                   value={values.i4} onChange={onChange} />
            <Input name={'i5'} type={'text'} label={'Disabled'} required={false} disabled={true}
                   value={values.i5}onChange={onChange} />
            <Input name={'i6'} type={'text'} label={'Disabled input with default value'} required={false} disabled={true}
                   value={values.i6} onChange={onChange} />
            <Input name={'i7'} type={'text'} width={'fill'} label={'Login'} required={true}
                   value={values.i7} onChange={onChange} />
            <Input name={'i8'} type={'text'} width={'fill'} label={'Login with default value'} required={true}
                   value={values.i8} onChange={onChange} />
            <Input name={'i9'} type={'password'} width={'fill'} label={'Password'} required={true}
                   value={values.i9} onChange={onChange} />
          </div>
          <div className={'content__column content__column_dark'}>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inputs;