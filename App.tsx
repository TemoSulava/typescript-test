import React, { useState } from 'react';
import List from './List';
import AddToList from './AddToList';
import './App.css'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    notes?: string
  }[]
}



function App() {

  const [people, setPeople] = useState<IState['people']>([{
    name: 'LeBron James',
    age: 15,
    url: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png',
    notes: 'Wannabe'
  },
])


  return (
    <div className="App">
      <h1>Poople invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
