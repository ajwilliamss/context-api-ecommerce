import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Product from "../Product/Product";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  // Calculate cart total
  const calcTotal = () => {
    const cartTotal = cart.reduce(
      (total, currProduct) => total + Number(currProduct.price),
      0
    );
    setTotal(cartTotal);
  };

  useEffect(() => {
    calcTotal();
  }, [cart]);

  return (
    <>
      <section className="cart">
        <h1>My Cart</h1>
        <p>Total: R{total}</p>
      </section>
      <section className="products-container">
        {cart.map((product) => {
          const { id } = product;
          return <Product key={id} product={product} />;
        })}
      </section>
    </>
  );
};

export default Cart;
