import { useContext, useState } from "react";
import { DessertCardProp } from "./DessertCard";
import { CartCtx } from "../App";

const AddToCardBtn = (props: DessertCardProp) => {
    const [qty, setQty] = useState(0)

    const cartCtx = useContext(CartCtx);
    if(!cartCtx){throw new Error("Something is wrong, I can feel it...")}

    const {cart, setCart} = cartCtx
    
    const increase = () =>{
        setQty(qty+1);
    }
    const decrease = () =>{
        setQty(qty-1);
        setCart([...cart, props])
    }
    return (
    <> {qty === 0 ? 
        <div className="add-btn" onClick={increase}>Add to Cart</div> : 
        <div className="add-btn used">
        <button onClick={decrease}>-</button>
        {qty}
        <button onClick={increase}>+</button>
        </div>

    }
    </>
  )
}

export default AddToCardBtn