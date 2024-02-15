import React from 'react'

const loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 pb-12">
      <div className="flex flex-col gap-2">
        <div className="w-[240px] h-11 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[280px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[80px] h-5 bg-zinc-400 rounded animate-pulse md:w-[120px]"></div>
        <div className="w-[80px] h-5 bg-zinc-400 rounded animate-pulse md:w-[120px]"></div>
        <div className="w-[80px] h-5 bg-zinc-400 rounded animate-pulse md:w-[120px]"></div>
        <div className="w-[80px] h-5 bg-zinc-400 rounded animate-pulse md:w-[120px]"></div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col overflow-auto">
          <div className="w-[200px] h-8 bg-zinc-400 rounded-t animate-pulse"></div>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full h-[80px] bg-zinc-400 rounded rounded-b-none rounded-tl-none animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col overflow-auto">
          <div className="w-[200px] h-8 bg-zinc-400 rounded-t animate-pulse"></div>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full h-[80px] bg-zinc-400 rounded rounded-b-none rounded-tl-none animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col overflow-auto">
          <div className="w-[200px] h-8 bg-zinc-400 rounded-t animate-pulse"></div>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full h-[80px] bg-zinc-400 rounded rounded-b-none rounded-tl-none animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col overflow-auto">
          <div className="w-[200px] h-8 bg-zinc-400 rounded-t animate-pulse"></div>
          <div className="w-full flex flex-col gap-1">
            <div className="w-full h-[80px] bg-zinc-400 rounded rounded-b-none rounded-tl-none animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loading
