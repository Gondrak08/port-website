import Wave from './wave';




const Hero = () =>{
    return(
        <>
            <section className="flex h-full  w-full flex-col justify-between items-center   " 
            style={{
            backgroundImage:"url('./wallpapergif3.gif')",
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'900px'
            }}>
                <section className="grid  grid-rows-3  justify-items-center  place-content-center HeroH1 sm:h-2/4 my-32 sm:my-32 " >
                    
                    {/* <section className="grid  place-self-center justify-items-center w-48 rounded-full border-2  h-48  ">
                        <img src="./avatar.jpeg" className="rounded-full " alt="avatar of a monkey man with a photocamera"/>
                    </section> */}

                    <section className="grid gap-2 mt-10 place-self-center  mx-auto  text-center text-white">
                        
                        <h1 className="text-4xl md:text-5xl font-medium HeroH1">Vitor Alecrim</h1>
                        
                        <p className="my-1 text-2xl  text-opacity-0  HeroP text-center" style={{
                            color: 'hsla(0,0%,100%,.8)',
                        }} >Fullstack web developer</p>

                        <a href="#projects" className="relative top-5 px-5 py-1 place-self-center w-2/4 font-semibold  rounded-2xl uppercase transition duration-300 bg-bgButton  hover:bg-white hover:text-black hover:underline" style={{border: '1px solid rgba(255, 255, 255, 0.25)', fontSize:'17px' }}>
                            Projects
                        </a>

                    </section>

                    <section className="grid grid-cols-6 items-center mt-16  w-72 mx-auto  justify-between sm:w-11/12" >
                        <img src="./logoJs.png" alt="javascript logo" width="50"/>
                        <img src="./logo-react.png" alt="" width="50"/>
                        <img src="./gatsby-icon.png" alt="" width="50"/>
                        <img src="./nextjslogo.png" alt="" width="50" className="bg-white" />
                        <img src="./nodejslogo.png" alt="" width="100"/>
                        <img src="./css3.svg" alt="" width="50"/>
                    </section>
                </section>

                    <Wave/>
               
            </section>
        </>
    )
}

export default Hero;





                    /* <section className="grid  grid-rows-1 bg-green-500 place-self-center justify-items-start  mx-auto sm:py-32 text-center text-white">
                        <section className="mt-5 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-medium HeroH1">Vitor Alecrim</h1>
                        <p className="my-1 text-2xl  text-opacity-0  HeroP text-center" style={{
                            color: 'hsla(0,0%,100%,.8)',
                        }} >Fullstack web developer</p>
                        <a href="#" className="relative top-5 px-5 py-1 font-semibold  rounded-2xl uppercase transition duration-300 bg-bgButton  hover:bg-white hover:text-black hover:underline" style={{border: '1px solid rgba(255, 255, 255, 0.25)', fontSize:'17px' }}>
                            Projects
                        </a>
                        </section>
                    </section> */



// style={{background:'rgba(0,0,0, 0.7)', border:'1px solid rgba(255, 255, 255, 0.25)', borderRadius:'20px', transition:'0.8s cubic-bezier(0.2, 0.8, 0.2, 1);'}}