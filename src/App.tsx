import { useState } from "react";
import "./App.css";
import InputElement from "./components/InputElement/InputElement";
import NGrid from "./components/NGrid/NGrid";

function App() {

  const [position, setPosition] = useState<"top" | "left">("top");
  const [columns, setColumns] = useState(2);

  return (
    <>

      <div className="controls">
        <div className="control-container">
          <label htmlFor="position">
          <input type="checkbox" id="position" onChange={(e) => e.target.checked ? setPosition("left") : setPosition("top")} />
            Change label position to left
          </label>
        </div>
        <div className="control-container">
          <label htmlFor="cols">
            No. of columns
          </label>
          <input min="1" max="5" type="number" id="cols" value={columns} onChange={(e) => setColumns(Number(e.target.value))} />
        </div>
      </div>


      <NGrid
        heading="Assets"
        subHeading={"Confirm existing assets"}
        labelPosition={position}
        columns={columns}
        onClick={() => {
          console.log("Button handler");
        }}
        className="grid"
      >
        <InputElement label="Asset Type"></InputElement>
        <InputElement label="Value"></InputElement>
        <InputElement label="Owned By"></InputElement>
      </NGrid>
    </>
  );
}

export default App;
