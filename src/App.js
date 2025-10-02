import React from "react";
import If from "./componet/If.js";
import And from "./componet/And.js";
import Ternary from "./componet/Ternary.js";
import ChallangeTask from "./componet/ChallangeTask.js";

function App() {

  return (
    <div>
      <h1 className="title">Hello React</h1>
      <p style={{ color: "blue", fontSize: "small"  }}>this is a css inline example </p>

      <h1>
        <If />
        <And />
        <Ternary />
        <ChallangeTask />
      </h1>
    </div>
  );
}

export default App;