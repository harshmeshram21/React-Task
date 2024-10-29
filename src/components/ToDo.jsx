import React, { useState } from "react";
import TodoItem from "./TodoItem";

function ToDo() {
  // to take input from user and add it into empty string
  const [item, setItem] = useState("");
  // all item should be in an array
  const [displayItems, setDisplayItems] = useState([]);

  // fn for fetching data
  const handleInput = (e) => {
    console.log(e);
    setItem(e.target.value);
  };
  // aading itim into array
  const handleClick = () => {
    if (item.length > 0) {
      setDisplayItems([...displayItems, item]);
    }
    setItem("");
  };

  // deleting array item
  const handleDelete = (delIndex) => {
    let filteredItems = displayItems.filter((ele, index) => delIndex !== index);
    setDisplayItems(filteredItems);
  };

  return (
    <div className="container">
      <div className="box">
        <label>Enter your task</label>
        &nbsp;&nbsp;
        <input
          type="text"
          name="item field"
          value={item}
          onChange={handleInput}
          placeholder="enter something..."
        />{" "}
        &nbsp;&nbsp;
        <button
          style={{
            border: "none",
            backgroundColor: "#74c0fc",
            fontSize: "20px",
          }}
          onClick={handleClick}
        >
          <i class="fa-regular fa-square-check"></i>
        </button>
        <br />
        <br />
        {displayItems.map((ele, ind) => {
          return (
            <TodoItem key={ind} data={ele} ind={ind} onDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
