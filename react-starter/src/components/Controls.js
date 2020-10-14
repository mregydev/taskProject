import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "./Button"
import { Slider, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import { hotkeys } from "react-keyboard-shortcuts";
import {ToggleStates} from '../constants/enums'
import { LightenDarkenColor } from 'lighten-darken-color'; 

class Controls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleState: ToggleStates.AutoIncremement
    }
  }


  hot_keys = {
    "ctrl+right": {
      priority: 1,
      handler: () => this.props.increment(),
    },

    "ctrl+left": {
      priority: 1,
      handler: () => this.props.decrement(),
    }
  }


  componentDidMount() {
    this.applyToggleState()
  }



  changeToggleState = () => {
    debugger
    switch (this.state.toggleState) {
      case ToggleStates.AutoIncremement:
        this.setState({ toggleState: ToggleStates.AutoDecremenet })
        break;

      case ToggleStates.AutoDecremenet:
        this.setState({ toggleState: ToggleStates.None })
        break;

      case ToggleStates.None:
        this.setState({ toggleState: ToggleStates.AutoIncremement })
        break;
    }

    this.applyToggleState()
  }

  applyToggleState = () => {

    if (this.state.toggleState === ToggleStates.None) {
      if (this.interval) {
        clearInterval(this.interval)
      }
    }
    else {
      this.interval = setInterval(() => {
        if (this.state.toggleState === ToggleStates.AutoIncremement) {
          this.props.increment()
        }
        else if (this.state.toggleState === ToggleStates.AutoDecremenet) {
          this.props.decrement()
        }
      }, 3000)
    }
  }


  render() {
    const { incrementLabel, decrementLabel, ResetLabel, increment, decrement, reset, setCounter, count } = this.props;

    return (
      <Fragment>
        <div className="slider">

          <Slider
            defaultValue={1}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            value={count}
            min={10}
            max={100}
            onChange={(_, value) => setCounter(value)}
          />
        </div>
        <Accordion>
          <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
            Controls
          </AccordionSummary>
          <AccordionDetails>
            <div className="controls">
              <Button handleClick={() => { increment(); }} label={incrementLabel} />
              <Button handleClick={() => { decrement(); }} label={decrementLabel} />
              <Button handleClick={() => { reset(); }} label={ResetLabel} />
              <Button handleClick={() => { this.changeToggleState() }} label={this.state.toggleState} />
            </div>

          </AccordionDetails>
        </Accordion>

      </Fragment>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  setCounter: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  ResetLabel: PropTypes.string
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  ResetLabel: "Reset"
};

export default hotkeys(Controls);
