import React, { useState } from "react";
import NavBar from "../navbar/navbar";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
function Todo() {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  let date = new Date();
  console.log("data", date);
  function handelAdd() {
    let ref = { todo, task: false };
    setList((prevState) => [...prevState, ref]);
    setTodo("");
  }
  function handelDelete(element) {
    return setList((prevState) => prevState.filter((ele) => ele !== element));
  }
  async function handelCompleteTask(element) {
    await handelDelete(element);
    setList((prevState) => [
      ...prevState,
      { todo: element.todo, task: true, time: date.toString().slice(0, 25) },
    ]);
  }
  console.log("list", list);
  return (
    <>
      <NavBar setList={setList} />
      <div className="todo">
        <h1>TODO</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handelAdd}>ADD</button>
        </div>

        {list ? (
          <div className="list">
            {list.map((element, i) => (
              <div className="singleTodo" key={i}>
                <p>{element.todo}</p>
                <DeleteIcon
                  className="icon"
                  onClick={() => handelDelete(element)}
                />
                {element.task ? (
                  <h5>Completed {element.time}</h5>
                ) : (
                  <div>
                    <FactCheckOutlinedIcon
                      className="icon"
                      onClick={() => handelCompleteTask(element)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="remove">
            <h4>Please Enter the todo</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
