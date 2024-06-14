import { useState } from "react";
import Footer from "./components/Footer";
import "./styles/App.css";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>

        <Footer />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
