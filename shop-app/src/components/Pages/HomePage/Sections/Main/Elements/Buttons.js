import React from 'react'
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="buttons">
    <Link to="#main-sl-1" className="main-btn primary-btn">
      Перейти к товару
    </Link>
    <Link to="#main-sl-2" className="main-btn border-btn">
      Женские
    </Link>
  </div>
  )
}

export default Buttons
