import "../styles/Nav.css";
import {ReactComponent as Cart} from '../images/cart.svg';
import {ReactComponent as IB} from '../images/IB.svg';
import {Link} from "react-router-dom";

const Nav = ({cartList}) => {
    return (
        <div id = "Nav">
            <div id = "logo">
                <IB id = "IB"/>
                <h2>Shop</h2>
            </div>
            <div id = "dir">
                <nav>
                    <Link to ="/"><h2>Home</h2></Link>
                </nav>
                <nav>
                    <Link to ="/shop"><h2>Shop</h2></Link>
                </nav>
                <nav>
                    <Link to ="/cart"><Cart /></Link>
                    <span id  = "count">{cartList.length}</span>
                </nav>
                
            </div>
        </div>
    );
};

export default Nav;