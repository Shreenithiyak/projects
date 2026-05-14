import { useMemo, useState } from "react";

const Task1 = () => {
  const [num, setNum] = useState(5);
  const [text, setText] = useState("");

  const heavySum = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < 10000000; j++) {}
      sum += i;
    }

    return sum;
  };

  const result = useMemo(() => {
    return heavySum(num);
  }, [num]);

  return (
    <div>
      <h2>Number: {num}</h2>
      <h3>Sum: {result}</h3>

      <button onClick={() => setNum(num + 1)}>
        Increase Number
      </button>
      <h1>{text}</h1>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Task1;