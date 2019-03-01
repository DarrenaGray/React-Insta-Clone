import React from 'react'

import './Login.css';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import * as Icon from  'react-feather';

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
            <div className="loginContainer">
                <div className="loginHeader">
                    <Icon.Instagram size={70}/>
                    <h1 className="loginH1">Instaclone</h1>
                </div>
                <Form className="loginForm">
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
                    <Button className="loginBtn" onClick={this.logIn}type="submit">Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login;