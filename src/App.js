import React, { Component } from 'react';
// import SearchBox from './components/SearchBox';
// import Particles from 'react-particles-js';

import ParticlesBg from 'particles-bg'
import Signin from './components/signin/signin';
import Register from './components/register/register';
import Navigation from './components/navigation/navigation';


import './App.css';
import Home from './components/Home/home'
import BTS from './components/Home/BTS/bts2';
// import BTS from './components/Home/BTS/bts';

const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, route} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="particles-js" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            {/* <SearchBox searchChange={onSearchChange} /> */}
            <Home isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          </div>
          : (
            route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>

      // <div className='App'>
      //   <BTS/>
      // </div>
    );
  }
}
export default App;
