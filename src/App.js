import "./App.css";
import Layout from "./Layout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout />
      </CartProvider>
    </div>
  );
}

export default App;
