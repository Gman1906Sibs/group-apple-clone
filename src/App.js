import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
