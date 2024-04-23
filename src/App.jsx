import './App.css'
import Navbar  from  './components/navbar/Navbar'
import Sidebar from  './components/sidebar/Sidebar'
import Content from './components/content/Content';
import Footer from'./components/footer/Footer'
import Ad from './components/ad/Ad';
import { useState } from 'react';
import {titles,contents} from './components/data/Data'

function App() {

   let[title , setTitle] = useState("Home");
   let[content ,setContent] = useState("React is a JavaScript library for building user interfaces.");
   
   let handleClick = (index) =>{
        
        setTitle(titles[index]);
        setContent(contents[index]);
     
   }

  return(
    <div className='container'>
       <Navbar/>
       <div className="middle-container">
          <Sidebar handleClick={handleClick} />
          <Content title={title}  content={content}   />
          <Ad/>
       </div>
       <Footer/>
    </div>
  );  
}
export default App;