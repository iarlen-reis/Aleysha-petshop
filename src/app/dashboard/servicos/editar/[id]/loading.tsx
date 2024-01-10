import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen w-full md:max-w-[600px] md:mx-auto flex flex-col pb-12 gap-10">
      <ul className="flex items-center gap-1 font-ruluko capitalize lg:mt-3">
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[15px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
      </ul>
      <div className="flex flex-col gap-4">
        <div className="mx-auto w-[250px] h-[250px] rounded-[50%] bg-zinc-400 animate-pulse"></div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="w-full flex flex-col gap-2">
            <div className="w-[240px] h-[30px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-full h-[48px] bg-zinc-400 rounded animate-pulse"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-[240px] h-[30px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-full h-[48px] bg-zinc-400 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-[240px] h-[30px] bg-zinc-400 rounded animate-pulse"></div>
          <div className="w-full h-[165px] bg-zinc-400 rounded animate-pulse"></div>
        </div>
        <div className="w-full flex items-end justify-end">
          <div className="max-w-[220px] w-full h-[44px] py-2 px-4 md:px-6 rounded bg-zinc-400 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default loading
