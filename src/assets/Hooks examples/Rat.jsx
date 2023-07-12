import React, { useEffect, useState } from "react";

const Rat = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>
      <h1> I have to count from 0-infinit {count} times!</h1>;
    </>
  );
};

export default Rat;
