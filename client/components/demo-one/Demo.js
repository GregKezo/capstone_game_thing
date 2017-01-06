import React from 'react';
import { connect } from 'react-redux';
import { Loop, Stage, World } from 'react-game-kit';
import Level from './Level';
// import Matter from 'matter-js';

class Demo extends React.Component {
    render() {
        return (
            <div className="game-area">
                <Loop>
                    <Stage>
                        <World>
                            <Level />
                        </World>
                    </Stage>
                </Loop>
            </div>
        )
    }
}

export default connect()(Demo);
