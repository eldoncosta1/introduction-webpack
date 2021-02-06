import React from 'react';

const Events = () => {

  const name = 'Digital Innovation One';

  const handleInputChange = (e) => {
    const { value } = e.target;  
    console.log(value);
  }

  const handleButtonShowEvent = (e) => {
    console.log('handle button show event');
    console.log(e);
    alert(name);
  }

  const Button = <button onClick={handleButtonShowEvent}>Show Event</button>
  const deleteButton = <button onClick={handleButtonShowEvent}>Show Event</button>

  return (
    <div>
      <h3>Events</h3>
      <input onChange={handleInputChange} />
      {Button}
      {deleteButton}
    </div>
  );
}

export default Events;