import React from "react";
import myPngImage from "./auc.jpg";

const MyComponent = () => {
  return (
    <div>
      {/* Use the imported PNG image */}
      <img src={myPngImage} alt="My PNG Image" />
    </div>
  );
};

export default MyComponent;


// import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from './codingPerson.json'; // Replace 'yourAnimation.json' with the path to your JSON file

// const MyComponent = () => {
//   return (
//     <div>
//       <h2>Animation</h2>
//       <Lottie animationData={animationData} />
//     </div>
//   );
// };

// export default MyComponent;

