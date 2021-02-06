import React from "react";
import Card from './Card';
import ListItem from './ListItem';

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
        <h1>Nome do Cliente: Eldon Costa</h1>
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
      <Card />
      <ListItem />
    </div>
  );
}

export default App;