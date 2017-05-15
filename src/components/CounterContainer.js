import React from "react";
import  {connect} from "react-redux";
import Counter from "./Counter";
import currentCounter from "../actions";


const mapStateToProps = state => {
  return {
    count: state.currentCounter
   };
};



const CounterContainer = connect(
   mapStateToProps,
 )(Counter);

 export default CounterContainer;
