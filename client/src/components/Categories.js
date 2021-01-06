import Axios from "axios";
import { useContext } from "react";
import { Header, Tab, Table } from "semantic-ui-react";
import { CategoryContext } from "../providers/CategoryProvider";
import Cards from "./Cards";

const Categories = () => {
  const { game } = useContext(CategoryContext);

  const renderCategories = () => {
    if (game) {
      console.log("rendering");
      return game.map((category) => console.log(category));
    }
  };

  // const logCategories = () => {
  //   if (categories) {
  //     categories.map((c) => console.log(c));
  //   }
  // };

  return (
    <>
      <Header textAlign="center">Jeopardy!</Header>
      {renderCategories()}
    </>
  );
};

export default Categories;
