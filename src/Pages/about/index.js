import { useState, useEffect } from "react";
import Button from "../../Components/button";
import "./style.css";

const About = () => {
  const [count, setCount] = useState(110);

  const handleCount = (type) => {
    type === "decrement" ? setCount(count - 1) : setCount(count + 1);
  };

  useEffect(() => {
    if (count > 10 || count < 0) {
      alert("Limit Exceed or Non-Zero value not acceptable");
      setCount(0);
    }
  }, [count]);

  return (
    <div className="div">
      <Button buttonText={"-"} onClick={() => handleCount("decrement")} />
      {count}
      <Button buttonText={"+"} onClick={() => handleCount("increment")} />
    </div>
  );
};
export default About;
