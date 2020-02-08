import React from 'react';
import ReactDOM from "react-dom";
function tick() {
  const element = (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  //ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

export default tick;
