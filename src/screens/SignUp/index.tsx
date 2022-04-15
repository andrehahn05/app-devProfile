import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import {propsStack} from '../../routes/Models';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = ({}) => {
  const navigation = useNavigation<propsStack>();
  return (
    <Container>
      <KeyboardAvoidingView enabled style={{flex: 1}}>
        <ScrollView>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Registrar" />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para logIn</BackToSignInTitle>
      </BackToSignIn>
    </Container>
  );
};

export default SignUp;
