import { Container, Header } from "semantic-ui-react";
import Categories from "../components/Categories";
import {Link} from 'react-router-dom';
export default () => {
  return (
    <>
      <Container style={{paddingTop: '5%'}}>
        <Categories />
        <br />
        <Link to='/create'><Header>Add a category to the game</Header></Link>
      </Container>
    </>
  );
};
