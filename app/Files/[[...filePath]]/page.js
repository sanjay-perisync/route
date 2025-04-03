import React from 'react'
// import Files from '@/components/files';

export const metadata={
  title:"Files"
};


const FilePage  = async ({params}) => {
  const {filePath} = await params;
 
  return (
    <div>
        <h1 
        className='text-2xl'>File <i>/{filePath?.join("/")}</i>
        </h1>
    </div>
  )
}


export default FilePage 


