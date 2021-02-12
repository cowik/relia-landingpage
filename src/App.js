import React, { Component } from 'react'
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Whyus from './components/whyus';
import Cliens from './components/cliens';
import Services from './components/services';
import Features from './components/features';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';

export class App extends Component {
  // state = {
  //   landingPageData: {},
  // }
  // getlandingPageData() {
  //   this.setState({landingPageData : JsonData})
  // }

  // componentDidMount() {
  //   this.getlandingPageData();
  // }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Whyus />
        <Cliens />
        <Services />
        <Features />
        <Team />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;