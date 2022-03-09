const initialState = {
  notes: [],
};

const groupReducers = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NOTE":
    return { ...state, notes: [...state.notes, action.payload]};

    case "DELETE_NOTE":
    return { ...state, notes: []};

    case "EDIT_NOTE":
    return { ...state, notes: []};


    default:
    return state;
  }
};

export default groupReducers;