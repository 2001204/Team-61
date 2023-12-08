import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import Footer from "./footer/Footer"; 
import { AboutUs } from "./components/AboutUs";
// import { Dashboard } from "./components/Dashboard";
import { Programs } from "./components/Programs";
import { ContactUs } from "./components/ContactUs";


function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/programs" element={<Programs/>}></Route>
         <Route path="/contactus" element={<ContactUs/>}></Route> 
        {/*<Route path="/dashboard" element={<Dashboard/>}></Route>  */}
         <Route path="/login" element={<login/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>    
  );
}

export default App;
