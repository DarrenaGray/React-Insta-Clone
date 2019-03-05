import React from 'react';
// import './SearchBar.css';
import {Form, FormGroup, InputGroup} from 'reactstrap'; // use {Form, FromGroup, Input} for styling with CSS
import styled from 'styled-components';

import * as Icon from 'react-feather';


// Syntax for components styled with styled-components

const SearchBar = props => {
    return (
        <Header>
        <LogoHeader>
            <Icon.Instagram size={25} />
            <LogoHeaderP></LogoHeaderP>
                <LogoImage 
                    src={`https://fontmeme.com/images/instagram-new-logo.png`}
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
            <Icons>
            {/* <div className="igUserIcons"> */}
                <Icon.Compass className="igIcons" />
                <Icon.Heart className="igIcons" />
                <Icon.User className="igIcons" />
            {/* </div> */}
            </Icons>
        </Header>
    );
}

// Syntax for CSS styled elements

// const SearchBar = props => {
//     return (
//         <div className="searchBar">
//           <div className="igLogos">
//                 <Icon.Instagram size={25} />
//                 <p></p>
//                 <img className="igTextLogo"src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram"/>
//             </div>
//             <Form>
//                 <FormGroup>
//                     <Input
//                       type="search"
//                       name="search"
//                       placeholder="🔍 Search " 
//                       onChange={props.searchPosts}
//                       value={props.value}
//                     />
//                 </FormGroup>
//             </Form>
//             <div className="igUserIcons">
//                 <Icon.Compass className="igIcons" />
//                 <Icon.Heart className="igIcons" />
//                 <Icon.User className="igIcons" />
//             </div>
//         </div>
//     );
// }

// Styled Components

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

const LogoImage = styled.img`
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

const Icons = styled.div`
    margin: 8px 15px;
`

export default SearchBar;