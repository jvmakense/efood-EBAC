import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../Types/Produto'

export interface CartState {
  produtos: Produto[]
  toggleState: boolean
  formStep: 'endereco' | 'pagamento' | 'conclusao'
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
  orderId: string | null
}

const initialState: CartState = {
  produtos: [],
  toggleState: false,
  formStep: 'endereco',
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  },
  orderId: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Produto>) => {
      state.produtos.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.produtos = state.produtos.filter(p => p.id !== action.payload)
    },
    toggleState: (state) => {
      state.toggleState = !state.toggleState
    },
    goToPayment: (state) => {
      state.formStep = 'pagamento'
    },
    goToAddress: (state) => {
      state.formStep = 'endereco'
    },
    goToConclusion: (state) => {
      state.formStep = 'conclusao'
    },
    setDelivery: (state, action: PayloadAction<CartState['delivery']>) => {
      state.delivery = action.payload
    },
    setPayment: (state, action: PayloadAction<CartState['payment']>) => {
      state.payment = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    clearCart: (state) => {
      state.produtos = []
      state.delivery = {
        receiver: '',
        address: {
          description: '',
          city: '',
          zipCode: '',
          number: 0,
          complement: ''
        }
      }
      state.payment = {
        card: {
          name: '',
          number: '',
          code: 0,
          expires: {
            month: 0,
            year: 0
          }
        }
      }
      state.orderId = null
    }
  }
})

export const {
  addProduct,
  removeProduct,
  toggleState,
  goToPayment,
  goToAddress,
  goToConclusion,
  setDelivery,
  setPayment,
  setOrderId,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
