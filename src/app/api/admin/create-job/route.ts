import { jobsQueue } from "@/lib";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


  const Prisma  = new PrismaClient();

  export const POST = async(request : Request) => {
       
      const {url , jobType} = await request.json();

      try {

        const job = await Prisma.jobs.create({
         
            data : {
               url,
               jobType
            }
        });

        await jobsQueue.add("new job" , {url , jobType , id:job.id});

        return NextResponse.json({
            jobCreated : true
        }, {status: 200});
  
      } catch (error:any) {
        
        console.log(error.message);
        
      }

  }