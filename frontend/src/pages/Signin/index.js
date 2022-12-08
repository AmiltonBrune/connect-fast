import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';

import { useModal, useAuth } from 'hooks';
import Loading from 'components/Loading';

import {
  Container,
  Content,
  Tille,
  Logo,
  ContentBackgroud,
  LogoContainer,
  Form,
  TextFormContainer,
  TextFormContent,
  TextFormLink,
} from './styles';
import logo_image from 'assets/svgs/logo.svg';
import sigin_backgroud_image from 'assets/svgs/sigin_backgroud_image.svg';

function Signin() {
  const [checked, setChecked] = useState(false);

  const { isShowingLoading, toggleLoading } = useModal();
  const { signIn } = useAuth();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = () => {
    toggleLoading();

    setTimeout(() => {
      toggleLoading();
      signIn('usuario@teste.com', '123');
    }, 600);
  };

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={logo_image} alt='logo' />
        </LogoContainer>
        <Tille>Login</Tille>
        <Form>
          <Input label='Email' type='text' placeholder='Digite seu email...' />
          <Input
            label='Senha'
            type='password'
            placeholder='Digite sua senha...'
          />
          <TextFormContainer>
            <TextFormContent onClick={handleChange}>
              {checked ? (
                <BsFillCheckCircleFill size={20} color='#27ae60' />
              ) : (
                <Checkbox type='checkbox' />
              )}
              <TextFormLink>Lembrar de mim</TextFormLink>
            </TextFormContent>
            <TextFormLink>Esqueceu a senha?</TextFormLink>
          </TextFormContainer>
          <Button type='submit' color='#fff' onClick={handleSubmit}>
            entrar
          </Button>
          <Button
            type='submit'
            bgColor='linear-gradient(white, white) padding-box,linear-gradient(to right, #6fcf97, #27ae60, #219653) border-box'
            isBorder='true'
          >
            cadastrar
          </Button>
        </Form>
      </Content>
      <ContentBackgroud>
        <img src={sigin_backgroud_image} alt='sigin_backgroud_image' />
      </ContentBackgroud>
      <Loading
        isShowingLoading={isShowingLoading}
        toggleLoading={toggleLoading}
      />
    </Container>
  );
}

export default Signin;
