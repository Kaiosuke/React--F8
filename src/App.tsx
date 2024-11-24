import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./Product";

function App() {
  const [show, setShow] = useState(false);
  const handleShowData = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <Header />
      <div>
        <div className="w-fit" onClick={() => handleShowData()}>
          {!show ? "Show Product" : "Hide Product"}
        </div>
        {show ? <Product /> : "Product is empty"}
      </div>
      <Footer />
    </>
  );
}

export default App;
