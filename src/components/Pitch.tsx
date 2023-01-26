import React, { useEffect, createRef, useState } from "react";
import Point from "../interface/Geometry";
import {SVGComponent }  from "../components/PitchSVG"
import Kickpoint from "./Kickpoint";
import "../styles/Pitch.css"

//TODO: add unique key to each point

export default function Pitch() {
  const svgRef = createRef<SVGSVGElement>();
  const [points, setPoints] = useState<Point[]>([]);
  // const [pitchCoordinates, setPitchCoordinates] = useState({pitchX: 0, pitchY: 0});  

  const addKickPointOnClick = ({clientX, clientY}: MouseEvent) => {
    if (points.length < 2) {
      setPoints((points) => [...points, {pointX: clientX, pointY: clientY}]);
    }
    else {
      alert("Vous ne pouvez pas avoir plus de point sur le terrain")
      //TODO: More stylish and user friendly alert
    }
  };
  
  const getPosition = () => {    
    if (svgRef.current) {
      console.log(svgRef.current.getBoundingClientRect())
    }
  };

  useEffect(() => {
    getPosition()
  }, [window.addEventListener("resize", getPosition)]);

  return (
    <div id="pitch">
      <div>
          {points.map((point) => (
            <Kickpoint pageX={point.pointX} pageY={point.pointY} />
          ))}    
      </div>
      <SVGComponent ref={svgRef} handleOnClick={addKickPointOnClick}/>;
  </div>
  )
}