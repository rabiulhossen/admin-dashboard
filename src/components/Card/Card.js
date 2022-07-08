import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import sales from '../../resources/sales.png'

const Card = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <AnimateSharedLayout>
      {expand ?'expand' : <CompactCard param={props} setExpand={()=>setExpand(true)} ></CompactCard>}
    </AnimateSharedLayout>
  );
};

// CompactCard
const CompactCard = (param ,setExpand) => {

  const Png = param.parPng;
  console.log(Png);
 
  return (
    <div className="compactCard" onClick={setExpand}>
      <div className="radicalBar">chart</div>
      <CircularProgressbar
   value={param.param.barValue}
        text={`${param.param.barValue}%`}
      ></CircularProgressbar>
      <div className="detailcard"></div>
   
      <span>${param.value}</span>
      <span>last 24 hour</span>
    </div>
  );
};

export default Card;
