import Axios from "axios";
import { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";

const Cards = ({ categoryID }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get(`/api/categories/${categoryID}/cards`)
      .then((res) => {
        setCards(res.data);
        // console.log(cards);
      })
      .catch((err) => {
        console.log("error grabbing cards");
      });
  }, []);

  const logCards = () =>{
    if(cards){
      return(
        cards.map((card)=> (
          <Table.Cell>{card.points}</Table.Cell>
        ))
      )
    }
  }

  return (
      <Table.Row>
      {logCards()}
      </Table.Row>
  );
};
export default Cards;
