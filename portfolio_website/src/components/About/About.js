import React, { useContext } from 'react'
import Title from '../Title'
import './About.css'
import { sender } from '../../Store'

const About = () => {
  let{mode,setMode}=useContext(sender)

  let data=[
    {
      id:1,
      title:"Name",
      info:"Suman khalkho",
      colour:"primary"
    },
    {
      id:2,
      title:"Email",
      info:"sumankhalkho1499@gmail.com",
      colour:"warning"
    },
    {
      id:3,
      title:"DOB",
      info:"1/4/199",
      colour:"danger"
    },
    {
      id:4,
      title:"from",
      info:"ballarpur",
      colour:"success"
    },

   
  ]
  return (
    <>
    <div className={`container-fluid bg-${mode?"dark":"light"}`} id="About">
        <Title title="About me " describe="know me more"/>
        <div className="row About  align-text-center">
            <div className="col-md-4 about_img">
                <img src=" images/about/full_stack_banner.jpg"  width="100%" height="250px"alt=""/>
              
            </div>
            <div className={`col-md-8 text-${mode?"light":"dark"}`}>
                <h1>Lorem, ipsum dolor.</h1>
                <h4>Lorem, ipsum.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero rem praesentium sed, minima sequi perspiciatis! Nisi sunt natus animi autem recusandae impedit! Aperiam aliquid quia rem nulla quod asperiores amet deserunt id, dolores facilis, ex, eos facere laudantium iusto dignissimos vero sapiente dolore doloribus ipsa esse enim harum? Voluptate?</p>

            </div>
        </div>
        <div className="row">
          {
            data.map((e)=>{
              return(
                <div className="col-md-6 col-xl-3 mt-5 " key={e.id} >
                  <div className={`card bg-${e.colour} mb-3`} >
                       <div className="card-header">{e.title}</div>
                            <div className="card-body">
                              <h5 className="card-title">{e.info}</h5>
                                
                                 </div>
                             </div>           

                </div>
              )
            })
          }
        </div>
    </div>
    
    </>
  )
}

export default About