import { CartObject } from "../context";
import { IProduct } from "../declaration";
import { useSort } from "./useSort";

export const useSortPrice = (arr: CartObject[] | IProduct[]) => {
    return useSort<CartObject | IProduct>(
        arr, 
        (a, b) => a.price - b.price,
        (a, b) => b.price - a.price
        );
    
}