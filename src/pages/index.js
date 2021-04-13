
import Header from '../components/header';
import Hero from '../components/hero';
import Card from '../components/card';
import Section from '../components/section';
import Footer from '../components/footer';


export default function IndexPage() {
  return (
    <main className="">
      <body className=" mx-5 bg-purple-500">
       
          <Header/>
       
          <Hero/>

        <section className="containe h-auto w-full mx-auto  " style={{ backgroundColor:'#FDFCFD'}}  >
          
           <section className="text-center space-y-5 mx-auto w-4/5 ">
             <h1 className="text-5xl"
             >About
             </h1>
             
            <section className=" flex  sm:flex-col  md:flex-row  justify-around mx-auto w-3/4  " >
                
               <section className="flex flex-col space-y-3 mx-auto my-5 w-3/4" >
                    
                    <h1 className="sm:text-xl lg:text-3xl">Who Am I</h1>
                    
                    <section className="mx-12 text-xl">
                        <p className="text-justify italic ">
                        I'm a self-taught full-stack web developer, eager to learn and work. I'm a creative being, always tuned to my client's needs and demands. 
                        <br/>
                        <span>

                        I'm on this journey for more than three years now. 
                        </span>
                        <br/>
                        <span>
                        Come and join  me   

                        </span>
                        </p>
                    </section>

                    <section className="flex flex-col items-start space-y-1 mx-12 ">
                      <h2 className="ml-5 my-2 text-2xl italic font-light">Contact:</h2>

                      <a href="https://github.com/Gondrak08" className="flex">
                        <img src="gitLogo.png" alt="" className="w-6"/>
                        <p className="ml-2">Github</p>
                      </a>
                      <a href="https://www.linkedin.com/in/vitor-alecrim-pereira-0a588b145/ " className="flex ">
                        <img src="./linkedinglogo.png" alt="" className="w-6"/>
                        <p className="ml-2">Linkedin</p>
                      </a> 
                    </section>

               </section>


              <section id="about" className="flex flex-col space-y-2 h-full my-5 sm:w-2/3">

                    <h2 className="sm:text-xl lg:text-2xl  ">My Abilities</h2>
                    

                    <section className="flex mx-auto">
                      <ul className="flex justify-center flex-col flex-nowrap  space-y-2 mx-auto italic w-full pl-5 pt-2  ">

                        <li className="flex space-x-2">
                          <img src="./htmlLogo.png" alt="" className="w-6" />
                          <p className="text-sm md:text-base lg:text-xl">html</p>
                        </li>

                        <li className="flex space-x-2">
                          <img src="./javascript.png" alt="" className="w-6" />
                          <p className="text-sm md:text-base lg:text-xl">javascript</p>
                        </li>

                        <li className="flex space-x-2">
                            <img src="./logo-react.png" className="w-6" alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">
                              ReactJs, React Native, NextJs
                            </p>
                        </li>

                        <li className="flex space-x-2">
                            <img src="/cssLogo.jpg" className="w-6" alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">Css; Bootstrap; TailwindCss</p>
                        </li> 

                        <li className="flex space-x-2">
                            <img src="./nodejs-icon.svg" className="w-6"  alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">Nodejs; express, knext</p>
                        </li>
                        <li className="flex space-x-2 ">
                            <img src="./dbLogo.png" className="w-6"  alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">SQL, SQLite; NoSQL</p>
                        </li>
                        <li className="flex space-x-2">
                            <img src="/typescriptLogo.png" className="w-6"  alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">Typescript</p>
                        </li>

                        <li className="flex space-x-2">
                            <img src="/reduxLogo.png" className="w-6"  alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">Redux, Router</p>
                        </li>

                        <li className="flex space-x-2">
                            <img src="/githublogo.svg" className="w-6"  alt=""/>
                            <p className="text-sm md:text-base lg:text-xl">Github, Gitlab</p>
                        </li> 

                      </ul>
                    </section>

               </section>

              
             </section>

           </section>
    
         
         </section>

      
        <section className=" pt-32 pb-24 h-auto mx-auto bg-white" style={{ backgroundColor:'#FDFCFD'}} >
          <h1 className="text-center text-5xl" >My Projects</h1>
          <section id="projects" className="flex justify-evenly flex-wrap h-auto mx-32 mt-5 w-3/4 mx-auto"
          >
            <Card />
          </section>
        </section>

        <Footer />

      </body>
    </main>
  )
}




// <section className="flex flex-col items-center sm:items-start md:grid md:grid-cols-2  lg:mx-32" style={{background:'#ffffff'}} >