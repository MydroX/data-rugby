// @ts-nocheck

import React, { useState } from "react";

import SVGComponent  from "../components/PitchSVG"
import "../styles/Pitch.css"
import Kickpoint from "./Kickpoint";

export default function Pitch() {
  const [points, setPoints] = useState([]);

  const addKickPointOnClick = ({pageX, pageY}) => {
    setPoints((points) => [...points, {x: pageX, y: pageY}]);
  };

  return (
    <div id="pitch" onClick={addKickPointOnClick}>
      <div>
          {points.map((point) => (
            <Kickpoint pageX={point.x} pageY={point.y } />
          ))}    
      </div>
      <div id="pitch-background">
        <SVGComponent/>
      </div> 
  </div>    
  )
}