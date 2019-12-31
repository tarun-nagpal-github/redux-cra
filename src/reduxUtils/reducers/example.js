const INITIAL_STATE = {
  showComponent: false
};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        showComponent: !state.showComponent
      };
    default:
      return state;
  }
};

export default exampleReducer;
