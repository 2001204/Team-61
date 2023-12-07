//function component

import './App.css';
import { About } from './About';     //function component
import { Home } from './Home';       //class component 
import { Scoreboard } from './Scoreboard';          //class component || //function component both type component write here only one can use a a time      
import { Users } from './Users';              //class component 
import { UsersData } from './UsersData';       //function component

function App() {
  return (
    <div>
      <Home headerText ="Welcome To Dipak Home!" description = "This is a description for page"></Home>
      <About headerText = "welcome to about section" description="This is a dummy information of about passed in props"></About>
      <Scoreboard></Scoreboard>
      <Users></Users>
      <UsersData></UsersData>
    </div>

  );
}

export default App;
