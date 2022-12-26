import React from 'react';
import '../styles/cat.css'
import designed from '../styles/images/designed.png'
import newArrival from '../styles/images/new.png'
import child from '../styles/images/child.png'
import men from '../styles/images/men.png'
import ladies from '../styles/images/ladies.png'

function Categories() {
    return (
        <section className="categories">
            <h2 className='cat-heading'>Categories</h2>
            <div className="container categories">
                <div className="row cat-row">
                    <div className="col-lg-6 col-md-6 cat-col left-cat-col">
                        <div className="card">
                            <img src={designed} alt="" className="card-img" />
                            <h3 className="card-title">Designed For You</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 cat-col right-cat-col">
                        <div className="card">
                            <img src={newArrival} alt="" className="card-img" />
                            <h3 className="card-title"> New Arrival</h3>
                        </div>
                    </div>
                </div>
                <div className="row cat-row">
                    <div className="col-lg-4 col-md-6 cat-col left-cat-col">
                        <div className="card">
                            <img src={ladies} alt="" className="card-img" />
                            <h3 className="card-title">Ladies</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 cat-col">
                        <div className="card">
                            <img src={child} alt="" className="card-img" />
                            <h3 className="card-title"> Children</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 cat-col right-cat-col">
                        <div className="card">
                            <img src={men} alt="" className="card-img" />
                            <h3 className="card-title"> Men</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Categories