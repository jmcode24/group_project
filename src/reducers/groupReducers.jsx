const initialState = {
  notes: [],
};

const groupReducers = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NOTE":
    return { ...state, notes: [...state.notes, action.payload]};

    case "DELETE_NOTE":
      const filterednotes = state.notes.filter((note) => {
        if (note.id !== action.payload) return note;
      });
      return { ...state, notes: filterednotes}

    case "EDIT_NOTE":
      const editednotes = state.notes.map((note) => {
        if(note.id === action.payload.id.date) return action.payload.noteData;
        return note
      });
      return { ...state, notes: editednotes };


    default:
    return state;
  }
};

export default groupReducers;