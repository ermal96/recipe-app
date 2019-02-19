import React, { Fragment } from 'react';
import classes from './Search.module.css'
import { Form, FormGroup, Input} from 'reactstrap';

const Search = (props) => {
  return (
    <Fragment>

      <Form className={classes.form} inline onSubmit={props.getRecipe}>
        <FormGroup className={classes.formGroup} style={{width: "100%"}}>
          <Input className={classes.inputForm} style={{width: "100%"}}  name="username" type="text" placeholder="Search for any recipes"/>
        </FormGroup>
      </Form>
       
    </Fragment>

  );

};

export default Search;
