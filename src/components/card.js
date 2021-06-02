import { storeCards } from '../data'

const Card = () => {
    return (
        <>
        {
            storeCards .map((card) => (
                <div key={card.id} id={card.id} class="lg:m-4 sm:w-1/2 md:w-1/4 border shadow-xl hover:shadow-2xl hover:bg-gray-bgLight rounded-lg bg-white my-12 mx-8 flex flex-col justify-between" >
                    <img src={card.img} alt="app exemple" class="overflow-hidden h-72"  />
                    <div class="p-4 ">
                        <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">{card.Title} </h3>
                        <p class="text-justify">{ card.description}</p>
                        <div className="flex justify-around mx-auto w-40 content-center space-x-3 my-3 ">
                            <div class={`${card.demo[0] ? 'visible mt-5' : "hidden"}`}>
                                <a href={card.demo} class="hover:bg-gray-700 rounded-full py-2 px-5 font-semibold hover:text-white bg-blue-400 text-gray-100">Demo</a>
                            </div>
                            <div class="mt-5">
                                <a href={card.code} class="hover:bg-gray-700 rounded-full py-2 px-5  font-semibold hover:text-white bg-red-500 text-gray-100">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        } 
        </>  
    )
}

export default Card;