

import puppeteer, { Browser } from "puppeteer";
import { PrismaClient } from "@prisma/client";
import { startLocationScraping } from "./scraping";


export const register = async() => {


      
     if(process.env.NEXT_RUNTIME === "nodejs"){
         
         const prisma = new PrismaClient();

         const {Worker} = await import("bullmq");
         const {connection } = await import("@/lib");
         
         const SBR_WS_ENDPOINT = 'wss://brd-customer-hl_b80ebe84-zone-journeyjot-country-in:vrcmdtw3wd8y@brd.superproxy.io:9222';
         
         console.log("server is already running");
         new Worker("jobsQueue" , async (job) => {
            let browser : undefined | Browser = undefined;
           
            try {
               
               browser = await puppeteer.connect({
                  browserWSEndpoint : SBR_WS_ENDPOINT,
               })
               const page = await browser.newPage();

               if(job.data.jobType === "location"){

                  await page.goto(job.data.url);
                  console.log(job);
                  
                  const packages = await startLocationScraping(page);
               }
               
            } catch (error : any) {
               console.log(error.message);
               await prisma.jobs.update({
                  where :{
                     id : job.data.id
                  },
                  data : {
                     isCompleted : true,
                     status : "failed"
                  }
               })
               
            }finally { 
               await browser?.close();
               console.log("browser closed");
            }
            
         } , {
            connection,
            concurrency : 10,
            removeOnComplete : {count : 1000},
            removeOnFail : {count : 5000}
         });
         
     }
}