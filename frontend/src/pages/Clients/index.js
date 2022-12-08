import React from 'react';

import SimpleTable from 'components/SimpleTable';
import CreateClient from './CreateClient';
import EditClient from './EditClient';
import DeleteClient from './DeleteClient';

import { cellsHeadersMock, rowsKeysMock, rowsMock } from 'mocks';

import { Container } from './styles';

function Clients() {
  return (
    <Container>
      <SimpleTable
        title='Clientes'
        rows={rowsMock}
        rowsKeys={rowsKeysMock}
        cellsHeaders={cellsHeadersMock}
      />
      <CreateClient />
      <EditClient />
      <DeleteClient />
    </Container>
  );
}

export default Clients;
