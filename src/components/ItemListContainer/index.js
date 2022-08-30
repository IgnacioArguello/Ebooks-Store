import ItemCount  from "../ItemCount/ItemCount";
import React from "react";
import Title from "../Title";


export const ItemListContainer = () => {
  const onAdd = (quantity) => {
    console.log (`Compraste ${quantity} unidades`)

  }

  return (
    <>
    <Title greeting='Bienvenido' />
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer