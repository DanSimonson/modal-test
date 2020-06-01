import React from "react";
import logo from "./logo.svg";
import "./App.scss";
//import useModal from "./useModal";
import MoveCrmModal from "./Components/MoveCrmModal";
import useModal from "./Components/useModal";
function App() {
  const { isShowing, toggle } = useModal();
  return (
    <div className="App">
      <button onClick={toggle}>open</button>
      {/**data={data} */}
      <MoveCrmModal isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default App;
