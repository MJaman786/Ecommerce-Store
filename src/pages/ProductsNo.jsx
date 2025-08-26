import "../styles/Products.css"

const ProductsNo = ({ index, name, desc, img, price }) => {
    return (
        <>
            <div className="col-12 col-lg-4 col-md-6 col-sm-6">
                <div className="card product-card pt-4">
                    <img src={img} className="mx-auto card-img-top" alt="..." style={{ width: "300px", height: "300px", objectFit: "contain" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">{price}</p>
                        <button className=" btn btn-dark d-flex align-items-center gap-2"><span className="material-symbols-outlined d-block fs-5">shopping_cart</span> Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsNo;