import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StatsScreen from './stats_screen';
import QuestionsScreen from './questions_screen';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { Values } from './values';

function App() {

  Values.set('event', '2022camb')

  useEffect(() => {
    async function mmyep(){
      let data = await axios.get(`https://www.thebluealliance.com/api/v3/event/${Values.get('event')}/teams/simple`, {
        headers: {
            "X-TBA-Auth-Key": "v62ZvFvAkyWVH1qwd1m8Kyyhll0VEvyxUGo7pqpM1re827yjVZlgtjdpBEQJNcn2"
        }
      });

      data = data.data;
      let teams = {};
  
      data.forEach((team) => {
          teams[team.team_number] = team.nickname;
      });

      const numberInput = document.getElementById("Team Number");
      Object.keys(teams).forEach((team) => {
        numberInput.innerHTML += `<option value="${team}"></option>`
      });
    }
    mmyep();
 }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/stats" element={<StatsScreen/>}/>
          <Route path="/" element={<QuestionsScreen/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;