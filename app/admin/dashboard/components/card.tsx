import Props from '@/core/interfaces/Props'
import React from 'react'
const Card = ({ children }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 shadow-2xl p-8 rounded-2xl border-2 border-gray-100 w-full'>
            { children }
        </div>
    )
}

export default Card