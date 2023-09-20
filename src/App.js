import './App.css';
import { CartProvider } from './CartContext';

import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <CartProvider>
    <div className="App">
      
        <Header />
        <Products />

    </div>
    </CartProvider>
  );
}

export default App;
