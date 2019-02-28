import React from 'react';
import './SearchBar.css';
import {Form, FormGroup, Input} from 'reactstrap';

import * as Icon from 'react-feather';

const SearchBar = props => {
    return (
        <div className="searchBar">
          <div className="igLogos">
                <Icon.Instagram size={25} />
                <p></p>
                <img className="igTextLogo"src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram"/>
            </div>
            <Form>
                <FormGroup>
                    <Input
                      type="search"
                      name="search"
                      placeholder="🔍 Search " />
                </FormGroup>
            </Form>
            <div className="igUserIcons">
                <Icon.Compass className="igIcons" />
                <Icon.Heart className="igIcons" />
                <Icon.User className="igIcons" />
            </div>
        </div>
    );
}

export default SearchBar;