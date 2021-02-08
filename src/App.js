import './App.css';
import Intro from './components/Intro';
import Purpose from './components/Purpose/Purpose';
import Curriculum from './components/Curriculum/Curriculum';
import WhatWeMade from './components/WhatWeMade/WhatWeMade';
import FinalComments from './components/FinalComment/FinalComments';
import Problems from './components/Problems/Problems';
import ReactFullpage from '@fullpage/react-fullpage';


function App() {
  return (
    <ReactFullpage
      licenseKey={null}
      scrollOverflow={true}
      recordHistory={false}
      render={() => {
        return (
          <ReactFullpage.Wrapper className="App">
            <div className="section fp-auto-height"><Intro/></div>
            <div className="section fp-auto-height"><Purpose/></div>
            <div className="section fp-auto-height"><Curriculum/></div>
            <div className="section fp-auto-height"><WhatWeMade/></div>
            <div className="section fp-auto-height"><Problems/></div>
            <div className="section fp-auto-height"></div>
            <div className="section fp-auto-height"><FinalComments/></div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  );
}

export default App;
