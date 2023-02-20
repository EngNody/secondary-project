// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from "react-router-dom"
import Allbrojects from "./bages/Allbrojects"
import Blog from "./bages/blog"
import Contactus from "./bages/contactus"
import Tasks from "./bages/tasks"

function App() {
  return (

    <> 
  
  <h1 style={{color:"red"}}>Welcome in react router</h1>
  <Routes/>
    
    <Route path="/" element={<h2>Home</h2>} />
    
    <Route path="./bages/Allbrojects.js" element={<Allbrojects />}/>
    
    <Route path="./bages/blog.js" element={<Blog />}/>
    
    <Route path="./bages/contactus.js" element={<Contactus />}/>
    
    <Route path="./bages/tasks.js" element={<Tasks />}/>
    
  <Routes/>



    </>

  );
}

export default App;







