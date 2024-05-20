import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen bg-slate-700 text-white py-[78px] flex justify-center items-center'>
        <div className=' flex flex-col items-center justify-center gap-3'>
            <h2 className=' text-2xl font-semibold'>Oops! Something went wrong</h2>
            <p>Click <a className=' text-yellow-400 font-semibold' target='_blank' href='https://tanmay-rane-portfolio.vercel.app/contact'>here</a> for  contacting the issue</p>
            <div className=' flex flex-col items-center gap-1'>
                <p>Let&#8217;s go to home page</p>
                <Link className=' px-3 py-2 bg-slate-800 rounded-lg ' to={"/"}>
                    Home
                </Link>
            </div>

            <button></button>
        </div>

    </div>
  )
}

export default Error