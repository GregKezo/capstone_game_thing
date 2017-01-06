import React from 'react';
import { connect } from 'react-redux';
import { observable } from 'mobx';

class GameStore extends React.Component {
  @observable characterPosition = { x: 0, y: 0 };

  @observable stageX = 0;

  setCharacterPosition(position) {
    this.characterPosition = position;
  }

  setStageX(x) {
    if (x > 0) {
      this.stageX = 0;
    } else if (x < -2048) {
      this.stageX = -2048;
    } else {
      this.stageX = x;
    }
  }
}

export default connect()(GameStore);