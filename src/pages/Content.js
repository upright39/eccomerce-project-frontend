import React, { useState } from 'react'
import App from '../App'
import { useGlobalContext } from '../context'
import { Grid } from '@material-ui/core'

function Content() {
  const { myGoods, addToCart, lenght, setLenght } = useGlobalContext()
  return (
    <div className="content-container">
      {myGoods.map((item) => {
        const { id, img, title, info, price } = item
        return (
          <div className="indiv-item">
            <div key={id} className="image-wrapper">
              <img src={img} alt="lov" />
              <div className="title-price-container">
                <div className="title">{title}</div>
                <div className="price">#{price}</div>
              </div>
              <div className="info">
                <button onClick={() => setLenght(!lenght)}>
                  {lenght ? 'show less' : 'show more details'}
                </button>
                {lenght && info}
              </div>

              <button
                className="button-price"
                onClick={() => addToCart(item)}
                className="btn"
              >
                Add
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Content
