import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Product.css";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const { image, name, price } = product;

  // Add to cart
  const addToCart = () => {
    const addProduct = [...cart, product];
    // console.log(addProduct);
    setCart(addProduct);
  };

  // Remove product from cart
  const removeFromCart = () => {
    const removeProduct = cart.filter((item) => item.id !== product.id);
    // console.log(removeProduct);
    setCart(removeProduct);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p>R{price}</p>
      </div>
      {cart.includes(product) ? (
        <button className="remove" onClick={removeFromCart}>
          Remove From Cart
        </button>
      ) : (
        <button className="add" onClick={addToCart}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
