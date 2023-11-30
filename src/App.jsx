import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/ShopHome";
import Shop from "./pages/ShopProducts";
import Orders from "./pages/ShopOrders";
import Cart from "./pages/ShopCart";
import About from "./pages/ShopAbout";
import Contact from "./pages/ShopContact";
import Checkout from "./pages/ShopCheckout";
import ProductDetails from "./pages/ShopProductDetails";
import Profile from "./pages/CustomerProfile";
import PageNotFound from "./pages/PageNotFound";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminCategories from "./pages/AdminCategories";
import AdminOrder from "./pages/AdminOrder";
import AdminSettings from "./pages/AdminSettings";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./ui/AdminLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="orders/:orderId" element={<AdminOrder />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
