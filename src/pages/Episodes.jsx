import EpisodeCards from '@/components/common/EpisodeCards'
import fetchApi from '@/service/fetchApi'
import React, { useEffect, useState } from 'react'
import EpisodeBgImage from "../assets/episode.jpeg"
import { Search } from 'lucide-react'
import PaginationSection from '@/components/common/Pagination'



const Episodes = () => {

    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ formData, setFormData ] = useState({
        name: "",
        episode:"",
    })
    
    function formHandler(e) {
        setFormData( (prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        }))
    }

    async function getEpisodes(){
        let queryObject = { page: 1}
        if(page > 1) {
            queryObject.page = page
        } 

        if( formData.name) {
            queryObject.name = formData.name
        }
        if( formData.episode) {
            queryObject.episode = formData.episode
        }

        console.log("FormData", formData.name, formData.episode)
        console.log("Query object", queryObject)
        const response = await fetchApi("episode", queryObject)
        setData(response)
    }

    useEffect( () => {
        getEpisodes()
    },[page, formData])

  return (
    <div className=' pt-[78px] relative'>
        <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto'>
            <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={EpisodeBgImage} alt='charactr background image' />
            <div className=' bg-black/70 sm:bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />
            <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto flex flex-col gap-10 z-20'>
                <div className=' flex flex-col sm:flex-row space-y-6 justify-between sm:items-center z-30'>
                    <h1 className=' text-2xl sm:text-3xl font-bold text-white'>Explore the characters</h1>
                    <div  className=' flex items-center relative rounded-3xl overflow-hidden p-1'>
                        <Search className=' absolute left-2' />
                        <input 
                        className=' focus:border-none appearance-none focus:outline-none pl-10 p-1 h-full w-full'
                        type='text' 
                        name='name'
                        placeholder='Eg: Pilot'
                        value={formData.name} 
                        onChange={(e) => formHandler(e)} />
                    </div>
                </div>
                
                <form className=' bg-white/20 rounded-xl p-4 flex flex-col gap-4 text-white z-20'>
                <div className='flex flex-wrap gap-5 items-center'>
                    <div className=' flex flex-col sm:flex-row gap-2 md:items-center'>
                        <label htmlFor="episode">Episode No:</label>
                        <input 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='episode' value={formData.episode} onChange={(e) => formHandler(e)} placeholder='Ex: S01E10' />
                    </div>
                </div>
            </form>

            <EpisodeCards data={data} />

            {
                data.error && <div className=' font-bold text-lg flex justify-center z-20 text-white'>
                                    <p>Episode not found</p>
                                </div>
            }

            {
                !data.error && <PaginationSection data = {data.info}  page = {page}  setPage = {setPage}/>
            }

            </div>
            
        </div>  
    </div>
  )
}

export default Episodes