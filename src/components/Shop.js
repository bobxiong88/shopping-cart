import { useEffect } from "react";
import "../styles/Shop.css";
import products from "./products";


const Shop = ({cartList, setCartList}) => {
    useEffect(()=>{
        const IA = document.querySelector("#IA");
        const Core = document.querySelector("#Core");
        for (let i = 0; i<products.IA.length; i++){
            const product = products.IA[i];

            const item = document.createElement("div");
                item.id = i;
                item.className = "item";
                const display = document.createElement("div");
                    display.className = "display";
                    const title = document.createElement("div");
                        title.textContent = product.title;
                    display.appendChild(title);

                    const wordCount = document.createElement("div");
                        wordCount.textContent = `Word Count: ${product.wordCount}`;
                    display.appendChild(wordCount);
                item.appendChild(display);

                const info = document.createElement("div");
                    info.className = "info";
                    const description = document.createElement("div");
                        description.textContent = `Level ${product.level} ${product.name}`;
                    info.appendChild(description);

                    const cost = document.createElement("div");
                        cost.textContent = `$${product.cost}`;
                    info.appendChild(cost);
                item.appendChild(info);

                const buy = document.createElement("button");
                    buy.textContent = "Add to Cart";
                    buy.addEventListener("click", ()=>{
                        const tempArray = [...cartList];
                        tempArray.push(product);
                        setCartList(tempArray)
                    });
                item.appendChild(buy);

            IA.appendChild(item);
            console.log(product.name);
        }
        for (let i = 0; i<products.Core.length; i++){
            const product = products.Core[i];

            const item = document.createElement("div");
                item.id = i;
                item.className = "item";
                const display = document.createElement("div");
                    display.className = "display";
                    const title = document.createElement("div");
                        title.textContent = `Title: ${product.title}`;
                    display.appendChild(title);

                    if (product.rq!==""){
                        const rq = document.createElement("div");
                            rq.textContent = `Research question: ${product.rq}`;
                        display.appendChild(rq);
                    }
                    
                    const wordCount = document.createElement("div");
                        wordCount.textContent = `Word Count: ${product.wordCount}`;
                    display.appendChild(wordCount);
                item.appendChild(display);

                const info = document.createElement("div");
                    info.className = "info";
                    const description = document.createElement("div");
                        description.textContent = `Level ${product.level} ${product.name}`;
                    info.appendChild(description);

                    const cost = document.createElement("div");
                        cost.textContent = `$${product.cost}`;
                    info.appendChild(cost);
                item.appendChild(info);

                const buy = document.createElement("button");
                    buy.textContent = "Add to Cart";
                    buy.addEventListener("click", ()=>{
                        const tempArray = [...cartList];
                        tempArray.push(product);
                        setCartList(tempArray)
                    });
                item.appendChild(buy);

            Core.appendChild(item);
            console.log(product.name);
        }
        console.log("stuff added!");
        return () =>{
            IA.innerHTML = "";
            Core.innerHTML = "";
        }
    }, [cartList]);
    /*
    const IA = document.createElement("div");
    IA.id = "IA";
    IA.class = "container";
    const Core = document.createElement("div");
    Core.id = "Core";
    Core.class = "container";
    IA.textContent = "I am IA";
    Core.textContent = "I Am core";
    */
    return (
        <div id = "Shop">
            <h1 className = "sectionHeader">IAs for sale</h1>
            <div id = "IA" className = "container"></div>
            <h1 className = "sectionHeader">Core assessments for sale</h1>
            <div id = "Core" className = "container"></div>
        </div>
    );
};

export default Shop;