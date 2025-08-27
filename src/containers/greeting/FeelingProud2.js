import React from "react";
import myPngImage from "./feelingProud.png";

const MyComponent = () => {
  return (
    <div>
      {/* Use the imported PNG image */}
      <img src={myPngImage} alt="Profile Picture" />
    </div>
  );
};

export default MyComponent;