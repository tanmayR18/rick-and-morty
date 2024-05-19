import React from 'react'
import { Link } from 'react-router-dom'

const LocationCards = ({data}) => {
  return (
    <div className=' grid grid-cols-1 gap-4 sm:gap-5 z-20'>
        {
            data.results?.map( item => (
                <Link to={`/location/${item.id}`} key={item.id} className=" flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-white p-3 rounded-xl overflow-hidden bg-yellow-400/50">
                    <div className=' bg-red-600 p-1 px-2 rounded-xl flex items-center gap-2'>
                        <span>Name:</span>{item.name}
                    </div>
                    <div className=' flex items-center gap-2'>
                        <span>Type:</span>{item.type}
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default LocationCards