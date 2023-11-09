import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 pb-12">
      <div className="flex flex-col items-start gap-2">
        <div className="w-[300px] h-7 bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[500px] w-full h-4 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.5fr]">
        <div className="order-2 flex flex-col gap-4 mt-4 lg:order-[0] lg:mt-0">
          <div className="w-[300px] h-5 bg-zinc-400 rounded animate-pulse lg:hidden"></div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[170px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-full h-[170px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-full h-[170px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-full h-[170px] bg-zinc-400 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="w-full h-[330px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default loading
