import React from 'react';
import { connect } from 'react-redux';
import { TileMap } from 'react-game-kit';
import { autorun } from 'mobx';
import GameStore from './GameStore';

class Level extends React.Component {

    constructor(props) {
        super(props);
        this.getWrapperStyles = this.getWrapperStyles.bind(this);
        this.state = { stageX: 0 };
    }

    componentDidMount() {
        this.cameraWatcher = autorun(() => {
            const targetX = Math.round(GameStore.stageX * this.context.scale);
            this.setState({
                stageX: targetX,
            });
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const targetX = Math.round(GameStore.stageX * nextContext.scale);
        this.setState({
            stageX: targetX,
        });
    }

    componentWillUnmount() {
        this.cameraWatcher();
    }

    getWrapperStyles() {
        return {
            position: 'absolute',
            transform: `translate(${this.state.stageX}px, 0px) translateZ(0)`,
            transformOrigin: 'top left'
        };
    }

    giveTileMapHeight() {
        return {
            height: '500px',
            width: '500px'
        }
    }

    render() {
        return (
            <div style={this.getWrapperStyles()}>
                <TileMap
                    src="/assets/boardwalktile.png"
                    tileSize={128}
                    columns={24}
                    rows={4}
                    layers={[
                      [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                      ],
                    ]}
                 />
                 <TileMap
                    style={{ top: Math.floor(-63 * this.context.scale) }}
                    src="/assets/buildings.png"
                    rows={1}
                    columns={6}
                    tileSize={512}
                    layers={[
                    [1, 2, 3, 4, 5, 6],
                    ]}
                />
            </div>
        )
    }
}

export default connect()(Level);
