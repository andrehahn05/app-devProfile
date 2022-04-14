import React from 'react';
import {ScrollView} from 'react-native';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import {Container, Content, Title} from './styles';

export interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = ({}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Title>Informe seus Dados</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default SignIn;
