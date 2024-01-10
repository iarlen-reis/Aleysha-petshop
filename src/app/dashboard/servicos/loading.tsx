import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 pb-12">
      <ul className="flex items-center gap-1 font-ruluko capitalize lg:mt-3">
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[15px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
      </ul>
      <div className="flex items-center justify-end">
        <div className="w-[140px] h-[40px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
        <div className="w-[260px] h-[295px] mx-auto lg:mx-0 rounded bg-zinc-400 animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
