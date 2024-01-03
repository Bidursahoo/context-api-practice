function TodoAction (currentTodoItems, action){
    if (action.type === "ADD_ITEM") {
      return [...currentTodoItems, action.payload];
    }
  };
export default TodoAction;