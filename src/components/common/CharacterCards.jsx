import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCards = ({data}) => {
    
  return (
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 z-20'>
        {
            data.results?.map( (item, index) => (
                <Link to={`/character/${item.id}`} key={item.id || index} className={`overflow-hidden flex flex-col gap-1 items-center ${ !item?.name && " pointer-events-none" } `}>
                    <img className='rounded-xl text-white text-opacity-60' src={item.image} alt={`${item.name || "No resident found"}`} />
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