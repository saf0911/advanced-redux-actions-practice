import React from "react";
import  {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {
  increaseCounter,
  decreaseCounter
} from "../actions";



const mapStateToProps = state => {
  return{};
}

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increaseCounter())
  }
}



export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(CounterButton)
