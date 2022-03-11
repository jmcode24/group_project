export const addNotesAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const deleteNotesAction = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: {
      id: id,
    },
  };
};

export const editNotesAction = (id, noteData) => {
  return {
    type: "EDIT_NOTE",
    payload: {
      id: id,
      noteData: noteData
    },
  };
};