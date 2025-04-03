// import PostDetail from '@/components/id'
import {notFound} from 'next/navigation';
import Link from 'next/link';
import React from 'react'



export async function generateMetadata({params}) {
  const { id } =  params;
  
  return {
    title:`Profile ${id} | Blogs Town`
  };
}

const page = async({params}) => {
  const { id } = await params;
 
  if(!/^\d+$/.test(id)){
  notFound();
}
  return (
    <div>
        {/* <PostDetail params={params}/> */}
        <div className="text-white space-y-4 p-4">

          <div>
       <h1>Post Details</h1>
     <p>Post ID: {id}</p>
     </div>
       <p>
          <Link href={`/profile/${id}/comments`} className=' bg-teal-900 rounded-xl p-2 '>Open Comments Section</Link>
        </p>
    </div>
    </div>
  )
}

export default page