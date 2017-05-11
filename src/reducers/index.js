import state from "../state";
import {combineReducers} from "redux";


const {
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
  users,
} = state

const initialState = {
  value: currentCount
}


function currentCounter(state=initialState.value, action){
  if(action.type === "INCREASE_COUNTER"){

  }
  if(action.type === "DECREASE_COUNTER"){

  }
  return state;
}

function usersReducer(state =[], action){
  if(action.type === "ADD_USER"){

  }
  if(action.type === "REMOVE_USER"){

  }
  return state;
}


function specialTexter(state =[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}



export default combineReducers ({
  currentCounter,
  usersReducer,
  specialTexter
})
