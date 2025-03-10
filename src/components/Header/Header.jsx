import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { UserContext } from '../../context/UserContext/UserState'
import { ShoppingCartOutlined, HomeOutlined, ShopOutlined, LogoutOutlined, AndroidOutlined, RiseOutlined } from "@ant-design/icons";
import { Badge, Avatar} from 'antd';
import { ProductContext } from '../../context/ProductContext/ProductState';

const Header = () => {
  const { token, logout } = useContext(UserContext)
  const {cart} = useContext(ProductContext)
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    };

  return (
    <div className='headerContent'>
      <Link to="/"> <HomeOutlined /> Home</Link>
      {
        token ? (
          <>
            <Link to="/profile"> <AndroidOutlined />  Profile</Link>
            <Link to="/products"> <ShopOutlined /> Products</Link>
            <Link to="/cart"><ShoppingCartOutlined />  <Badge size="small" count={cart.length}>

    </Badge>      Cart</Link>
            <Link to="/logout" onClick={()=>logoutUser()}> <LogoutOutlined /> Logout</Link>
          </>
        ) : (
          <Link to="/login"><RiseOutlined />  Login</Link>
        )
      }
    </div>
  )
}

export default Header