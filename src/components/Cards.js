import casa from '../assets/house_card_example_1.png';
import casa2 from '../assets/house_card_example_2.png';

export default function Cards() {
    return (
        <div className='p-5 md:p-14 md:flex container md:space-x-10 w-screen mx-auto space-y-5 md:space-y-0'>
            <div className='w-fit md:w-80 h-1/3 rounded-lg md-h-1/2 md:opacity-50 hover:opacity-100 duration-500 hover:shadow-md hover:scale-105'>
                <div className='pt-5 px-5 pb-2 flex shrink-0 items-center justify-center'>
                    <div className='absolute w-40 h-40 flex items-center justify-center hover:blur-none md:blur duration-500'>
                        <button className='absolute w-40 h-40 text-white text-4xl opacity-70 md:opacity-100'>+</button>
                    </div>
                    <img className='rounded-xl' src={casa}></img>  
                </div>
                <div className='px-5'>
                    <a href='#house'>
                        <h1 className='font-roboto font-bold text-2xl uppercase text-white underline underline-offset-4 decoration-white decoration-2'>
                        House Name,
                        </h1>
                    </a> 
                </div>
                <div className='px-5 overflow-auto'>
                    <p className='font-outfit text-md text-white'>
                    In cursus turpis massa tincidunt dui ut. 
                    Pulvinar elementum integer enim neque volutpat ac. 
                    Fermentum odio eu feugiat pretium nibh.
                    </p>
                </div>
            </div>

            <div className='w-fit md:w-80 rounded-lg md-h-1/2 md:opacity-50 hover:opacity-100 duration-500 shadow-md hover:shadow-md hover:rotate-1'>
                <div className='pt-5 px-5 pb-2 flex shrink-0 items-center justify-center'>
                    <div className='absolute w-40 h-40 flex items-center justify-center hover:blur-none md:blur duration-500'>
                        <button className='absolute w-40 h-40 text-white text-4xl opacity-70 md:opacity-100'>+</button>
                    </div>
                    <img className='rounded-xl' src={casa2}></img>  
                </div>
                <div className='px-5'>
                    <a href='#house'>
                        <h1 className='font-roboto font-bold text-2xl uppercase text-white underline underline-offset-4 decoration-white decoration-2'>
                        House Name,
                        </h1>
                    </a>    
                    
                </div>
                <div className='px-5'>
                    <p className='font-outfit text-md text-white'>
                    In cursus turpis massa tincidunt dui ut. 
                    Pulvinar elementum integer enim neque volutpat ac. 
                    Fermentum odio eu feugiat pretium nibh. 
                    </p>
                </div>
            </div>
        </div>
    )
}