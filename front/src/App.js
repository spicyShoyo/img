import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [imgBlob, setImgBlob] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            fetch("http://localhost:5000/")
              .then((response) => response.blob())
              .then((r) => setImgBlob(r));
          }}
        >
          Click me to fetch Img
        </div>
        {imgBlob != null ? <img src={URL.createObjectURL(imgBlob)} /> : null}
      </header>
    </div>
  );
}

export default App;
