import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { Link } from "react-router-dom";
import { productQuantity, shortenName} from "../helper/helper"

import styles from "./Card.module.css"
// import { useCart } from "../Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";

function Card({data}) {
    const { id , image , title , price } = data;

    const state = useSelector((store => store.cart))
    console.log(state);
    const dispatch = useDispatch()
    const quantity = productQuantity(state, id)
    
  return (
    <div className={styles.card}>
        <img src={image} alt={title} style={{width:"150px"}} />
        <h3>{shortenName(title)}</h3>
        <p>$ {price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails /></Link>
            <div>
              {
                quantity >1 && <button onClick={()=> dispatch(decrease(data))}>-</button>
              }
              {
                quantity == 1 && <button onClick={()=> dispatch(removeItem(data))}><MdDeleteOutline /></button>
              }
              {!!quantity && <span>{quantity}</span>}
              {
                quantity == 0 ?
                <button onClick={()=> dispatch(addItem(data))}><TbShoppingBagCheck /></button>:
                <button onClick={()=> dispatch(increase(data))}>+</button>
              }
            
            </div>
        </div>
    </div>
  )
}

export default Card