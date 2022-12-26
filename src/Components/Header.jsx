import React from 'react';
import '../styles/header.css'
import first from '../styles/images/1st.jpg'
import second from '../styles/images/2nd.jpg'
import third from '../styles/images/3rd.jpg'
function Header() {
    return (
        <div id='header' className='header'>
            <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${first})` }} ></div>
                            {/* <img src={first} alt="responsive image" class="d-block img-fluid"/> */}

                            <div class="carousel-caption">
                                <div>
                                    <h2>Try on clothes Virtually</h2>
                                    <p>Use your Camera to Impose your favorite Cloth on You</p>
                                    <span class="btn btn-sm btn-secondary">Learn More</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${second})` }} ></div>

                            {/* <img src={second} alt="responsive image" class="d-block img-fluid" /> */}

                            <div class="carousel-caption justify-content-center align-items-center">
                                <div>
                                    <h2 >No More Worries about Perfect Size</h2>
                                    <p >Our Machine learning model will suggest best size for you by just using your camera</p>
                                    <span class="btn btn-sm btn-secondary">Our Process</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <div className="carousel-img" style={{ backgroundImage: `url(${third})` }} ></div>

                            {/* <img src={third} alt="responsive image" class="d-block img-fluid" /> */}

                            <div class="carousel-caption justify-content-center align-items-center">
                                <div>
                                    <h2>Secure & Reliable</h2>
                                    <p>We monitor and optimize your site's long-term performance</p>
                                    <span class="btn btn-sm btn-secondary">Learn How</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
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
                        <i class="fa-solid fa-person-dress item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Virtually try the dress before you decide to buy it</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i class="fa-solid fa-shield-halved item-logo"></i>
                        <h3 className='item-heading'>Shop with Confidence</h3>
                        <p className='item-info'>Use Size predictor to predict the best size for you</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i class="fa-solid fa-credit-card item-logo"></i>                                              <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Pay with the world’s most popular and secure payment methods.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i class="fa-solid fa-truck item-logo"></i>                                              <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>We ship to over 200 countries and regions, and our site comes in 12 languages.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i class="fa-solid fa-handshake item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Round-the-clock assistance for a smooth shopping experience.</p>
                    </div>
                    <div className="col-sm-6 col-lg-2 col-md-4  divider-item">
                        <i class="fa-brands fa-apple item-logo"></i><i class="fa-brands fa-google-play item-logo"></i>
                        <h3 className='item-heading'>Virtual Dressing</h3>
                        <p className='item-info'>Download the app for mobile-only features such as image search and discount games.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;