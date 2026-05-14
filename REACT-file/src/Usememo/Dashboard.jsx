import { useContext, useReducer, useState } from "react";
import { AuthContext, cartReducer, cartInitialState } from "./lazyloading";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  
  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      cartDispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name: newItem.name, price: parseFloat(newItem.price) } });
      setNewItem({ name: '', price: '' });
    }
  };
  
  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Dashboard</h1>
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
      <p className="mb-4">Welcome, <strong>{user?.name}</strong>!</p>
      
      {/* Cart System */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-bold mb-4">🛒 Cart System</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Item name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} className="border p-2 rounded" />
          <input type="number" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} className="border p-2 rounded w-24" />
          <button onClick={handleAddItem} className="px-4 py-2 bg-green-500 text-white rounded">Add</button>
          <button onClick={() => cartDispatch({ type: 'CLEAR_CART' })} className="px-4 py-2 bg-gray-500 text-white rounded">Clear</button>
        </div>
        <ul className="mb-4">
          {cartState.items.map((item, index) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => cartDispatch({ type: 'REMOVE_ITEM', payload: index })} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Remove</button>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold">Total: ${cartState.totalPrice}</p>
        <p className="text-sm text-gray-500">Cart Count: {cartState.items.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;