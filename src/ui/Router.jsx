import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppLayout = lazy(() => import("./AppLayout"));
const Home = lazy(() => import("../pages/ShopHome"));
const Shop = lazy(() => import("../pages/ShopProducts"));
const Orders = lazy(() => import("../pages/ShopOrders"));
const Cart = lazy(() => import("../pages/ShopCart"));
const About = lazy(() => import("../pages/ShopAbout"));
const Contact = lazy(() => import("../pages/ShopContact"));
const Checkout = lazy(() => import("../pages/ShopCheckout"));
const Profile = lazy(() => import("../pages/CustomerProfile"));
const SingleProduct = lazy(() => import("../pages/ShopProduct"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const ProtectedRoute = lazy(() => import("../ui/ProtectedRoute"));
const AdminLayout = lazy(() => import("../ui/AdminPage/AdminLayout"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const AdminProducts = lazy(() => import("../pages/AdminProducts"));
const AdminCategories = lazy(() => import("../pages/AdminCategories"));
const AdminOrders = lazy(() => import("../pages/AdminOrders"));
const AdminUsers = lazy(() => import("../pages/AdminUsers"));
const AdminSettings = lazy(() => import("../pages/AdminSettings"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const AdminProductsMaktab = lazy(() => import("../pages/AdminProductsMaktab"));
const AdminProductsMaktabStock = lazy(() =>
  import("../pages/AdminProductsMaktabStock")
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:productId" element={<SingleProduct />} />
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
