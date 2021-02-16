import { useState } from 'react'
import parse from 'html-react-parser'

function Info({data}) {
  
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="info_open" onClick={handleClick}>
        <img src="/icon_exp_info.svg" alt="open experiment info" />
      </div>
      <div className={`info ${open ? "open" : ""}`}>
        <img className="info_close" src="/icon_menu_close.svg" alt="close experiment info" onClick={handleClick} />
        <h1>{data.title}</h1>
        <>{parse(data.description)}</>
      </div>
    </>
  )
}

export default Info
