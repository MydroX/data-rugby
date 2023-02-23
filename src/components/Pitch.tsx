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
}

type PointInMeters = {
  x: number;
  y: number;
}


export default function Pitch() {
  const widthPitchInMeters: number = 138.2;
  const widthPitchInPixels: number = 1416.3125;
  
  let scale: number = 10; // In 1080p, 10px is equal to 1m
  let scalePx: number = 1;
  let offsetLeft: number = 196;
  let offsetTop: number = 30;
  
  const svgRef = createRef<SVGSVGElement>();
  //TODO: Fix the position of the points when you resize
  const [points, setPoints] = useState<Point[]>([]);
  const [pitchOriginCoordinates, setPitchOriginCoordinates] = useState<Point>();  
  
  const addKickPointOnClick = ({clientX, clientY}: MouseEvent) => {
    console.log("Creating point...")
    if (points.length < 2) {
      getPitchPosition()
      getPitchPosition()
      setPoints((points) => [...points, {pointX: clientX, pointY: clientY}]);
      if (pitchOriginCoordinates !== undefined) {
        // TODO: send kick
        console.log("pitch x: ", pitchOriginCoordinates.pointX)
        console.log("x: ", Math.round((clientX - pitchOriginCoordinates.pointX)/scale))
        // console.log("y: ", Math.round((clientY - pitchOriginCoordinates.pointY)/scale))
      }
    }
    else {
      alert("Vous ne pouvez pas avoir plus de point sur le terrain")
      //TODO: More stylish and user friendly alert
    }
  };
  
  const getPitchPosition = () => {
    console.log("get position pitch...")
    if (svgRef.current){
      let originPitch = svgRef.current.getBoundingClientRect()
      console.log("bounding rect : ", originPitch)

      scale = originPitch.width / widthPitchInMeters;
      scalePx = widthPitchInPixels / originPitch.width;

      offsetLeft = offsetLeft / scalePx;
      offsetTop = offsetTop / scalePx;

      if (originPitch != null) {
        // console.log("pitch left: ",originPitch.left,"pitch offset: ", offsetLeft);
        // console.log("top: ", originPitch.top, offsetTop);

        setPitchOriginCoordinates({pointX: (originPitch.left + offsetLeft), pointY: (originPitch.top + offsetTop)});
        console.log("pitch x: ", pitchOriginCoordinates?.pointX)
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