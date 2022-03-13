import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products-container">
      {products.map((product) => {
        const { id } = product;
        return <Product key={id} product={product} />;
      })}
    </section>
  );
};

export default Products;
