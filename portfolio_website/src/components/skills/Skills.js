import React, { useContext, useEffect } from 'react'
import'./Skill.css'
import Title from '../Title'
import { sender } from '../../Store'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Skills = () => {
  useEffect(()=>{
    AOS.init()

  },[])

   let {mode,setMode}=useContext(sender)
  let data=[
    {
      id:1,
      size:"50%",
      title:"HTML"
    },
    {
      id:2,
      size:"55%",
      title:"CSS"
    },
    {
      id:3,
      size:"65%",
      title:"Bootstrap"
    },
    {
      id:4,
      size:"60%",
      title:"Javascript"
    },
    {
      id:5,
      size:"70%",
      title:"React"
    },
  ]
  return (
    <>
    <div className={`container-fluid bg-${mode?"dark":"light"}`} id="Skills">
        <Title title="skills"describe="know my skill"/>
        <div className="row Skill align-items-center">
            <div className={`col-md-6 text-${mode?"light":"dark"}`}>
                {
                  data.map((e)=>{
                    return(
                      <div key={e.id} className='mb-5'>
                        <h6>{e.title}</h6>
                      <div className="progress">
                   <div  data-aos="fade-right" className="progress-bar"  role="progressbar" aria-label="Example Withlabel"style={{width: e.size}} aria-valuenow="25" aria-valuemin="0"aria-valuemax="100">{e.size}</div>
                 </div>
                 </div>
                    )
                  })
                }

            </div>
            <div className="col-md-6 skills_img" >
              <img src="images/skills/1_g_FZu2_GXpjsS38854eFcA.jpg" width="100%" height="350px"alt=""/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Skills