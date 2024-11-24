import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./Content";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <div className="max-w-[990px] m-auto mt-4">
        <div
          className={`px-2.5 py-1 border ${
            show ? "bg-cyan-300" : "bg-gray-400 text-white"
          }  w-fit rounded-lg cursor-pointer`}
          onClick={() => setShow(!show)}
        >
          {show ? "Show" : "Hidden"}
        </div>
        {show && <Content />}
      </div>
      <Footer />
    </>
  );
}

export default App;
