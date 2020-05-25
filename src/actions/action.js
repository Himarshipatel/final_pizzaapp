import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD,
  ADD_TO_CART,
  SUBTRACT,
  REMOVE_ITEM_FROM_CART,
} from "./actionType";

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST,
  };
}

export function fetchDataSuccess(item) {
  return {
    type: FETCH_DATA_SUCCESS,
    item,
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error },
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    itemToBeAdded: id,
  };
}

export function add(id) {
  return {
    type: ADD,
    itemInc: id,
  };
}

export function subtract(id) {
  return {
    type: SUBTRACT,
    itemDec: id,
  };
}

export function removeItemFromCart(id, amount) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    itemToRemove: id,
    amount: amount,
  };
}