import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import NavBar from '../components/NavBar';

export default function ProductSide({ id }) {

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
          productName: "Jeg er et produkt",
        },
      ]

    console.log(id);

  return (
<>
<NavBar />

    <h1 style={{textAlign: "center"}}>Product {id}</h1>

    {/* <Carousel>
        <div>
            <img alt="Placeholder" src="https://via.placeholder.com/400" />
        </div>
        <div>
            <img alt="Placeholder" src="https://via.placeholder.com/400" />
        </div>
        <div>
            <img alt="Placeholder" src="https://via.placeholder.com/400" />
        </div>
    </Carousel> */}
  
</>
  
    )
}
