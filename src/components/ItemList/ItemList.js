import Item from "../Item/Item";
import React from "react";
import './itemList.css';


const ItemList = ({data= []}) => {
  return (
    data.map(book => <Item key={book.id} info={book}/>)
  )
}

export default ItemList;