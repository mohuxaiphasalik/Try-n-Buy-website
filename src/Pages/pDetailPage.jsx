import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/detailPage.css'
import img from '../styles/images/DetailImages/boyt1.png'
export default function PDetailPage() {
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
                    <img src={img} alt="" className='detailImg' />
                </div>
                <div className="detailRight col-lg-6 col-sm-12 ">
                    <h1 className="detailTitle">Boys Red T-Shirt</h1>
                    <div className="price">
                        <h4 className="newPrice detailNewPrice">Rs. 3,143</h4>
                        <div className="originalPrice">Rs. 4,490</div></div>
                    <div className="color">Color
                        <div className="colorSelector"></div>
                    </div>
                    <div className="size">Size
                        <div className="sizeSelection">
                            <div className="sizeDropDown"><div class="dropdown">
                                <button class="btnSize dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Size
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div class="dropdown-item" href="#">Small</div>
                                    <div class="dropdown-item" href="#">Medium</div>
                                    <div class="dropdown-item" href="#">Large</div>
                                </div>
                            </div>
                            </div>
                            <div className="sizeChart"><i class="fa-solid fa-ruler"></i>Size Chart</div>
                        </div>
                    </div>
                    <div className="detailButtons">
                        <button className="tryOnBtn">Try On</button>
                        <button className="SizePredictionBtn">Size Prediction</button>
                    </div>
                    <div className="stockStatus">In Stock</div>
                    <div className="buyMenu">
                        <div className="quantitySelector">
                            <button onClick={decrementCount} className='decrementBtn'>-</button>
                            <span className='quantityCount'>{count}</span>
                            <button onClick={incrementCount} className='incrementBtn'>+</button>
                        </div>
                        <button className="addToCart">Add To Cart </button>
                        <button className="BuyNow">Buy Now</button>
                    </div>
                    <p className="DetailDesc"><h5 className='DetailDescTitle'>Description:</h5> A red shirt for summer is a perfect way to add a pop of color to your wardrobe while staying cool in the hot weather. The lightweight fabric and bright hue make it an ideal choice for casual outings and outdoor activities.</p>
                    <a href="" className="learnMore">LEARN MORE ABOUT TRY ON FEATURE🔗</a>
                </div>
            </div>
            <Footer />
        </div>

    )
}