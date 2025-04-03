import Link from 'next/link';
import React from 'react'
// import Comments from '@/components/comments'

const  page = async ({params}) => {
  // const paramsObj=await params;
  const { id } = params;
  // console.log(paramsObj);

   console.log( id);
 
  return (
    <div className='p-4'>
       <div className="text-white pb-4">
        All Comments on <b>{id}</b> page
      </div>

      <Link href={`/profile/${id}/comments/${id}`} className=' bg-teal-900 rounded-xl p-2'>View This Page</Link>

    </div>
  )
}

export default page