import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import "./ProductSide.css"

export default function ProductSide({ id }) {
  const [currentProduct, setCurrentProduct] = useState({})
  const productGallary = [

    {
      id: 123,
      img: "https://via.placeholder.com/336x252",
      price: 15,
      productName: "Jeg er en halskæde",
      productBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Et tortor at risus viverra adipiscing at in. Feugiat nisl pretium fusce id. Aliquet bibendum enim facilisis gravida. Praesent tristique magna sit amet purus gravida quis. Id consectetur purus ut faucibus pulvinar elementum. Habitant morbi tristique senectus et netus et. Leo integer malesuada nunc vel risus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas quis ipsum suspendisse ultrices gravida dictum. Eleifend mi in nulla posuere sollicitudin. Fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id eu nisl nunc mi. Velit egestas dui id ornare arcu odio ut sem nulla. Duis convallis convallis tellus id interdum velit. Proin sagittis nisl rhoncus mattis. Eget mauris pharetra et ultrices neque ornare aenean. Nisl condimentum id venenatis a condimentum. Fermentum posuere urna nec tincidunt praesent semper."
    },
    {
      id: 153,
      img: "https://via.placeholder.com/336x252",
      price: 36,
      productName: "Jeg er et armbånd",
      productBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Et tortor at risus viverra adipiscing at in. Feugiat nisl pretium fusce id. Aliquet bibendum enim facilisis gravida. Praesent tristique magna sit amet purus gravida quis. Id consectetur purus ut faucibus pulvinar elementum. Habitant morbi tristique senectus et netus et. Leo integer malesuada nunc vel risus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas quis ipsum suspendisse ultrices gravida dictum. Eleifend mi in nulla posuere sollicitudin. Fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id eu nisl nunc mi. Velit egestas dui id ornare arcu odio ut sem nulla. Duis convallis convallis tellus id interdum velit. Proin sagittis nisl rhoncus mattis. Eget mauris pharetra et ultrices neque ornare aenean. Nisl condimentum id venenatis a condimentum. Fermentum posuere urna nec tincidunt praesent semper."
    },
    {
      id: 126,
      img: "https://via.placeholder.com/336x252",
      price: 20,
      productName: "Jeg er en hat",
      productBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Et tortor at risus viverra adipiscing at in. Feugiat nisl pretium fusce id. Aliquet bibendum enim facilisis gravida. Praesent tristique magna sit amet purus gravida quis. Id consectetur purus ut faucibus pulvinar elementum. Habitant morbi tristique senectus et netus et. Leo integer malesuada nunc vel risus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas quis ipsum suspendisse ultrices gravida dictum. Eleifend mi in nulla posuere sollicitudin. Fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id eu nisl nunc mi. Velit egestas dui id ornare arcu odio ut sem nulla. Duis convallis convallis tellus id interdum velit. Proin sagittis nisl rhoncus mattis. Eget mauris pharetra et ultrices neque ornare aenean. Nisl condimentum id venenatis a condimentum. Fermentum posuere urna nec tincidunt praesent semper."
    },
    {
      id: 119,
      img: "https://via.placeholder.com/336x252",
      price: 55,
      productName: "Jeg er en sok",
      productBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Et tortor at risus viverra adipiscing at in. Feugiat nisl pretium fusce id. Aliquet bibendum enim facilisis gravida. Praesent tristique magna sit amet purus gravida quis. Id consectetur purus ut faucibus pulvinar elementum. Habitant morbi tristique senectus et netus et. Leo integer malesuada nunc vel risus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas quis ipsum suspendisse ultrices gravida dictum. Eleifend mi in nulla posuere sollicitudin. Fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id eu nisl nunc mi. Velit egestas dui id ornare arcu odio ut sem nulla. Duis convallis convallis tellus id interdum velit. Proin sagittis nisl rhoncus mattis. Eget mauris pharetra et ultrices neque ornare aenean. Nisl condimentum id venenatis a condimentum. Fermentum posuere urna nec tincidunt praesent semper."
    },
    {
      id: 159,
      img: "https://via.placeholder.com/336x252",
      price: 15,
      productName: "Jeg er en ring",
      productBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi. Et tortor at risus viverra adipiscing at in. Feugiat nisl pretium fusce id. Aliquet bibendum enim facilisis gravida. Praesent tristique magna sit amet purus gravida quis. Id consectetur purus ut faucibus pulvinar elementum. Habitant morbi tristique senectus et netus et. Leo integer malesuada nunc vel risus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas quis ipsum suspendisse ultrices gravida dictum. Eleifend mi in nulla posuere sollicitudin. Fames ac turpis egestas integer eget aliquet nibh praesent. Leo a diam sollicitudin tempor id eu nisl nunc mi. Velit egestas dui id ornare arcu odio ut sem nulla. Duis convallis convallis tellus id interdum velit. Proin sagittis nisl rhoncus mattis. Eget mauris pharetra et ultrices neque ornare aenean. Nisl condimentum id venenatis a condimentum. Fermentum posuere urna nec tincidunt praesent semper."
    },
  ]


  
  useEffect(()=>{
  
    
    const test = productGallary.find((product) => product.id === parseInt(id))
  
  
    
    setCurrentProduct(test);

  }, [setCurrentProduct])

    

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
