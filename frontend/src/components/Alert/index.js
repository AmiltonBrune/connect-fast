import React from 'react';

import { Button } from 'components/Button';
import Modal from 'components/Modal';

import success from 'assets/svgs/success.svg';

import { Container } from './styles';

function Alert({ isShowingAlert, toggleAlert, msg, bgColor, textButton }) {
  return (
    <Modal
      isShowing={isShowingAlert}
      hide={toggleAlert}
      isCloseButton={false}
      width='500px'
      height='500px'
      justifyContent='center'
      footer={
        <Button onClick={toggleAlert} bgColor={bgColor}>
          {textButton}
        </Button>
      }
    >
      <Container>
        <img src={success} alt='' />
        <p>{msg}</p>
      </Container>
    </Modal>
  );
}

export default Alert;
