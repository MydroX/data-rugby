// @ts-nocheck

import React, { useState } from "react";

import SVGComponent  from "../components/PitchSVG"
import "../styles/Pitch.css"
import Kickpoint from "./Kickpoint";

export default function Pitch() {
  const [points, setPoints] = useState([]);
 
  const addKickPointOnClick = ({pageX, pageY}) => {
    if (points.length < 2) {
      setPoints((points) => [...points, {x: pageX, y: pageY}]);
    }
    else {
      alert("you can't have more than 2 points on the pitch")
      //TODO: More stylish and user friendly alert
    }
  };

  return (
    <div id="pitch" onClick={addKickPointOnClick}>
      <div>
          {points.map((point) => (
            <Kickpoint pageX={point.x} pageY={point.y } />
          ))}    
      </div>
      <SVGComponent/>
  </div>    
  )
}