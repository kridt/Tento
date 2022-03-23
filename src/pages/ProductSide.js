import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ProductContext } from "../context/CartContext";
import "./ProductSide.css";

export default function ProductSide({ id }) {
  const [currentProduct, setCurrentProduct] = useState({});
  const { value, setValue } = useContext(ProductContext);

  function addToCartFunction(productId) {
    productId.preventDefault();

    setValue((value) => [...value, currentProduct]);

    console.log(currentProduct);
  }

  useEffect(() => {
    axios
      .get("../dummyProducts.json")
      .then((response) => response.data)
      .then((products) => {
        console.log(products);
        const product = products?.find(
          (product) => product.id === parseInt(id)
        );

        setCurrentProduct(product);
      });
  }, [setCurrentProduct, id]);

  return (
    <>
      <NavBar />

      <div className="productSite">
        <div className="productSiteGallery">
          <img alt="placeholder" src={currentProduct.img} />
          <p>{currentProduct.productBio}</p>
        </div>

        <div className="productSiteInfo">
          <form className="productForm" onSubmit={(e) => addToCartFunction(e)}>
            <label htmlFor="productName">{currentProduct.productName}</label>
            <label>{currentProduct.price}</label>
            <input type="submit" value={"Tilføj til kurv"} />
          </form>
        </div>
      </div>
    </>
  );
}
