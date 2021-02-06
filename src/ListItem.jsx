import React from "react";
import Card from './Card';
import Button from './components/Button';

import mock from './mock';

const App = () => {

  const handleClick = (id) => {
    console.log('deletar cliente ' + id)
  }


  const renderSkills = (skill, index) => {
    return (
      <div style={ {paddingLeft: '30px'} }  key={`skill-${index}`}>
        <li>{skill}</li>        
      </div>
    )
  }
    

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <Button onClick={() => handleClick(customer.id)}>Deletar o Cliente </Button></li>
        {customer.skills.map(renderSkills)}        
      </div>
    )
  }
  
  return (
    <div>
     <h3>List Item</h3>    
      <div>
        <ul>
          {mock.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
}

export default App;