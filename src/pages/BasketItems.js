import React from 'react'
import Basket from './Basket'
import { useGlobalContext } from '../context'

function BasketItems({ id, img, title, amount, price }) {
  const { increaseAmount, decreaseAmount, removeItem } = useGlobalContext()
  return (
    <div key={id} className="cart-items">
      <div className="cart-image">
        <img src={img} alt={title} />
      </div>
      <div className="cart-tpr">
        <div className="cart-title">{title}</div>
        <div className="cart-price">#{price}</div>
        <button className="cart-remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="cart-amount">
        <button className="cart-amount-btn" onClick={() => increaseAmount(id)}>
          +
        </button>
        <div className="cart-amount">{amount}</div>
        <button
          className="cart-amount-btn"
          onClick={() => {
            decreaseAmount(id, amount)
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default BasketItems
