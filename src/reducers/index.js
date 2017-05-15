import state from "../state";
import {combineReducers} from "redux";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_SPECIAL_TEXT
} from "../actions";



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

  switch(action.type){
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
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
