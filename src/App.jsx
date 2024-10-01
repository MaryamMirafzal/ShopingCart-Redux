import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckoutPage from "./Pages/CheckoutPage"
import NotFound from "./Pages/NotFound"
import ProductProvider from "./Context/ProductContext"
import CartProvider from "./Context/CartContext"
import Layout from "./Layout/Layout"

function App() {
  return (
    <>
    {/* <CartProvider>
     <ProductProvider> */}
      <Layout>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </Layout>
     {/* </ProductProvider>
     </CartProvider> */}
    </>
  )
}

export default App
