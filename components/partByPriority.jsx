import { priorityIcon } from '@/constants'
import React from 'react'
import Card from './card'

const PartByPriority = ({ data, priorityLevel, priorityValue }) => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                    <div>{priorityIcon(priorityValue)}</div>
                    <div className='text-gray-700 font-semibold'>{priorityLevel} {data?.length}</div>
                </div>
                <div className='flex gap-1 items-center'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>

                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                {data?.map((item, index) => (
                    <Card key={index}
                        item={item}
                        displayByStatus={false}
                    />))}
            </div>
        </div>
    )
}

export default PartByPriority