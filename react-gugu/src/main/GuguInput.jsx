import React, { useState } from "react";

function GuguInput({ setNumberFunc }) {
  const style = {
    fontSize: "20px",
    padding: "5px",
  };
  const [number, setNumber] = useState(1);

  const onChange = (e) => {
    setNumber(e.target.value);
    setNumberFunc(e.target.value);
  };
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="몇단을 출력할까요"
        style={style}
        value={number}
      />
    </div>
  );
}

export default GuguInput;
