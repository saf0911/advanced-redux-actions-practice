import React from "react";
import  {connect} from "react-redux";
import {increaseCounter} from "../actions";
import CounterButton from "./CounterButton";



const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increaseCounter())
  }
}

const mapStateToProps = state => {}


export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(CounterButton)
