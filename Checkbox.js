import React, { useState, useEffect } from "react";
const dataArray = ["one", "two", "Three", "four", "five"];
const initialState = dataArray.reduce((o, key) => ({ ...o, [key]: false }), {});

export default function App() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialState);
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const selectAll = (value) => {
    console.log(value);
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);
  return (
    <div className="App">
      <>
        <label>All</label>
        <input
          type="checkbox"
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        />
      </>
      &nbsp;&nbsp;&nbsp;
      {dataArray.map((data) => (
        <>
          <label>{data}</label>
          <input
            type="checkbox"
            name={data}
            onChange={() => toggleCheck(data)}
            checked={checked[data]}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </>
      ))}
    </div>
  );
}
