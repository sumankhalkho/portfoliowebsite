import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  let{register,handleSubmit,formState:{errors},reset}=useForm()
  let getData=(data)=>{
    console.log(data);
    axios.post("https://portfolio-396df-default-rtdb.firebaseio.com/contact.json/",data)
    reset()
  }
  return (
    <>
    <form  action="" onSubmit={handleSubmit(getData)} >
            <input type="text" {...register("Name",{required:"plz enter name !"})}className='form-control border-0 border-bottom rounded-0 border-danger'style={{background:'none'}} placeholder='enter name '/>
            <p className='text-danger'>{errors.Name?.message}</p>
            <input type="email" {...register("Email",{required:"plz enter email !"})}className='form-control border-0 border-bottom rounded-0 border-danger'style={{background:'none'}} placeholder='enter email '/>
            <  p className='text-danger'>{errors.Email?.message}</p>
            <input type='number'{...register("Phone",{required:"plz enter number!",minLength:{value:10,message:"mini 10 digits required!"},maxLength:{value:10,message:"max 10 digits required!"}})}className='form-control border-0 border-bottom rounded-0 border-danger'style={{background:'none'}} placeholder='enter number '/>
            <p className='text-danger'>{errors.Phone?.message}</p>
            <input type="submit"/>
          </form>
    
    
          
    
    
    
    </>
  )
}

export default Form