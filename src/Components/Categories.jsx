import React from 'react';
import '../styles/cat.css'
import designed from '../styles/images/designed.png'
import newArrival from '../styles/images/new.png'
import child from '../styles/images/child.png'
import men from '../styles/images/men.png'
import ladies from '../styles/images/ladies.png'
import { Link } from 'react-router-dom';

function Categories() {
    return (
        <section className="categories">
            <h2 className='cat-heading'>Categories</h2>
            <div className="container categories">
                <div className="row cat-row">
                    <div className="col-lg-6 col-md-6 cat-col left-cat-col">
                        <Link to="/products" className="card-home">
                            <img src={designed} alt="" className="card-home-img" />
                            <h3 className="card-home-title">Designed For You</h3>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 cat-col right-cat-col">
                        <Link to="/products" className="card-home">
                            <img src={newArrival} alt="" className="card-home-img" />
                            <h3 className="card-home-title"> New Arrival</h3>
                        </Link>
                    </div>
                </div>
                <div className="row cat-row">
                    <div className="col-lg-4 col-md-6 cat-col left-cat-col">
                        <Link to="/products" className="card-home">
                            <img src={ladies} alt="" className="card-home-img" />
                            <h3 className="card-home-title">Ladies</h3>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 cat-col">
                        <Link to="/products" className="card-home">
                            <img src={child} alt="" className="card-home-img" />
                            <h3 className="card-home-title"> Children</h3>
                        </Link>
                    </div>
                    <div className="col-lg-4 cat-col right-cat-col">
                        <Link to="/products" className="card-home">
                            <img src={men} alt="" className="card-home-img" />
                            <h3 className="card-home-title"> Men</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Categories