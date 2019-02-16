import React, {Fragment} from 'react';
import { Form, FormGroup, Input} from 'reactstrap';

const Search = (props) => {
  return (
    <Fragment>

      <Form inline onSubmit={props.getRecipe}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input name="username" type="text" placeholder="Search for Recipe"/>
        </FormGroup>
      </Form>
       
    </Fragment>

  );

};

export default Search;
