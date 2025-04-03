import React from 'react'

const page = async({params}) => {
  const paramsObj = await params;
  const { id:pageID, commentID } = paramsObj;
  console.log(paramsObj);

 
  
  return (
    <div className='p-4'>
      Comment No. <i>{commentID}</i> on <b>{pageID}</b> page
    </div>
  );
}

export default page