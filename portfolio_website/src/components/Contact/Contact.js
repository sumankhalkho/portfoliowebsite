import React, { useEffect } from 'react'
import'./Contact.css'
import Title from '../Title'
import Form from './Form'


const Contact = () => {

  return (
    <>
    <div className="container-fluid" id="Contact">
      <Title title="Contact" describe="Get in touch"/>
      <div className="row">
        <div className="col-md-6">
          <h1>Lorem, ipsum.</h1>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto molestiae magni veniam, enim excepturi totam nesciunt similique possimus. Temporibus, necessitatibus!</h5>
          <h3>living in</h3>
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          <h3>call :</h3>
          <h5>652369563</h5>
        </div>
        <div className="col-md-6">
          <Form/>
        </div>
      </div>

    </div>

    </>
  )
}

export default Contact