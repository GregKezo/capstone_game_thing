import React from 'react';
import { connect } from 'react-redux';
// Demo Game
import Demo from './demo-one/Demo';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.loadIframe = this.loadIframe.bind(this);
    }

    loadIframe(e) {
        e.preventDefault();
        console.log('Yo!');
    }

    

    render() {
        return (
            <div className="row">
                <div className="col l12">
                    <h2>Game Portal</h2>

                    <div className="row">
                        <div className="col l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/reacteroids.png" />
                                </div>
                                <div className="card-content">
                                    <p>Game based on the 80's classic Asteroids</p>
                                </div>
                                <div className="card-action">
                                    <a href="/asteroids">Reacteroids</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/tetris.png" />
                                </div>
                                <div className="card-content">
                                    <p>Play some Tetris мой друг!</p>
                                </div>
                                <div className="card-action">
                                    <a href="/tetris/">Tetris</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="img/jeopardy.png" />
                                </div>
                                <div className="card-content">
                                    <p>Taa-daa-daaa-da... You know the song. Here's Jeopardy!</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://ccoenraets.github.io/react-trivia/">Jeopardy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
