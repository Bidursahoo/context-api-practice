import React , {useContext, useState} from "react";
import ItemsContext from "./Store/items-store";
export default function InputField() {
    const itemContext = useContext(ItemsContext);
    const [value , setValue] = useState("");
  function handleChange(event){
    setValue(event.target.value);
  }
  return (
    <>
      <input
        className="form-control form-control-lg border border-success"
        type="text"
        placeholder="Input Value"
        style={{ width: "511px", marginTop: "3rem", marginRight: "2rem" }}
        value={value}
        onChange={handleChange}
      />
        <button type="button" className="btn btn-success" onClick={()=>{
            itemContext.addItem(value)
            setValue("")
        }}>Submit
        </button>
    </>
  );
}
