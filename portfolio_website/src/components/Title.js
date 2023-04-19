import React from 'react'

const Title = (props) => {
  return (
    <>
    <div className='text-center pt-5'>
        <h1 className='text-primary'>{props.title}</h1>
        <p>{props.describe}</p>
    </div>
    
    
    
    </>
  )
}

export default Title