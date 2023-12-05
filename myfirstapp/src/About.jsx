import { Component } from "react";

// class component
export class About extends Component{
    render(){        //will be render the content of 
        return(
            <div>
               
                {/* props pass as object from app.js  */}
                <h1>{this.props.headerText}</h1>     
                <p>{this.props.description}</p>
                <hr />
            </div>

        )              
       
    }

}