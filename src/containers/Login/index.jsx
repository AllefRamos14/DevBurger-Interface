import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";

import Logo from '../../assets/Logo 1.svg';
import { Button } from '../../components';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  InputContainer,
  Form,
  Input,
  Link
} from './styles';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function Login() {

  const navigate = useNavigate(); // ✅ instancie o hook aqui
  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup
      .string()
      .email('Digite um e-mail Válido')
      .required('O e-mail é Obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Digite a Senha'),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // try {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin === true) {
                navigate('/admin/pedidos');
                
              } else {
                navigate('/Login');
               
              }

            }, 2000);
             return 'Seja Bem-Vindo(a) 👌';

          },
        },

        error: 'Email ou Senha Incorretos 🤯',

      },
    );
    putUserData(userData);
  
  };


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <InputContainer>
            <label>Email</label>
            <Input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>

            <label>Senha</label>
            <Input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>


          <Button type="submit">ENTRAR</Button>

        </Form>
        <p>Não possui conta? <Link to="/Register">Clique aqui.</Link></p>



      </RightContainer>

    </Container>
  );
}