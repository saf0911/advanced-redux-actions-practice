import React from "react";
import  {connect} from "react-redux";
import Counter from "./Counter";
import changeCount from "../actions";


const mapStateToProps = state => {
  return{}
};

const mapDispatchToProps = dispatch => {
  return {
    counter: () => dispatch(changeCount())
  }
}



export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
