import React from 'react'
import Start from './components/main/Start'
import Main from './components/main/Main'
import Slova from './components/slova/Slova'
import Drvo from './components/drvo/Drvo'
import Tabla from "./components/tabla/Tabla"
import Skrivalice from "./components/skrivalice/Skrivalice"
import Karte from "./components/karte/Karte"
import Reci from "./components/reci/Reci"
import Deca from './components/deca/Deca'
import Video from './components/video/Video'

import './App.css';
import './bootstrap.css'

class App extends React.Component {
  state = {
    slide: 0
  };

  nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

  backToMain = () => this.setState({ slide:0})

  render() {
    return (
        <div style={{width: "100%"}} >
          { this.state.slide === 0 ? <Start start={this.nextSlide} /> : null}
          { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 2 ? <Slova slide={"t"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 3 ? <Drvo slide={"t"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 4 ? <Tabla slide={"t"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 5 ? <Karte slide={"t"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 6 ? <Skrivalice slide={"t"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 9 ? <Slova slide={"o"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 10 ? <Drvo slide={"o"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 11 ? <Tabla slide={"o"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 12 ? <Karte slide={"o"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 13 ? <Skrivalice slide={"o"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 15 ? <Reci slide={"slogovi"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 16 ? <Deca nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
          { this.state.slide === 18 ? <Video end={this.backToMain}/> : null}
        </div>
    );
  }
}

export default App;
