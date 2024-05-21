import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Navigation from "./customer/components/Navigation/Navigation";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navigation />
      {/* <HomePage /> */}
      {/* <Product /> */}
      <ProductDetails />
      <Footer />
    </>
  );
}

export default App;
