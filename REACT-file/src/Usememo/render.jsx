import { useReducer, useState } from "react";



const counterInitialState = { count: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'DECREMENT': return { ...state, count: state.count - 1 };
    case 'RESET': return { ...state, count: 0 };
    case 'INCREMENT_BY_VALUE': return { ...state, count: state.count + action.payload };
    default: return state;
  }
};


const formInitialState = { name: '', email: '', password: '' };
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD': return { ...state, [action.payload.name]: action.payload.value };
    case 'RESET_FORM': return { ...formInitialState };
    default: return state;
  }
};


const todoInitialState = { todos: [], editingTodo: null };
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_TODO': return { ...state, todos: state.todos.filter((_, i) => i !== action.payload) };
    case 'EDIT_TODO': return { ...state, editingTodo: action.payload };
    case 'UPDATE_TODO': return {
      ...state,
      todos: state.todos.map((t, i) => i === action.payload.index ? action.payload.todo : t),
      editingTodo: null
    };
    default: return state;
  }
};

const Optimizationphase = () => {

  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);
  
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Form handlers
  const handleFormChange = (e) => formDispatch({ type: 'SET_FIELD', payload: { name: e.target.name, value: e.target.value } });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formState.name}\nEmail: ${formState.email}\nPassword: ${formState.password}`);
    formDispatch({ type: 'RESET_FORM' });
  };

  // Todo handlers
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      todoDispatch({ type: 'ADD_TODO', payload: { text: newTodo, id: Date.now() } });
      setNewTodo("");
    }
  };
  const handleDeleteTodo = (index) => todoDispatch({ type: 'DELETE_TODO', payload: index });
  const handleEditTodo = (todo, index) => {
    todoDispatch({ type: 'EDIT_TODO', payload: { ...todo, index } });
    setNewTodo(todo.text);
    setIsEditing(true);
  };
  const handleUpdateTodo = () => {
    if (newTodo.trim() && todoState.editingTodo !== null) {
      todoDispatch({ type: 'UPDATE_TODO', payload: { index: todoState.editingTodo.index, todo: { text: newTodo, id: todoState.editingTodo.id } } });
      setNewTodo("");
      setIsEditing(false);
    }
  };
  const handleCancelEdit = () => {
    todoDispatch({ type: 'EDIT_TODO', payload: null });
    setNewTodo("");
    setIsEditing(false);
  };

  return (
    <>
    

      <h1 className="text-3xl font-bold text-center mb-10">Optimization Phase - Reducer Tasks</h1>



      <div className="max-w-2xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Task 1: Counter with Multiple Actions</h2>
        <div className="text-4xl font-bold text-center mb-4">{counterState.count}</div>
        <div className="flex gap-2 justify-center">
          <button onClick={() => counterDispatch({ type: 'INCREMENT' })} className="px-4 py-2 bg-green-500 text-white rounded">Increment</button>
          <button onClick={() => counterDispatch({ type: 'DECREMENT' })} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
          <button onClick={() => counterDispatch({ type: 'RESET' })} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
          <button onClick={() => counterDispatch({ type: 'INCREMENT_BY_VALUE', payload: 5 })} className="px-4 py-2 bg-blue-500 text-white rounded">+5</button>
        </div>
      </div>



      <div className="max-w-2xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Task 2: Form Handling with Single Reducer</h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Enter your name" value={formState.name} onChange={handleFormChange} className="p-2 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Enter your email" value={formState.email} onChange={handleFormChange} className="p-2 border border-gray-300 rounded" />
          <input type="password" name="password" placeholder="Enter your password" value={formState.password} onChange={handleFormChange} className="p-2 border border-gray-300 rounded" />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
            <button type="button" onClick={() => formDispatch({ type: 'RESET_FORM' })} className="px-4 py-2 bg-gray-500 text-white rounded">Reset Form</button>
          </div>
        </form>
      </div>



      <div className="max-w-2xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Task 3: Todo CRUD using Reducer</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Enter todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="p-2 border border-gray-300 rounded flex-1" />
          {isEditing ? (
            <>
              <button onClick={handleUpdateTodo} className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
              <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
            </>
          ) : (
            <button onClick={handleAddTodo} className="px-4 py-2 bg-green-500 text-white rounded">Add Todo</button>
          )}
        </div>
        <ul className="flex flex-col gap-2">
          {todoState.todos.map((todo, index) => (
            <li key={todo.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <span>{todo.text}</span>
              <div className="flex gap-2">
                <button onClick={() => handleEditTodo(todo, index)} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">Edit</button>
                <button onClick={() => handleDeleteTodo(index)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
   
    </>
  );
};

export default Optimizationphase;