import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Button from '../../components/Form/Button';
import { useForm, FieldValues } from 'react-hook-form';

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
import InputControl from '../../components/Form/InputControl';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';

interface IFormInputs {
  [name: string]: any;
}

const SignIn: React.FC = () => {
  const { handleSubmit, control } = useForm<FieldValues>();
  const navigation = useNavigation<propsStack>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <Container style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Content>
            <Logo source={logo} />
            <Title>Informe seus Dados</Title>

            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
            />

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

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
