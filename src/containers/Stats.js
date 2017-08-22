import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Stats } from "components";
import { updateScore } from "store/actions";

class StatsContainer extends React.Component {
  render() {
    return <Stats {...this.props} />;
  }
}

StatsContainer.propTypes = {
  player1: PropTypes.object,
  player2: PropTypes.object,
  bet: PropTypes.number,
  ready: PropTypes.bool
};

const mapStateToProps = state => ({
  player1: state.stats.players[0] || {},
  player2: state.stats.players[1] || {},
  bet: state.stats.bet,
  ready: state.stats.ready
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
