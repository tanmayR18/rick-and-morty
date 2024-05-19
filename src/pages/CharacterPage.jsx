import fetchApi from '@/service/fetchApi'
import React from 'react'

const CharacterPage = () => {

    // async function fetchCharacterInfo() {
    //     const response = await fetchApi("character")
    // }

  return (
    <div className=' py-[78px] relative'>
        {/* <img className=' object-cover h-screen w-screen fixed top-0 left-0' src={bgImage} alt='charactr background image' /> */}
        <div className=' bg-black/70 sm:bg-black/90 fixed top-0 left-0 z-10 h-screen w-screen' />
    </div>
  )
}

export default CharacterPage