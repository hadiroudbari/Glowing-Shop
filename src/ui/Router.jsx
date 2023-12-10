import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout";
import Home from "../pages/ShopHome";
import Shop from "../pages/ShopProducts";
import Orders from "../pages/ShopOrders";
import Cart from "../pages/ShopCart";
import About from "../pages/ShopAbout";
import Contact from "../pages/ShopContact";
import Checkout from "../pages/ShopCheckout";
import ProductDetails from "../pages/ShopProductDetails";
import Profile from "../pages/CustomerProfile";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "../ui/ProtectedRoute";
import AdminLayout from "../ui/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import AdminProducts from "../pages/AdminProducts";
import AdminCategories from "../pages/AdminCategories";
import AdminOrders from "../pages/AdminOrders";
import AdminOrderDetails from "../pages/AdminOrderDetails";
import AdminUsers from "../pages/AdminUsers";
import AdminSettings from "../pages/AdminSettings";
import AdminLogin from "../pages/AdminLogin";
import AdminProductsMaktab from "../pages/AdminProductsMaktab";
import AdminProductsMaktabStock from "../pages/AdminProductsMaktabStock";

function Router() {
  return (
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
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/:orderId" element={<AdminOrderDetails />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="productsMaktab" element={<AdminProductsMaktab />} />
          <Route
            path="productsMaktabStock"
            element={<AdminProductsMaktabStock />}
          />
        </Route>
        <Route path="login" element={<AdminLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
