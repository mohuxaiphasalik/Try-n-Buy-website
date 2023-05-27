import React from 'react'
import '../styles/productCard.css'
import { Link } from 'react-router-dom';
export default function ProductCard(props) {
    // const img = require(props.img)
    // console.log(props.id);
    return (
        <Link to={{ pathname: '/productDetails', search: `?id=${props.id}` }} className="card">
            <img className="cardImage" src={`http://localhost:4000/images/${props.img}`} alt={props.title} />
            <div className="text">
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.description}</p>
                <span className="price">
                    <h4 className="newPrice">Rs. {(props.newPrice).toLocaleString()}</h4>
                    {props.sale && <span className="originalPrice">Rs. {(props.originalPrice).toLocaleString()}</span>}
                </span>
                {props.sale && <h5 className="discount">{props.discount}</h5>}</div>
        </Link>
    )
}