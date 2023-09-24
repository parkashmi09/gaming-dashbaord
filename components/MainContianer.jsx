import React from "react";

const MainContianer = (props) => {
  const containerStyle = {
    backgroundImage: 'url("/background.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className=" min-h-screen h-[2291px] bg-black" style={containerStyle}>
      {props.children}
    </div>
  );
};

export default MainContianer;
