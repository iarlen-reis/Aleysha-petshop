import React from 'react'

const loading = () => {
  return (
    <div className="max-w-[600px] w-full flex flex-col gap-4 mx-auto">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-[200px] h-[200px] rounded-[50%] mx-auto bg-zinc-400 animate-pulse" />
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <div className="w-full p-5 bg-zinc-400 rounded animate-pulse"></div>
          <div className="w-full p-5 bg-zinc-400 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <div className="w-full p-5 bg-zinc-400 rounded animate-pulse"></div>
          <div className="w-full p-5 bg-zinc-400 rounded animate-pulse"></div>
        </div>
        <div className="w-full h-[200px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full flex items-center justify-end">
          <div className="w-[250px] p-5 bg-zinc-400 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default loading
