
import { Page } from "puppeteer";

interface packageInfo {
    id : string | null,
    name : string
};

export const startLocationScraping = async(page : Page ):Promise<packageInfo[]> => {
   
    return await page.evaluate(()=> {

        const packageElements = document.querySelectorAll('.packages-container');
        const packages:packageInfo[] = [];
        packageElements.forEach(packageElement =>{
            const packageInfo : packageInfo = {
                id : null,
                name : ""
            }
            packageInfo.name = (packageElement.querySelector(".package-name a") as HTMLElement).textContent || "";
        })

        return packages;

    })


}

