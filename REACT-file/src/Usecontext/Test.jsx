import { useState, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      setCount2(data.quotes?.[1]?.id); 
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6 text-gray-800">

      {/* useState */}
      <div className="bg-blue-50 p-4 rounded-lg shadow">
        <p className="mb-2">
          USESTATE we use in react for simple understanding it like a memory box and
          let our component remember the value and update on the screen.
          <br />
          if we try to direct update without setter component will not re-render no render means no UI update
        </p>

        <h1 className="text-xl font-bold mb-2">
          {count} Counter app using useState
        </h1>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increase
        </button>
      </div>

      {/* useEffect */}
      <div className="bg-green-50 p-4 rounded-lg shadow">
        <p>
          USE EFFECT if for render a component only one time it avoid unnecessary render
          <br />
          3---------render when the value of the variable changes and it is dependencies array with value
          <br />
          2--------- it render entire component once
          <br />
          1---------It runs every time the component renders without dependencies = run always [react can't control]
        </p>
        <p className="mt-2 font-semibold">
          Sample fetched ID: {count2}
        </p>
      </div>

      {/* useRef */}
      <div className="bg-yellow-50 p-4 rounded-lg shadow">
        <p>
          USE REF it is used to store a value that DOES NOT cause re-render when it changes.
          usestate update UI directly useref update the stored data without re-render with help of DOM access
          <br />
          inputref.current.focus ----- using this method we can focus the input field
        </p>
      </div>

      {/* useContext */}
      <div className="bg-purple-50 p-4 rounded-lg shadow">
        <p>
          USE CONTEXT it is used to share data between components without passing props down the component tree.
          <br />
          usecontext create ----- context provider ----- context consumer [we can wrap any component with this context provider]
        </p>
      </div>

      {/* Custom Hooks */}
      <div className="bg-pink-50 p-4 rounded-lg shadow">
        <p>
          CUSTOM HOOKS are functions that allow us to reuse logic across multiple components.
          <br />
          They are a way to abstract away complex logic and make our code more modular and reusable.
        </p>
      </div>

      {/* HOC */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p>
          HOC (higher order component) is a function that takes a component as an argument and returns a new component
          <br />
          protected page [with login chk]
        </p>
      </div>

    </div>
  );
};

export default Test;