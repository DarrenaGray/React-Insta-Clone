import React from 'react';
import './SearchBar.css';
import {Form, FormGroup, Input} from 'reactstrap';

import * as Icon from 'react-feather';

const SearchBar = props => {
    return (
        <div className="searchBar">
          <div className="igLogos">
                <Icon.Instagram className="icon" />
                <img className="igTextLogo"src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram"/>
            </div>
            <Form>
                <FormGroup>
                    <Input
                      type="search"
                      name="search"
                      placeholder="🔍 Search" />
                </FormGroup>
            </Form>
            <div className="igUserIcons">
                <Icon.Compass className="ig-icons" />
                <Icon.Heart className="ig-icons" />
                <Icon.User className="ig-icons" />
            </div>
        </div>
    );
}

export default SearchBar;