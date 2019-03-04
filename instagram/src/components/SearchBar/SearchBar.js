import React from 'react';
import './SearchBar.css';
import {Form, FormGroup, InputGroup} from 'reactstrap';
import styled from 'styled-components';

import * as Icon from 'react-feather';

const SearchBar = props => {
    return (
        <Header>
        <LogoHeader>
            <Icon.Instagram size={25} />
            <LogoHeaderP></LogoHeaderP>
                <LogoImage 
                    src="https://fontmeme.com/images/instagram-new-logo.png" 
                    alt="Instagram"
                />
            </LogoHeader>
            <Form>
                <FormGroup>
                    <InputGroup>
                        <Input 
                            type="search"
                            name="search"
                            placeholder="🔍 Search " 
                            onChange={props.searchPosts}
                            value={props.value}
                        />
                    </InputGroup>
                </FormGroup>
            </Form>
            <div className="igUserIcons">
            
                <Icon.Compass className="igIcons" />
                <Icon.Heart className="igIcons" />
                <Icon.User className="igIcons" />
            </div>
        </Header>
    );
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;

`

const LogoHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const LogoImage = styled.div`
    width: 100px;
    height: 40px;

`

const LogoHeaderP = styled.p`
    border-left: 1px solid lightgray;
    height: 25px;
    margin: 0px 15px 0 20px;
`

const Input = styled.input`
    margin: 8px auto;
    text-align: center;
    background-color: rgb(248, 247, 247);
    border: 1px solid lightgray;
    outline: none;
    padding: 5px;
`

export default SearchBar;