import { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="menu_open" onClick={handleClick}>
        <img src="/icon_menu_open.svg" alt="open menu" />
      </div>
      <div className={`menu ${open ? "open" : ""}`}>
        <img className="menu_close" src="/icon_menu_close.svg" alt="close menu" onClick={handleClick} />
        <div className="page_title">React Three Playground</div>
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/e_1" onClick={handleClick}>Exp 1 - Basic ineraction</Link>
          </li>
          <li>
            <Link to="/e_2" onClick={handleClick}>Exp 2 - Adding Text</Link>
          </li>
          <li>
            <Link to="/e_4" onClick={handleClick}>Exp 3 - Geometry</Link>
          </li>
          <li>
            <Link to="/e_5" onClick={handleClick}>Exp 5 - SkyBox ( CubeTextureLoader )</Link>
          </li>
          <li>
            <Link to="/e_6" onClick={handleClick}>Exp 6 - Basic Materials</Link>
          </li>
          <li>
            <Link to="/e_7" onClick={handleClick}>Exp 7 - Depth Materials</Link>
          </li>
          <li>
            <Link to="/e_8" onClick={handleClick}>Exp 8 - Distortions</Link>
          </li>
          <li>
            <Link to="/e_7" onClick={handleClick}>Exp 8 - Post processing</Link>
          </li>
          <li>
            <Link to="/e_8" onClick={handleClick}>Exp 9 - Animations</Link>
          </li>
        </ul> 
      </div>
    </>
  )
}

export default Menu
