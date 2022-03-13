import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductsProvider from "./contexts/ProductsContext";
import CartProvider from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
