import "./About.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";

export default function home()
{
    return(
        <div className="con">
            <Navbar/>
            <h1>About</h1>
            
            <Footer/>
        </div>
    );
}