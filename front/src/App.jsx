
import { useSelector } from "react-redux"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"
import "./assets/styles/App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home.page";
import ShopPage from "./pages/ShopPage/Shop.page";
import ProductPage from "./pages/ProductPage/Product.page";
import ShoppingCart from "./pages/CartPage/ShoppingCart.page";
import NotFoundPage from "./pages/NotFoundPage/NotFound.page";
import WishlishPage from "./pages/WishlistPage/Wishlist.page";
import LoginPage from "./pages/AuthPages/LoginPage/Login.Page";
import RegisterPage from "./pages/AuthPages/RegisterPage/Register.page";



function App() {
  const isDark = useSelector(state=>state.appUI.isDark);

  return (
  <div className="App font-josefin min-h-screen flex flex-col bg-surfaceA20" data-theme={`${isDark? "dark":"light"}`}>
    <Header/>
    <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<WishlishPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </main>
    <Footer/>
  </div>
  )
}

export default App
