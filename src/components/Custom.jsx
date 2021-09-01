import React from "react";

const Custom = ({ children, func }) => {
  console.log('render')
  const handleClick = () => {
    func(10);
  };
  return (
    <div>
      <button value="12" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Custom;
