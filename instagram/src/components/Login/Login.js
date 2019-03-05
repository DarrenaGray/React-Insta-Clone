import React from 'react'

// import './Login.css';
import {FormGroup} from 'reactstrap';
import * as Icon from  'react-feather';

import styled from 'styled-components';

// Syntax styled using styled components

class Login extends React.Component {
    constructor(props) {
        super(props);
            this.state ={
                username: '',
                password: ''
            };
    }

    logIn = e => {
        e.preventDefault()
        localStorage.setItem('user', this.state.username);
        window.location.reload();

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render(){
        return(
            <LoginContainer>
                <LoginHeader>
                    <Icon.Instagram size={70}/>
                    <LoginH1>Instaclone</LoginH1> 
                </LoginHeader>
                <Form>
                    <FormGroup>
                        <Input 
                            type="username"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value-={this.state.password}
                            required
                        />
                    </FormGroup>
                    <Button 
                        onClick={this.logIn}
                        type="submit">Login</Button>
                </Form>
            </LoginContainer>
        )
    }


// Syntax using CSS styling

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//             this.state ={
//                 username: '',
//                 password: ''
//             };
//     }

//     logIn = e => {
//         e.preventDefault()
//         localStorage.setItem('user', this.state.username);
//         window.location.reload();

//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })

//     }

//     render(){
//         return(
//             <div className="loginContainer">
//                 <div className="loginHeader">
//                     <Icon.Instagram size={70}/>
//                     <h1 className="loginH1">Instaclone</h1>
//                 </div>
//                 <Form className="loginForm">
//                     <FormGroup>
//                         <Input 
//                             type="username"
//                             name="username"
//                             placeholder="Username"
//                             onChange={this.handleChange}
//                             value={this.state.username}
//                             required
//                         />
//                         <Input 
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             onChange={this.handleChange}
//                             value-={this.state.password}
//                             required
//                         />
//                     </FormGroup>
//                     <Button 
//                         color="primary"
//                         className="loginBtn" 
//                         onClick={this.logIn}
//                         type="submit">Login</Button>
//                 </Form>
//             </div>
//         )
//     }
}

// Styled Components

const LoginContainer = styled.div`
    position: fixed;
    top: 20%;
    left: 40%;
    width: 500px;
    background: rgb(185, 238, 255);
    border-radius: 5px;
    box-shadow: 50px;
`

const LoginHeader = styled.div`
    margin: 30px auto;
`

const LoginH1 = styled.h1`
    margin: 50px auto;
    font-size: 30px;
    font-weight: 700;
`

const Form = styled.form`
    margin: 50px auto;
`

const Input = styled.input`
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    text-align: center;
    background-color: lightgray;
    outline: none;
`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #3897f0;
    padding: 10px 20px;
    margin: 0 auto;
    width: 190px;
    color: white;
    font-weight: 700;
`


export default Login;