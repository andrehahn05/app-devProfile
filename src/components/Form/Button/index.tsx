import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<IButtonProps> = ({title, ...otherProps}) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
