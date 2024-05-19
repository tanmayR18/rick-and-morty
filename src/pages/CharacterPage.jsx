import fetchApi from '@/service/fetchApi'
import BackupBgImage from "../assets/pcBg1.jpeg"
import { CloudFog, Component, FolderPen, LoaderPinwheel, MapPin, PersonStanding, Search, Skull, Snail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import EpisodeCards from '@/components/common/EpisodeCards'
import PaginationSection from '@/components/common/Pagination'

const CharacterPage = () => {

    const location = useLocation()
    const id = location.pathname.split("/").at(-1).split(",").at(0)
    // console.log(id)
    const [ data, setData ] = useState([])
    const [ episodes, setEpisodes ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)


    function chunkArray(myArray, chunk_size){
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index+chunk_size);
            tempArray.push(myChunk);
        }
    
        return tempArray;
    }

    function createPages(data) {
        
        const chunkedData = chunkArray(data, 20)
        let finalData = {
            info:{
                count: data.length,
                pages: chunkedData.length
            },
            results: chunkedData[page - 1]
        }
        console.log("This was rendered", page)
        return finalData
    }

    async function getCharactersEpisodes(character){
        const episodes = []
        for (let i of character.episode ){
            episodes.push((parseInt(i.split("/").at(-1))).toString())
        }
        let response = await fetchApi(`episode/${episodes}`)
        if (!Array.isArray(response)) {
            response = [response]
        }
        console.log("Yaha par he response", response)
        const finalData =  createPages(response)
        console.log(finalData)
        setEpisodes(finalData)
    }

    async function getCharacterInfo(){
        setLoading(true)
        const response = await fetchApi(`character/${id}`)
        console.log("Response of single character",response)
        getCharactersEpisodes(response)
        setData(response)
        setLoading(false)
    }

    useEffect( () => {
        getCharacterInfo()
    },[page, location.pathname])

  return (
   <div className=' py-[78px] relative'>
        <div className=' w-full  p-2 md:p-0 mx-auto'>
            <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={data?.image || BackupBgImage} alt='charactr background image' />
            <div className=' bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />

            <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto flex flex-col gap-10 z-20'>
                <div className=' flex flex-col sm:flex-row space-y-6 justify-between sm:items-center z-30'>
                    
                    <main className=' flex flex-col gap-16 text-white w-full py-5'>
                        <div className=' flex flex-col md:flex-row-reverse justify-between gap-5'>
                            <div className=' self-center'> 
                                <img 
                                className=' border-4 w-[300px] h-[300px] border-blue-900 rounded-2xl'
                                src={data?.image} alt={data?.name}/>
                            </div>

                            <div className=' flex flex-col gap-6 sm:gap-10'> 
                                <h2 className=' text-xl sm:text-3xl font-bold tracking-wider'>
                                    Character Information:
                                </h2>

                                <div className='flex flex-col gap-2'>
                                    <div className=' flex gap-2'>
                                        <FolderPen/>
                                        <p>Name:</p>
                                        <p>{data.name || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <Skull/>
                                        <p>Status:</p>
                                        <p>{data.status || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <Snail/>
                                        <p>Species:</p>
                                        <p>{data.species || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <Component />
                                        <p>Type:</p>
                                        <p>{data.type || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <PersonStanding/>
                                        <p>Gender:</p>
                                        <p>{data.gender || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <LoaderPinwheel/>
                                        <p>Origin:</p>
                                        <p>{data?.origin?.name || "Unknown"}</p>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <MapPin/>
                                        <p>Location:</p>
                                        <p>{data?.location?.name || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            loading && <span className="loader z-30 fixed top-1/2 left-1/2 my-5"></span>
                        }
                        
                        {/* TODO: Add a conditional rendering here */}
                        <div className=' flex flex-col gap-6'>
                            <h2 className=' text-center font-bold text-3xl tracking-wider'>Episodes appearance</h2> 
                            <EpisodeCards data={episodes} />
                        </div>

                        {/* {
                            loading && <span className="loader z-30 fixed top-1/2 left-1/2"></span>
                        } */}

                        {
                            data.error && <div className=' font-bold text-lg flex justify-center z-20 text-white'>
                                                <p>Episode not found</p>
                                            </div>
                        }

                        {
                            !data.error && episodes && <PaginationSection data = {episodes.info}  page = {page}  setPage = {setPage}/>
                        }
                    </main>

                </div>
            </div>
        </div>
   </div>
  )
}

export default CharacterPage