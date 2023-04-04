import React from 'react';
import '../styles/header.css'
import first from '../styles/images/1st.jpg'
import second from '../styles/images/2nd.jpg'
import third from '../styles/images/3rd.jpg'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div id='header' className='header'>
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${first})` }} ></div>
                            {/* <img src={first} alt="responsive image" className="d-block img-fluid"/> */}

                            <div className="carousel-caption">
                                <div>
                                    <h2>Try on clothes Virtually</h2>
                                    <p>Use your Camera to Impose your favorite Cloth on You</p>
                                    <span className="btn btn-sm btn-secondary">Learn More</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${second})` }} ></div>

                            {/* <img src={second} alt="responsive image" className="d-block img-fluid" /> */}

                            <div className="carousel-caption justify-content-center align-items-center">
                                <div>
                                    <h2 >No More Worries about Perfect Size</h2>
                                    <p >Our Machine learning model will suggest best size for you by just using your camera</p>
                                    <span className="btn btn-sm btn-secondary">Our Process</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${third})` }} ></div>

                            {/* <img src={third} alt="responsive image" className="d-block img-fluid" /> */}

                            <div className="carousel-caption justify-content-center align-items-center">
                                <div>
                                    <h2>Secure & Reliable</h2>
                                    <p>We monitor and optimize your site's long-term performance</p>
                                    <span className="btn btn-sm btn-secondary">Learn How</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container info">
                <div className="row">
                    <div className="col col-lg-6 col-sm-12 left"><h5><span className="bigger-headline"> Try it</span> <br /><span className="smaller-headline">Before You <br />
                    </span> <span className="bigger-headline">Buy it</span></h5></div>
                    <div className="col col-lg-6 col-sm-12 info-para"><p>You can virtually Try clothes using your image or camera before you decide to buy it.
                        We will recommend best fit for you.  It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                </div>
                <div className="row divider">
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-solid fa-person-dress item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Virtually try the dress before you decide to buy it</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-solid fa-shield-halved item-logo"></i>
                        <h3 className='item-heading'>Shop with Confidence</h3>
                        <p className='item-info'>Use Size predictor to predict the best size for you</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-solid fa-credit-card item-logo"></i>                                              <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Pay with the world’s most popular and secure payment methods.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-solid fa-truck item-logo"></i>                                              <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>We ship to over 200 countries and regions, and our site comes in 12 languages.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-solid fa-handshake item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Round-the-clock assistance for a smooth shopping experience.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i className="fa-brands fa-apple item-logo"></i><i className="fa-brands fa-google-play item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Download the app for mobile-only features such as image search and discount games.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;