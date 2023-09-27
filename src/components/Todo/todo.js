import React, { useEffect, useState } from "react";
import "./style.css";

// get the local data
const getLocalStorage = () => {
  const newList = localStorage.getItem("mytodolist");

  if (newList) {
    return JSON.parse(newList);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(getLocalStorage);
  const [iseditItem, setIsEditItem] = useState("");
  const [togglebtn, setToggleBtn] = useState(false);

  // edit items
  const editItem = (index) => {
    const item_edit = item.find((currElem) => {
      return currElem.id === index;
    });

    setInputData(item_edit.name);
    setIsEditItem(index);
    setToggleBtn(true);
  };

  // add item to list
  const addItemToList = () => {
    if (inputData === "") {
    } else if (inputData && togglebtn) {
      setItem(
        item.map((currElem) => {
          if (currElem.id === iseditItem) {
            return { ...currElem, name: inputData };
          }
          return currElem;
        })
      );

      setInputData("");
      setIsEditItem("");
      setToggleBtn(false);
    } else {
      const newItemData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, newItemData]);
    }
    setInputData("");
  };

  // delete element from list
  const deleteItem = (index) => {
    const updatedList = item.filter((currElem) => {
      return currElem.id !== index;
    });

    setItem(updatedList);
  };

  // remove all items
  const removeAllClicked = () => {
    setItem([]);
  };

  // adding to local storage when item changes -> useEffect
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption> Add your list here </figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            {togglebtn ? (
              <i className="far fa-edit add-btn" onClick={addItemToList}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItemToList}></i>
            )}
          </div>

          {/* show our list */}
          <div className="showItems">
            {item.map((currElem) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(currElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(currElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAllClicked}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
