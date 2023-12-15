import React from "react"


const Square = (props) => {
  const handleClick = () => {
    props.onClick()
  }

  let squareClass = "square"
  if (props.value === "X") {
    squareClass += " rotate"
  }

  return (
    <div className={squareClass} onClick={handleClick}>
      {props.value}
    </div>
  )
}

export default Square