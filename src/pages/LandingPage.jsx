import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import companies from "../data/companies"

import Autoplay from "embla-carousel-autoplay"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const LandingPage = () => {
  return <main className=' flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
    <section className=' text-center'>
      <h1 className=' text-2xl sm:text-3xl lg:text-4xl flex flex-col items-center justify-center font-bold tracking-tighter'>UpNextHire – Where Talent Meets Opportunity!</h1>
      <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore Endless Careers. Recruit Top Talent</p>
    </section>

    <div className=' flex gap-6 justify-center items-center'>
      <Link to="/jobsPage">
        <Button variant="blue" size="xl">Find Jobs</Button>
      </Link>
      <Link to="/postjob">
        <Button variant="destructive" size="xl">Post a Job</Button>
      </Link>
    </div>
      
    <Carousel className="w-full  py-10" plugins={[
      Autoplay({delay:2000})
    ]}>
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({name,id,path})=>{
          return (
            <CarouselItem key={id} className=" basis-1/3 sm:basis-1/6">
              <img className='h-9 sm:h-14' src={path} alt={name} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
    

    {/* banner */}
    <div className=' flex justify-center items-center '>
      <img className=' w-5/6 rounded-2xl opacity-50' src='/banner.png' alt='banner'/>
    </div>

  
    <div className='w-full flex justify-center items-center'>
      <section className=' flex w-5/6 justify-between items-center'>
        {/* card */}
        <Card >
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
            <CardDescription>Search and apply for jobs, track applications, and more.</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
            <CardDescription>Post jobs, applications, and find the best candidates</CardDescription>
          </CardHeader>

        </Card>

      </section>
    </div>


    {/* accordion */}

  </main>
}

export default LandingPage