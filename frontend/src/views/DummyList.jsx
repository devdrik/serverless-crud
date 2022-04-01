import React, { useState, useEffect } from "react";
import DummyElement from "../components/DummyElement";
import {
  findAllDummies,
  deleteDummy,
  updateDummy,
} from "../service/DummyService";

// function generateId() {
//   var ts = new Date().getTime(); // limit to recent
//   var randid = Math.floor(Math.random() * 512);
//   // ts = (ts * 64);   // bit-shift << 6
//   // ts = ts + shardId;
//   return "id:" + (ts * 512) + randid;
// }

// console.log(generateId())

const DummyList = () => {
  const [dummies, setDummies] = useState([]);

  const deleteDummi = (dummy) => {
    deleteDummy(dummy);
    setDummies(dummies.filter((d) => dummy.id !== d.id));
  };

  const updateDummi = (dummy) => {
    updateDummy(dummy);
    const newDummies = dummies.map((d) => {
      return d.id === dummy.id ? dummy : d;
    });
    console.log('newDummies :>> ', newDummies);
    setDummies(newDummies);
  };

  useEffect(() => {
    findAllDummies()
      .then((resp) => {
        console.log("resp", resp);
        setDummies(resp.data);
      })
      .catch((error) => console.log("error", error));
  }, [setDummies]);

  return (
    <div className="">
      {dummies.map((dummy) => (
        <DummyElement
          dummy={dummy}
          deleteCallback={deleteDummi}
          updateCallback={updateDummi}
          key={dummy.id}
        ></DummyElement>
      ))}
    </div>
  );
};

export default DummyList;
