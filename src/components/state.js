// import { Component } from "react";

// export default class StateTest extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             conter: 0
//         }
//     }
//     testClick = (e) => {
//         e.preventDefault()
//         this.setState({
//             conter: this.state.conter + 1
//         })
//     }

//     testClick2 = (e) => {
//         e.preventDefault()
//         this.setState({
//             conter: this.state.conter - 1
//         })
//     }
//     render() {

//         return (
//             <>
//                 <form>
//                     <button onClick={this.testClick}>+</button>
//                     <button onClick={this.testClick2}>-</button>
//                     <label >this {this.state.conter} counter</label>
//                 </form>
//             </>
//         )
//     }
// }