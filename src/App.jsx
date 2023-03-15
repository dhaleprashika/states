// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(){
//         super()
//         this.state={username : "prashika"}
//     }

//      handleChange=()=>{
//         this.setState({username: "sharvari"})
//     }


//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <button onClick={this.handleChange}>CHANGE</button>
//       </div>
//     )
//   }
// }

//Counter Application

import React, { Component } from 'react'
import './global.css'

export default class App extends Component {

    constructor(){
        super()
        this.state={count:0}
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        <div className='btnBlock'>
        <button id='btn1' onClick={this.handleIncrement}>Increment</button>
        <button id='btn2' onClick={this.handleDecrement}>Decrement</button>
        <button id='btn3' onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

