import React from 'react'

const PetDetailLoading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="relative flex flex-col gap-4 max-w-[500px] w-full mx-auto">
        <div className="w-fit flex items-center gap-2 mt-4">
          <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
          <div className="w-[15px] h-4 bg-zinc-400 rounded animate-pulse"></div>
          <div className="w-[100px] h-5 bg-zinc-400 rounded animate-pulse"></div>
        </div>
        <div className="w-[200px] h-[200px] mx-auto rounded-[50%] mt-4 bg-zinc-400 animate-pulse"></div>
        <h1 className="w-[150px] mx-auto p-4 bg-zinc-400 rounded animate-pulse"></h1>
        <div className="w-full flex flex-col gap-4">
          <ul className="w-full grid grid-cols-2 gap-2 text-center font-ruluko text-lg">
            <li className="p-2 w-[100px] bg-zinc-400 rounded animate-pulse"></li>
            <li className="p-2 w-[100px] bg-zinc-400 rounded animate-pulse"></li>
            <li className="p-2 w-[100px] bg-zinc-400 rounded animate-pulse"></li>
          </ul>
          <div className="text-center flex flex-col gap-1 font-ruluko">
            <span className="w-[250px] p-2 bg-zinc-400 rounded animate-pulse"></span>
            <p className="w-full h-[150px] p-2 bg-zinc-400 rounded animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetailLoading
