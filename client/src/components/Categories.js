import Axios from "axios";
import { useContext } from "react";
import { Header, Tab, Table } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";
import Cards from "./Cards";

const Categories = () => {
  const { categories } = useContext(CategoryContext);

  const renderCategories = () => {
    if (categories) {
      console.log("rendering");
      return categories.map((category) => (
        <>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" key={category.id}>
                {category.name}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Cards categoryID={category.id} />
          </Table.Row>
        </>
      ));
    }
  };

  const logCategories = () => {
    if (categories) {
      categories.map((c) => console.log(c));
    }
  };

  return (
    <>
      <Header textAlign="center">Jeopardy!</Header>
      <Table celled fixed>
        {renderCategories()}
      </Table>
    </>
  );
};

export default Categories;
