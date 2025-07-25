import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageIcon } from "@phosphor-icons/react";
import {
  Container, Form, Label, ErrorMessage, InputGroup, Input, LabelUpload, Select,
  Submitbutton,ContainerCheckBox
} from './styles';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const schema = yup.object({
  name: yup.string().required('Digite o Nome do Produto'),
  price: yup.number().positive().required('Digite o Preço do Produto')
    .typeError('Digite o Preço do Produto'),
  category: yup.object().required('Escolha uma Categoria'),
  offer: yup.bool(),
  file: yup.mixed()
    .required('Escolha arquivo para continuar')
    .test('fileSize', 'Carregue arquivos até 3MB', (value) => {
      return value && value.length > 0 && value[0].size <= 3 * 1024 * 1024; // 3MB
    })
    .test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navegate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando o Produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao adicionar o produto, tente novamente',
    });
    setTimeout(() => {
      navegate('/admin/produtos');
    }, 2000);
  };


 
  const { onChange, ...restFileRegister } = register('file');

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Name</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <input
              type="file"
              {...restFileRegister}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setFileName(e.target.files[0]?.name);
                onChange(e);
              }}
            />
            {fileName || 'Upload do Produto'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder='Categorias'
                menuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <ContainerCheckBox>
            <input type="checkbox"{...register('offer')} />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckBox>
        </InputGroup>

        <Submitbutton>Adicionar Produto</Submitbutton>
      </Form>
    </Container>
  );
}
