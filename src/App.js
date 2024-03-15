import { useState } from "react";
import "./App.css";
import RenderFirst from "./component/RenderFirst";

function App() {
  const [targetData, setTargetData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [inputData, setinputData] = useState([]);
  console.log("inputData", inputData);

  const handleFileChange = (e) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad1;
    reader.readAsText(e.target.files[0]);
    setToggle(false);
    // console.log(e.target.files);
    // const read = e.target.files[0];
  };
  function onReaderLoad1(event) {
    setinputData(JSON.parse(event.target.result));
    // var obj = JSON.parse(event.target.result);
  }
  const handleTarget = (e) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
    // console.log(e.target.files);
    // const read = e.target.files[0];
    setToggle(true);
  };
  function onReaderLoad(event) {
    // setinputData(JSON.parse(event.target.result));
    setTargetData(JSON.parse(event.target.result));
    // var obj = JSON.parse(event.target.result);
  }

  return (
    <div className="App">
      {!toggle && (
        <div className="inputComponent">
          <div className="">
            <input
              type="file"
              className="inputField"
              placeholder="select input file"
              onChange={handleFileChange}
            />
          </div>
          <div className="">
            <input
              type="file"
              className="inputField"
              placeholder="select target file"
              onChange={handleTarget}
            />
          </div>
        </div>
      )}
      {toggle && (
        <div className="first_page">
          <RenderFirst inputData={inputData} targetData={targetData} />
        </div>
      )}
    </div>
  );
}

export default App;
