import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StatsScreen from './stats_screen';
import QuestionsScreen from './questions_screen';

function App() {

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