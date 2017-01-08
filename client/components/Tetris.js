import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import TetrisGame from './tetris/src/components/TetrisGame';
import TetrisApp from './tetris/src/reducers/index.js';

const store = createStore(
	TetrisApp,
	applyMiddleware(ReduxThunk)
);

const Tetris = () => (
	<Provider store={store}>
		<div>
			<TetrisGame />
		</div>
	</Provider>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Tetris);
