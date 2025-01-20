import { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>


  );
}

export default App;