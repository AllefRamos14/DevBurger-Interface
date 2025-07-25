import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




import Logo from '../../assets/Logo 1.svg';
import { Button } from '../../components';
import { Container, LeftContainer, RighContainer, Title, InputConteiner, Form, Input,Link } from './styles';
import { api } from "../../services/api";

export function Register() {
const navigate = useNavigate();

    const schema = yup
    .object({
        name: yup.string().required('O Nome é Obrigatório'),
        email: yup
            .string()
            .email('Digite um e-mail Válido')
            .required('O e-mail é Obrigatório'),
        password: yup
            .string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .required('Digite a Senha'),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As Senhas Devem Ser Iguais')
            .required('Confirma Sua Senha'),
    }).required();

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,

                },
            );
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/Login');
                },2000);
                toast.success('Conta criada com sucesso!');
            } else if (status === 409) {
                toast.error('Email já Cadastrado! Faça o login para Continuar');
            } else {
                throw new Error("");
            }
           
        } catch (error) {
            toast.error('😪 Falha no sitema! Tente Novamente');
        }
    };


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RighContainer>
                <Title>Criar conta</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputConteiner>
                        <label>Nome</label>
                        <Input type="name" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputConteiner>
                    <InputConteiner>
                        <label>Email</label>
                        <Input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputConteiner>

                    <InputConteiner>
                        <label>Senha</label>
                        <Input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputConteiner>
                    <InputConteiner>
                        <label>ConfirmSenha</label>
                        <Input type="confirmpassword" {...register("confirmpassword")} />
                        <p>{errors?.confirmpassword?.message}</p>
                    </InputConteiner>


                    <Button type="submit">CONFIRMAR CADASTRO</Button>

                </Form>
                <p>Já possui conta? <Link to="/Login">Clique aqui.</Link></p>



            </RighContainer>

        </Container>
    );
}