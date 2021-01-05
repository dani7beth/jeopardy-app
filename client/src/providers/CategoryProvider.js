import React from "react";
import axios from "axios";

export const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

export class CategoryProvider extends React.Component {
  state = {
    categories: null,
  };

  //get the categories from API
  componentDidMount = () => {
    axios
      .get("/api/categories")
      .then((res) => {
        console.log(res.data);
        this.setState({categories: res.data});
      })
      .catch((err) => {
        console.log("error occured grabbing data");
      });
  };

  render(){
    return(
      <CategoryContext.Provider value={{...this.state}}>
        {this.props.children}
      </CategoryContext.Provider>
    )
  }
}
