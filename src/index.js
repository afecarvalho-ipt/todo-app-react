import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const App = () => (
  <div>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
