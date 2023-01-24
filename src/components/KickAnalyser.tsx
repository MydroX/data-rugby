import React, { useState } from "react";
import Pitch from './Pitch';
import PitchOptions from './PitchOptions';

import "../styles/KickAnalyser.css";

export default function KickAnalyser() {
    const [isBallOut, setIsBallOut] = useState(false);

    return (
      <div className="KickAnalyser">
        <PitchOptions />
        <Pitch />
      </div>
    );
  }