import './Sidebar.css'
import Tab from "../Tab/Tab"

function Sidebar(props)
{
    return(
      <div className="sidebar">
        <Tab  title="Introduction" handleClick = {props.handleClick}  index="0" ></Tab>
        <Tab  title="Get strated" handleClick = {props.handleClick}  index="1" ></Tab>
        <Tab  title="Upgrade" handleClick = {props.handleClick}  index="2" ></Tab>
        <Tab  title="React ES6" handleClick = {props.handleClick}  index="3" ></Tab>
     
       
      </div> 
    );
}
export default Sidebar;

/*    */

       

       /* <div className='sidebar'>
        <div className="sidebar-item" onClick={()=>{props.handleClick(0)}}><span className="text">Introduction</span></div>
        <div className="sidebar-item" onClick={()=>{props.handleClick(1)}}><span className="text">Get started</span></div>
        <div className="sidebar-item" onClick={()=>{props.handleClick(2)}}><span className="text">Upgrade</span></div>
        <div className="sidebar-item" onClick={()=>{props.handleClick(3)}}><span className="text">Render HTML</span></div>
       
      
      </div>*/