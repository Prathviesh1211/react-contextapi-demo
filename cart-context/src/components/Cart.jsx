import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'

const Cart = () => {
    const {items}=useContext(CartContext);
    const total=items.reduce((a,b)=>a+Number(b.price),0)
  return (

    <div>
        <br />
        <br />
        <div><h1>Your Cart :</h1> </div>
        {items && items.length>0?
        items.map((item,ind)=>(
            <li key={ind}>
                {item.name} - ${item.price}
            </li>
        )):(
          <p>Your Cart is empty!!!</p>
        )
        }

        <h5>Total Bill:${total}</h5>
    </div>
  )
}

export default Cart
