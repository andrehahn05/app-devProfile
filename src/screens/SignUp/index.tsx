import React from 'react';
import {Button, ScrollView} from 'react-native';
import Input from '../../components/Form/Input';
import {Container, Content, Title} from './styles';

const SignUp: React.FC = ({}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Title>Crie sua conta</Title>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <Button title="Criar conta" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
