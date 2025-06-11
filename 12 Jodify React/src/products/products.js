async function Products() {
  try {
    const products = await fetch("https://fakestoreapi.com/products");
    const response = await products.json();
    //    console.log('response', response);
    return response;
  } catch (error) {
    console.log("Error", error.message);
  }
}

export default Products;
