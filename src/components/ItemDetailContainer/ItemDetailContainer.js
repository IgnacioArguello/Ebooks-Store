import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const book = 
    {id: 1, image: "https://images.cdn3.buscalibre.com/fit-in/360x360/11/6f/116f01c74c7853cbcfc4f6da78d154be.jpg", title: "Castillo Ambulante", price: "Precio: 800$", author: "Autor:Diana Wynne Jones", description:"El castillo ambulante explora diversos temas habituales en la literatura. Estos incluyen el destino, la juventud, el valor y el amor. Los dos primeros son centrales en el desarrollo de Sophie, la protagonista." };

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(book);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])





  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
