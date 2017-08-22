import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Board } from "components";
import { send } from "store/actions";

class GameContainer extends React.Component {
  render() {
    return <Board {...this.props} />;
  }
}

GameContainer.propTypes = {
  initialNumber: PropTypes.number,
  currentNumber: PropTypes.number,
  currentPlayer: PropTypes.object,
  history: PropTypes.array
};

const mapStateToProps = state => ({
  initialNumber: state.board.initialNumber,
  currentNumber: state.board.currentNumber,
  currentPlayer: state.board.currentPlayer,
  history: state.board.history
});

const mapDispatchToProps = dispatch => ({
  sendResult: (n, operation) => dispatch(send(n, operation))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
