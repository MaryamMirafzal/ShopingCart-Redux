import { useDispatch } from "react-redux"

import { shortenName } from "../helper/helper"
import { MdDeleteOutline } from "react-icons/md"

import styles from "./Basket.module.css"

import { decrease, increase, removeItem } from "../features/cart/cartSlice"

function BasketCart({data }) {
    const { image , title , quantity} = data
    const dispatch = useDispatch()

  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{shortenName(title)}</p>
        <div className={styles.actions}>
            {quantity == 1 && 
            <button onClick={()=> dispatch(removeItem(data))}>
                <MdDeleteOutline />
            </button> }
            {quantity > 1 && 
            <button onClick={()=> dispatch(decrease(data))}>-</button>}
            <span>{quantity}</span>
            <button onClick={()=> dispatch(increase(data))}>+</button>
            
        </div>
    </div>
  )
}

export default BasketCart