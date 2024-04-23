import './Tab.css'

function Tab(props)
{
   // hyundai car company
     return(
        <div>
               <div className="tab-item" onClick={()=>{ props.handleClick(props.index) }}>
                  <span className="text">{props.title}</span>
               </div>

        </div>
     )
}
export default Tab;