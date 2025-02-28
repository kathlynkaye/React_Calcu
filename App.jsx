import React, { useState } from "react";
import "./index.css"; // Import the CSS file for styling

const App = () => {
  // State to store the current input
  const [input, setInput] = useState("");
  // State to store the history of calculations
  const [history, setHistory] = useState([]);

  // Function to handle button clicks for numbers and operators
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to clear the input field
  const clearInput = () => {
    setInput("");
  };

  // Function to delete the last character from the input field
  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Function to calculate the result of the input expression
  const calculateResult = () => {
    try {
      const result = eval(input).toString(); // Evaluates the mathematical expression
      setHistory([...history, `${input} = ${result}`]); // Adds result to history
      setInput(result); // Updates input with the result
    } catch {
      setInput("Error"); // Displays error if evaluation fails
    }
  };

  // Function to clear the calculation history


  return (
    <div className="calculator">
      {/* Display input field */}
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {/* Render buttons for numbers and operations */}
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            className={`${item === "=" ? "equals" : ["+", "-", "*", "/"].includes(item) ? "operator" : ""}`}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
          >
            {item}
          </button>
        ))}
        {/* Clear, Delete buttons */}
        <div className="additional-buttons">
        <button onClick={clearInput} className="clear">C</button>
        <button onClick={deleteLast} className="delete">⌫</button>
        </div>
      </div>
      {/* Display calculation history */}
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
