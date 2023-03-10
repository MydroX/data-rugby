import React, { useState } from "react"
import { act } from "react-dom/test-utils"
import { Checkbox } from "semantic-ui-react"
import "../styles/PitchOptions.css"

export default function PitchOptions() {
  const [active, setActive] = useState<boolean>(false)

  function handleClick() {
    setActive(!active)
  }

  return (
      <ul className="pitch-options">
        <li>
          <p className="option-property-name">Touche direct</p>
          <Checkbox toggle onClick={handleClick}/>
        </li>
        <li>
          <p className="option-property-name">Touche indirect</p>
          <Checkbox toggle onClick={handleClick}/>
        </li>
        <li>
          <p className="option-property-name">Ballon mort (indirect)</p>
          <Checkbox toggle onClick={handleClick}/>
        </li>
      </ul>
    )
}