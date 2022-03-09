const initialState = {
  notes: [],
};

const groupReducers = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NOTES":
    return { ...state, notes: [...state.notes, action.payload]};

    case "DELETE_NOTES":
    return { ...state, notes: []};

    case "EDIT_NOTES":
    return { ...state, notes: []};


    default:
    return state;
  }
};

export default groupReducers;