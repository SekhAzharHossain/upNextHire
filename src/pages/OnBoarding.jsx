import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {

  const {user,isLoaded}=useUser();
  // const isLoaded=useUser();
  console.log(user)
  const navigate=useNavigate();

  // if(!isLoaded){
  //   return <BarLoader classname=""/>
  // }

  const handleRoleSelection=async(role)=>{
    await user
    .update({
      unsafeMetadata:{role},
    }).then(()=>{
      navigate(role=== "recruiter"?"/postjob":"/jobspage")
    }).catch((err)=>{
      console.error("Error updating role:",err);
    })
  }

  useEffect(()=>{
    if(user.unsafeMetadata.role){
      navigate(
        user.unsafeMetadata.role==="recruiter"?"/postjob":"jobspage"
      )
    }
  },[user])

  return (
    <div className=' flex flex-col items-center justify-center mt-24'>
      <h2 className=' gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>
        You are a...
      </h2>
      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40'>
        <Button variant='blue' className='h-28 w-m text-4xl' onClick={()=>handleRoleSelection("candidate")}>Candidate</Button>
        <Button variant='destructive' className='h-28 w-m text-4xl' onClick={()=>handleRoleSelection("recruiter")} >Recruiter</Button>
      </div>
    </div>
  )
}

export default OnBoarding