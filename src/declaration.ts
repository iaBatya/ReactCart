import { CartObject } from "./context"

export interface IProduct { 
    category: {
        name: string
        id: string
    }
    name: string
    price: number
}

export type IHandleClick = (item: CartObject) => void