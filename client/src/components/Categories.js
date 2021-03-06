import { useContext } from "react";
import { Container, Header, Table } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";
import { Link } from "react-router-dom";

const Categories = () => {
  const { game, totalPoints } = useContext(CategoryContext);

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
    if (cards) {
      return cards.map((card) => (
        <Table.Row>
          <Table.Cell>
            <Link to={`/cards/${card.id}`}>{card.points}</Link>
          </Table.Cell>
        </Table.Row>
      ));
    }
  };

  const getCards = () => {
    if (game) {
      return game.map((categories) => (
        <Table.Cell>{renderCards(categories.cards)}</Table.Cell>
      ));
    }
  };

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Anime Jeopardy!
      </Header>
      <Header as="h2">Points: {totalPoints}</Header>
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
