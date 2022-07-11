import '../images/home.jpg';
import "../styles/Home.css";
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div id = "Home">
            <div id = "text">
                <h1 id = "slogan">The better IB bank.</h1>
                <p id = "description">Get IAs and other IB assessments so you can secure that 45</p>
                <nav >
                    <Link to = "/shop" >
                        <div id = "shopButton">Shop Now</div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Home;