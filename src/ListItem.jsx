import React from "react";
import Card from './Card';

const listCustomer = [
  {
    id: 1,
    name: 'Eldon Costa',
    skills: ['React', 'Node', 'Css']
  },
  {
    id: 2,
    name: 'Bruna Hoffmann',
    skills: ['MFC', 'Psiquiatria', 'Saúde Mental']
  },
  {
    id: 3,
    name: 'Oliver',
    skills: ['Dog', 'Son']
  }
]
const App = () => {

  const handleClick = (e, id) => {
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
        <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletear Cliente x</button></li>
        {customer.skills.map(renderSkills)}        
      </div>
    )
  }
  
  return (
    <div>
     <h3>List Item</h3>    
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
}

export default App;