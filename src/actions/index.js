export const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: { title },
  };
};
export const todoClicked = (key) => {
  return {
    type: "TODO_CLICKED",
    payload: { key },
  };
};
