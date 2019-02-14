import React, {Component, Fragment} from 'react';
import axios from "axios";
import {Container, Row, Col} from 'reactstrap';
import Classes from "./Recipes.module.css";
class Recepies extends Component {

  API_KEY = "d3493c543de62d5fa1ed6502ec2373ae";

  state = {
    recipe: []
  }

  componentDidMount() {

    axios
      .get(`/data.json`)
      .then((res) => {
        console.log(res)
        const recipe = res.data.recipes;
        this.setState({recipe})

      })

  }

  render() {
    return (
      <Fragment>
        <Container>

          <Row >
            {this
              .state
              .recipe
              .slice(25)
              .map((name) => {
                return (

                  <Col key={name.recipe_id} >
                    <img alt="Recipe Img" className={Classes.recipe_img} src={name.image_url}/>

                    <h3>{name.title}</h3>
                  </Col>

                )
              })
}
          </Row>
        </Container>

      </Fragment>
    );
  }
}

export default Recepies;