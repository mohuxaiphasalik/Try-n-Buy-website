import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/detailPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
export default function PDetailPage(props) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/products/${id}`
                );
                const data = response.data;

                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);
    const [count, setCount] = useState(1);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <div>
            <Navbar />
            <div className="detailContainer row">
                <div className="detailLeft col-lg-6  col-sm-12 ">
                    <img
                        src={`http://localhost:4000/images/${productDetail.img}`}
                        alt=""
                        className="detailImg"
                    />
                </div>

                <div className="detailRight col-lg-6 col-sm-12 ">
                    <h1 className="detailTitle">{productDetail.title}</h1>
                    <div className="price">
                        <h4 className="newPrice detailNewPrice">
                            Rs. {productDetail.newPrice}
                        </h4>
                        <div className="originalPrice">
                            {productDetail.sale && productDetail.originalPrice}
                        </div>
                    </div>
                    <div className="color">
                        Color
                        <div className="colorSelector"></div>
                    </div>
                    <div className="size">
                        Size
                        <div className="sizeSelection">
                            <div className="sizeDropDown">
                                <div className="dropdown">
                                    <button
                                        className="btnSize dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Select Size
                                    </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="dropdown-item" href="#">
                                            Small
                                        </div>
                                        <div className="dropdown-item" href="#">
                                            Medium
                                        </div>
                                        <div className="dropdown-item" href="#">
                                            Large
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sizeChart">
                                <i className="fa-solid fa-ruler"></i>Size Chart
                            </div>
                        </div>
                    </div>
                    <div className="detailButtons">
                        <button className="tryOnBtn">
                            <Link to={{ pathname: '/clothImposing', search: `?img=${productDetail.img}` }}>
                                Try On
                            </Link>
                        </button>
                        <button className="SizePredictionBtn ">
                            <Link to={"/sizePrediction"} style={{
                                color: "#005968"
                            }}>
                                Size Prediction
                            </Link>
                        </button>

                    </div>
                    <div className="stockStatus">In Stock</div>
                    <div className="buyMenu">
                        <div className="quantitySelector">
                            <button onClick={decrementCount} className="decrementBtn">
                                -
                            </button>
                            <span className="quantityCount">{count}</span>
                            <button onClick={incrementCount} className="incrementBtn">
                                +
                            </button>
                        </div>
                        <button className="addToCart">Add To Cart </button>
                        <button className="BuyNow">Buy Now</button>
                    </div>
                    <p className="DetailDesc">
                        <h5 className="DetailDescTitle">Description:</h5>{" "}
                        {productDetail.description}
                    </p>
                    <a href="" className="learnMore">
                        LEARN MORE ABOUT TRY ON FEATURE🔗
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}