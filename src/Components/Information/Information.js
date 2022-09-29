import React, { useEffect, useState } from "react";
import Personal from "../Personal/Personal";
import Product from "../Product/Product";
import "./information.css";

const Information = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("information.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="work-container">
      <div className="everyday-work">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="personal-information">
        <Personal cart={cart}></Personal>
      </div>
      <div className="Extra">
        <h5>How does React Work ?</h5>
        <p>
          Ans: ReactJS divides the UI into isolated reusable pieces of code
          known as components. React components work similarly to JavaScript
          functions as they accept arbitrary inputs called properties or props.
          It's possible to have as many components as necessary without
          cluttering your code.
        </p>
        <h5>Difference between props and state in react ?</h5>
        <p>
          Ans: Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components.
        </p>
        <h5>where use in useeffect except api load data?</h5>
        <p>
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers.
        </p>
      </div>
    </div>
  );
};

export default Information;
