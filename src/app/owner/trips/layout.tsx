import React from "react"
import {Sidebar} from "../../../components/admin"

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <section className="flex bg-gray-200 ">
        <Sidebar/>
        <section className="flex flex-1 flex-col">
            <div className="h-40 bg-black text-white flex flex-col gap-3">
                <h1>ScrapeDatw</h1>
                <p>this is dashboard</p>
            </div>
            {children}
        </section>
    </section>
  )
}

export default layout