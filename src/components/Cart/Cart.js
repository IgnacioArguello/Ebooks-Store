import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to='/'> Ver Productos para comprar </Link>
      </>
    );
  }


  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Precio total: ${totalPrice()}
      </p>
    </>
  )
}

export default Cart