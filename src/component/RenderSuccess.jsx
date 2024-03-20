import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FinalRender from "./FinalRender";

const RenderSuccess = () => {
  const [dataJ, setDataJ] = useState([]);
  const [resPost, setResPost] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleFileChange = (e) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad1;
    reader.readAsText(e.target.files[0]);
    console.log(e.target.files);
    //         setDataJ(e.target.files);

    // const read = e.target.files[0];
  };

  console.log(dataJ);
  function onReaderLoad1(event) {
    var obj = JSON.parse(event.target.result);
    // var obj = JSON.parse(event.target.result);
    setDataJ(obj);
  }
  console.log("sourbh", dataJ);
  const handleClick = () => {
    axios
      .post("http://localhost:8080/transformerr", dataJ)
      .then((res) => setResPost(res.data));
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div className="page_success">
        <div className="page_success_first">
          <input
            type="file"
            className="inputField"
            placeholder="select input file"
            onChange={handleFileChange}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        {modalOpen && (
          <div className="page_success_second">
            <FinalRender resPost={resPost} />
          </div>
        )}
      </div>
    </>
  );
};

export default RenderSuccess;
