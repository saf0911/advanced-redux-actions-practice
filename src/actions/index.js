import {combineReducers} from "redux";


export const INCREASE_COUNTER = "INCREASE_COUNTER"

export function increaseCounter(){
  return {
    type:INCREASE_COUNTER
  }
}

export const DECREASE_COUNTER = "DECREASE_COUNTER"

export function decreaseCounter(){
  return {
    type:DECREASE_COUNTER
  }
}

export const SET_SPECIAL_TEXT = "SET_SPECIAL_TEXT"

export function setSpecialText(txt){
  return {
    type:SET_SPECIAL_TEXT,
    value:txt
  }
}

export const ADD_USER = "ADD_USER"

export function addUser(user){
  return {
    type:ADD_USER,
    value:user
  }
}

export const REMOVE_USER = "REMOVE_USER"

export function removeUser(){
  return {
    type:REMOVE_USER
  }
}

export const CHANGE_COUNT = "CHANGE_COUNT"

export function changeCount() {
  return {
    type: CHANGE_COUNT
  }
}






export default combineReducers({

})
