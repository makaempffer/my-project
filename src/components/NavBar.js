
export function NavBar() {
    return (
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <a href="#home"><h2 className="font-roboto font-bold text-2xl text-white p-2 tracking-wider">Loren Ipsum.</h2></a>
          <div className="hidden md:flex space-x-24 text-white pr-60 font-outfit">
              <a className='hover:text-slate-500' href="#home">Home</a>
              <a className='hover:text-slate-500' href="#about">About</a>
              <a className='hover:text-slate-500' href="#products">Products</a>
              <a className='hover:text-slate-500' href="#contact">Contact</a>
          </div>
            
        </div>
      </nav>
    )
}