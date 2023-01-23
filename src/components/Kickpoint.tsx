import React from "react";
import "../styles/Kickpoint.css"

export default function KickPoint(props: {pageX: number, pageY: number}) {
  return (
    <div className="kickpoint" style={{left: props.pageX + -10, top: props.pageY + -10}}>
      <div className="border"></div>
      <div className="point"></div>
    </div>
  )
}