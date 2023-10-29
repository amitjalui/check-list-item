import React, { useEffect, useState } from "react";

const CheckContainer = () => {
  const [nonCheckedBox, setNonCheckedBox] = useState([
    {
      check: false,
      value: "Sampel 1",
    },
    {
      check: false,
      value: "Sampel 2",
    },
    {
      check: false,
      value: "Sampel 3",
    },
  ]);
  const [checkedBox, setCheckedBox] = useState([]);

  function handleCheckBoxClick(e, list) {
    if (e.target.name === "box1") {
      setNonCheckedBox((prev) =>
        prev.map((item) => ({
          ...item,
          check: list.value === item.value ? !item.check : item.check,
        }))
      );
    }

    if (e.target.name === "box2") {
      setCheckedBox((prev) =>
        prev.map((item) => ({
          ...item,
          check: list.value === item.value ? !item.check : item.check,
        }))
      );
    }
  }

  function handleIfChecked() {
    const checkedItems = nonCheckedBox.filter(item => item.check);
    setCheckedBox(prev => [...prev, ...checkedItems]);
    setNonCheckedBox(prev => prev.filter(item => !item.check));
  }

  function handleIfNonChecked() {
    const nonCheckedItems = checkedBox.filter(item => !item.check);
    setNonCheckedBox(prev => [...prev, ...nonCheckedItems]);
    setCheckedBox(prev => prev.filter(item => item.check))
  }

  return (
    <>
      <div className="w-60 p-5 bg-green-500">
        {nonCheckedBox.map((list) => (
          <div key={list.value}>
            <input
              type="checkbox"
              className="bg-red-500"
              checked={list.check}
              name="box1"
              onChange={(e) => handleCheckBoxClick(e, list)}
            />
            <label className="pl-2 capitalize">{list.value}</label>
          </div>
        ))}
      </div>
      <div>
        <button 
          className="text-white" 
          onClick={handleIfChecked}
        >
          {"=>"}
        </button>
        <br />
        <br />
        <button 
          className="text-white" 
          onClick={handleIfNonChecked}
        >
          {"<="}
        </button>
      </div>
      <div className="w-60 p-5 bg-green-500">
        {checkedBox?.map((list) => (
          <div key={list.value}>
            <input
              type="checkbox"
              className="bg-red-500"
              checked={list.check}
              name="box2"
              onChange={(e) => handleCheckBoxClick(e, list)}
            />
            <label className="pl-2 capitalize">{list.value}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckContainer;