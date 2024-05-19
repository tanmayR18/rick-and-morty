import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCards = ({data}) => {
    
  return (
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 z-20'>
        {
            data.results?.map( item => (
                <Link to={`/character/${item.id}`} key={item.id} className="  overflow-hidden flex flex-col gap-1 items-center">
                    <img className='rounded-xl' src={item.image} alt={`${item.name} image`} />
                    <div className='text-white'>
                        {item.name}
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default CharacterCards