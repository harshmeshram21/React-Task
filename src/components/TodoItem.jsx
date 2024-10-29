import React, { Fragment } from "react";

function TodoItem({ data, ind, onDelete }) {
  return (
    <Fragment key={ind}>
      <span>
        {ind + 1}&nbsp;
        {data}
      </span>
      &nbsp;&nbsp;
      <button
        style={{
          border: "none",
          backgroundColor: "#74c0fc",
        }}
        onClick={() => onDelete(ind)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <br /> <br />
    </Fragment>
  );
}

export default TodoItem;
