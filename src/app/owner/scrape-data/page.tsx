"use client"

import { ScrapingQueue } from "@/components/admin/scraping-queue";
import { Button, Card, CardBody, CardFooter, Input, Listbox, ListboxItem, Tab, Tabs } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { ScrapingTable } from "./components/currently-scraping-table";


const ScapeData = () => {

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState<undefined | string>(undefined);
  const [jobs , setJobs] = useState([]);



  const handleSearch = async (searchInput: string) => {

    try {

      const response = await fetch(`http://api.geonames.org/searchJSON?q=${searchInput}&maxRows=5&username=siddh`)

      const data = await response.json();
      const result = data.geonames;
      setCities(result?.map((city: { toponymName: string }) => city.toponymName))

    } catch (error: any) {
      console.log(error.message);

    }
  }

  const handleScrape = async () => {

    try {

      const response = await fetch("/api/admin/create-job", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: `https://packages.yatra.com/holidays/intl/search.htm?&destination=${selectedCity}`,
          jobType: { type: "location" }
        }),
      });

    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {

    const getData = async () => {

      const res = await fetch('/api/admin/job-details');
      const data = await res.json();
      setJobs(data.jobs);
      console.log(data);
      
    }

    const interval = setInterval(() => getData(), 10000);

    return () => {
      clearInterval(interval);
    }
  }, [])



  return (
    <section className="m-6 grid grid-cols-3 gap-3">
      <Card className="col-span-2">
        <CardBody>
          <Tabs>
            <Tab key="location" title="location">
              <Input type="text" label=" Search for location..." onChange={(e) => handleSearch(e.target.value)} />
              <div className="w-full min-h-[200px] px-1 py-2 rounded-sm border border-default-400 mt-5">
                <Listbox aria-label="list" onAction={(key) => setSelectedCity(key as string)}>
                  {cities.map((city) => (
                    <ListboxItem key={city} color="primary" className="text-primary-500"> {city}
                    </ListboxItem>
                  ))}
                </Listbox>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
        <CardFooter className="flex flex-col justify-center items-center gap-3">
          {selectedCity && <h2 className="font-semibold">Scrape data for <span className="text-green-500">{selectedCity}</span></h2>}
          <Button size="lg" className="w-full bg-green-600 font-bold" onClick={handleScrape}>Scrape</Button>
        </CardFooter>
      </Card>
      <ScrapingQueue />

      <div className="col-span-3">
          <ScrapingTable jobs = {jobs}/>
      </div>
    </section>
  )
}

export default ScapeData