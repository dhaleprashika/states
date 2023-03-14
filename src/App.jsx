// import React from "react";
// import { Component } from "react";
// import JSON from './users.json'
// import Users from './Users.jsx';

// class App extends Component{

//     constructor(){
//         super()
//         this.state={json : JSON}
//     }

//     render(){
//         return(
//         <div>
//          <Users data={this.state.json}/>
//         </div>
//         )
//     }
// }
// export default App

import React, { Component } from 'react'
import JSON from './students.json'
import Students from './Students.jsx';

export default class App extends Component {
    constructor(){
        super()
        this.state={json : JSON}
    }
  render() {
    return (
      <div>
        <Students data1={this.state.json}/>
      </div>
    )
  }
}

