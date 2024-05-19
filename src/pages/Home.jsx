import React from 'react'
import pcBg2 from "../assets/pcBg2.jpeg"
import mobileBg1 from "../assets/mobilBg1.jpeg"
import { Heart } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen h-auto w-screen bg-red-500  relative flex justify-center items-center ">

        <img 
        className=' object-cover w-full h-full absolute hidden sm:block'
        src={pcBg2} alt='backgroun for pc' />

        <img 
        className=' object-cover w-full h-full absolute block sm:hidden'
        src={mobileBg1} alt='backgroun for pc' />

        <div className='bg-black/90 absolute z-10  h-full min-h-screen w-screen' />

        <div className=' h-full z-20 flex items-center w-full pt-[78px]'>

            <div className=' flex flex-col text-white w-full gap-5 p-4'>
                
                <h1 className=' font-bold text-3xl'>
                    Discover the Multiverse of Rick and Morty
                </h1>

               <div className=' flex flex-col gap-4 lg:gap-10'>
                    <h3 className=' hidden md:block text-lg'>
                        Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.
                    </h3>

                    <h3 className=' text-lg'>
                        Welcome to the ultimate Rick and Morty database, your one-stop source for comprehensive information on characters, episodes, and locations from the series. Dive into detailed profiles of your favorite characters, explore thorough episode guides packed with summaries and hidden Easter eggs, and discover the bizarre and fascinating locations across the multiverse. Our powerful search feature lets you find specific information instantly, making it easier than ever to satisfy your curiosity about the show. Join our community to stay updated with the latest news, theories, and fan discussions. Start your interdimensional adventure now and explore the infinite possibilities of Rick and Morty!
                    </h3>

                    <div className=' flex justify-between'>

                        <div className=' bg-yellow-400 p-2 text-black w-fit font-bold rounded-xl'>
                            9.1/10 IMDB rating
                        </div>

                        <p className=' hidden md:block'>
                            ~ Developed with <Heart className=' inline-block ' fill='red' /> by Tanmay Rane 
                        </p>

                    </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Home