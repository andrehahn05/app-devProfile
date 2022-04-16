import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {Container} from './styles';
import Input from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}
const InputControl: React.FC<Props> = ({control, name, ...otherProps}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...otherProps} />
        )}
        name={name}
      />
    </Container>
  );
};

export default InputControl;
