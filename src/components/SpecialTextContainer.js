import React from "react";
import  {connect} from "react-redux";
import SpecialText from "./SpecialText";
import specialTexter from "../actions";


const mapStateToProps = state => {
  return{
    text: state.specialTexter
  };
}



const SpecialTextContainer = connect(
  mapStateToProps,
)(SpecialText);


export default SpecialTextContainer;
