import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactInputVerificationCode from 'react-input-verification-code';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import { Button } from 'components/Button';

import {
  Container,
  Content,
  Tille,
  Logo,
  ContentBackgroud,
  LogoContainer,
  Form,
  Description,
  Text,
} from './styles';
import logo_image from 'assets/svgs/logo.svg';
import sigin_backgroud_image from 'assets/svgs/forgot_password.svg';

function ForgotPassword() {
  const [value, setValue] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

  const clearValue = () => {
    setValue('');
    setIsPlaying(true);
  };

  const handleTimeIsCompleted = (param) => {
    if (param === 30) {
      setIsPlaying(false);
    }
  };

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={logo_image} alt='logo' />
        </LogoContainer>
        <Tille>Codigo de Verificação</Tille>
        <Description>
          Digite o código de verificação que você recebeu por email.
        </Description>
        <Form>
          {!isPlaying && (
            <ReactInputVerificationCode
              onChange={setValue}
              value={value}
              autoFocus={true}
              length={4}
            />
          )}

          <Text onClick={clearValue}> reenviar código</Text>
          {isPlaying && (
            <CountdownCircleTimer
              size={100}
              isPlaying
              duration={30}
              colors={['#1271CA', '#E9C713', '#6FCF97', '#27AE63', '#219653']}
              colorsTime={[30, 24, 12, 6, 0]}
              onComplete={handleTimeIsCompleted}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          )}

          <Button type='submit' color='#fff' onClick={handleSubmit}>
            validar código
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
