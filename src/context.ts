import React from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";


interface Category {
    id: string
    name: string
  }

export interface CartObject {
    name: string
    category: Category
    price: number
    amount: number
    id: string
}

export interface ContextProps {
    cart: CartObject[],
    setCart: Dispatch<SetStateAction<CartObject[]>> 
}

const CartContext = React.createContext <null | ContextProps>(null)

export default CartContext;