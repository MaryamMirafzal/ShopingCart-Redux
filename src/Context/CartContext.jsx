import {  createContext, useContext, useReducer } from "react"
// import { sumProducts } from "../helper/helper";

const CartContext = createContext()

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total:0,
    checkout:false,
}

const reducer = (state, action) =>{
    switch (action.type) {
        case "Add_ITEM":
            if(!state.selectedItems.find((item) => item.id == action.payload.id)){
                state.selectedItems.push({...action.payload , quantity:1 })
            }  
            return{
                selectedItems: [...state.selectedItems],
                ...sumProducts(state.selectedItems),
                checkout:false,
        }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            return{
                ...state,
                selectedItems:[...newSelectedItems],
                ...sumProducts(newSelectedItems),
            }
        case "INCREASE":
            const increasIindex = state.selectedItems.findIndex(
                (item)=> item.id == action.payload.id
            );
            state.selectedItems[increasIindex].quantity++;
            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }
        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex(
                (item)=> item.id == action.payload.id
            )
            state.selectedItems[decreaseIndex].quantity--;
            return{
                ...state,
                ...sumProducts(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true,
            }


        default:
            throw new Error("Invalid Action")
    }
}

function CartProvider({children}) {

    const[state , dispatch] = useReducer(reducer , initialState)

  return <CartContext.Provider value={{state, dispatch}}>
    {children}
  </CartContext.Provider>
}

const useCart = ()=>{
    const {state , dispatch } = useContext(CartContext)
    return [state , dispatch]
}
export {useCart};

export default CartProvider