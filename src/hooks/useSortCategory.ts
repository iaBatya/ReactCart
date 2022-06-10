import { CartObject } from "../context";
import { IProduct } from "../declaration";
import { useSort } from "./useSort";

export const useSortCategory = (arr: CartObject[] | IProduct[]) => {
    return useSort<CartObject | IProduct>(
        arr, 
        (a, b) => a.category.name.localeCompare(b.category.name),
        (a, b) => b.category.name.localeCompare(a.category.name)
        );
    
}