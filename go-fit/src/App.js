import { BrowserRouter} from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
// import { Dashboard } from "./components/Dashboard";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Home></Home>
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/programs" element={<Program/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/contactus" element={<Dashboard/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>  */}
    </BrowserRouter>    
  );
}

export default App;
