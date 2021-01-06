import { useContext } from "react";
import { Button, Header, Table } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

const Categories = () => {
  const { categories } = useContext(CategoryContext);

  const renderCategories = () => {
    if (categories) {
      console.log('rendering');
      return categories.map((category) => (
        <Table.HeaderCell textAlign="center" key={category.id}>{category.name}</Table.HeaderCell>
      ));
    }
  };

  const renderBoard = (score) => {
    return (
      <Table.Row textAlign='center'>
        <Table.Cell>{score}</Table.Cell>
        <Table.Cell>{score}</Table.Cell>
        <Table.Cell>{score}</Table.Cell>
        <Table.Cell>{score}</Table.Cell>
      </Table.Row>
    )
  }

  

  const logCategories = () => {
    if (categories) {
      categories.map(c => (
        console.log(c)
      ));
    }
  }

  return (
    <>
      <Header textAlign="center">Jeopardy!</Header>
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            {renderCategories()}
            {logCategories()}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderBoard(100)}
          {renderBoard(200)}
          {renderBoard(300)}
          {renderBoard(400)}
        </Table.Body>
      </Table>
    </>
  );
};

export default Categories;