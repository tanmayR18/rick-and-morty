import fetchApi from '@/service/fetchApi'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import PaginationSection from '@/components/common/Pagination'
import LocationBgImage from "../assets/location.jpeg"
import LocationCards from '@/components/common/LocationCards'

const Locations = () => {
    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)
    const [ formData, setFormData ] = useState({
        name: "",
        type:"",
        dimension: ""
    })

    function formHandler(e) {
        setPage(1)
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
        if( formData.type) {
            queryObject.type = formData.type
        }

        if( formData.dimension) {
            queryObject.dimension = formData.dimension
        }

        console.log("FormData", formData.name, formData.episode)
        console.log("Query object", queryObject)
        setLoading(true)
        const response = await fetchApi("location", queryObject)
        setData(response)
        setLoading(false)
    }

    useEffect( () => {
        getEpisodes()
    },[page, formData])

  return (
    <div className='py-[78px] relative'>
        <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={LocationBgImage} alt='location background image' />
        <div className=' bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />

        <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto flex flex-col gap-10 z-20'>
            <div className=' flex flex-col sm:flex-row space-y-6 justify-between sm:items-center z-30'>
                <h1 className=' text-2xl sm:text-3xl font-bold text-white'>Explore the Locations</h1>
                <div  className=' flex items-center relative rounded-3xl overflow-hidden p-1'>
                    <Search className=' absolute left-2' />
                    <input 
                    className=' focus:border-none appearance-none focus:outline-none pl-10 p-1 py-2 h-full w-full'
                    type='text' 
                    name='name'
                    placeholder='Eg: Nuptia 4'
                    value={formData.name} 
                    onChange={(e) => formHandler(e)} />
                </div>
            </div>

            <form className=' bg-white/20 rounded-xl p-4 flex flex-col gap-4 text-white z-20'>
                <div className='flex flex-wrap gap-5 items-center'>
                    <div className=' flex flex-col sm:flex-row gap-2 md:items-center'>
                        <label htmlFor="dimension">Dimension:</label>
                        <input 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='dimension' value={formData.dimension} onChange={(e) => formHandler(e)} placeholder='Ex: "Dimension C-137"' />
                    </div>

                    <div className=' flex flex-col sm:flex-row gap-2 md:items-center'>
                        <label htmlFor="type">Type</label>
                        <input 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='type' value={formData.type} onChange={(e) => formHandler(e)} placeholder='Ex: Planet' />
                    </div>
                </div>
            </form>
            

            {
                loading && <span className="loader z-30 fixed top-1/2 left-1/2"></span>
            }


            <LocationCards data={data} />

            {
                data.error && <div className=' font-bold text-lg flex justify-center z-20 text-white'>
                                    <p>Location not found</p>
                                </div>
            }

            {
                !data.error && <PaginationSection data = {data.info}  page = {page}  setPage = {setPage}/>
            }

        </div>

    </div>
  )
}

export default Locations