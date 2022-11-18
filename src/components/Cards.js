import planos from '../assets/planos.png';
import casa from '../assets/house_card_example_1.png';
import casa2 from '../assets/house_card_example_2.png';

export default function Cards() {
    return (
        <div className='p-14 md:flex container space-x-10 w-screen mx-auto'>
            <div className='w-1/2 md:w-80 rounded-lg md-h-1/2 opacity-50 hover:opacity-100'>
                <div className='pt-5 px-5 pb-2 flex shrink-0 justify-center items-center'>
                    <button className='absolute text-white text-3xl blur hover:blur-none'>+</button>
                    <img className='rounded-xl' src={casa}></img>  
                </div>
                <div className='px-5'>
                    <h1 className='font-roboto font-bold text-2xl uppercase text-gray-700'>
                        House Name, 
                    </h1>
                </div>
                <div className='px-5'>
                    <p className='font-outfit text-md text-gray-800'>
                    In cursus turpis massa tincidunt dui ut. 
                    Pulvinar elementum integer enim neque volutpat ac. 
                    Fermentum odio eu feugiat pretium nibh. 
                    </p>
                </div>
            </div>

            <div className='w-1/2 md:w-80 rounded-lg md-h-1/2 opacity-50 hover:opacity-100'>
                <div className='pt-5 px-5 pb-2 shrink-0'>
                    <img className='rounded-xl' src={casa2}></img>  
                </div>
                <div className='px-5'>
                    <h1 className='font-roboto font-bold text-2xl uppercase text-gray-700'>
                        House Name, 
                    </h1>
                </div>
                <div className='px-5'>
                    <p className='font-outfit text-md text-gray-800'>
                    In cursus turpis massa tincidunt dui ut. 
                    Pulvinar elementum integer enim neque volutpat ac. 
                    Fermentum odio eu feugiat pretium nibh. 
                    </p>
                </div>
            </div>
        </div>
    )
}