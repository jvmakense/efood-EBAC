import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../Types/Produto'


export interface CartState {
    produtos: Produto[];
    toggleState: boolean;
    formStep: 'endereco' | 'pagamento'
}

const initialState: CartState = {
    produtos: [],
    toggleState: false,
    formStep: 'endereco'
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
        toggleState: (state) => {
            state.toggleState = !state.toggleState;
        },
        goToPayment: (state) => {
            state.formStep = 'pagamento';
        },
        goToAddress: (state) => {
            state.formStep = 'endereco';
        }
    },
})

export const { addProduct, removeProduct, toggleState, goToPayment, goToAddress } = cartSlice.actions
export default cartSlice.reducer