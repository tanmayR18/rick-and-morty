import CharacterCards from '@/components/common/CharacterCards'
import PaginationSection from '@/components/common/Pagination'
import fetchApi from '@/service/fetchApi'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import bgImage from "../assets/pcBg1.jpeg"


const Characters = () => {

    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)
    const [ character, setCharacter ] = useState("")
    const [ formData, setFormData ] = useState({
        species : "",
        type: "",
        status:"",
        gender:""

    })


    function formHandler(e) {
        setPage(1)
        setFormData( (prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        }))
    }

    async function getCharacters(){
        let queryObject = { page: 1}
        if(page > 1) {
            queryObject.page = page
        } 

        if( formData.gender) {
            queryObject.gender = formData.gender
        }
        if( formData.species) {
            queryObject.species = formData.species
        }
        if( formData.type) {
            queryObject.type = formData.type
        }
        if( formData.status) {
            queryObject.status = formData.status
        }



        if( character ) {
            queryObject.name = character
        }

        console.log("Query object", queryObject)
        setLoading(true)
        const response = await fetchApi("character", queryObject)
        setData(response)
        setLoading(false)
    }

    useEffect( () => {
        getCharacters()
    },[page, character, formData])

  

  return (
    <div className=' py-[78px] relative'>
        <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={bgImage} alt='charactr background image' />
        <div className='bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />
        <div className=' w-full md:w-[90%] p-2 md:p-0 mx-auto flex flex-col gap-10 z-20'>
            <div className=' flex flex-col sm:flex-row space-y-6 justify-between sm:items-center z-30'>
                <h1 className=' text-2xl sm:text-3xl font-bold text-white'>Explore the characters</h1>
                <form  className=' flex items-center relative rounded-3xl overflow-hidden p-1'>
                    <Search className=' absolute left-2' />
                    <input 
                    className=' focus:border-none appearance-none focus:outline-none pl-10 p-1 py-2 h-full w-full'
                    type='text' 
                    placeholder='Eg: Beth Smith'
                    value={character} 
                    onChange={(e) => setCharacter(e.target.value)} />
                </form>
            </div>

            <form className=' bg-white/20 rounded-xl p-4 flex flex-col gap-4 text-white z-20'>
                <h4 className=' font-semibold text-lg '>Filters:</h4>
                <div className='flex flex-wrap gap-5 items-center'>
                    <div className=' flex gap-2 items-center'>
                        <label htmlFor="species">Species</label>
                        <input 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='species' value={formData.species} onChange={(e) => formHandler(e)} placeholder='Ex: Alien' />
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <label htmlFor="species">Type</label>
                        <input 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='type' value={formData.type} onChange={(e) => formHandler(e)} placeholder='Ex: Superhuman' />
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <label htmlFor="species">Status</label>
                        <select 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='status' value={formData.status} onChange={(e) => formHandler(e)} placeholder='status'>
                            <option value=''>All</option>
                            <option value='alive'>Alive</option>
                            <option value='dead'>Dead</option>
                            <option value='unknown'>Unknown</option>
                        </select>
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <label htmlFor="gender">Gender</label>
                        <select 
                        className='focus:border-none appearance-none focus:outline-none rounded-md p-1 text-black'
                        type='text' name='gender' value={formData.gender} onChange={(e) => formHandler(e)} placeholder='gender'>
                            <option value=''>All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                </div>
            </form>

            {
                loading && <span className="loader z-30 fixed top-1/2 left-1/2"></span>
            }
            
            <CharacterCards data = {data} />

            {
                data.error && <div className=' font-bold text-lg flex justify-center z-20 text-white'>
                                    <p>Character not found</p>
                                </div>
            }

            {
                !data.error && <PaginationSection data = {data.info}  page = {page}  setPage = {setPage}/>
            }
        </div>

    </div>
  )
}

export default Characters