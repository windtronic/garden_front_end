import { Link } from "react-router-dom"



export default function Header() {
    return(
       
        <div className="header-container">
            <Link to="/" className="nav-link">
                <h1 className="header-text">My Gardening App</h1>
            </Link>

            <Link to="/my_calendar" className="nav-link">
                <h1 className="header-text">Calendar</h1>
            </Link>
            
            <Link to="/plants" className="nav-link">
                <h1 className="header-text">Plants</h1></Link>

            <Link to="/garden_layout" className="nav-link">
                <h1 className="header-text">Garden Layout</h1></Link>
            
            
        </div>
        
    )

}
