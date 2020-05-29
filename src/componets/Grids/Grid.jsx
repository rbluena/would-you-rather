import React from "react";

const Grid = () => {
  return (
    <React.Fragment>
      <div class="flex mb-4">
        <div class="w-full bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Two columns --> */}
      <div class="flex mb-4">
        <div class="w-1/2 bg-gray-400 h-12"></div>
        <div class="w-1/2 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Three columns --> */}
      <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 h-12"></div>
        <div class="w-1/3 bg-gray-500 h-12"></div>
        <div class="w-1/3 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Four columns --> */}
      <div class="flex mb-4">
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Five columns --> */}
      <div class="flex mb-4">
        <div class="w-1/5 bg-gray-500 h-12"></div>
        <div class="w-1/5 bg-gray-400 h-12"></div>
        <div class="w-1/5 bg-gray-500 h-12"></div>
        <div class="w-1/5 bg-gray-400 h-12"></div>
        <div class="w-1/5 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Six columns --> */}
      <div class="flex">
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
      </div>
    </React.Fragment>
    // <!-- Full width column -->
  );
};

export default Grid;
