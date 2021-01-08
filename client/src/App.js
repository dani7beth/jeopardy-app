import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Demo/Home";
import NoMatch from "./components/NoMatch";
import { Container } from "semantic-ui-react";
import Card from './components/Card';
import GameForm from "./components/GameForm";

function App() {
  return (
    <>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/cards/:id' component={Card} />
            <Route exact path='/create' component={GameForm} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
    </>
  );
}

export default App;
