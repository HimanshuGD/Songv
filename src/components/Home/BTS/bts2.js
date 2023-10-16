import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';


import './bts.css';

import logo from './logo.jpeg'
import player from './playing.gif'

import About from '../about.js';
import bts1s from './songs/1.mp3';
import bts2s from './songs/2.mp3';
import bts3s from './songs/3.mp3';
import bts4s from './songs/4.mp3';
import bts5s from './songs/5.mp3';
import bts6s from './songs/6.mp3';
import bts7s from './songs/7.mp3';
import bts8s from './songs/8.mp3';
import bts9s from './songs/9.mp3';
import bts10s from './songs/10.mp3';
import bts11s from './songs/11.mp3';
import bts12s from './songs/12.mp3';
import bts13s from './songs/13.mp3';
import bts14s from './songs/14.mp3';
import bts15s from './songs/15.mp3';
import bts16s from './songs/16.mp3';
import bts17s from './songs/17.mp3';
import bts18s from './songs/18.mp3';
import bts19s from './songs/19.mp3';
import bts20s from './songs/20.mp3';
import bts21s from './songs/21.mp3';
import bts22s from './songs/22.mp3';
import bts23s from './songs/23.mp3';

import cov1 from './covers/1.jpg';
import cov2 from './covers/2.jpg';
import cov3 from './covers/3.jpg';
import cov4 from './covers/4.jpg';
import cov5 from './covers/5.jpg';
import cov6 from './covers/6.jpg';
import cov7 from './covers/7.jpg';
import cov8 from './covers/8.jpg';
import cov9 from './covers/9.jpg';
import cov10 from './covers/10.jpg';
import cov11 from './covers/11.jpg';
import cov12 from './covers/12.jpg';
import cov13 from './covers/13.jpg';
import cov14 from './covers/14.jpg';
import cov15 from './covers/15.jpg';
import cov16 from './covers/1.jpg';
import cov17 from './covers/17.jpg';
import cov18 from './covers/18.jpg';
import cov19 from './covers/19.jpg';
import cov20 from './covers/20.jpg';
import cov21 from './covers/21.jpg';
import cov22 from './covers/22.jpg';
import cov23 from './covers/23.jpg';

function BTS() {
    // const [audioElement, setAudioElement] = useState(new Audio(bts1s));
    // const [songIndex, setSongIndex] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [progress, setProgress] = useState(0);

    const [audioElement, setAudioElement] = useState(new Audio(bts1s));
    const [songIndex, setSongIndex] = useState(0);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [progress, setProgress] = useState(0);



    const songs = [
        { songName: 'Magic Shop', filePath: bts1s, coverPath: cov1 },
        { songName: 'Mikrokosmos', filePath: bts2s, coverPath: cov2 },
        { songName: 'Black Swan', filePath: bts3s, coverPath: cov3 },
        { songName: 'DNA', filePath: bts4s, coverPath: cov4 },
        { songName: 'Fake Love', filePath: bts5s, coverPath: cov5 },
        { songName: 'Persona', filePath: bts6s, coverPath: cov6 },
        { songName: 'Shadow', filePath: bts7s, coverPath: cov7 },
        { songName: 'Eight ft. Suga', filePath: bts8s, coverPath: cov8 },
        { songName: '10000Hours by JB', filePath: bts9s, coverPath: cov9 },
        { songName: 'Stay Gold', filePath: bts10s, coverPath: cov10 },
        { songName: 'Idol', filePath: bts11s, coverPath: cov11 },
        { songName: 'On', filePath: bts12s, coverPath: cov12 },
        {songName: 'Dont Leave Me', filePath: bts13s, coverPath: cov13 },
        { songName: 'We Are Bulletproof', filePath: bts14s, coverPath: cov14 },
        { songName: 'Still With You', filePath: bts15s, coverPath: cov15 },
        { songName: 'Waste on me ft.Steve Aoki', filePath: bts16s, coverPath: cov16 },
        { songName: 'Euphoria', filePath: bts17s, coverPath: cov17 },
        { songName: 'Savage Love', filePath: bts18s, coverPath: cov18 },
        { songName: 'Spring', filePath: bts19s, coverPath: cov19 },
        { songName: 'Life goes on', filePath: bts20s, coverPath: cov20 },
        { songName: 'Sweet Night', filePath: bts21s, coverPath: cov21 },
        { songName: 'So what', filePath: bts22s, coverPath: cov22 },
        { songName: 'I need you', filePath: bts23s, coverPath: cov23 },
    ];

    const [showPage2, setShowPage2] = useState(false);

    const handleCardClick = () => {
        setShowPage2(true);
    };

    useEffect(() => {
        const song = songs[songIndex];
        setAudioElement(new Audio(song.filePath));
    }, [songIndex]);

    const playPauseToggle = () => {
        if (audioPlaying) {
            audioElement.pause();
        } else {
            audioElement.play().catch((error) => {
                console.error('Error while playing the audio:', error);
            });
        }
        setAudioPlaying(!audioPlaying);
    };

    const makeAllPlays = () => {
        // Pause all songs
        const playIcons = document.getElementsByClassName('songItemPlay');
        Array.from(playIcons).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        });
    };

    const playSong = (index) => {
        makeAllPlays();
        setSongIndex(index);
        audioElement.currentTime = 0;
        audioElement.play().catch((error) => {
            console.error('Error while playing the audio:', error);
        });
        setAudioPlaying(true);
        const playIcon = document.getElementById(index.toString());
        if (playIcon) {
            playIcon.classList.remove('fa-play-circle');
            playIcon.classList.add('fa-pause-circle');
        }
    };
 
    const nextSong = () => {
        const newIndex = songIndex + 1 > songs.length - 1 ? 0 : songIndex + 1;
        playSong(newIndex);
        setSongIndex(newIndex); // Update the song index state
        const newSong = songs[newIndex];
        setAudioElement(new Audio(newSong.filePath)); // Update the audio element
        audioElement.currentTime = 0;
        audioElement.play().catch((error) => {
            console.error('Error while playing the audio:', error);
        });
        setAudioPlaying(true);
        const playIcon = document.getElementById(newIndex.toString());
        if (playIcon) {
            playIcon.classList.remove('fa-play-circle');
            playIcon.classList.add('fa-pause-circle');
        }    };

    const previousSong = () => {
        const newIndex = songIndex - 1 < 0 ? songs.length - 1 : songIndex - 1;
        playSong(newIndex);
        setSongIndex(newIndex); // Update the song index state
        const newSong = songs[newIndex];
        setAudioElement(new Audio(newSong.filePath)); // Update the audio element
        audioElement.currentTime = 0;
        audioElement.play().catch((error) => {
            console.error('Error while playing the audio:', error);
        });
        setAudioPlaying(true);
        const playIcon = document.getElementById(newIndex.toString());
        if (playIcon) {
            playIcon.classList.remove('fa-play-circle');
            playIcon.classList.add('fa-pause-circle');
        }
    };

    useEffect(() => {
        audioElement.addEventListener('timeupdate', () => {
            const newProgress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            setProgress(newProgress);
        });

        return () => {
            audioElement.removeEventListener('timeupdate', () => {
                // Remove event listener when the component unmounts
            });
        };
    }, [audioElement]);

    const changeProgress = (newProgress) => {
        audioElement.currentTime = (newProgress / 100) * audioElement.duration;
    };

    // const navigate = useNavigate();

    // const onButtonClick = () => {
    //     navigate(<Home/>); // Navigate to the "Home" page
    // };


    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <nav>
                <ul>
                    <li className="brand">
                        <img src={logo} alt="Spotify" /> Songify
                    </li>
                    <li >
                        <Link to='http://localhost:3001/'>Home</Link>
                       
                    </li>
                    <li>
                        {/* <a onClick={About}> About<a/> */}
                        <button onClick={<About/>}>About</button>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <div className="songList">
                    <h1>Best of BTS</h1>
                    <div className="songItemContainer">
                        {songs.map((song, index) => (
                            <div className="songItem" key={index}>
                                <img alt={index} src={song.coverPath} />
                                <span className="songName">{song.songName}</span>
                                <span className="songlistplay">
                                    <span className="timestamp"> {' '}
                                        <i
                                            id={index.toString()}
                                            className={`far songItemPlay ${audioPlaying && songIndex === index ? 'fa-pause-circle' : 'fa-play-circle'}`}
                                            onClick={() => playSong(index)}
                                        ></i>{' '}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <input
                    type="range"
                    name="range"
                    id="myProgressBar"
                    min="0"
                    value={progress}
                    max="100"
                    style={{ width: '20cm' }}
                    onChange={(e) => changeProgress(e.target.value)}
                />
                <div className="icons">
                    <i className="fas fa-3x fa-step-backward" id="previous" onClick={previousSong}></i>
                    <i
                        className={`far fa-3x ${audioPlaying ? 'fa-pause-circle' : 'fa-play-circle'}`}
                        id="masterPlay"
                        onClick={playPauseToggle}
                    ></i>
                    <i className="fas fa-3x fa-step-forward" id="next" onClick={nextSong}></i>
                </div>
                <div className="songInfo">
                    <img src = {player} width="42px" alt="" id="gif" style={{ opacity: audioPlaying ? 1 : 0 }} />
                    <span id="masterSongName">{songs[songIndex].songName}</span>
                </div>
            </div>
        </div>
    );
}

export default BTS;

