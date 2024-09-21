import { useState } from "react";
import Products from "./products";
import { useEffect } from "react";
import Card from "../components/card";

function ShowProducts() {
  const [products, setProducts] = useState([]);
  // console.log("products", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsFetch = await Products();
    setProducts([...productsFetch]);
    // console.log("productsFetch", productsFetch);
  };
  // fetchProducts();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           {
             products.map((data) => {
              return <Card key={data.id} item={data} />
             })
             
           }
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowProducts;
