import React from 'react'

const Customer = () => {
    return (
        <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='p-2 h-48 bg-zinc-50 border-2 border-black/50 rounded-md'>col-1</div>
                <div className='p-2 h-48 bg-orange-100 border-2 border-black/50 rounded-md'>col-2</div>
                <div className='p-2 h-48 bg-red-50 border-2 border-black/50 rounded-md'>col-3</div>
            </div>

            <div className='grid grid-cols-1'>
                <div className='p-2 h-48 bg-cyan-100 border-2 border-black/50 rounded-md'>col-1</div>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='p-2 h-48 bg-lime-50 border-2 border-black/50 rounded-md'>col-1</div>
                <div className='p-2 h-48 bg-green-50 border-2 border-black/50 rounded-md'>col-2</div>
                <div className='p-2 h-48 bg-emerald-50 border-2 border-black/50 rounded-md'>col-3</div>
                <div className='p-2 h-48 bg-teal-50 border-2 border-black/50 rounded-md'>col-4</div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-2 h-48 bg-yellow-50 border-2 border-black/50 rounded-md'>col-1</div>
                <div className='p-2 h-48 bg-amber-100 border-2 border-black/50 rounded-md'>col-2</div>
            </div>
        </div>
    )
}

export default Customer