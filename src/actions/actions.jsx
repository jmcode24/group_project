export const addNotesAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const deleteNotesAction = (id, date) => {
  return {
    type: "DELETE_NOTE",
    payload: {
      id: id,
      date: new Date(),
    },
  };
};

export const editNotesAction = (id, date, noteData) => {
  return {
    type: "EDIT_NOTE",
    payload: {
      id: id,
      date: new Date(),
      noteData: noteData
    },
  };
};