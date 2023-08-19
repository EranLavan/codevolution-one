import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
   
// //  FIRST METHOD: inside the render   

//   render() {
 
//     if (this.state.isLoggedIn) {
//         return (
//             <div>
//                 Welcome, Menkalinan
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 Welcome, Guest
//             </div>
//         )
//     }
//     } 
//   

// // SECOND METHOD: variables

//     render() {

//         let message 
//         if (this.state.isLoggedIn) {
//             message = <div>Welcome, Menkalinan</div>
//         } else {
//             message = <div>Welcome, Guest</div>
//         }

// return (<div>{message}</div>)

//     }

// // THIRD METHOD: ternary operator

    render() {
        return(
            this.state.isLoggedIn 
            ? <div>Welcome, Menkalinan</div> 
            : <div>Welcome, Guest</div>
        )
    }

// // FOURTH METHOD: short circuit operator approach (specific case of ternary)

    // render() {
    //     return this.state.isLoggedIn && <div>Welcome, Menkalinan</div>
    // }

}

export default UserGreeting
