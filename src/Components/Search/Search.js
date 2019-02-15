import React, {Fragment} from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const Search = () => {
  return (
    <Fragment>
     <Form inline>
        <FormGroup>
          <Input size="lg" type="text" name="search" id="search" placeholder="Search" />
        </FormGroup>
    
      </Form>
     
    </Fragment>

  );

};

export default Search;