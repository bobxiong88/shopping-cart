import {useState, useEffect} from "react";
import "../styles/Cart.css";
import {Link} from "react-router-dom"
const Cart = ({cartList, setCartList}) => {
    const [subTotal, setSubTotal] = useState(0);
    useEffect(()=> {
        const products = document.querySelector("#products");
        const calculateSubTotal = () => {
            let newSubTotal = 0;
            for (const product of cartList){
                newSubTotal += product.cost;
            }
            setSubTotal(newSubTotal);
        };
        const removeProduct = (productId) => {
            const tempArray = [...cartList];
            tempArray.splice(productId, 1);
            setCartList(tempArray);
            calculateSubTotal();
        }
        for (let i = 0; i<cartList.length; i++){
            const product = cartList[i];
            const item = document.createElement("div");
                item.className = "product";
                const display = document.createElement("div");
                    display.className = "demo";
                    const title = document.createElement("div");
                        title.textContent = product.title;
                    display.appendChild(title);

                    const wordCount = document.createElement("div");
                        wordCount.textContent = `Word Count: ${product.wordCount}`;
                    display.appendChild(wordCount);
                item.appendChild(display);
                const right = document.createElement("div");
                    right.className = "right";
                    const info = document.createElement("div");
                        info.className = "infoProduct"
                        const description = document.createElement("div");
                            description.textContent = product.name;
                        info.appendChild(description);
                        const cost = document.createElement("div");
                            cost.textContent = `$${product.cost}`;
                        info.appendChild(cost);
                    right.appendChild(info);

                    const removeButton = document.createElement("button");
                        removeButton.textContent = "Remove item";
                        removeButton.addEventListener('click', ()=>{removeProduct(i)});
                    right.appendChild(removeButton);
                item.appendChild(right);
            products.appendChild(item);
        }
        calculateSubTotal();
        return () => {
            products.innerHTML = "";
        }
    }, [cartList]);
    return (
        <div id = "Cart">
            <h1 id = "cartHeader">Cart</h1>
            <div id = "products">
                
            </div>
            <div id = "cost">
                <div class = "price"><h3>Sub-total</h3><div>${subTotal.toFixed(2)}</div></div>
                <div class = "price"><h3>Tax (13%)</h3><div>${(subTotal*0.13).toFixed(2)}</div></div>
                <hr/>
                <div class = "price" id = "total"><h2>Total</h2><div>${(subTotal*1.13).toFixed(2)}</div></div>
            </div>
            <nav >
                <Link to = "/Lenny" >
                    <div id = "checkoutButton">Checkout</div>
                </Link>
            </nav>
        </div>
    );
};

export default Cart;