import { BrowserRouter, Route, Routes } from 'react-router';
import Products from './pages/products';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetail from './pages/productDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/productDetail/:id' element={<ProductDetail />} /> 
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
