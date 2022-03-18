import { Link } from '@reach/router';
import React from 'react';
import "./ProductCard.css"

export default function ProductCard({ img, price, id, name }) {
  
  
  return (
      <div className="productCard">

        <Link to={`/product/` + id}>
            <div className="productImg">
                <img alt="Product" src={img} />
            </div>
            <div className="productInfo">
                <p>{name}</p>
                <p>{price + "Kr"}</p>
            </div>
        </Link>
      </div>
  )
}
