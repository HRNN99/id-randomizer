import React, {useState} from 'react';
import './App.css';
import Card from './card.js';
import faker from 'faker'
import { name } from 'faker/locale/zh_TW';

function App() {
  const [name, setName] = useState(`${faker.name.firstName()} ${faker.name.lastName()}`)
  const [nameMan, setNameMan] = useState("alan")

  const randomize = () =>{
    setName(`${faker.name.firstName()} ${faker.name.lastName()}`)
  }

  const [showCard, setShowCard] = useState(true)

  const toggleShowCard = () => setShowCard(!showCard)
  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Change Visibility</button>
      {showCard &&
      <Card 
      avatar={faker.image.avatar()}
      name={`${faker.name.firstName()} ${faker.name.lastName()}`}
      titulo={faker.name.jobTitle()}
      ><button className="button" onClick={randomize}>Change person</button></Card>
      }
    </div>
  );
}

export default App;
