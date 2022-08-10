import { INCREAMENT_COUNT, DECREAMENT_COUNT, RESET_COUNT } from "./action.type";

export default function reduce(state, action) {
  console.log(action);
  /* action verbs*/
  switch (action.type) {
    case INCREAMENT_COUNT:
      return {...state, count: state.count + action.payload.value};

    case DECREAMENT_COUNT:
      return {...state, count: state.count -1};

    case RESET_COUNT:
      return {...state, count:0};

    default:
      return state;
  }
}
