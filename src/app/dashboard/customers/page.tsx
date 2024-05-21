export default function Page() {
  return (
    <div className='space-y-4'>

      <div>
        <div className='flex justify-between gap-10'>
          <div className='w-96 bg-sky-100 rounded-md'>

          </div>
          <div className='w-72 h-72 bg-teal-100 rounded-full'>

          </div>
          <div className='w-72 h-72 bg-cyan-100 rounded-full'>

          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-blue-100 p-24 rounded-md border border-black/5'>

        </div>
        <div className='bg-green-100 p-24 rounded-md border border-black/5'>

        </div>
        <div className='bg-yellow-100 p-24 rounded-md border border-black/5'>

        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-red-100 p-24 rounded-md border border-black/5'>

        </div>
        <div className='bg-orange-100 p-24 rounded-md border border-black/5'>

        </div>

      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-amber-100 p-24 rounded-md border border-black/5'>

        </div>
        <div className='bg-yellow-100 p-24 rounded-md border border-black/5'>

        </div>
        <div className='bg-lime-100 p-24 rounded-md border border-black/5'>

        </div>
      </div>
    </div>
  )
}