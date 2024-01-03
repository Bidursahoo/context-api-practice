import { useReducer} from "react";
import PrintItems from "./PrintItems";
import ItemsContext from "./Store/items-store";
import InputField from "./InputField";
import TodoAction from "./Reducers/TodoReducer";

function App() {
  const [item , dispatch] = useReducer(TodoAction , []);
  
  function addItem(val){
    const valObj = {
      type:"ADD_ITEM",
      payload:val
    }
    dispatch(valObj);
  }
  return (
    <ItemsContext.Provider value={{
    item: item , 
    addItem: addItem}}>
      <div className="d-flex justify-content-center flex-column mb-3 w-50 align-items-center">
        <InputField/>
        <PrintItems/>
      </div>
    </ItemsContext.Provider>
  );
}
export default App;
