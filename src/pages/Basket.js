import React from 'react'
import { useGlobalContext } from '../context'
import BasketItems from './BasketItems'
function Basket() {
  const { cart, total, clearCart } = useGlobalContext()
  return (
    <div className="cartcontainer">
      <div className="cart-main-title">
        {total === 0 ? <h3> Your Cart is empty</h3> : <h3> Your Cart Items</h3>}
      </div>
      {cart.map((item) => {
        return <BasketItems key={item.id} {...item} />
      })}
      <hr />
      <div className="cart-total">
        <h4>Total :</h4>
        <div>
          <h4>#{total}</h4>
        </div>
      </div>
      <div className="cart-btn">
        <button onClick={() => clearCart()}>
          {total === 0 || <h4>Clear Cart</h4>}
        </button>
      </div>
    </div>
  )
}

export default Basket
