import { useState } from 'react';
// import logo from './logo.svg';

// import "./FormPage.js";

import './App.css';

function App() {
const team = [
  {
    name : "Barış Manço" ,
    email : "baris@baris.com" ,
    role : "singer" ,
  },
  {
    name : "Cem Karaca" ,
    email : "cem@cem.com" ,
    role : "singer" ,

  },
];
const [teams, setTeams] = useState(team);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
