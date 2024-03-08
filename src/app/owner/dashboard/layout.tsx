import React from "react"
import {Sidebar} from "../../../components/admin"

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <section className="flex  bg-gray-100 ">
        <Sidebar />
        <section className="flex flex-1 flex-col">
            <div className="h-40 bg-black flex flex-col gap-3">
                <h1 className="text-white font-bold mx-2 my-2">Dashboard</h1>
                <p className="text-white text-sm font-mono">this is dashboard</p>
            </div>
            {children}
        </section>
    </section>
  )
}

export default layout