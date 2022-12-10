import React from 'react';

import { Button } from 'components/Button';
import Modal from 'components/Modal';
import { Input } from 'components/Input';
import Alert from 'components/Alert';

import { useModal } from 'hooks';

import {
  Container,
  ButtonContainer,
  Content,
  InputContainer,
  InputContent,
} from './styles';

function CreateClient() {
  const {
    isShowing,
    toggle,
    isShowingAlertSucess,
    toggleAlertSucess,
    isShowingAlertError,
    toggleAlertError,
  } = useModal();
  return (
    <Container>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        title='Cadastrar cliente'
        isCloseButton={true}
        height='750px'
        footer={
          <>
            <Button onClick={toggle} color='#fff' bgColor='#EC3535'>
              fechar
            </Button>
            <Button
              onClick={() => {
                toggle();
                toggleAlertError();
              }}
              color='#fff'
            >
              cadastrar
            </Button>
          </>
        }
      >
        <Content>
          <InputContainer>
            <ButtonContainer>
              <Input label='Nome' type='text' placeholder='Digite o nome...' />
            </ButtonContainer>
            <InputContent>
              <Input
                label='Data de Nascimento'
                type='date'
                placeholder='Digite o nome...'
              />
              <Input label='CPF' type='text' placeholder='Digite o CPF...' />
            </InputContent>
            <ButtonContainer>
              <Input label='CEP' type='text' placeholder='Digite o cep...' />
              <Button
                bgColor='linear-gradient(white, white) padding-box,`linear-gradient(to right,${props.theme.colors.gradient})` border-box'
                isBorder='true'
              >
                buscar cep
              </Button>
            </ButtonContainer>
            <InputContent>
              <Input
                label='Endereço'
                type='text'
                placeholder='Digite o endereço...'
              />
              <Input
                label='Número'
                type='text'
                placeholder='Digite o numero...'
              />
            </InputContent>
            <InputContent>
              <Input
                label='Complemento'
                type='text'
                placeholder='Digite o bairro...'
              />
            </InputContent>
            <InputContent>
              <Input
                label='Bairro'
                type='text'
                placeholder='Digite o bairro...'
              />
              <Input
                label='Cidade'
                type='text'
                placeholder='Digite a cidade...'
              />
              <Input
                label='Estado'
                type='text'
                placeholder='Digite o estado...'
              />
            </InputContent>
          </InputContainer>
        </Content>
      </Modal>
      <Alert
        isShowingAlert={isShowingAlertSucess}
        toggleAlert={toggleAlertSucess}
        textButton='ok'
        color='#fff'
        msg='Cliente adicionado com sucesso.'
      />
      <Alert
        isShowingAlert={isShowingAlertError}
        toggleAlert={() => {
          toggleAlertError();
          toggleAlertSucess();
        }}
        typeAlert='error'
        textButton='tentar novamente'
        color='#fff'
        btnWidth='200px'
        bgColor='#EC3535'
        msg='Erro ao cadastrar novo cliente.'
      />
    </Container>
  );
}

export default CreateClient;
