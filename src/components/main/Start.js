import React from "react";

function Start(props) {
    return (
        <div style={{ width: "100%", height: 1080, backgroundColor:"#625a52"}}>
            <img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "18%" ,right:"43%", width:"15%"}}  onClick={props.start}/>
        </div>
    )
}

export default Start