import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      <div onClick={() => handleCount()}>Click</div>
      <div>{count}</div>
      <Footer />
    </>
  );
}

export default App;
