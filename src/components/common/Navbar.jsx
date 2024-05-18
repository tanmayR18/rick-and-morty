import React, { useState } from 'react'
import Logo from "../../assets/logo.jpeg"
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'


const Navbar = () => {

    const [ showDropDown, setShowDropDown ] = useState(false)

  return (
    <nav className={` fixed z-50 top-0 left-0 w-full flex  justify-between items-center p-3 bg-slate-800 text-white`}>
        <Link to={"/"} className=' flex items-center gap-3'>
            <div className=' w-12 h-12'>
                <img className="rounded-full" src={Logo} />
            </div>

            <h3 className=' font-bold text-xl'>
                Rick And Morty
            </h3>
        </Link>

        <div className=' hidden lg:flex items-center gap-5 '>
            {/* FOr Desptop view */}
            <Link className='  hover:text-yellow-400  relative group' to={"/characters"}>Characters <div className=' absolute scale-x-0 group-hover:scale-x-100 duration-300  h-[2px] w-full bg-white group-hover:bg-yellow-400' /></Link>
            <Link className='  hover:text-yellow-400  relative group' to={"/episodes"}>Episodes <div className=' absolute scale-x-0 group-hover:scale-x-100 duration-300  h-[2px] w-full bg-white group-hover:bg-yellow-400' /></Link>
            <Link className='  hover:text-yellow-400  relative group' to={"/locations"}>Locations <div className=' absolute scale-x-0 group-hover:scale-x-100 duration-300  h-[2px] w-full bg-white group-hover:bg-yellow-400' /></Link>
        </div>

        <div className=' flex lg:hidden relative'>
            <Menu 
            className=' cursor-pointer'
            onClick={() => setShowDropDown(true)} />

            <div 
            onClick={() => setShowDropDown(false)}
            className={` ${ showDropDown ? "flex " : "hidden "} bg-white/20  duration-300 fixed justify-end top-0 left-0 h-screen w-screen cursor-pointer`}>
                <div className={`flex flex-col  relative text-lg md:text-2xl gap-6 bg-slate-800 border-l p-8 py-24`}>
                    <X className=' absolute top-5 right-5'/>
                    <div className=' flex flex-col gap-6  h-full'>
                        <Link to={"/characters"}>Characters</Link>
                        <Link to={"/Episodes"}>Episodes</Link>
                        <Link to={"/Locations"}>Locations</Link>
                        
                    </div>

                    <Link to={"/"}> Home </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar