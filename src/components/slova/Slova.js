import React from 'react'
import Delay from 'react-delay-render'

import bg1 from './bg-slova-a.png'
import bg2 from './bg-slova-m.png'
import PreloadImage from "react-preload-image";

class Slova extends React.Component{
    state = {
        btn: true,
        image: bg1,
        audio: {
            upper: "",
            lower: "",
            delay: 0
        },
        veliko: "",
        malo: ""
    }

    componentDidMount() {
        if(this.props.slide === "t"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo T kazi T.mp3", lower:"2,a ovo je nase malo slovo a.mp3", delay: 6000 },
                veliko:"radno-43.png",
                malo: "radno-44.png"
            })
        }
        if(this.props.slide === "o"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo O kazi O.mp3", lower:"13 a ovo je nase malo slovo o kazi o.mp3", delay: 7000 },
                veliko:"radno-35.png",
                malo: "radno-36.png"
            })
        }
    }

    render() {
        const Veliko = () => <img src={'./slides/' + this.state.veliko} alt={"veliko"} className='veliko-slovo'/>
        const DelayedVeliko = Delay({ delay: 3000 })(Veliko);

        const Malo = () => <img src={'./slides/' + this.state.malo} alt={"malo"} className='malo-slovo'/>
        const DelayedMalo = Delay({ delay: 7000 })(Malo);

        const Audio2 = () => <audio autoPlay src={"./audio/" + this.state.audio.lower} />
        const DelayedAudio = Delay({ delay: this.state.audio.delay })(Audio2);

        const Btn = () => <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/>
        const DelayedBtn = Delay({ delay: 500})(Btn)
        return(
            <div className={"main"}>
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
                <DelayedBtn />
                <DelayedVeliko />
                <DelayedMalo />
                <audio autoPlay src={"./audio/" + this.state.audio.upper} />
                <DelayedAudio />
            </div>
        )
    }

}

export default Slova
