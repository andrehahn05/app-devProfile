import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Models';

const SignIn: React.FC = ({}) => {
  const navigation = useNavigation<propsStack>();
  return (
    <Container style={{flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Content>
            <Logo source={logo} />
            <Title>Informe seus Dados</Title>

            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Entrar" />
            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </Container>
  );
};

export default SignIn;
