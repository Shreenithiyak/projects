import { useState, useMemo } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([5, 2, 9, 1, 7]);
  const [dark, setDark] = useState(false);

  // generate random array
  const generateArray = () => {
    const newArr = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumbers(newArr);
  };

  // sorting with useMemo
  const sortedNumbers = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]); // ONLY runs when numbers change

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Original: {numbers.join(", ")}</h2>
      <h2>Sorted: {sortedNumbers.join(", ")}</h2>

      <button onClick={generateArray}>
        Generate New Array
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;