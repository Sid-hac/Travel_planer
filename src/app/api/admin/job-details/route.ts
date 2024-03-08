import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

   const Prisma = new PrismaClient();

export const GET = async () => {
     
   try {

    const jobs = await Prisma.jobs.findMany({
        orderBy:{
            createdAt: "desc"
        }
    });

    const onGoingJobs = await Prisma.jobs.findMany({
        where:{
            isCompleted : false
        }
    });

    return NextResponse.json({
        jobs: jobs,
        onGoingJobs: onGoingJobs?.length ?? 0
    }, {status: 200})

    
   } catch (error) {
    return NextResponse.json({
        message:"unexpected error occured",  
    } , {status: 500})
     
   }    
}