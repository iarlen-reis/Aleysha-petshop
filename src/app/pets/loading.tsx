import React from 'react'

const PetsPageLoading = () => {
  return (
    <div className="min-h-screen h-full flex flex-col gap-8 pb-12">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="flex self-end w-[200px] p-5 bg-zinc-400 rounded animate-pulse"></div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
        <div className="max-w-[300px] w-full mx-auto h-[300px] bg-zinc-400 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default PetsPageLoading
