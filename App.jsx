import React from "react";
import { Component } from "react";

class App extends Component{

    constructor(){
        super()
            this.state={userName : "sharvari"}

    }

    render(){
        return(
        <>
        <h1 style={{color :"pink"}}>{this.state.userName}</h1>
        </>
        )

    }
}
export default App