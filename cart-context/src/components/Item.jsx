import { useCart } from '../context/Cart'

const Item = ({name,price}) => {

    // const {items,setItems}=useContext(CartContext);
    const{items,setItems}=useCart();
    console.log(items);
  return (
    <div className='item'>
        <h2>{name}</h2>
        <p>Price:{price}$</p>
        <button className='btn' onClick={()=>setItems([...items,{name:name,price:price}])}>Add to Cart</button>
        <hr />
    </div>
  )
}

export default Item
