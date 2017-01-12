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
                <div className="col l9">
                    <h2>Game Portal</h2>

                    <div className="row">
                        <div className="col l4">
                            <div className="card">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l3">
                    <a href="/asteroids" className="game-nav blue-grey darken-2">Asteroids</a>
                    <a href="/tetris/" className="game-nav deep-orange darken-4">Tetris</a>
                    <a href="https://ccoenraets.github.io/react-trivia/" onmouseover={this.loadIframe} className="game-nav yellow darken-3">Jeopardy</a>
                    <a href="/one" className="game-nav light-blue accent-3">One</a>
                    <a href="/two" className="game-nav green darken-4">Two</a>
                </div>
            </div>
        )
    }
}

// const Game = ({ user }) => (
//     <div className="row">
//         <div className="col l9">
//             <h2>Game Portal</h2>
//             {/* <iframe src="https://ccoenraets.github.io/react-trivia/" width="100%" height="300px"></iframe> */}
//         </div>
//         <div className="col l3">
//             <a href="/asteroids" className="game-nav blue-grey darken-2">Asteroids</a>
//             <a href="/tetris/" className="game-nav deep-orange darken-4">Tetris</a>
//             <a className="game-nav yellow darken-3">Jeopardy</a>
//             <a href="/one" className="game-nav light-blue accent-3">One</a>
//             <a href="/two" className="game-nav green darken-4">Two</a>
//         </div>
//     </div>
// )

// const mapStateToProps = (state) => {
//     return { user: state.user }
// }
//
// export default connect(mapStateToProps)(Game)

export default Game;
