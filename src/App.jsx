import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop"; 
import { ShopContextProvider } from './contextApi/shop-context';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <div className='page'>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <div className='routes-container'>
              <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </div>
          </Router>
        </ShopContextProvider>
      <div className='footer-div'>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App
