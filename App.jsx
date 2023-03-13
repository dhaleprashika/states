// import React from "react";
// import { Component } from "react";

// class App extends Component{

//     constructor(){
//         super()
//             this.state={userName : "sharvari"}

//     }

//     render(){
//         return(
//         <>
//         <h1 style={{color :"pink"}}>{this.state.userName}</h1>
//         </>
//         )

//     }
// }
// export default App

import React from "react";
import { Component } from "react";

class App extends Component{
    state={
        username : "nirmala",
        // password : "nircivil2022"
        skills : ["Java","SQL","JS"]
    }

    render(){
        // console.log(this);
        return(
            <>
            <h1>{this.state.username}</h1>
            {/* <h2>{this.state.password}</h2> */}
            <ul>{this.state.skills.map((x)=>{return <li>{x}</li>})}</ul>
            </>
        )
    }
}
export default App