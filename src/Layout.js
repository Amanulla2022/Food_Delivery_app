import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Cart from "./pages/cart/Cart";
import OrderDetails from "./pages/order/OrderDetails";
import PageNoTFound from "./pages/not_a_page/PageNoTFound";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<OrderDetails />}></Route>
        <Route path="*" element={<PageNoTFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
