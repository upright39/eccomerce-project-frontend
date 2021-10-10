import React, { useState, useContext, useEffect } from 'react'
import data from './data'

const AppContext = React.createContext()

function AppProvider({ children }) {
  const [myGoods, setMyGoods] = useState(data)
  const [cart, setCart] = useState([])
  const [cartItems, setCartItems] = useState(0)
  const [total, setTotal] = useState(0)
  const [lenght, setLenght] = useState(false)
  useEffect(() => {
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price)
    }, 0)
    newTotal = parseFloat(newTotal.toFixed(2))
    setTotal(newTotal)

    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount)
    }, 0)
    setCartItems(newCartItems)
  }, [cart])

  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item }
    })
    setCart(newCart)
  }
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id)
      return
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      })
      setCart(newCart)
    }
  }
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id))
  }
  const clearCart = () => {
    setCart([])
  }
  const addToCart = (product) => {
    const { id, img, title, price } = product
    const item = [...cart].find((item) => item.id === id)

    if (item) {
      increaseAmount(id)
      return
    } else {
      const newItem = { id, img, title, price, amount: 1 }
      const newCart = [...cart, newItem]
      setCart(newCart)
    }
  }

  return (
    <AppContext.Provider
      value={{
        myGoods,
        cartItems,
        lenght,
        setLenght,
        total,
        cart,
        clearCart,
        addToCart,
        increaseAmount,
        removeItem,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
