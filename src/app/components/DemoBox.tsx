import React from 'react'

const DemoBox = () => {
    return (
        <div className='space-y-4'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-amber-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-yellow-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-lime-50 p-24 rounded-md border border-black/5'>

                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='bg-blue-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-green-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-yellow-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-yellow-50 p-24 rounded-md border border-black/5'>

                </div>
            </div>

            <div>
                <div className='flex justify-between gap-10'>
                    <div className='w-96 bg-sky-50 rounded-md'>

                    </div>
                    <div className='w-72 h-72 bg-teal-50 rounded-full'>

                    </div>
                    <div className='w-72 h-72 bg-cyan-50 rounded-full'>

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-red-50 p-24 rounded-md border border-black/5'>

                </div>
                <div className='bg-orange-50 p-24 rounded-md border border-black/5'>

                </div>

            </div>

        </div>
    )
}

export default DemoBox