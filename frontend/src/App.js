import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter><div className="grid-container">
        <header className="row">
            <div><Link className="brand logo" to="/">Markety</Link>
             <a href="/seller">Sell on Markety</a>
            </div>
            <div className="searchbox">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search for your product..."/>
              </div> 
            <div className="right-nav">
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>                            <Link to="/signin">Sign In</Link>

            </div>
          </header>
        <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>

          <Route path="/product/:id" component={ProductScreen} ></Route>
          <Route path="/" component={HomeScreen} exact></Route>

            
        </main>
        <footer className="row center">
            AllrightReserved!
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
