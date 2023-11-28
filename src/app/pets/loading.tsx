import React from 'react'

const PetsPageLoading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 pb-12">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex self-end w-[200px] p-5 bg-zinc-400 rounded animate-pulse"></div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-full h-[80px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default PetsPageLoading
