import React, { useEffect, useState } from 'react'
import { DessertCardProp } from './DessertCard'

type CartItemType = {
    item: {name: string, price: number},
    qty: number
}

const Cart = () => {
    const [cart, setCart] = useState<CartItemType[]>([])

    useEffect(()=>{
        setCart([
            {item:{name: "Piskóta",
                 price: 5},
                  qty: 10}
        ])
    },[])
    
  return (
    <div>
        <h2>Your Cart ({cart.length})</h2>
    </div>
  )
}

export default Cart