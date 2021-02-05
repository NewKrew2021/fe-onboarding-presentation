import { Heading } from 'rebass'
import { Hero } from 'react-landing-page'

function Intro() {
  return (
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
  );
}

export default Intro;