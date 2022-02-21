import React, { useState } from "react";
import "./index.css";
import data from "./data.json";
import Product from "./components/Product";
// feature 1git status
const productList = { size: "", sort: "", ...data };
function App() {
  const [products, setProduct] = useState(data.products);
  //   console.log(productList);
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Card</a>
      </header>
      <main>
        <div className="content">
          <div className="main-content">
            <Product product={products} />
          </div>
          <div className="sidebar">cart item</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
