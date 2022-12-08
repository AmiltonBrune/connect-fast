import React from 'react';
import Tooltip from 'components/Tooltip';
import { FiPackage } from 'react-icons/fi';
import { MdEdit, MdDelete } from 'react-icons/md';

import { useModal } from 'hooks';

import { Container } from './styles';

function Actions({ onPackages }) {
  const { toggleEdit, toggleAlertWarning } = useModal();
  return (
    <Container>
      <FiPackage id='package' color='#219653' size={25} onClick={onPackages} />
      <Tooltip id='package' text='Ver pacotes do cliente' position='bottom' />

      <MdEdit id='edit' color='#1271CA' size={25} onClick={toggleEdit} />
      <Tooltip id='edit' text='Editar cliente' position='bottom' />

      <MdDelete
        id='delete'
        color='#EC3535'
        size={25}
        onClick={toggleAlertWarning}
      />
      <Tooltip id='delete' text='Excluir cliente' position='bottom' />
    </Container>
  );
}

export default Actions;
