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
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter())
  }
}



export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(CounterButton)
