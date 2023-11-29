import React from 'react'

const loading = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-8 pb-12">
      <div className="w-fit flex items-center gap-2 mt-4">
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
        <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
      </div>
      <div className="w-full flex flex-col gap-5 lg:flex-row lg:mt-5">
        <div className="w-[250px] mx-auto h-[250px] lg:mx-0 lg:w-[500px] lg:h-[480px] bg-zinc-400 animate-pulse rounded"></div>
        <div className=" w-full flex flex-col gap-5 items-start mt-2 lg:mt-0">
          <div className="flex flex-col font-ruluko gap-2">
            <div className="w-[250px] lg:w-[350px] p-6 bg-zinc-400 animate-pulse rounded"></div>
            <div className="w-[150px] lg:w-[220px] p-4 bg-zinc-400 animate-pulse rounded"></div>
          </div>
          <div className="flex flex-col font-crimson gap-2">
            <div className="w-[60px] lg:w-[100px] p-6 bg-zinc-400 animate-pulse rounded"></div>
            <div className="w-[100px] lg:w-[200px] p-4 bg-zinc-400 animate-pulse rounded"></div>
          </div>
          <div className="flex flex-col font-crimson gap-2 w-full">
            <div className="w-[140px] lg:w-[180px] p-4 bg-zinc-400 animate-pulse rounded"></div>
            <p className="h-[200px] w-full max-w-[550px] sm:max-w-[600px] lg:max-w-[700px] bg-zinc-400 animate-pulse rounded"></p>
          </div>
          <div className="w-full max-w-[360px] p-5 bg-zinc-400 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col gap-4 sm:mt-8">
        <div className="w-[250px] lg:w-[300px] p-5 bg-zinc-400 animate-pulse rounded"></div>
        <div className="sm:grid sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
          <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
          <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
          <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
          <div className="w-[260px] h-[440px] mx-auto rounded-lg lg:mx-0 bg-zinc-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default loading
