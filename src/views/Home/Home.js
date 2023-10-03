import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

export default function home()
{
    return(
        <div className="add">
            <Navbar />
            <h1>Home</h1>
            <Footer/>
        </div>
    );
}