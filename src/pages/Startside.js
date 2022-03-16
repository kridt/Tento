import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import "./Startside.css";


export default function Startside() {
  
  const productGallary = [
    {
      id: 123,
      img: "https://via.placeholder.com/336x252",
      price: 15,
      productName: "Jeg er et produkt"
    },
    {
      id: 153,
      img: "https://via.placeholder.com/336x252",
      price: 36,
      productName: "Jeg er et produkt"
    },
    {
      id: 126,
      img: "https://via.placeholder.com/336x252",
      price: 20,
      productName: "Jeg er et produkt"
    },
    {
      id: 119,
      img: "https://via.placeholder.com/336x252",
      price: 55,
      productName: "Jeg er et produkt"
    },
    {
      id: 159,
      img: "https://via.placeholder.com/336x252",
      price: 15,
      productName: "Jeg er et produkt"
    },
  ]
  
  
  
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

  {console.log(productGallary)}

  <Carousel className="productGallary">

    <div>
      <img src="http://via.placeholder.com/336x252" />
    </div>

      {/* {productGallary.map((product) => {
        
        return (
        

        <ProductCard key={product.id} img={product.img} name={product.productName} price={product.price} id={product.id} />
        
        
        )
      })} */}
      
      </Carousel>
      


    </>
  )
}
