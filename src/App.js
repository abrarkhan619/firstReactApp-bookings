import React from 'react';
import './App.css';
import Card from './components/Card.js'
import PersonCard from './components/PersonCard.js'

import Room1 from './images/room1.jpg'
import Room2 from './images/room2.jpg'
import Room3 from './images/room3.jpg'
import Person1 from './images/person1.jpg'
import Person2 from './images/person2.jpg'
import Person3 from './images/person3.jpg'

function App() {
  return (
    <div className="container">
      <div className="fullCard">
        <Card source={Room1} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eahgjh."/>
        <PersonCard source={Person1} name="John" country="United States"/>
      </div>
      <div className="fullCard">
        <Card source={Room2} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eahgjh."/>
        <PersonCard source={Person2} name="Jacob" country="United Kingdom"/>
      </div>
      <div className="fullCard">
        <Card source={Room3} review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eahgjh."/>
        <PersonCard source={Person3} name="Jason" country="France"/>
      </div>
    </div>
  );
}

export default App;
//testing