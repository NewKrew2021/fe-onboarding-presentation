import logo from './logo.svg';
import './App.css';
import { Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'

function App() {
  return (
    <div className="App">
      <Hero
        color="black"
        bg="white"
        backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
      >
          <Heading>Name of your app</Heading>
          {/* <Subhead>a couple more words</Subhead> */}
          {/* <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction> */}
          {/* <ScrollDownIndicator/> */}
      </Hero>
    </div>
  );
}

export default App;
