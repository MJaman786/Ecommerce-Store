import product1 from '../assets/img/laptop.png'
import product2 from '../assets/img/boat_headphones.png'
import product3 from '../assets/img/phone.png'

import "../styles/Home.css"
import Product from './Products'

const Home = () => {
    return (
        <>
            <div className="container-fluid pt-5 px-0 text-center" id="home-container">
                {/* data-bs-pause="false" data-bs-interval="2000" */}
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="6000">
                    <div className="carousel-inner">
                        {/* item 1 */}
                        <div className="carousel-item py-2 active">
                            <div className="card my-3 mx-auto p-2" style={{ maxWidth: "800px", border: "none" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product1} className="img-fluid rounded-start" alt="..." style={{ width: "300px", height: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-light">ASUS TUF GAMMING</h5>
                                            <p className="card-text text-light">Intel Core 5 Processor 210H Gaming Laptop<br />RTX 3050A-4GB 16GB 512GB FHD+/16"/144Hz/Windows 11/M365 Basic (1Year)</p>
                                            <p className="card-text text-light"><small className="text-warning">Last updated 3 mins ago</small></p>
                                            <p className="card-btn text-start ms-5"><button className="d-flex align-items-center gap-2"><span className="material-symbols-outlined d-block fs-5">shopping_cart</span> Buy Now</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item 2 */}
                        <div className="carousel-item py-2">
                            <div className="card my-3 mx-auto p-2" style={{ maxWidth: "800px", border: "none" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product2} className="img-fluid rounded-start" alt="..." style={{ width: "300px", height: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-light">boAt A35</h5>
                                            <p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text text-light"><small className="text-warning">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item 3 */}
                        <div className="carousel-item py-2">
                            <div className="card my-3 mx-auto p-2" style={{ maxWidth: "800px", border: "none" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product3} className="img-fluid rounded-start" alt="..." style={{ width: "300px", height: "300px", objectFit: "contain" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-light">PS5 Controller</h5>
                                            <p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text text-light"><small className="text-warning">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Product/>
        </>
    );
}

export default Home;