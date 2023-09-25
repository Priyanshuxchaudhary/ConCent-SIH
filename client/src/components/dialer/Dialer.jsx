import React, { useState, useEffect } from "react";
import "./Dialer.css";

const Dialer = () => {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Add a keydown event listener to the document
    const handleKeyDown = (event) => {
      const digit = event.key;
      if (/^[0-9*#]$/.test(digit) && count < 11) {
        setOutput([...output, digit]);
        setPhoneNumber(phoneNumber + digit); // Update the phone number
        setCount(count + 1);
      } else if (event.key === "Backspace" && count > 0) {
        const newOutput = [...output];
        newOutput.pop();
        setOutput(newOutput);
        setPhoneNumber(phoneNumber.slice(0, -1)); // Remove the last digit from the phone number
        setCount(count - 1);
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, output, phoneNumber]);

  const handleDigitClick = (num) => {
    if (count < 11) {
      setOutput([...output, num]);
      setPhoneNumber(phoneNumber + num); // Update the phone number
      setCount(count + 1);
    }
  };

  const handleBackspaceClick = () => {
    if (count > 0) {
      const newOutput = [...output];
      newOutput.pop();
      setOutput(newOutput);
      setPhoneNumber(phoneNumber.slice(0, -1)); // Remove the last digit from the phone number
      setCount(count - 1);
    }
  };

  const handleCallClick = () => {
    // Simulate dialing by displaying the phone number in the console
    console.log("Dialing:", phoneNumber);
  };

  const digits = [
    { id: "one", label: "1" },
    { id: "two", label: "2" },
    { id: "three", label: "3" },
    { id: "four", label: "4" },
    { id: "five", label: "5" },
    { id: "six", label: "6" },
    { id: "seven", label: "7" },
    { id: "eight", label: "8" },
    { id: "nine", label: "9" },
    { id: "star", label: "*" },
    { id: "zero", label: "0" },
    { id: "hash", label: "#" },
  ];

  // Create a function to generate the grid of buttons
  const generateGrid = () => {
    const grid = [];
    for (let row = 0; row < 5; row++) {
      const rowElements = [];
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        if (index < digits.length) {
          const digit = digits[index];
          rowElements.push(
            <div
              className="digit"
              id={digit.id}
              key={digit.id}
              onClick={() => handleDigitClick(digit.label)}
            >
              {digit.label}
            </div>
          );
        }
      }
      grid.push(
        <div className="row" key={row}>
          {rowElements}
        </div>
      );
    }
    return grid;
  };

  return (
    <div>-
      <link
        href="https://fonts.googleapis.com/css?family=Exo"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container ">
        <div id="output">
          {output.map((num, index) => (
            <span key={index}>{num}</span>
          ))}
        </div>
        
        {generateGrid()}
        <div className="botrow">
          <i className="fa fa-star-o dig" aria-hidden="true" />
          <div
            id="call"
            className="bg-green-500 p-4 m-10 text-white rounded cursor-pointer"
            onClick={handleCallClick}
          >
            <i className="fa fa-phone" aria-hidden="true" />
          </div>
          <i
            className="fa fa-long-arrow-left dig"
            aria-hidden="true"
            onClick={handleBackspaceClick}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Dialer;
