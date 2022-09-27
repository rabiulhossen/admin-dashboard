import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
import "react-circular-progressbar/dist/styles.css";
import Chart from 'react-apexcharts'
import sales from "../../resources/sales.png";

const Card = (props) => {
  const [expand, setExpand] = useState(false);

  
  return (
    <AnimateSharedLayout>
      {expand ? (
        "expand"
      ) : (
        <CompactCard
          param={props}
          setExpand={() => setExpand(true)}
        ></CompactCard>
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard
const CompactCard = (param, setExpand) => {
  const Png = param.parPng;
  console.log(Png);
  console.log(param.param.color.backGround, "uhfahkjfhdkih");
  console.log(param.param.title, "uifahjdhfkdhfdskjhfdsfhfdh");
  const data = {options:{
    chart :{
      type:'area',
      height:'auto',
    },
    fill:{
      color:'red',
      type:'gradient'
    }
    ,
    xaixs :{
      type:'datatime',
    }
  }}
  return (
    <div
      className="compactCard"
      style={{
        backgroundColor: `${param.param.color.backGround}`,
        boxShadow: param.param.boxShadow,
      }}
    >
      <div className="radicalBar">
        <UilTimes onClick={() => setExpand} />
      </div>
      <CircularProgressbar
        value={param.param.barValue}
        text={`${param.param.barValue}%`}
      ></CircularProgressbar>
      <div className="chartContainer">
<Chart
options={data.options}
series={param.param.series}
type='area'
/>

      </div>
      <div className="detailcard">
        <span>{param.param.title}</span>
        <span>${param.param.value}</span>
        <span>last 24 hour</span>
      </div>
    </div>
  );
};

function ExpandCard({param,setExpand}){
  return(
    <div className="ExpandCard" >
<div>
  <UilTimes/>
</div>
    </div>
  )
}

export default Card;
