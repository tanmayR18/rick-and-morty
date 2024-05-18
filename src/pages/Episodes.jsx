import EpisodeCards from '@/components/common/EpisodeCards'
import fetchApi from '@/service/fetchApi'
import React, { useEffect, useState } from 'react'



const Episodes = () => {

    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1)

    async function getEpisodes(){
        const response = await fetchApi("episode")
        setData(response)
    }

    useEffect( () => {
        getEpisodes()
    },[])

  return (
    <div className=' pt-[78px]'>
        <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto'>
            <h1 className=' text-3xl font-bold text-center'> Episodes</h1>
            <EpisodeCards />
        </div>  
    </div>
  )
}

export default Episodes