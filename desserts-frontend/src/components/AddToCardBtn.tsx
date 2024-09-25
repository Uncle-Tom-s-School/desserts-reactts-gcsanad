import { useState } from "react";

const AddToCardBtn = () => {
    const [qty, setQty] = useState(0)
    const increase = () =>{
        setQty(qty+1);
    }
    const decrease = () =>{
        setQty(qty-1);
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