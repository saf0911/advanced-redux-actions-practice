import {connect} from "react-redux";
import SpecialTextBox from "./SpecialTextBox";
import {setSpecialText} from "../actions";

const mapStateToProps = (state) => {
  return {};
}

function mapDispatchToProps(dispatch){
  return {
    set: (txt) => {
      let action = setSpecialText(txt)
      dispatch(action);
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SpecialTextBox);
