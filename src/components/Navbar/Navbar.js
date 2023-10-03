import "./Navbar.css"
import { Link } from "react-router-dom"
 export default function(){
    return(
    <div className="nav">

    <h2 className="logo">ReactJs</h2>

    <Link className="nav-m"to="/">Home</Link>
    <Link className="nav-m"to="/about">About</Link>
    <Link className="nav-m"to="/contact">Contact</Link>
</div>
    )
 }