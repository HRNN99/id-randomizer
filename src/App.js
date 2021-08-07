import React, {useState} from 'react';
import './App.css';
import Card from './card.js';
import faker from 'faker'
import { name } from 'faker/locale/zh_TW';

function App() {
  const [name, setName] = useState(`${faker.name.firstName()} ${faker.name.lastName()}`)

  const randomize = () =>{
    setName(`${faker.name.firstName()} ${faker.name.lastName()}`)
  }
  return (
    <div className="App">
      <div>
        <button className="button" onClick={randomize}>Change person</button>
      </div>
      <Card 
      avatar={faker.image.avatar()}
      name={`${faker.name.firstName()} ${faker.name.lastName()}`}
      titulo={faker.name.jobTitle()}
      />
    </div>
  );
}

export default App;
