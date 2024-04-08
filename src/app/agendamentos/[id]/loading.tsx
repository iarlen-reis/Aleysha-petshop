import React from 'react'

const ScheduleDetailLoading = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[600px] mx-auto w-full gap-8 pb-12">
      <ul className="flex items-center gap-1 font-ruluko capitalize lg:mt-3">
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[15px] p-2 bg-zinc-400 rounded animate-pulse"></li>
        <li className="w-[120px] p-2 bg-zinc-400 rounded animate-pulse"></li>
      </ul>
      <div className="flex flex-col gap-5">
        <section className="w-full h-[70px] bg-zinc-400 rounded animate-pulse"></section>
        <section className="flex flex-col gap-2">
          <h2 className="w-[200px] p-4 bg-zinc-400 rounded animate-pulse"></h2>
          <div className="w-full h-[70px] bg-zinc-400 rounded animate-pulse"></div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="w-[200px] p-4 bg-zinc-400 rounded animate-pulse"></h2>
          <div className="w-full h-[70px] bg-zinc-400 rounded animate-pulse"></div>
        </section>
        <section className="flex flex-col gap-2 ">
          <h2 className="w-[200px] p-4 bg-zinc-400 rounded animate-pulse"></h2>
          <p className="w-full h-[70px] bg-zinc-400 rounded animate-pulse"></p>
        </section>
      </div>
    </div>
  )
}

export default ScheduleDetailLoading
