 //create function component


export function Home(props){           //props become obeject access from app.js
    return(
        <div>
            <center>
            {/* this is props value taken from app.js */}
            <h1>{props.headerText}</h1>    
            <h1>{props.headerText}</h1>   
            <h1>{props.headerText}</h1> 
            <p>{props.description}</p>
            <hr />
            </center>

        </div>
    );
}