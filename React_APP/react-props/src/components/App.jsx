import React from 'react';

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img_src} alt="avatar-img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  )

}


function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>

      <Card name="Beyonce" img_src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phone="+123 456 789" email="b@beyonce.com" />
      <Card name="Jack Bauer" img_src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" phone="+987 654 321" email="jack@bauer.com" />
      <Card name="Chuck Norris" img_src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" phone="+918 456 255" email="gmail@chucknorris.com" />

    </div>
  );
}

export default App;
