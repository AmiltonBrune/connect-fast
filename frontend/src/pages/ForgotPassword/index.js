import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

import {
  Container,
  Content,
  Tille,
  Logo,
  ContentBackgroud,
  LogoContainer,
  Form,
  Description,
} from './styles';
import logo_image from 'assets/svgs/logo.svg';
import sigin_backgroud_image from 'assets/svgs/forgot_password.svg';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/verify-code');
  };

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={logo_image} alt='logo' />
        </LogoContainer>
        <Tille>Recuperar Senha</Tille>
        <Description>
          Insira seu email e enviaremos um link para você voltar a acessar a sua
          conta.
        </Description>
        <Form>
          <Input label='Email' type='text' placeholder='Digite seu email...' />
          <Button type='submit' color='#fff' onClick={handleSubmit}>
            enviar email
          </Button>
        </Form>
      </Content>
      <ContentBackgroud>
        <img src={sigin_backgroud_image} alt='sigin_backgroud_image' />
      </ContentBackgroud>
    </Container>
  );
}

export default ForgotPassword;
