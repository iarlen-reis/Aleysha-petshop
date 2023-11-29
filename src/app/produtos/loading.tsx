import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
