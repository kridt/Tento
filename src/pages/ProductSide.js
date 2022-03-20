import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import "./ProductSide.css"

export default function ProductSide({ id }) {
  const [currentProduct, setCurrentProduct] = useState({})
  


  
  useEffect(()=>{
    axios.get("../dummyProducts.json")
    .then(response=> response.data)
    .then((products)=>{

      console.log(products);
      const product = products?.find((product) => product.id === parseInt(id))
      
      setCurrentProduct(product);
    })
    
  
  
    

  }, [setCurrentProduct, id])

    

  return (
<>
<NavBar />


     <div className="productSite">

      <div className="productSiteGallery">
        <img alt="placeholder" src={currentProduct.img} />
        <p>{currentProduct.productBio}</p>
      </div>


      <div className="productSiteInfo">
          <p className="productName">{currentProduct.productName}</p>
          <p className="productPrice">{currentProduct.price} kr</p>

          <button className="addToCartBut">Tilføj til kurv</button>

      </div>
    </div>
  
</>
  
    )
}
