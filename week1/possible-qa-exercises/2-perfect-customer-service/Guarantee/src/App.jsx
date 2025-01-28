import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Guarantee from "./Guarantee";
import img1 from "../public/chat.png";
import img2 from "../public/coin.png";
import img3 from "../public/f-delivery.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Our Guarantees</h1>
      <Guarantee
        img={img1}
        title="Online Support"
        description="Our team is available 24/7 to assist you with any questions."
      />
      <Guarantee
        img={img2}
        title="100% Money Back"
        description="If you are not satisfied, we offer a 100% money back guarantee."
      />

      <Guarantee
        img={img3}
        title="Free Shipping"
        description="Enjoy free shipping on all orders worldwide."
      />
    </>
  );
}

export default App;
