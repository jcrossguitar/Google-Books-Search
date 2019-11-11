// IMPORTS
import React from 'react';
import "./Main.css";
// PROPS: Main
const Main = props => (
    <main className={`${props.shake}`}>
        <div className="gif">
            <button className={`btn btn-link ${props.volumeOn}`} onClick = {() => { props.volume(); }}>
                <i className={`fas fa-volume-up fa-4x volume-icon`}></i>
            </button>
            <button className={`btn btn-link`} onClick = {() => { props.volume(); }}>
                <i className={"fas fa-volume-off fa-4x volume-icon"}></i>
            </button>
            <img id="linda-gif" src="./images/happy-dance.gif" />
        </div>
        <div className="container">
            {props.children}
        </div>
        <div className="gif">
            <img id="louise-gif" src="./images/louise.gif" />
        </div>
    </main>
)
// EXPORT DEFAULT: Main
export default Main;
