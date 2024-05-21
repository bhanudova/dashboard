import React from 'react'

const Invoices = () => {
    return (
        <div className='space-y-4 p-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='p-2 h-48 bg-lime-400 border-2 border-black/55 rounded-xl'>col-1</div>
                <div className='p-2 h-48 bg-green-400 border-2 border-black/55 rounded-xl'>col-2</div>
                <div className='p-2 h-48 bg-emerald-400 border-2 border-black/55 rounded-xl'>col-3</div>
                <div className='p-2 h-48 bg-teal-400 border-2 border-black/55 rounded-xl'>col-4</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='p-2 h-48 bg-blue-400 border-2 border-black/55 rounded-xl'>col-1</div>
                <div className='p-2 h-48 bg-orange-100 border-2 border-black/55 rounded-xl'>col-2</div>
                <div className='p-2 h-48 bg-red-400 border-2 border-black/55 rounded-xl'>col-3</div>
            </div>

            <div className='grid grid-cols-1'>
                <div className='p-2 h-48 bg-cyan-100 border-2 border-black/55 rounded-xl'>col-1</div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-2 h-48 bg-yellow-400 border-2 border-black/55 rounded-xl'>col-1</div>
                <div className='p-2 h-48 bg-amber-100 border-2 border-black/55 rounded-xl'>col-2</div>
            </div>
        </div>
    )
}

export default Invoices