import Axios from "axios";
import { useContext } from "react";
import { Container, Header, Table } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

const Categories = () => {
  const { game } = useContext(CategoryContext);

  const logCategories = () => {
    if (game) {
      console.log("rendering");
      return game.map((categories) => console.log(categories));
    }
  };

  const renderGame = () => {
    if (game) {
      return game.map((categories) => (
        <>
          <Table.HeaderCell singleLine>{categories.name}</Table.HeaderCell>
        </>
      ));
    }
  };

  const renderCards = (cards) => {
    return cards.map((card) => (
      <Table.Row>
        <Table.Cell>{card.points}</Table.Cell>
      </Table.Row>
    ));
  };

  const getCards = () => {
    return game.map((categories) => (
      <Table.Cell>{renderCards(categories.cards)}</Table.Cell>
    ));
  };

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Anime Jeopardy!
      </Header>
      <Table celled fixed>
        <Table.Header>
          <Table.Row>{renderGame()}</Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>{getCards()}</Table.Row>
        </Table.Body>
      </Table>
      {logCategories()}
    </Container>
  );
};

export default Categories;
