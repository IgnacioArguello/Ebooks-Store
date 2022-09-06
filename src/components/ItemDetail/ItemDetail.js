import React from 'react';
import './ItemDetail.css';

export const ItemDetail = ({data}) => {
  return (
    <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                <h3>{data.author}</h3>
                <h3>{data.price}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;
