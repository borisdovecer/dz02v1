import React from 'react'
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti'
import PreloadImage from 'react-preload-image'
import imgMain from './bg-main.png'
import imgMedal from './bg-medal.png'
import imgVoz from './bg-voz.png'
import imgStar from './bg-star.png'
import imgPehar from './bg-pehar.png'

class Main extends React.Component {
    state = {
        image: imgMain,
        audio: "",
        confetti: false
    }

    componentDidMount()  {

        if(this.props.slide === "main"){
            this.setState({image: imgMain, audio: "00 Hajde da zapocnemo nase magicno putovanje i naucimo slova.mp3"})
        }
        if(this.props.slide === "train"){
            this.setState({image: imgVoz, audio: "10 vidi vidi neko nam dolazi nasi drugari iz savane sigurno nam nesto donose.mp3"})
        }
        if(this.props.slide === "star"){
            this.setState({image: imgStar, audio: "08 wow naucili smo nase novo slovo fenomenalno tako to rade sampioni.mp3", confetti: true})
        }
        if(this.props.slide === "pehar"){
            this.setState({image: imgPehar, audio: "37 kao i svaki smapion i ti dobijas pehar cestitamo.mp3", confetti: true})
        }
        if(this.props.slide === "medal"){
            this.setState({image: imgMedal, audio: "09 zasluzeno stize i zlatna Dzivi medalja.mp3", confetti: true})
        }
    }

    render() {
        const { width, height } = useWindowSize;

        return(
            <div className="main">
                {this.state.confetti ? <Confetti width={width} height={height}/> : null}
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#222222'
                    }}
                    src={this.state.image}
                    duration={"1000ms"}
                />
                <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/>
                <audio autoPlay src={"./audio/" + this.state.audio}/>
            </div>
        )
    }
}

export default Main
