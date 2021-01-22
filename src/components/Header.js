import { useState } from 'react'
import Button from './Button'

const Header = ({ onClick }) => {

  const [changeColor, setChangeColor] = useState(true)

  return (
    <header className="header">
      <h1 className="title">Blogging App</h1>
      <Button onClick={() => {
          onClick()
          setChangeColor(!changeColor)
        }} 
        textContent={changeColor ? "Add" : "Close"} 
        style={{backgroundColor: changeColor ? "green" : "red"}} 
      />
    </header>
  )
}

export default Header
