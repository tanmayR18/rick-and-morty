import React, { useEffect, useState } from 'react'
import bgImage from "../assets/episode.jpeg"
import { useLocation } from 'react-router-dom'
import fetchApi from '@/service/fetchApi'
import CharacterCards from '@/components/common/CharacterCards'
import PaginationSection from '@/components/common/Pagination'

const LocationPage = () => {

    const location = useLocation()
    const id = location.pathname.split("/").at(-1).split(",").at(0)
    const [ data, setData ] = useState([])
    const [ characters, setCharacters ] = useState([])
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

    async function getLocationCharacters(data){
        const charArr = []
        for (let i of data.residents ){
            charArr.push((parseInt(i.split("/").at(-1))).toString())
        }
        let response = await fetchApi(`character/${charArr}`)
        if (!Array.isArray(response)) {
            response = [response]
        }
        console.log("Yaha par he response", response)
        const finalData =  createPages(response)
        console.log(finalData)
        setCharacters(finalData)
    }

    async function getEpisodeInfo(){
        setLoading(true)
        const response = await fetchApi(`location/${id}`)
        console.log("Response of single character",response)
        getLocationCharacters(response)
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        getEpisodeInfo()
    }, [page, location.pathname])

  return (
    <div className=' py-[78px] relative'>
        <div className=' w-full  p-2 md:p-0 mx-auto'>
        <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={bgImage} alt='charactr background image' />
        <div className=' bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />

            <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto flex flex-col gap-8 z-20'>
                <div className=' flex flex-col gap-4 pt-5 justify-between  z-30 text-white'>
                   <div className=' text-3xl text-white font-bold'>
                        Location Name: {data.name || "Unknown"}
                   </div>
                   <div className=' flex flex-col gap-2'>
                        <div>
                                Type: {data.type || "Unknown"}
                        </div>
                        <div> 
                            Dimension: {data.dimension || "Unknown"} 
                        </div>
                        
                   </div>
                </div>

                {
                    loading && <span className="loader z-30 fixed top-1/2 left-1/2 my-5"></span>
                }

                <div className=' flex flex-col gap-6 z-30'>
                    <h2 className=' text-white text-lg sm:text-2xl text-center font-bold tracking-wide'>{`Residents of ${data.name}`}</h2>
                    <CharacterCards data={characters} />
                </div>

                {
                    data.error && <div className=' font-bold text-lg flex justify-center z-20 text-white'>
                                    <p>Characters not found</p>
                                    </div>
                }

                {
                    !data.error &&  <PaginationSection data = {characters.info}  page = {page}  setPage = {setPage}/>
                }

            </div>
        </div>
    </div>
  )
}

export default LocationPage