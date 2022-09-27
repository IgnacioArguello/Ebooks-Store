import React, {useState, useEffect}  from "react";
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




export const ItemListContainer = ({ greeting}) => {

  const [data, setData] = useState([])

  const {categoriaId} = useParams();

  useEffect (() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'books');
    if (categoriaId) {
      const queryFilter = query (queryCollection, where('category','==', categoriaId))
      getDocs (queryFilter)
        .then (res => setData (res.docs.map(book => ({id: book.id, ...book.data()}))))
    }else {
      getDocs (queryCollection)
        .then (res => setData (res.docs.map(book => ({id: book.id, ...book.data()}))))
    }
  },[categoriaId])

  

  return (
    <>
    <div>
      <h1>{greeting.title}</h1>
    </div>
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer