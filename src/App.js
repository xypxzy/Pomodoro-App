import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [pomoTime, setPomoTime] = useState(0);
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
