import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import InputControl from '../../components/Form/InputControl';
import Button from '../../components/Form/Button';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const formSchema = yup.object({
  name: yup.string().required('Informe o nome completo.'),
  email: yup.string().email('Email inválido.').required('Informe o email.'),
  password: yup.string().required('Informe a senha.'),
});

const SignUp: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });
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
              error={errors.name && errors.name.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <InputControl
              control={control}
              name="password"
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
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
