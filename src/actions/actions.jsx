export const addNotesAction = (note) => {
  return {
    type: "ADD_NOTES",
    payload: note,
  };
};