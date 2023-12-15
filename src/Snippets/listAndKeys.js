import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

//To do list
function ListAndKeys() {
  const [list, setList] = useState([
    {
      id: 1,
      content: "I wake up at 6 AM",
      checked: false,
    },
    {
      id: 2,
      content: "I ate my breakfast",
      checked: false,
    },
    {
      id: 3,
      content: "I prepared for Job interview",
      checked: false,
    },
  ]);

  function handleChange(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(newList);
  }

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <main>
      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                onDoubleClick={() => handleChange(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.content}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your List is empty</p>
      )}
    </main>
  );
}

export default ListAndKeys;
