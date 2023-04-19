import React, { useContext } from 'react'
import'./home.css'
import { sender } from '../../Store'

const Home = () => {

   let {mode,setMode}=useContext(sender)
  return (
    <>
    <div className={`container-fluid bg-${mode?"dark":"light"}`} id="Home">
        <div className="row Home align-items-center">
            <div className={`col-md-6  text-${mode?"light":"dark"} text-center`}>
                <h1 className=' pt-5 pt-md-0'> I'm a developer</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-4 home_img">
                  <img src="images/home/b0b84cf794860e3a2253ea4ffcb5a6f1.jpg"alt=""width="100%" height="450px"/>
                </div>
                

            </div>
        </div>
    
    
    
    </>
  )
}

export default Home