import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

//import { cyan300 } from "material-ui/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Manipulations = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

class InputSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableSubmit: true,
      result: 0
    };
    this.action = this.action.bind(this);
    this.submit = this.submit.bind(this);
  }

  action(n) {
    this.setState({ disableSubmit: false });
    this.setState({ result: this.props.bet + n });
    this.setState({ operation: n });
  }

  submit() {
    if (this.state.result % 3 === 0) {
      this.setState({ result: this.state.result / 3 });
      this.props.send(this.state.result / 3, this.state.operation);
    } else {
      console.log("nay");
    }
  }
  render() {
    return (
      <Wrapper>
        <RaisedButton
          onTouchTap={this.submit}
          label="GO!"
          disabled={!this.props.activate || this.state.disableSubmit}
        />
        <Manipulations>
          <RaisedButton
            disabled={!this.props.activate}
            onTouchTap={() => this.action(-1)}
            label="-1"
          />
          <RaisedButton
            disabled={!this.props.activate}
            onTouchTap={() => this.action(0)}
            label="0"
          />
          <RaisedButton
            disabled={!this.props.activate}
            onTouchTap={() => this.action(1)}
            label="+1"
          />
        </Manipulations>
      </Wrapper>
    );
  }
}

export default InputSection;
