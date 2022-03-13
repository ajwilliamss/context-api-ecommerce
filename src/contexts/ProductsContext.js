import { createContext, useState } from "react";
import faker from "@faker-js/faker";

export const ProductsContext = createContext();

faker.seed(20);

const ProductsProvider = ({ children }) => {
  // Add 20 product objects to array
  const productsData = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [products] = useState(productsData);
  // console.log(products);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
