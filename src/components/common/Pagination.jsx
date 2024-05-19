import React from 'react'
import {MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight} from "react-icons/md"

const PaginationSection = ({data, page, setPage}) => {
    console.log("In the pagination", data, page)
  return (
    <div className='w-full flex justify-center items-center gap-2 z-20'>
        {/* TO got to first page */}
        {
            page !== 1 && <div 
                            title='First page'
                            className='p-3 rounded-full bg-slate-500 cursor-pointer hover:text-yellow-400'
                            onClick={() => setPage(1)}>
                                <MdKeyboardDoubleArrowLeft/>
                            </div>
        }
        
        {/* TO go to previous page */}
        {/* {
            page !== 1 && <div
                            className='p-3 rounded-full bg-slate-500  cursor-pointer hover:text-yellow-400 ' 
                            onClick={() => setPage( page - 1)}>
                                <MdKeyboardArrowLeft />
                            </div>
        } */}

        {/* To give previous, current and next page */}
        {
            <div className='flex gap-2'>
            {Array.from({ length: data?.pages }, (_, index) => (
                <div 
                    onClick={() => setPage(index + 1)}
                    className={`w-10 justify-center ${page === index || page === index + 1 || page === index + 2 ? "flex": "hidden" } items-center h-10 cursor-pointer text-sm rounded-full ${index + 1 === page ? 
                    " bg-yellow-400" : " bg-slate-500 "} ${page !== index + 1 ? "hover:text-yellow-400": "cursor-default"}`}
                    key={index}>
                        {index + 1}
                </div>
            ))}
        </div>
        }

        {/* To get the next page
        {
            page !== data?.pages  && <div 
                                                            className='p-3 rounded-full cursor-pointer bg-slate-500  hover:text-yellow-400'
                                                            onClick={() => setPage( page + 1)}>
                                                                <MdKeyboardArrowRight />
                                                            </div>
        } */}

        {/* TO get the last visible page */}
        {
            page !== data?.pages  && <div 
                                                            className={`p-3 rounded-full bg-slate-500  cursor-pointer  hover:text-yellow-400`}
                                                            title={`Last page - ${data?.pages}`}
                                                            onClick={() => setPage(data?.pages)} >
                                                                <MdKeyboardDoubleArrowRight />
                                                            </div>
        }
    </div>
  )
}

export default PaginationSection