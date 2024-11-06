import React,{useContext, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
// import logo from '../Assets/l1.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            {/* <li>Shop<hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li> */}
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}   to='kids'>Kids</Link>{menu==="kids"?<h/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar