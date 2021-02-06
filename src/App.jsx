import React from "react";
import Card from './Card';
import ListItem from './ListItem';
import Events from './Events';

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;

const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />    
      {buttonA}
    </div>
  );

  const renderAddCustomer = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />    
      {buttonB}
    </div>
  );

  const showCustomer = () => {
    if (!hasCustomer) return null;

    return (
      <div>
        <h3>Nome do Cliente: Eldon Costa</h3>
      </div>
    )
  } 

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a aula webpack 4 =D.</p>
      { hasCustomer ? renderShowHistory : renderAddCustomer }
      <div>
        {showCustomer()}
      </div>
      <ListItem />
      <Events />
    </div>
  );
}

export default App;