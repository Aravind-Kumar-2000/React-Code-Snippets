import React, { useEffect } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import apirequest from "./api_request";

function EntryPoint() {
  const [list, setList] = useState([
    {
      id: 1,
      content: "I play cricket",
      checked: false,
    },
  ]);

  const API_URL = "http://localhost:5500/items";

  //GET Request
  useEffect(() => {
    async function fetchList() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setList(data);
      } catch (err) {
        console.log(err.stack);
      }
    }
    fetchList();
  }, []);

  async function handleChange(id) {
    const myList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(myList);

    //PATCH Request
    const updateList = myList.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: updateList[0].checked }),
    };
    const reqURL = `${API_URL}/${id}`;
    const result = await apirequest(reqURL, updateOption);
  }

  async function handleDelete(id) {
    const myList = list.filter((item) => item.id !== id);
    setList(myList);

    //DELETE Request
    const deleteList = myList.filter((item) => item.id === id);
    const deleteOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteList),
    };
    const reqURL = `${API_URL}/${id}`;
    const result = await apirequest(reqURL, deleteOption);
  }

  const [newList, setNewList] = useState("");

  async function addNewItem(content) {
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    const newList = { id, content, checked: false };
    const addNewList = [...list, newList];
    setList(addNewList);

    //POST Request
    const createOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    };
    const result = await apirequest(API_URL, createOption);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewItem(newList);
    setNewList("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          required
          autoFocus
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
        />
        <button>
          <FaPlus />
        </button>
      </form>
      <div>
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
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EntryPoint;
