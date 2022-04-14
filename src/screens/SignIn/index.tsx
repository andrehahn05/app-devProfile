import React from 'react';
import {ScrollView} from 'react-native';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import {Container, Content, Logo, Title} from './styles';
import logo from '../../assets/logo.png';

export interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = ({}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Content>
          <Logo source={logo} />
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
