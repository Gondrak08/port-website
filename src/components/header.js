import {useState, useEffect} from 'react';


const Header = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive:true} );
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }


    return(
       <>
       <section className="w-full">

        <header className={`flex h-20 transition-transitionBackground transition-all duration-500    ${  scrollPosition === 0 ? ' absolute h-36  ' :  scrollPosition !==0 && 'shadow-xl bg-background fixed z-50' }`} style={{
                    width: '95.5%'
        }} >


            <nav className={`flex justify-center mx-auto md:w-11/12  transition-all duration-500 ${scrollPosition===0 ?'py-2 relative ' : 'py-2 ' }`} >

                <ul className="grid grid-cols-4 sm:grid-cols-5   mx-auto  justify-items-center   items-center   text-white text-sm md:text-2xl font-bold  sm:space-x-20">
                   
                        <li className="justify-self-end">
                            <a href="">
                                <img src="/logo.gif" alt="The website logo, a gif of a cyberpunk user" className={`invisible sm:visible sm:w-10 md:w-16 xl:w-26   `}/>
                            </a>
                        </li>
                
                    
                        <li className=" hover:underline ">
                            <a href="#about">
                                <p>About</p>
                            </a>
                        </li>
                        <li className=" hover:underline">
                            <a href="#projects">
                                <p>Projects</p>
                            </a>
                        </li>
                        <li className=" hover:underline">
                            <a href="#footer">
                                <p>Contact</p>
                            </a>
                        </li>
                </ul>    
            </nav>



        </header>
       </section>

       </>
        
    )
}

export default Header;




{/* <nav className={`flex justify-center mx-auto w-3/5  transition-all duration-500 ${scrollPosition===0 ?'py-2 relative md:top-8' : 'py-2' }`} >

<ul className="flex  space-x-20  items-center justify-center   ">
   
        <li>
            <a href="">
                <img src="/logo.gif" alt="The website logo, a gif of a cyberpunk user" className={`invisible sm:visible sm:w-10 md:w-16 xl:w-26   `}/>
            </a>
        </li>

    <section className="flex  items-center text-white text-sm md:text-2xl font-bold  space-x-16 " >
        <li className="flex-1 hover:underline ">
            <a href="">
                <p>About</p>
            </a>
        </li>
        <li className="flex-1 hover:underline">
            <a href="">
                <p>Projects</p>
            </a>
        </li>
        <li className="flex-1 hover:underline">
            <a href="">
                <p>Contact</p>
            </a>
        </li>
    </section>
</ul>

</nav> */}