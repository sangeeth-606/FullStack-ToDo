// import React from 'react'

// eslint-disable-next-line react/prop-types
const Todos = ({todos}) => {
  return (
    <div>
        {
            // eslint-disable-next-line react/prop-types
            todos.map((todo,index)=>{
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed ? "Completed" : "Not Completed"}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos