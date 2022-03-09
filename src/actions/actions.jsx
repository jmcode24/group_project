export const addNotesAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};