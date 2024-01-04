import React from 'react'

const Button = (props) => {

    const handleClick=()=>{
        if(props.onClick){
            props.onClick(props.btnName)
        }
    }
    const btnStyle={
        border: '2px solid black',
        borderRadius: '5px',
        padding: '20px',
        fontSize : '20px',
        cursor:'pointer',
        width: '80px'
    }
  return (
    <button style={btnStyle} value={props.btnName} onClick={handleClick}>{props.btnName}</button>
  )
}

export default Button