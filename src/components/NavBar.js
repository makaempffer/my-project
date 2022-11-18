import Menu from '../assets/menu_icon.png';
export default function NavBar() {
    return (
      <nav className="relative container mx-auto p-6 border-b border-veryLightBlue">
        <div className="flex items-center justify-between">
          <a href="/"><h1 className="font-roboto font-bold text-3xl text-white py-2 md:pl-40 tracking-wider">Loren Ipsum.</h1></a>
          <button><img className='md:hidden active:rotate-45' src={Menu}></img></button>
          <div className="hidden md:flex space-x-24 text-white pr-40 font-outfit">
              <a className='hover:text-slate-500' href="/">Home</a>
              <a className='hover:text-slate-500' href="/projects">Projects</a>
              <a className='hover:text-slate-500' href="#about">About</a>
              <a className='hover:text-slate-500' href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    )
}