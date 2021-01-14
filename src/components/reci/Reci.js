import React from 'react'
import ReciArr from "./ReciArr";
import Delay from "react-delay-render";

import bg1 from './balonihd.jpg'
import PreloadImage from "react-preload-image";

class Reci extends React.Component{
    state = {
        image: bg1,
        reci: ReciArr,
        word: 0
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let rec = this.state.reci
        if(!rec[id].found){
            rec[id].found = true
            rec[id].animation = "jello-horizontal"
            this.setState(prevState => {return { reci: rec, word: prevState.word + 1}})
        }
    }

    render() {
        const Audio1 = () => <audio
            autoPlay
            src={"./audio/21 pritisni baloncic u kome pise TA.mp3"}
        />
        const DelayedAudio = Delay({ delay: 5000 })(Audio1);

        return(
            <div className={"main"}>
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '50vw',
                        backgroundColor: '#222222'
                    }}

                    src={this.state.image}
                />
                {this.state.word === 10 ? <audio
                    autoPlay
                    src={"./audio/FENOMENALNO.mp3"}
                /> : null}
                {this.state.word === 10 ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {this.state.reci.map( (rec, i) =>
                    <img key={i}
                         src={"./slides/" + rec.image}
                         className={rec.animation}
                         alt={"A"}
                         id={i}
                         name={rec.name}
                         style={{width:"7%", position:"absolute", marginTop:rec.top, left:rec.left}}
                         onClick={ this.state.word === i ? this.handleClick : null}
                    /> )}

                    {this.state.word === 0 ? <audio
                        autoPlay
                        src={"./audio/20 sada kad znamo jos dva slova hajde da citamo.mp3"}
                    /> : null}
                {this.state.word === 0 ? <DelayedAudio/> : null}
                {this.state.word === 1 ? <audio
                    autoPlay
                    src={"./audio/22 pritisni baloncic u kome pise TO.mp3"}
                /> : null}
                {this.state.word === 2 ? <audio
                    autoPlay
                    src={"./audio/23 pritisni baloncic u kome pise MA.mp3"}
                /> : null}
                {this.state.word === 3 ? <audio
                    autoPlay
                    src={"./audio/24 pritisni baloncic u kome pise MO.mp3"}
                /> : null}
                {this.state.word === 4 ? <audio
                    autoPlay
                    src={"./audio/25 pritisni baloncic u kome pise OT.mp3"}
                /> : null}
                {this.state.word === 5 ? <audio
                    autoPlay
                    src={"./audio/26 pritisni baloncic u kome pise AT.mp3"}
                /> : null}
                {this.state.word === 6 ? <audio
                    autoPlay
                    src={"./audio/27 pritisni baloncic u kome pise OM.mp3"}
                /> : null}
                {this.state.word === 7 ? <audio
                    autoPlay
                    src={"./audio/28 pritisni baloncic u kome pise AM.mp3"}
                /> : null}
                {this.state.word === 8 ? <audio
                    autoPlay
                    src={"./audio/29 pritisni baloncic u kome pise AO.mp3"}
                /> : null}
                {this.state.word === 9 ? <audio
                    autoPlay
                    src={"./audio/30 pritisni baloncic u kome pise OA.mp3"}
                /> : null}

            </div>
        )
    }
}

export default Reci
