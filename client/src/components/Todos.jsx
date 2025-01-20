/* eslint-disable react/prop-types */
const Todos = ({todos}) => {
  return (
    <div className="max-w-md mx-auto mt-8 space-y-4">
      {todos.map((todo, index) => (
        <div 
          key={index}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {todo.title}
          </h1>
          <p className="text-gray-600 mb-4">
            {todo.description}
          </p>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              todo.completed 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
            }`}
          >
            {todo.completed ? "Completed" : "Not Completed"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todos