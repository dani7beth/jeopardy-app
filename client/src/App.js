import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Demo/Home";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
