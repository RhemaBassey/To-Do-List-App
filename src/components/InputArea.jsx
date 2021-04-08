import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          //when clicked
          props.onAdd(inputText); //pass inputText to the onAdd function in App.jsx
          setInputText(""); // set Input text the blank
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
