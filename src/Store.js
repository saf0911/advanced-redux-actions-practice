import {createStore} from "redux";
import state from "./state";
import reducer from "./reducers";


export default createStore(
  reducer,
  state,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
