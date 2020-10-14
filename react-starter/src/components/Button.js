import React from "react"

export default ({ handleClick, label }) => {
    return <div onClick={handleClick}>
        <span>{label}</span>
    </div>

}