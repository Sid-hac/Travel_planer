import React from "react"
import { Sidebar } from "../../../components/admin"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex bg-gray-100 ">
      <Sidebar />
      <section className="flex flex-1 flex-col">
        <div className="h-40 bg-slate-900 text-white flex flex-col justify-center gap-3">
          <h1 className=" text-3xl font-bold mx-4 mt-4 text-green-500">Scrape Data</h1>
          <p className="text-white text-md font-semibold mx-4">The Scraping Engine Powered by Bright Data</p>
        </div>
        {children}
      </section>
    </section>
  )
}

export default layout