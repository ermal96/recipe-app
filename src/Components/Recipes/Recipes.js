import React, {Component, Fragment} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import classes from './Recipes.module.css';
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
        <Container >
          <Row className={classes.recipe_row}>
            {this
              .state
              .recipe
              .slice(27)
              .map((name) => {
                return (
                  <Col  className={classes.recipe_col}  key={name.recipe_id}>
                    <img alt="Recipe Img" className={classes.recipe_img} src={name.image_url}/>
                    <div className={classes.recipe_info}>
                    <h6>{name.publisher}</h6>
                    <h5>{name
                        .title
                        .substring(0, 24)}</h5>
                        </div>
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