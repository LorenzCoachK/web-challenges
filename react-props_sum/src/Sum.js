import React from "react";

function Sum({ valueA, valueB, valueC, valueD }) {
  const sum1 = valueA + valueB;
  const sum2 = valueC + valueD;
  const sum3 = valueA + valueC;
  const sum4 = valueC + valueB;
  return (
    <div>
      <h1>Ergebnisse</h1>
      <div className="sum-container">
        <div className="sum-box">
          {valueA} + {valueB} = {sum1}
        </div>
        <div className="sum-box">
          {valueC} + {valueD} = {sum2}
        </div>
        <div className="sum-box">
          {valueA} + {valueC} = {sum3}
        </div>
        <div className="sum-box">
          {valueC} + {valueB} = {sum4}
        </div>
      </div>
    </div>
  );
}

export default Sum;
