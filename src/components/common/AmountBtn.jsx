import React from 'react';

function AmountBtn({ increase, decrease, amount }) {
  return (
    <div className="container">
      <button onClick={decrease}> decrease </button>
      <p>{amount}</p>
      <button onClick={increase}> increase</button>
    </div>
  );
}

export default AmountBtn;
