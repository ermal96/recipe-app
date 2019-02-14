import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Recipes/>
      </Fragment>
    );
  }
}

export default App;
