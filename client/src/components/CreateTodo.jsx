// // import React from 'react'
// const CreateTodo = () => {
//   const[title, setTitle] = useState("");
//   const[description, setDescription] = useState("");
//   return (
//     <div>
//         <input type="text" placeholder="title" />
//         <input type="text " placeholder="description" />


//         <button 
//         onClick={()=>{}}
//          >Add a Todo</button>
//     </div>
//   )
// }

// export default CreateTodo

import  { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        alert("Todo created successfully!");
        setTitle("");
        setDescription("");
      } else {
        alert("Failed to create todo");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
      alert("An error occurred while creating the todo");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}>Add a Todo</button>
    </div>
  );
};

export default CreateTodo;
