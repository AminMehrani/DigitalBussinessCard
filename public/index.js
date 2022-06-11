import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Joke from "./Joke"

function App() {
    return (
        <div>
        <Navbar />
        <Main />
        <Joke />
        <Joke />
        <Joke />
        <Joke />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));





