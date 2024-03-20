import React, { useEffect, useState } from "react";
// import DemoJson from "./example1.json";
import RenderSecond from "./RenderSecond";
import style from "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RenderFirst from "./RenderFirst";

const RenderMiddle = ({ checkArray, isOpen, setIsOpen, targetData }) => {
  const [show, setShow] = useState(true);
  const [inputField, setInputField] = useState([]);
  console.log("target", typeof targetData);
  console.log("tree", isOpen);
  const handleInput = (e) => {
    // console.log(e.target.value);
    setInputField(e.target.value);
  };
  console.log(inputField);
  const handleClose = () => {
    setIsOpen(false);
    // setShow(false);
  };
  console.log("handleClose", isOpen);
  // const handleShow = () => setShow(true);
  const space = 1;

  const [cheArray, setCheArray] = useState([]);
  // const [cheVal, setCheVal] = useState([]);
  const [selected, setSelected] = useState(false);

  console.log();
  const displayMiddle = (data, space, ch = null, arrPos = null) => {
    const handleChange = (e) => {
      const checked = e.target.checked;
      // console.log(e.target.name);
      // console.log(ch);
      setCheArray((prev) =>
        checked
          ? [...prev.concat(e.target.name)]
          : [...prev.filter((df) => df !== e.target.name)]
      );
      setSelected(!selected);
    };

    // console.log("ch", ch);
    // eslint-disable-next-line array-callback-return
    return Object.entries(data).map(([index, value], j) => {
      // console.log(index);
      // console.log("j", j, "name", index);
      // console.log("newval", newValue);
      // console.log(typeof newValue);
      // console.log(typeof index);

      // console.log(cheArray);

      // if (typeof value === "object") {
      if (Array.isArray(index)) {
        // console.log("Dj", index);
        return (
          <div style={{ paddingLeft: `${space * 10}px` }} key={index}>
            <label htmlFor="">
              <input
                type="checkbox"
                value={value}
                name={ch === null ? index : ch.concat("." + index)}
                // checked={jdata.includes(JSON.stringify(value)) ? "checked" : ""}
                onChange={handleChange}
                // checked={
                //   cheArray.find((element) =>
                //     element.includes(
                //       ch === null ? index : ch.concat(":" + index)
                //     )
                //   )
                //     ? "checked"
                //     : ""
                // }
                // checked={selected}
              />
            </label>
            <span>{index}</span>
            <div>
              {value.map((e, i) =>
                displayMiddle(
                  typeof e === "string" ? { [i]: e } : e,
                  space + 1,
                  ch === null ? index : ch.concat("." + index),
                  i
                )
              )}
            </div>
          </div>
        );
      } else if (typeof value === "object") {
        // console.log("Patole", index);
        return (
          <div
            key={index}
            style={{ display: "block", paddingLeft: `${space * 10}px` }}
          >
            <label htmlFor="">
              <input
                type="checkbox"
                // checked={jdata.includes(JSON.stringify(value)) ? "checked" : ""}
                // checked={
                //   cheArray.includes(JSON.stringify(value)) ? "checked" : ""
                // }
                checked={
                  cheArray.find((element) =>
                    element.includes(
                      ch === null ? index : ch.concat("." + index)
                    )
                  )
                    ? "checked"
                    : ""
                }
                // checked={selected}
                name={ch === null ? index : ch.concat("." + index)}
                value={JSON.stringify(Object.keys(data))}
                onChange={handleChange}
              />
            </label>
            <span>{index}</span>
            <div className="">
              {displayMiddle(
                value,
                space + 1,
                ch === null ? index : ch.concat("." + index)
              )}
            </div>
          </div>
        );
      } else {
        // console.log("sourabhpatole", cheArray);
        return (
          <div
            className="sourabh"
            style={{ paddingLeft: `${space * 5}px` }}
            key={index}
          >
            <label htmlFor="">
              <input
                type="checkbox"
                value={JSON.stringify(Object.keys(data))}
                // checked={jdata.includes(JSON.stringify(index)) ? "checked" : ""}
                checked={
                  cheArray.find((element) =>
                    element.includes(
                      // ch === null ? arrPos : ch.concat(":" + index)
                      ch === null ? index : ch.concat("." + index)
                    )
                  )
                    ? "checked"
                    : ""
                }
                // checked={selected}
                // style={{ paddingLeft: `${space * 10}px` }}
                className="sourabh"
                onChange={handleChange}
                // name={ch === null ? arrPos : ch.concat(":" + index)}
                name={ch === null ? index : ch.concat("." + index)}
              />
            </label>
            <span>
              {/* {index} :{value} */}
              {/* {console.log("intellignet", index)} */}
              {index}
            </span>
          </div>
        );
      }
    });
  };
  return (
    // <div className="middle_page">
    <div className="render-middle">
      {/* {displayMiddle(DemoJson, space)}{" "} */}
      {isOpen && (
        <>
          <Modal
            show={show}
            onHide={() => setShow(true)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              {/* <input
                type="text"
                placeholder="Enter the Values"
                onChange={handleInput}
              /> */}
              {displayMiddle(targetData, space)}{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Okey
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

      {/* </div> */}
      <div className={`render_second_${style.render_last}`}>
        <RenderSecond checkAr={cheArray} checkArray={checkArray} />
      </div>
    </div>
  );
};

export default RenderMiddle;
