const initialData = {
  list: [
    {
      title: "Go to the Library",
      status: 0,
    },
    {
      title: "Have Lunch",
      status: 0,
    },
    {
      title: "Meet Friends",
      status: 0,
    },
  ],
};
const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { title } = action.payload;
      return {
        ...state,
        list: [...state.list, { title, status: 0 }],
      };
    case "TODO_CLICKED":
      const { key } = action.payload;
      const list = [...state.list];
      const currentStatus = list[key].status;
      if (currentStatus < 2) {
        list[key].status++;
      }
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
};

export default todoReducer;
