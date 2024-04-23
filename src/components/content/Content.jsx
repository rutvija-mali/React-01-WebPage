import './Content.css'

function Content(props)
{
    return(
        <div className='main-container'>
            <h1>{props.title}</h1>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </div>
    );
}
export default Content;