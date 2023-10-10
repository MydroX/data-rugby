import React, { useEffect, createRef, useState } from "react";
import {SVGComponent }  from "../components/PitchSVG"
import Kickpoint from "./Kickpoint";
import "../styles/Pitch.css"

//Bug: The first click doesn't have the right conversion (px to m) 
//but the second is correct after conversion

//TODO: add unique key to each point

type Point = {
  pointX: number;
  pointY: number;
  pointXMeters: number;
  pointYMeters: number;
}

const offsetXpx = 138;
const offsetXm = 19.07;

const pitchWidthPX = 1000;
const pitchWidthM = 138.2;

export default function Pitch() {
  
  const svgRef = createRef<SVGSVGElement>();
  //TODO: Fix the position of the points when you resize
  const [points, setPoints] = useState<Point[]>([]);
  const [pitchOriginCoordinates, setPitchOriginCoordinates] = useState<Point>();  
  
  const addKickPointOnClick = ({clientX, clientY}: MouseEvent) => {
    if (points.length < 2) {
      getPitchPosition()
      getPitchPosition()
      setPoints((points) => [...points, {pointX: clientX, pointY: clientY, pointXMeters: (clientX * pitchWidthM) / pitchWidthPX, pointYMeters: (clientY * pitchWidthM) / pitchWidthPX}]);
      if (pitchOriginCoordinates !== undefined) {
        // TODO: send kick
        console.log("x: ", clientX)
        console.log("en metre : ", Math.round(((clientX - pitchOriginCoordinates.pointX - offsetXpx) * pitchWidthM) / pitchWidthPX))
      }
    }
    else {
      alert("Vous ne pouvez pas avoir plus de point sur le terrain")
      //TODO: More stylish and user friendly alert
    }
  };
  
  const getPitchPosition = () => {
    if (svgRef.current){
      let originPitch = svgRef.current.getBoundingClientRect()
      if (originPitch != null) {
        setPitchOriginCoordinates({pointX: (originPitch.left), pointY: (originPitch.top), pointXMeters: 0, pointYMeters: 0});
      }
    }
  };

  useEffect(() => {
    getPitchPosition()
  }, [window.addEventListener("resize", getPitchPosition)]);

  return (
    <div id="pitch">
      <div>
          {points.map((point) => (
            <Kickpoint pageX={point.pointX} pageY={point.pointY} />
          ))}    
      </div>
      <SVGComponent ref={svgRef} handleOnClick={addKickPointOnClick}/>
  </div>
  )
}