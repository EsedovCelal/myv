import Navbar from "./Navbar";
import Result from "./Result";
import { useState } from "react";

const Navbar_Result = () => {
  const [result, setResult] = useState([]);
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <Navbar setResult={setResult} setFocused={setFocused} />
      <Result isFocused={focused} externalData={result} />
    </div>
  );
};

export default Navbar_Result;
