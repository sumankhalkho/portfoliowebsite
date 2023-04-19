import React, { useContext } from 'react'
import { sender } from '../../Store'
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";

const Navebar = () => {

  let {mode,setMode}=useContext(sender)
  return (
    <><nav className={`navbar fixed-top navbar-expand-lg bg-${mode ?"dark":"light"}`}>
    <div className="container-fluid">
      <a className={`nav-link text-${mode?"light":"dark"}`} href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link text-${mode?"light":"dark"}`} aria-current="page" href="#Home">Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${mode?"light":"dark"}`} href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${mode?"light":"dark"}`} href="#Skills">skills</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${mode?"light":"dark"}`}href="#Contact">contact</a>
          </li>
            
          
        </ul>
        <div className="d-flex" role="search">
          <button className={`bg-${mode?"dark":"light"} border-0`} onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill className='text-warning'/>:<BsFillMoonStarsFill className='text-dark'/>}</button>
        </div>
      </div>
    </div>

  </nav>

    </>
  )
}

export default Navebar