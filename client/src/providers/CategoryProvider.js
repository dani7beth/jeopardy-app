import React from "react";
import Axios from "axios";

export const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

export class CategoryProvider extends React.Component {
  state = {
    game: null,
    totalPoints: 0,
    getTotalPoints: (x) => this.getTotalPoints(x),
    
  };

  //get the categories from API
  componentDidMount = () => {
    Axios.get("/api/new_game")
      .then((res) => {
        console.log("setting state");
        this.setState({ game: res.data });
      })
      .catch((err) => {
        console.log("error occured grabbing data");
      });
  };

  
  //dynamically keep points
  getTotalPoints = (points) => {
    this.state.totalPoints += points;
    this.setState({ totalPoints: this.state.totalPoints });
  };
  // createCategory = (category) => {
  //   axios
  //     .post("/api/categories")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error occured creating a category");
  //     });
  // };

  render() {
    return (
      <CategoryContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}
