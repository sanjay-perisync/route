import Link from 'next/link';
// import { notFound } from 'next/navigation';
import React from 'react'
// import Comments from '@/components/comments'

const  page = async ({params}) => {
 
  const { id } = params;
// if(!/^\+$/.test(id)){
//   notFound();
// }

  //  console.log( id);
 
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