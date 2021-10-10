import React from 'react'
import { useGlobalContext } from '../context'
import { FaBeer } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'

import { Link } from 'react-router-dom'
const Navbar = () => {
  const { cartItems } = useGlobalContext()

  return (
    <ul className="nav">
      <li>
        <img src={require('../logo.jpg')} />
      </li>
      <li>
        <Link Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link Link to="/about">
          About
        </Link>
      </li>
      <li className="right-icons">
        <a href="icon">
          <FaBeer />
        </a>
      </li>
      <li>
        <a href="icon">
          <FaTwitter />
        </a>
      </li>

      <Link className="cart-icon-nav" Link to="/basket">
        <div className="cart-nav-num">{cartItems === 0 || cartItems}</div>
        <GrCart />
      </Link>
    </ul>
  )
}

export default Navbar
