import React from 'react';
import {ScrollView} from 'react-native';
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
          <Title>Faça seu logon</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default SignIn;
