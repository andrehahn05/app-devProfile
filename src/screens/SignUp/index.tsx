import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import InputControl from '../../components/Form/InputControl';
import Button from '../../components/Form/Button';
import { useForm, FieldValues } from 'react-hook-form';
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
import { propsStack } from '../../routes/Models';
import { useNavigation } from '@react-navigation/native';
interface IFormInputs {
  [name: string]: any;
}

const SignUp: React.FC = () => {
  const { handleSubmit, control } = useForm<FieldValues>();
  const navigation = useNavigation<propsStack>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <Container>
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <ScrollView>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>

            <InputControl
              autoCorrect={false}
              control={control}
              name="name"
              placeholder="Nome completo"
            />
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

            <Button title="Entrar" onPress={handleSubmit(handleSignUp)} />
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
