'use client'
import { useState, createContext, useContext, useEffect } from 'react'

interface CartItemProps {
  id: string
  name: string
  image: string
  price: number
  type: string
  quantity: number
}

interface CartContextProps {
  cartItems: CartItemProps[]
  cartLength: number
  cartTotal: number
  handleClearCart: () => void
  handleRemoveFromCart: (id: string) => void
  handleAddToCart: (item: CartItemProps) => void
}
export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  cartTotal: 0,
  cartLength: 0,
  handleClearCart: () => ({}),
  handleAddToCart: () => ({}),
  handleRemoveFromCart: () => ({}),
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartTotal, setCartTotal] = useState(0)
  const [cartItems, setCartItems] = useState<CartItemProps[]>(
    typeof window !== 'undefined' &&
      window?.localStorage?.getItem('@cart/aleysha-petshop')
      ? JSON.parse(window.localStorage.getItem('@cart/aleysha-petshop')!)
      : [],
  )
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    global?.localStorage?.setItem(
      '@cart/aleysha-petshop',
      JSON.stringify(cartItems),
    )

    const cartPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    )

    setCartTotal(cartPrice)
    setCartLength(cartItems.reduce((acc, item) => acc + item.quantity, 0))
  }, [cartItems])

  const handleAddToCart = (item: CartItemProps) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems]
      updatedCart[itemIndex].quantity += 1

      setCartItems(updatedCart)
      return
    }
    setCartItems((prevCartItems) => [...prevCartItems, item])
  }

  const handleRemoveFromCart = (id: string) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id)

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems]
      const item = updatedCart[itemIndex]

      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        updatedCart.splice(itemIndex, 1)
      }

      setCartItems(updatedCart)
    }
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        cartLength,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
