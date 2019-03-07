import React from 'react';


const withAuthenticate = App => Login =>
  class extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              loggedIn: false
          }
      }


    componentDidMount() {
        console.log('CDM')
        if (localStorage.getItem('user')) {
            console.log('PostPage')
            this.setState({loggedIn: true})
        } else {
            console.log('Login')
            this.setState({loggedIn: false})
        }
    }


    render() {
        if (this.state.loggedIn) {
            return <App />
        }
      return <Login />;
    }
  };


export default withAuthenticate;