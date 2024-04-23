import './Ad.css'
import zomato from '../../assets/food-on-zomat.png'
import nike from '../../assets/Nike-React.jpg'

function Ad()
{
    return(
       <div className='Ad-container'>
         <div className="ad">
            <img src={zomato}  />
         </div>
         <div className="ad">
            <img src={nike} alt="" />
         </div>
       </div>
    );
}
export default Ad;