import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const books = [
    {id: 1, image: "https://images.cdn3.buscalibre.com/fit-in/360x360/11/6f/116f01c74c7853cbcfc4f6da78d154be.jpg", category:"fantasia", title: "Castillo Ambulante", price: "Precio: 800$", author: "Autor:Diana Wynne Jones", description:"El castillo ambulante explora diversos temas habituales en la literatura. Estos incluyen el destino, la juventud, el valor y el amor. Los dos primeros son centrales en el desarrollo de Sophie, la protagonista." },
    {id: 2, image: "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg", category:"fantasia",title: "Harry Potter",price: "Precio: 900$",author: "Autor:J. K. Rowling",description:"Se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería." },
    {id: 3, image: "https://images.cdn1.buscalibre.com/fit-in/360x360/19/6b/196b0eda62be160160af64d0dfda3eee.jpg", category:"medieval",title: "El Imperio Final",price: "Precio: 700$",author: "Autor:Brandon Sanderson", description:"tiene lugar en un equivalente a principios del siglo XVIII, en el distópico mundo de Scadrial, donde cae ceniza constantemente del cielo, las plantas son color café, y brumas sobrenaturales cubren el paisaje cada noche." },
    {id: 4, image: "https://www.novelashistoricas.com/wp-content/uploads/2018/05/Fuego-hierro-y-sangre-de-Theodore-Brun-Novelas-hist%C3%B3ricas-medievales-sobre-vikingos.jpg", category:"medieval",title: "Fuego, Hierro y Sangre)",price: "Precio: 750$",author: "Autor:Theodore Brun", description:"Guerreros legendarios, dioses caprichosos y valkirias.Una novela épica en tiempos de los vikingos." },
    ]

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(books);
            }, 2000);
        });
        getData.then(res => setData(res.find(book => book.id === parseInt(detalleId))));
    }, [])





  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
