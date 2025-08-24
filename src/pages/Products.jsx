import "../styles/Products.css"
import ProductsNo from "./ProductsNo";

// import product1 from "../assets/img/phone.png"

let myProducts = [
    { id: 0, name: "SAMSUNG Galyxi", desc: "jasciua aiscuiac uasciuabsc uiu auisciu uasc bibasc uibausbc", img: "/img/phone.png", price: "30,000" },
    { id: 0, name: "SAMSUNG Galyxi", desc: "jasciua aiscuiac uasciuabsc uiu auisciu uasc bibasc uibausbc", img: "/img/keypad.png", price: "30,000" },
    { id: 0, name: "SAMSUNG Galyxi", desc: "jasciua aiscuiac uasciuabsc uiu auisciu uasc bibasc uibausbc", img: "/img/laptop.png", price: "30,000" },
    { id: 0, name: "SAMSUNG Galyxi", desc: "jasciua aiscuiac uasciuabsc uiu auisciu uasc bibasc uibausbc", img: "/img/boat_headphones.png", price: "30,000" }
];

const Product = () => {
    return (
        <>
            <div className="container-fluid text-center py-5" id="product-container">
                <div className="container-fluid d-flex flex-column mb-3 pt-2">
                    <h1 className="text-start mb-0" style={{color:"#ffffffbb"}}>Products</h1>
                    <div className="mt-1 product-underline" style={{width:"160px", height:"6px", backgroundColor:"#37353e"}}></div>
                </div>
                <div className="row g-4">
                    {
                        myProducts.map((value, index, array) => {
                            return (
                                <ProductsNo index={index} name={value.name} desc={value.desc} img={value.img} price={value.price} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Product;