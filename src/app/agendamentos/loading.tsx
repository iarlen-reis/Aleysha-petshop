import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 pb-12">
      <div className="flex flex-col gap-3 font-ruluko ">
        <div className="p-3 w-[150px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="p-2 w-[250px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div>
        <ul className="flex items-center gap-2 font-ruluko text-sm uppercase sm:text-base lg:text-lg">
          <li className="p-3 w-[110px] bg-zinc-400 rounded animate-pulse"></li>
          <li className="p-3 w-[110px] bg-zinc-400 rounded animate-pulse"></li>
          <li className="p-3 w-[110px] bg-zinc-400 rounded animate-pulse"></li>
          <li className="p-3 w-[110px] bg-zinc-400 rounded animate-pulse"></li>
        </ul>
      </div>
      <div className="flex items-center justify-end">
        <div className="p-4 w-[180px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:justify-between">
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[132px] p-3 mx-auto sm:mx-0 bg-zinc-400 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
