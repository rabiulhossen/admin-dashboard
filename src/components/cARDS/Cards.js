import React from "react";
import { cardData } from "../../Data/Data";
import Card from "../Card/Card";
import "./Cards.css";



const Cards = () => {
  return (
    <div className="cards">
   {cardData.map((card,id)=>{
    return(
      <div className="parentContainer">
       
       <Card 
       key={card.id}
       title={card.title}
        color={card.color}
        barValue={card.barValue}
        value={card.value}
        Png={card.png}
        series={card.series} />
      </div>

     
    )
   })}

    </div>
  );
};

export default Cards;
