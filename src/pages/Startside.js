import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import shuffle from '../components/ShuffleArray';
import "./Startside.css";


export default function Startside() {
  const [productGallary, setProductGallary] = useState([])
  
  
  
  
  useEffect(()=>{
    axios.get("http://api.fakeshop-api.com/products/getAllProducts")
    .then(response => console.log(response))

    axios.get("../dummyProducts.json")
    .then(response => setProductGallary(response.data))

  }, [setProductGallary])
  
  return (
    <>
    
    <NavBar />
    
    <div className="bigPicTop">
      <div className="bigPicTopImg img">
        <img alt="placeholder" src="https://via.placeholder.com/1280x560" />
      </div>

      <div className="bigPicTop_text">
        <h2>Bliv en del af vores univers</h2>
        <p>Unikke produkter - produceret af ildsjæle</p>
      </div>

    </div>


<div className="gridCentral">
    <div className="meetDesigners">

      <div className="meetDesignImg">
        <div className="img">
          <img alt="placeholder" src="https://via.placeholder.com/560x620" />
        </div>
      </div>

      <div className="meetDesignTextbox">
        <h2>Mød dine designere</h2>
        <p>Tento offers a wide range of high quality, handmade jewelry to suit your taste and style. No matter what you are looking for, we are sure to carry it. From best-selling collections to limited edition items, we guarantee that you will get the most value out of your purchase. It is always a good time to indulge in something special for yourself or those you love.</p>
      </div>
    </div>
</div>

    <div className="goldenDesigns">

      <div className="goldenDesignLeftText">
        <p>Gyldne Designs</p>
      </div>
      
      <div className="goldenDesignsRightText">
        <p>This is your Text paragraph. It is a great place to add a description of your business, your site or what you do. Use this space to add information for your users, write about your philosophy or your journey and define your distinguishing qualities. Consider adding an image for extra engagement.</p>
      </div>

    </div>

  

  <div className="productGallary">
      {shuffle(productGallary).map((product) => {
        return (
        <ProductCard key={product.id} img={product.img} name={product.productName} price={product.price} id={product.id} />
        )
      })}
      </div>
      
      <div>


      <div className="giftsForHer">

<div className="goldenDesignLeftText">
  <p>Gaver til hende</p>
</div>

<div className="goldenDesignsRightText">
  <p>This is your Text paragraph. It is a great place to add a description of your business, your site or what you do. Use this space to add information for your users, write about your philosophy or your journey and define your distinguishing qualities. Consider adding an image for extra engagement.</p>
</div>

</div>


      </div>

      <div className="productGallary">
      {shuffle(productGallary).map((product) => {
        return (
        <ProductCard key={product.id} img={product.img} name={product.productName} price={product.price} id={product.id} />
        )
      })}
      </div>

      <div className="goldenDesigns">

      <div className="goldenDesignLeftText">
        <p>Nye brands til dig</p>
      </div>
      
      <div className="goldenDesignsRightText">
        <p>This is your Text paragraph. It is a great place to add a description of your business, your site or what you do. Use this space to add information for your users, write about your philosophy or your journey and define your distinguishing qualities. Consider adding an image for extra engagement.</p>
      </div>

    </div>

    <div className="productGallary">
      {shuffle(productGallary).map((product) => {
        return (
        <ProductCard key={product.id} img={product.img} name={product.productName} price={product.price} id={product.id} />
        )
      })}
      </div>

      <div>
        <h1 style={{textAlign: "center"}}>Community</h1>
      </div>

    </>
  )
}
