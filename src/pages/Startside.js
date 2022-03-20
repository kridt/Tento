import React from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import "./Startside.css";


export default function Startside() {
  
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

  <div className="productGallary">
      {productGallary.map((product) => {
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
      {productGallary.map((product) => {
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
      {productGallary.map((product) => {
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
