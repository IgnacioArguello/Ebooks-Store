import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount  from "../ItemCount/ItemCount";
import './ItemDetail.css';

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
 
  const onAdd = (quantity) => {
    setGoToCart(true);

  }

  return (
    <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                <h3>{data.author}</h3>
                <h3>{data.price}</h3>
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
