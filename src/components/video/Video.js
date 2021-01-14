import React from 'react'

class Video extends React.Component{

    render() {
        return(
            <div className="main">
                <video
                    src="./a-s.mp4"
                    autoPlay
                    loop
                    style={{width:"100%", height:"100vh"}}
                />
                <button className="main-button" onClick={this.props.end} >end</button>
            </div>
        )
    }
}

export default Video
