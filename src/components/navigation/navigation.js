import React from 'react';
import './navigation.css';
import logo from './logo.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            <nav>
                <nav>
                    <ul>
                        <li class="brand"><img src={logo} style={{ marginRight: "10px" }} alt="Songify" /> Songify</li>
                        <li><a href="http://127.0.0.1:5500/Spotify/home.html">Home</a></li>
                        <li><a href="http://127.0.0.1:5500/Spotify/about.html">About</a></li>
                    </ul>
                </nav>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signout')} 
                    className='f3 link dim black underline pa3 pointer'
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'white', padding: '20px' }}>Sign Out</p>
                </nav>
            </nav>
        );
    } else {
        return (
            <nav>
                <nav>
                    <ul>
                        <li class="brand"><img src={logo} style={{marginRight:"10px"}} alt="Spotify" /> Songify</li>
                    </ul>
                </nav>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} 
                    className='f3 link dim black underline pa3 pointer'
                    style={{ cursor: 'pointer', fontSize:'1.5rem', color:'white', padding:'20px' }}>Sign In</p>
                    <p onClick={() => onRouteChange('register')} 
                    className='f3 link dim black underline pa3 pointer'
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color:'white', padding:'20px' }}>Register</p>
                </nav>
            </nav>
        );
    }
}

export default Navigation;


