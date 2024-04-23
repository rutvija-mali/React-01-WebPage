import './Navbar.css'


function Navbar()
{
    return(
      <div className='navbar'>
         <div className="nav-item"><span className="text">Tutorial</span></div>
         <div className="nav-item"><span className="text">Exercises</span></div>
         <div className="nav-item"><span className="text">Certificate</span></div>
         <div className="nav-item"><span className="text"></span>Services</div>
      </div>
    );
}
export default Navbar;
