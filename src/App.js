import './App.css';
import Intro from './components/Intro';
import Purpose from './components/Purpose/Purpose';
import Curriculum from './components/Curriculum/Curriculum';
import WhatWeMade from './components/WhatWeMade/WhatWeMade';
import FinalComments from './components/FinalComment/FinalComments';
import Problems from './components/Problems/Problems';

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
