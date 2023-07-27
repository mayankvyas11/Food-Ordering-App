import { Link } from "react-router-dom";
import UserContext from "./utils/usercontext";
import { useContext } from "react";


const Heading  = () =>
{
    const {user} = useContext(UserContext)
    return (
    <div className="nav-bar">
        <h1>My Logo</h1>
        <ul>
           <Link to="/"><li>Home</li></Link> 
            <li>About</li>
           <Link to="/contact"> <li>Contact</li></Link>
           <Link to="/cart"> <li>Cart</li></Link>
           <h1>{user.email}</h1>
          
        </ul>
    </div>
    );
}

export default Heading;