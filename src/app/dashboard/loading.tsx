import React from 'react'

const loading = () => {
  return (
    <div className="w-full flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-2">
        <div className="w-[170px] h-[40px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full max-w-[600px] h-[20px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[150px] h-[18px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[150px] h-[18px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[150px] h-[18px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-[160px] h-[30px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[500px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
