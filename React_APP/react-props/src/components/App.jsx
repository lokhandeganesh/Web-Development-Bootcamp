import React from 'react';
import Card from './Card';
// 

import Emojipedia from '../emojipedia'
// import Double from "../array";
// console.log(Emojipedia)

function createCard(emojiTerm) {
  return(
    <Card 
    key={emojiTerm.id} 
    id = {emojiTerm.id}
    name={emojiTerm.name} 
    img_src= {emojiTerm.emoji} 
    meaning={emojiTerm.meaning} 
    />
  );
}

// 
function App() {
  return (
    
    <div> 
      <h1>
        <span>emojipedia</span> 
      </h1>
      <React.StrictMode>
      <dl className="dictionary">
        {Emojipedia.map(createCard)}
      </dl>
      </React.StrictMode>
    </div>
    
  );
}

export default App;
