import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { ProductsProvider } from './context/ProductContext/ProductState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import Cart from './components/Cart/Cart';
import { OrderProvider } from './context/OrderContext/OrderState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrderProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            </OrderProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
