import ItemCount  from "../ItemCount/ItemCount";
import React, {useState, useEffect}  from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const books = [
  {id: 1, image: "https://images.cdn3.buscalibre.com/fit-in/360x360/11/6f/116f01c74c7853cbcfc4f6da78d154be.jpg", category:"fantasia",title: "Castillo Ambulante(Click para mas detalles)" },
  {id: 2, image: "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg", category:"fantasia",title: "Harry Potter(Click para mas detalles)" },
  {id: 3, image: "https://images.cdn1.buscalibre.com/fit-in/360x360/19/6b/196b0eda62be160160af64d0dfda3eee.jpg", category:"medieval",title: "El Imperio Final(Click para mas detalles)" },
  {id: 4, image: "https://www.novelashistoricas.com/wp-content/uploads/2018/05/Fuego-hierro-y-sangre-de-Theodore-Brun-Novelas-hist%C3%B3ricas-medievales-sobre-vikingos.jpg", category:"medieval",title: "Fuego, Hierro y Sangre (Click para mas detalles)" },
  
]

export const ItemListContainer = ({ greeting}) => {

  const [data, setData] = useState([])

  const {categoriaId} = useParams();

  useEffect (() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(books);
      }, 2000);
    })
    if (categoriaId) {
    getData.then(res => setData(res.filter(book => book.category === categoriaId)));
  }
    else {
      getData.then(res => setData(res));
    }
  },[categoriaId])

  const onAdd = (quantity) => {
    console.log (`Compraste ${quantity} unidades`)

  }

  return (
    <>
    <div>
      <h1>{greeting.title}</h1>
    </div>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer