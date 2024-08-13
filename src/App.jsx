import React, { useState } from "react";
import "./global.css";
import Form from "./Form";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";
//uuidv4 is a function - generating unique id
//uuid is a library

const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "",
    trainer: "",
    id: uuidv4(),
  });

  let handleChange = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleUpdate=(y)=>{
    let restItems=state.items.filter((value)=>value.id != y)
    let dataToEdit=state.items.find((value)=>value.id == y)
    console.log("dataToEdit",dataToEdit);
    setState({
      ...state,
      items: restItems,
      course: dataToEdit.course,
      trainer: dataToEdit.trainer
    })
  }

  let handleDelete=(x)=>{
    let filteredData = state.items.filter((value)=>value.id != x)
    console.log("filtered data",filteredData);
    setState({...state,items:filteredData})
  }

  let handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let newItem = {
      id: state.id,
      course: state.course,
      trainer: state.trainer,
    };

    let finalItems = [...state.items, newItem];
    setState({
      items: finalItems,
      id: uuidv4(),
      course: "",
      trainer: "",
    });
  };

  console.log(state);
  return (
    <>
      <article>
        <h1>TODOLIST</h1>
        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Todolist items={state.items} handleDelete={handleDelete}
          handleUpdate={handleUpdate}/>
        </main>
      </article>
    </>
  );
};

export default App;
