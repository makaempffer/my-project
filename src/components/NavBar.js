
export default function NavBar() {
    return (
      <nav className="md:container mx-auto p-6 border-b border-veryLightBlue">
        <div className="md:flex items-center justify-between">
          <a href="/"><p className="font-roboto font-bold text-3xl text-white py-2 md:pl-20 tracking-wider hover:underline decoration-sky-500">David Kaempffer.</p></a>
          <div className="space-x-10 pt-5 md:flex md:space-x-20 md:pr-40">
              <a className='hover:text-slate-500 text-white font-outfit hover:scale-125 duration-300' href="/">Home</a>
              <a className='hover:text-slate-500 text-white font-outfit hover:scale-125 duration-300' href="/projects">Projects</a>
              <a className='hover:text-slate-500 text-white font-outfit hover:scale-125 duration-300' href="/about">About</a>
              <a className='hover:text-slate-500 text-white font-outfit hover:scale-125 duration-300' href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    )
}