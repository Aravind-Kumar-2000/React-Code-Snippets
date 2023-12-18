import React from "react";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

function API() {

  const [items, setItems] = useState("");

  function handleChange(id) {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  }

  function handleDelete(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  const API_URL = "http://localhost:3500/items"; //Assigning the URL to a variable

  //Fetching the API using useEffect Hook
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err.stack);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      {items.length ? (
        <ul>
          {items.map((item) => (
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
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
}

export default API;
