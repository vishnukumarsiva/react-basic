import React, { useState } from "react";
import Button from "../../Components/button";

const Home = () => {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  const handleValueOneChange = (event) => {
    const value = event.target.value;
    setValueOne(value);
  };
  const handleValueTwoChange = (event) => {
    const value = event.target.value;
    setValueTwo(value);
  };

  const handleButtonClick = (typeOfAction) => {
    if (typeOfAction === "add") {
      alert(
        `sum of ${valueOne} and ${valueTwo} is ${
          Number(valueOne) + Number(valueTwo)
        }`
      );
    }
  };

  return (
    <div>
      <input type="number" onChange={handleValueOneChange} value={valueOne} />
      <input type="number" onChange={handleValueTwoChange} value={valueTwo} />
      <Button buttonText="Add" onClick={() => handleButtonClick("add")} />
      <Button buttonText="sub" onClick={() => handleButtonClick("sub")} />
      <Button buttonText="div" onClick={() => handleButtonClick("div")} />
      <Button buttonText="mul" onClick={() => handleButtonClick("mul")} />
      <Button buttonText="equal" onClick={() => handleButtonClick("equal")} />
      <h1>Hello</h1>
    </div>
  );
};
export default Home;
