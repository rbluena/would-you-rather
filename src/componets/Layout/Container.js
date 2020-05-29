import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-gray-100" style={{ height: "100vh" }}>
      {children}
    </div>
  );
};

export default Container;
