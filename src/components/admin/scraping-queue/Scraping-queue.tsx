"use client"

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const ScrapingQueue = () => {

  const [onGoingJobs, setOnGoingJobs] = useState(0);

  useEffect(() => {

    const getData = async () => {

      const res = await fetch('/api/admin/job-details');
      const data = await res.json();
      setOnGoingJobs(data.onGoingJobs);
      console.log(data);
      
    }

    const interval = setInterval(() => getData(), 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  const onGoingJobsColor = () => {
    if (onGoingJobs <= 5) {
      return "bg-green-500"
    }
    else if (onGoingJobs <= 10) {
      return "bg-orange-500"
    } else {
      return "bg-red-500"
    }
  }
  const onGoingTextColor = () => {
    if (onGoingJobs <= 5) {
      return "text-green-500"
    }
    else if (onGoingJobs <= 10) {
      return "text-orange-500"
    } else {
      return "text-red-500"
    }
  }

  return (
    <Card className='h-full '>
      <CardHeader className='text-2xl font-semibold ' >
        current Queue
      </CardHeader>
      <CardBody className='flex items-center justify-center '>
        <div className={`w-52 h-52  rounded-full flex items-center justify-center  ${onGoingJobsColor()} `}>
          <div className={`w-44 h-44  rounded-full bg-white  flex items-center justify-center }`}>
            <h4 className={`text-6xl font-bold ${onGoingTextColor()}`}>
              {onGoingJobs}
            </h4>
          </div>
        </div>

      </CardBody>
    </Card>

  )
}

export default ScrapingQueue