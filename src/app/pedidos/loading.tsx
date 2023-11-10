import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-col gap-6 w-full min-h-screen">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="w-full flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-2 w-full h-[250px] rounded">
          <div className="w-full h-[80px] bg-zinc-400 animate-pulse rounded"></div>
          <div className="w-full h-full bg-zinc-400 animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[250px] rounded">
          <div className="w-full h-[80px] bg-zinc-400 animate-pulse rounded"></div>
          <div className="w-full h-full bg-zinc-400 animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[250px] rounded">
          <div className="w-full h-[80px] bg-zinc-400 animate-pulse rounded"></div>
          <div className="w-full h-full bg-zinc-400 animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[250px] rounded">
          <div className="w-full h-[80px] bg-zinc-400 animate-pulse rounded"></div>
          <div className="w-full h-full bg-zinc-400 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default loading
