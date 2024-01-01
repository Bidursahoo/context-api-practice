import { useState } from "react";
import PrintItems from "./PrintItems";

function App() {
  const [item , setItems] = useState([]);
  const [value , setValue] = useState("");
  function handleChange(event){
    setValue(event.target.value);
  }

  function addItem(event){
    setItems([...item , value]);
    setValue("")
  }
  return (
    <>
      <div class="d-flex justify-content-center flex-column mb-3 w-50 align-items-center">
        <input
          className="form-control form-control-lg border border-success"
          type="text"
          placeholder="Input Value"
          style={{ width: "511px", marginTop: "3rem", marginRight:"2rem"}}
          value={value}
          onChange={handleChange}
        />
        <br/>
        <button type="button" className="btn btn-success" onClick={addItem}>
          Submit
        </button>
        <PrintItems item={item}/>
      </div>
    </>
  );
}

export default App;
