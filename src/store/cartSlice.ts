import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../Types/Produto'


export interface CartState {
    produtos: Produto[];
}

const initialState: CartState = {
    produtos: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Produto>)  => {
            state.produtos.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const id =  action.payload
            state.produtos = state.produtos.filter(produto => produto.id !== id)
        },
    },
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer