import React from 'react';
import {Tilt} from 'react-tilt';

import './home.css';
import BTSImage from './image/bts.jpg';
import AlanWalkerImage from './image/aaw.jpeg';
import EminemImage from './image/Eminem.jpg';
import HindiImage from './image/hindi.jpg';
import FavoritesImage from './image/Fav.jpg';
import JustinBieberImage from './image/jusb.jpg';
import TaylorSwiftImage from './image/taylor.jpg';
import NCSImage from './image/NCS.jpg';

const Home = () => {
    // const handleBTSClick = () => {
    //     fetch('youtube.com', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: localStorage.getItem('token'), // Include the JWT token
    //         },
    //     })
    //         .then((response) => {
    //             if (response.status === 401) {
    //                 // Unauthorized, redirect to login
    //                 window.location.href = '/login';
    //             } else {
    //                 // Authorized, open the HTML file
    //                 window.open(response.url, '_blank');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // };

    return (
        <div className="home-content" style={{ display:'flex', justifyContent:'center' }}>
            <div className="card-container" style={{ padding:"15vh", display:'flex', flexWrap:'wrap', justifyContent:"center", gap:'20px'}} >
                <div className='card'
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/BTS/bts.html'}}>
                    <Tilt className="tilt">
                        <img src={BTSImage} alt="BTS" className="card-image" />
                        <p className="caption">BTS</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Alan_W/aw.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                        style={{maxHeight:"20vh", maxWidth:"20vh"}}
                            src={AlanWalkerImage} alt="Alan Walker" className="card-image"/>
                        <p className="caption">Alan Walker</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Eminem/e.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={EminemImage}
                            alt="Eminem"
                            className="card-image"
                        />
                        <p className="caption">Eminem</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Hindi/hin.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={HindiImage}
                            alt="Hindi"
                            className="card-image"
                        />
                        <p className="caption">Hindi</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Fav./f.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={FavoritesImage}
                            alt="Favourites"
                            className="card-image"
                        />
                        <p className="caption">Favourite songs</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Justin_B/jb.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={JustinBieberImage}
                            alt="Justin Bieber"
                            className="card-image"
                        />
                        <p className="caption">Justin Bieber</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/Taylor_S/ts.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={TaylorSwiftImage}
                            alt="Taylor Swift"
                            className="card-image"
                        />
                        <p className="caption">Taylor Swift</p>
                    </Tilt>
                </div>
                <div className="card" 
                onClick={() => { window.location.href = 'http://127.0.0.1:5500/Spotify/NCS/ncs.html' }}>
                    <Tilt className="tilt" options={{ max: 25 }}>
                        <img
                            src={NCSImage}
                            alt="NCS"
                            className="card-image"
                        />
                        <p className="caption">NCS</p>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Home;


