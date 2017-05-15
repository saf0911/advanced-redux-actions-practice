import React from "react";
import  {connect} from "react-redux";
import SpecialText from "./SpecialText";
import setSpecialText from "../actions";

const mapStateToProps = state => {
  return{
    text: state.setSpecialText
  };
}





export default connect (
  mapStateToProps,

)(SpecialText)
