import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

const Card = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <AnimateSharedLayout>
      {expand ? 'expand' : <CompactCard></CompactCard>}
    </AnimateSharedLayout>
  );
};

// CompactCard
const CompactCard = (param) => {
  const png = param.png;
  return (
    <div className="compactCard">
      <div className="radicalBar">chart</div>
      <div className="detailCard"></div>
      <png></png>
      <span>${param.value}</span>
      <span>last 24 hour</span>
    </div>
  );
};

export default Card;
