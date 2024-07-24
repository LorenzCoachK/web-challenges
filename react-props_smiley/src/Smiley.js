import React from "react";

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="happy">
          😊
        </span>
      ) : (
        <span role="img" aria-label="sad">
          😢
        </span>
      )}
    </div>
  );
}
export default Smiley;
