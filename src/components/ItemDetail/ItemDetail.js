import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount  from "../ItemCount/ItemCount";
import './ItemDetail.css';

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();
 
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                <h3> Autor: {data.author}</h3>
                <h3> Precio: ${data.price}</h3>
                <h3> Stock: {data.stock}</h3>
                <p>{data.description}</p>
                {
                  goToCart
                    ? <Link to='/cart'>Terminar mi compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;
