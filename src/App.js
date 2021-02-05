import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Purpose from './components/Purpose';
import Curriculum from './components/Curriculum';
import WhatWeMade from './components/WhatWeMade';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Purpose/>
      <Curriculum/>
      <WhatWeMade/>
    </div>
  );
}

export default App;
