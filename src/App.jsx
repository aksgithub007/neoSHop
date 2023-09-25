// import Header from "./Components/SharedComponent/Header";

// import FooterBar from "./Components/SharedComponent/FooterBar";
// import Footer from "./Components/SharedComponent/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeGuard from "./HomeGuard";
import SignUp from "./View/SignUp";

// import MainHeader from "./Components/SharedComponent/MainHeader";
import AuthGuard from "./AuthGuard";
import Home from "./View/Home";
import Login from "./View/Login";
import { useSelector } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import BreadcrumbPage from "./Components/SharedComponent/BreadcrumbPage";
import Product from "./View/Product";
import SingleProduct from "./View/SingleProduct";
function App() {
  const stateInfo = useSelector((state) => state);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AuthGuard Component={Home} isAuth={stateInfo.auth?.isAuth} />
            }
          />
          <Route
            path="/products"
            exact
            element={
              <AuthGuard Component={Product} isAuth={stateInfo.auth?.isAuth} />
            }
          />
          <Route
            path="/products/:id"
            exact
            element={
              <AuthGuard
                Component={SingleProduct}
                isAuth={stateInfo.auth?.isAuth}
              />
            }
          />
          <Route
            path="/login"
            exact
            element={<HomeGuard Component={Login} />}
          />
          <Route
            path="/signup"
            exact
            element={<HomeGuard Component={SignUp} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
