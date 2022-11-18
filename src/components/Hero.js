import planos from '../assets/planos.png';

export default function Hero() {
    return (
        <div className="mx-10 mt-10 md:mx-48 md:mt-20 md:flex">
            <div className='w-auto md:w-4/6'>
                <p className="text-2xl text-white font-roboto font-bold md:text-6xl">In cursus turpis massa tincidunt dui ut.</p>
                <div className='py-6 w-auto md:py-16 md:px-10'>
                    <p className="text-white font-outfit md:text-lg text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex space-x-14">
                    <button className='bg-lightBlue hover:bg-transparent rounded-3xl w-32 h-14 text-white font-outfit text-xl uppercase'>Contact</button>
                    <button className='bg-transparent border border-lightBlue hover:bg-lightBlue rounded-3xl w-32 h-14 text-white font-outfit text-xl uppercase'>Ver más</button>
                </div>
            </div>
            <div className='mt-14 ml-5 md:w-1/3 md:mr-20 flex-shrink-0'>
                <img className='rounded-lg opacity-40 mt-12 blur hover:blur-none' alt="Foto de planos de arquitectura." src={ planos }></img>
            </div>
        </div>
        
    )
}