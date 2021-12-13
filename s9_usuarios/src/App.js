import { useState } from 'react';
import { Card } from './components/card';
import { Container } from './components/container';
import { UserForm } from './components/userform';

function App() {

  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  return (
    <div style={{marginTop: '15%'}}>
    <Container>
      <Card>
        <div style={{padding: 20}}>
          <UserForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(x => 
            <li key={x.correo}>{`${x.name} ${x.apellido}`}</li>
            )}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
