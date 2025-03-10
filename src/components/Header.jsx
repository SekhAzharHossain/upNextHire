import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

import {useState} from "react"


const Header = () => {

  const [showSignIn,setShowSignIn]=useState(false)

  const [search,setSearch]=useSearchParams();

  const {user}=useUser()

  useEffect(()=>{
    if(search.get('sign-in')){
      setShowSignIn(true)
    }
  },[search]);

  const handleOverlayClick=(e)=>{
    if(e.target === e.currentTarget){
      setShowSignIn(false);
    }
  }


  return <>
    <nav className=' mx-4 py-4 flex justify-between items-center'>
        <Link>
            <img src="/logo.png" alt="UpNextHire" className=' h-20'/>
        </Link>

        
      <div className=' flex items-center gap-4 justify-center'>
        <SignedOut>
        <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
            </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role ==="recruiter" && (<Link to="/postjob">
              <Button variant="destructive" className="rounded-2xl">Post a Job</Button>
            </Link>)}
          <UserButton
            appearance={{
              elements:{
                avatarBox:"w-15 h-15",
              }
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Jobs"
                href="/myjobs"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>

    </nav>

    {showSignIn && <div className='fixed inset-0 flex items-center justify-center bg-black z-1 bg-opacity-50' onClick={handleOverlayClick}>
      
      <SignIn signUpForceRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding"/>  
      
    </div>}
  </>
}

export default Header