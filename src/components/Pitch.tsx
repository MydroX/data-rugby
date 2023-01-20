import React from "react";

import SVGComponent  from "../components/PitchSVG"
import "../styles/Pitch.css"

export class Pitch extends React.Component {
  render() {
    return (
      <div id="pitch">
        <div></div>
        <div id="pitch-background">
          <SVGComponent />
        </div>
      </div>
    )
  }
} 