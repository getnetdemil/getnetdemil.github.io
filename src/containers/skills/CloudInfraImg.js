import React from 'react';
import Lottie from 'lottie-react';
import animationData from './build.json'; // Replace 'yourAnimation.json' with the path to your JSON file

const MyComponent = () => {
  return (
    <div>
      {/* <h2>Animation</h2> */}
      <Lottie animationData={animationData} />
    </div>
  );
};

export default MyComponent;