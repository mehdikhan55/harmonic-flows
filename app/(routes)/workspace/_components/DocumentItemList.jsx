"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function DocumentItemList({workspaceDocList,workspaceid}) {

  
  const router=useRouter();
  const OnClickWorkspaceDocItem=(workspaceDocId)=>{
      router.push('/workspace/'+workspaceid+ '/'+workspaceDocId)
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
    {workspaceDocList&&workspaceDocList.map((workspaceDoc,index)=>(
        <div key={index} className='border shadow-xl rounded-xl
        hover:scale-105 transition-all cursor-pointer'
        onClick={()=> OnClickWorkspaceDocItem(workspaceDoc.id)}
        >
            <Image src={workspaceDoc?.coverImage || '/cover.png'} 
            width={400} height={200} alt='cover'
            className='h-[150px] object-cover rounded-t-xl'
            />
            <div className='p-4 rounded-b-xl'>
                <h2 className='flex gap-2'>{workspaceDoc?.emoji} {workspaceDoc.documentName}</h2>
            </div>
        </div>
    ))}
</div>
  )
}

export default DocumentItemList