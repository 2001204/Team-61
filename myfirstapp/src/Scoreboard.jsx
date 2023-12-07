// import { Component } from "react";

//  //Class Component
// export class Scoreboard extends Component{
//     // create State 
//     constructor(){
//         super();    //exclusive only for object oriencted only 
//         this.state = {        //initialize state
//             score:0
//         };   
//     }
// increaseScore = ()=>{     //for upsdating state value in class component
//     this.setState({score:this.state.score+4});
// }
// decreaseScore =()=>{
//     this.setState({score:this.state.score-1});
// }
//     render(){
//         return(
//             <div>
//             <center>
//             <h1>
//                 {this.state.score}
//             </h1>
//             <input type="button"  value='Increase by 4(+)' onClick={this.increaseScore}></input>
//             <input type="button" value='Decrease by 1(-)' onClick={this.decreaseScore}></input>
//              <hr />
//              </center>
//         </div>
//         )
//     }
// }



//Function  Component
import { useState } from "react";


export function Scoreboard(){
    const [score, setScore]=useState(0);    //pass initial value
    const increaseScore=()=>{               
        setScore(score+4);                 //update state i.escore 
    }
    const decreaseScore=()=>{
        setScore(score-1);
    }

    return(
        <div>
            <center>
            <p>Scoreboard Calculation of Marks for correct and incorrect answer: </p>
            <h1>{score}</h1>
            <input type="button"  value='Correct Answer +4' onClick={increaseScore} ></input><span> </span>
            <input type="button" value='Wrong Answer -1' onClick={decreaseScore}></input>
            <hr />
            </center>
        </div>

    );
}