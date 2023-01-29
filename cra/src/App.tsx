import { Button } from "carbon-components-react";
import { Copy24 } from "@carbon/icons-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Click me!
        </Button>
        <Copy24 />
      </header>
    </div>
  );
}

export default App;
