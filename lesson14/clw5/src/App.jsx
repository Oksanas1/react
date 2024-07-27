import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [isShowClock, setIsShowClock] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShowClock(!isShowClock)}>{isShowClock ? 'Hide Clocks' : 'Show Clocks'}</button>
      {isShowClock && (
        <div>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </div>
      )}
    </div>
  );
};

export default App;