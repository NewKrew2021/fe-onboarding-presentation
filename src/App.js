import './App.css';
import Intro from './components/Intro';
import Purpose from './components/Purpose';
import Curriculum from './components/Curriculum';
import WhatWeMade from './components/WhatWeMade';
import FinalComments from './components/FinalComments';
import Problems from './components/Problems';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Purpose/>
      <Curriculum/>
      <WhatWeMade/>
      <Problems />
      <FinalComments/>
    </div>
  );
}

export default App;
