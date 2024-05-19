import React from 'react'
import { Link } from 'react-router-dom'

const EpisodeCards = ({data}) => {

    
  return (
    <div className=' grid grid-cols-1 gap-4 sm:gap-5 z-20'>
        {
            data.results?.map( item => (
                <Link to={`/episode/${item.id}`} key={item.id} className=" flex items-center gap-4 text-white p-3 rounded-xl overflow-hidden bg-yellow-400/50">
                    <div className=' bg-red-600 p-1 px-2 rounded-xl'>
                        {item.episode}
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        {item.name}
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default EpisodeCards