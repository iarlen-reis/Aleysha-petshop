import React from 'react'

const loading = () => {
  return (
    <div className="max-w-[500px] w-full mx-auto flex flex-col gap-10 min-h-screen">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full flex justify-center flex-col gap-3">
          <div className="p-3 bg-zinc-400 rounded animate-pulse"></div>
          <div className="grid grid-cols-4 gap-3">
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
            <div className="w-[100px] bg-zinc-400 rounded animate-pulse"></div>
          </div>
        </div>
        <button className="p-2 w-full rounded sm:w-[200px] sm:flex sm:self-end"></button>
      </div>
    </div>
  )
}

export default loading
