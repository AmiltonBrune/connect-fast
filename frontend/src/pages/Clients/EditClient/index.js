import React, { useState } from 'react';

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
  const [client] = useState({
    name: 'Felipe Miguel Luan Pires',
    address: 'Rua Falcão',
    number: '152',
    complement: 'Casa 2',
    district: 'Jardim das Flores',
    city: 'São Paulo',
    state: 'SP',
    cep: '12345-67',
    cpf: '055.560.947-21',
    dob: '1958-10-09',
  });

  const { isShowingEdit, toggleEdit, isShowingAlertSucess, toggleAlertSucess } =
    useModal();
  return (
    <Container>
      <Modal
        isShowing={isShowingEdit}
        hide={toggleEdit}
        title='Editar cliente'
        isCloseButton={true}
        height='750px'
        footer={
          <>
            <Button onClick={toggleEdit} color='#fff' bgColor='#EC3535'>
              fechar
            </Button>
            <Button
              onClick={() => {
                toggleEdit();
                toggleAlertSucess();
              }}
              color='#fff'
            >
              atualizar
            </Button>
          </>
        }
      >
        <Content>
          <InputContainer>
            <ButtonContainer>
              <Input
                label='Nome'
                type='text'
                placeholder='Digite o nome...'
                value={client.name}
              />
            </ButtonContainer>
            <InputContent>
              <Input
                label='Data de Nascimento'
                type='date'
                placeholder='Digite o nome...'
                value={client.dob}
              />
              <Input
                label='CPF'
                type='text'
                placeholder='Digite o CPF...'
                value={client.cpf}
              />
            </InputContent>
            <ButtonContainer>
              <Input
                label='CEP'
                type='text'
                placeholder='Digite o cep...'
                value={client.cep}
              />
              <Button
                bgColor='linear-gradient(white, white) padding-box,linear-gradient(to right, #6fcf97, #27ae60, #219653) border-box'
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
                value={client.address}
              />
              <Input
                label='Número'
                type='text'
                placeholder='Digite o numero...'
                value={client.number}
              />
            </InputContent>
            <InputContent>
              <Input
                label='Complemento'
                type='text'
                placeholder='Digite o bairro...'
                value={client.complement}
              />
            </InputContent>
            <InputContent>
              <Input
                label='Bairro'
                type='text'
                placeholder='Digite o bairro...'
                value={client.district}
              />
              <Input
                label='Cidade'
                type='text'
                placeholder='Digite a cidade...'
                value={client.city}
              />
              <Input
                label='Estado'
                type='text'
                placeholder='Digite o estado...'
                value={client.state}
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
        msg='Cliente atualizado com sucesso.'
      />
    </Container>
  );
}

export default CreateClient;
