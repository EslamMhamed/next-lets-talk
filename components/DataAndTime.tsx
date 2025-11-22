'use client'

import { useEffect, useState } from "react"

function DataAndTime() {
    const [time , setTime] = useState(()=>{
        const now = new Date()
        return now.toLocaleTimeString('en-US', {
            hour: '2-digit', minute:"2-digit"
        })
    })

    const [data, setData] =useState(()=>{
        const now = new Date()
        return Intl.DateTimeFormat('en-US', {
            dateStyle: "full"
        }).format(now)
    })

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', {
                hour:"2-digit", minute:"2-digit"
            }))
            setData(new Intl.DateTimeFormat('en-US', {
                dateStyle:"full"
            }).format(now))
        },1000)
        return ()=> clearInterval(intervalId)
    },[])

  return (
    <div className="flex flex-col gap-5 ">
        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
        <p className="text-lg font-medium text-sky-1lg:text-2xl">{data}</p>
    </div>
  )
}

export default DataAndTime