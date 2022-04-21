import React from 'react';
import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import Button from '../../components/Form/Button';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
import { useAuth } from '../../context/AuthContext';

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('Email inválido.').required('Informe o email.'),
  password: yup.string().required('Informe a senha.'),
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });
  const navigation = useNavigation<propsStack>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    try {
      setLoading(true);
      signIn(data);
    } catch {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais.',
      );
    }
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

            <Button
              title="Entrar"
              disabled={loading || errors.email || errors.password}
              onPress={handleSubmit(handleSignIn)}
            />
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
