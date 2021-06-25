import { createStore } from "redux";

const reducer = (
  state = {
    shoes: "some shoes",
  }, action
) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    default:
      return state
  }
};

export default const store = createStore(reducer);


