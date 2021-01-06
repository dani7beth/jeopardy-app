import { useContext } from "react";
import { Header, Table, Button } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";

export const Categories = () => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);

  const renderCategories = () =>{
    return(
      categories.map((category)=>(
        <Table.HeaderCell key={category.id}>{category.name}</Table.HeaderCell>
      ))
    )
  }

  return (
    <>
      <Header textAlign="center">Jeopardy!</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {renderCategories()}
            <Table.HeaderCell textAlign="center">
              <Button icon="plus" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
