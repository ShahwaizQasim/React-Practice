import './App.css'
import { useQuery } from 'react-query'

const fetchProducts = async () => {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data;
}

function App() {
  const { data, isLoading, isError } = useQuery(['products'], fetchProducts)
  console.log("products", data);

  if (isLoading) {
    
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center text-4xl font-semibold mb-16'>All Products</h1>

          <div className="flex flex-wrap -m-4">
            {
              data?.products?.map((product) => {
                return <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={product?.images}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                      hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              })
            }


          </div>
        </div>
      </section>

    </>
  )
}

export default App
