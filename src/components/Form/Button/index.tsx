import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  width?: string;
  title: string;
}

const Button: React.FC<IButtonProps> = ({width, title, ...otherProps}) => {
  return (
    <Container {...otherProps} width={width}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
