import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
        name: 'Nacho',
        email: 'Nacho@gmail.com',
        phone: '123123',
        address: '233',
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db =  getFirestore ();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then (({id})=> alert ("Gracias por su compra! su id de transaccion es: "+id))
  }

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
      <button onClick={handleClick}>Generar orden</button>
    </>
  )
}

export default Cart