import React from 'react'
import App from './App'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Fullscreen() {
    const handle = useFullScreenHandle();
    return (
        <div >
            <img src={'./slides/fullscreen-blue.png'} onClick={handle.enter} className="fullscreen-btn" alt="img"/>
            <FullScreen handle={handle}>
                {handle.active ? <img src={'./slides/fullscreen-mini.png'} onClick={handle.exit} className="fullscreen-btn" alt="img"/> : null}
                <App />
            </FullScreen>
        </div>
    )

}

export default Fullscreen