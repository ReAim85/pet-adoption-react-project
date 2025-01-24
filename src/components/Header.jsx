import React from 'react'

const style = {
  backgroundColor: "rgb(255, 232, 182, 0.7)",
  padding: 15

}

const Header = ({ message }) => {
  return (
    <h2 style={style}>{message}</h2>
  )
}

export default Header