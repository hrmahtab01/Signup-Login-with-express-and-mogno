import React, { useState } from 'react'

const Login = () => {
  const [email, Setemail] = useState("");
  const [passeword, Setpassword] = useState("");


  const HandleLOgin =()=>{
    if (email && passeword) {
      console.log("Login successfully");
      
    }
  }
  return (
    <div className='w-full h-screen bg-red-500 blur-0 flex justify-center items-center '>
    <div className='w-[700px] py-5 bg-black rounded-md mx-auto ' >
     <div>
      <h1 className='text-white text-3xl font-bold font-sans text-center mt-2'> Login</h1>
      <div className='mt-4 flex justify-center flex-col gap-4'>
       
        <div className='px-2 flex flex-col gap-2'>
          <label className='text-white font-semibold font-sans text-2xl'>Email</label>
          <input value={email} onChange={(e)=>Setemail(e.target.value)} className='w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2' type="text" placeholder='Enter your email' />
        </div>
        <div className='px-2 flex flex-col gap-2'>
          <label className='text-white font-semibold font-sans text-2xl'>Password</label>
          <input value={passeword} onChange={(e)=>Setpassword(e.target.value)} className='w-[400px] h-[47px] border rounded-md border-teal-500 placeholder:text-lg placeholder:text-teal-500 placeholder:font-semibold placeholder:font-sans placeholder:px-2' type="text" placeholder='Enter your passeword' />
        </div>
      </div>
      <button onClick={HandleLOgin} className='py-3 px-16 bg-teal-500 text-lg text-white font-semibold font-sans flex justify-center items-center mx-auto rounded-md mt-5'>Login</button>
     </div>
    </div>
   
  </div>
  )
}

export default Login
