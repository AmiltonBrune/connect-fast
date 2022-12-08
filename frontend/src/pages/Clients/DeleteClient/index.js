import React from 'react';

import Alert from 'components/Alert';

import { useModal } from 'hooks';

import { Container } from './styles';

function DeleteClient() {
  const {
    isShowingAlertSucess,
    toggleAlertSucess,
    isShowingAlertWarning,
    toggleAlertWarning,
  } = useModal();

  return (
    <Container>
      <Alert
        isShowingAlert={isShowingAlertWarning}
        msg='Tem certeza que deseja excluir esse cliente?'
        typeAlert='warning'
        btns={[
          {
            textButton: 'não',
            color: '#fff',
            bgColor: '#EC3535',
            toggleAlert: () => toggleAlertWarning(),
          },
          {
            textButton: 'sim',
            color: '#fff',
            toggleAlert: () => {
              toggleAlertWarning();
              toggleAlertSucess();
            },
          },
        ]}
      />
      <Alert
        isShowingAlert={isShowingAlertSucess}
        toggleAlert={toggleAlertSucess}
        textButton='ok'
        color='#fff'
        msg='Cliente excluído com sucesso.'
      />
    </Container>
  );
}

export default DeleteClient;
