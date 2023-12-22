import React from 'react'
import { StatusIcon, priorityIcon } from '@/constants'

const Card = ({ priority, displayByStatus, status }) => {

    return (
        <div className='card-container bg-white w-60 rounded-lg border-[1px] border-gray-200 p-3'>
            <div className='flex justify-between font-medium items-center'>
                <div className='text-gray-500'>CAM - 11</div>
                <div className={`text-center text-[9px] text-white p-0.5 relative bg-green-800 rounded-full`}>
                    <div>AK</div>
                    <div className='absolute w-1.5 h-1.5 border-[1.5px] border-white-500 rounded-full bg-blue-600 -right-[0.5px] bottom-0 '></div>
                </div>
            </div>
            <div className='flex gap-1 text-base font-medium  pt-1 pb-2'>
                {displayByStatus && <div className='mt-[3px]'> {StatusIcon(status)} </div>}
                <div className='leading-5 text-[#2b2b2b]'>Add Multi-Language Support - Enable multi-language support within the application.</div>
            </div>
            <div className='property-tag-and-status flex items-center gap-2'>
                <div className='p-[2.75px] rounded-sm border-[1px] border-gray-300'> {priorityIcon(priority)} </div>
                <div className='flex py-0.5 px-1 gap-2 items-center justify-center rounded-sm border-[1px] border-gray-300'>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="icon" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                    </div>
                    <div className='text-sm text-gray-500'>Feature Request</div>
                </div>
            </div>
        </div>
    )
}

export default Card