import React, { useEffect, useState } from "react";
import style from "../App.css";
import fs from "fs";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
const RenderSecond = ({ checkAr, checkArray }) => {
  const [demoObject, setDemoObject] = useState([]);

  // console.log("sourabhpatole", checkArray);
  // console.log("patole", checkAr);
  const convertToObj = (a, b) => {
    if (a.length != b.length || a.length == 0 || b.length == 0) {
      return null;
    }
    let obj = {};

    // Using the foreach method
    a.forEach((k, i) => {
      obj[k] = b[i];
    });
    return obj;
  };
  let data = convertToObj(checkArray, checkAr);
  let newData = JSON.stringify(data);
  console.log(newData);
  useEffect(() => {
    exportData();
  }, []);
  const exportData = async () => {
    await axios
      .post("http://localhost:5000/", newData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
      })
      .then((response) => console.log(response.data));
  };
  // console.log("ObjectData", sampleData);
  // const exportData = () => {
  //   const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
  //     JSON.stringify(data)
  //   )}`;
  //   const link = document.createElement("a");
  //   link.href = jsonString;
  //   link.download = "data.json";

  //   link.click();
  // };
  // console.log("DJWale", convertToObj(checkArray, checkAr));
  return (
    <div>
      {/* <p>
        <span>
          {checkArray?.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
        </span>
        :
        <span>
          {checkAr?.map((m, index) => (
            <span key={index}>{m}</span>
          ))}
        </span>
      </p> */}
      <Table striped bordered hover>
        <>
          {/* <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {checkArray.map((e, index) => (
              <tr key={index}>
                <td>{e}</td>
                <td key={index}>{checkAr[index]}</td>
              </tr>
            ))}
          </tbody> */}
        </>

        {/* <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead> */}
        {/* {demoObject &&
          Object.entries(demoObject).map(([key, value]) => {
            console.log(`${key} ${value}`);
            <tbody>
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            </tbody>;
          })} */}
      </Table>
      <Link to="/response">
        <button type="button" onClick={exportData}>
          Export Data
        </button>
      </Link>
    </div>
  );
};

export default RenderSecond;
