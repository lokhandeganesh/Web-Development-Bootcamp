import React from 'react';
import Card from './Card';
// 
import Contacts from '../contacts'

const card = [];
Contacts.forEach(contact => {
  card.push(<Card key={contact.id} name={contact.name} img_src= {contact.imgURL} phone={contact.phone} email={contact.email} />)
  });


function App() {
  return (
    
    <div> 
      <React.StrictMode>      
      <h1 className="heading">My Contacts</h1>
      {card}   
      </React.StrictMode>     
    </div>
    
  );
}

export default App;
