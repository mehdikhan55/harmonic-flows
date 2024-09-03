import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'
import { toast } from 'sonner'

function DcoumentHeader() {
  // Function to copy the current URL to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success('Link copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }

  return (
    <div className='flex justify-between items-center p-3 px-7 shadow-md'>
        <div></div>
        <OrganizationSwitcher/>
        <div className='flex gap-2'>
          <Button onClick={copyToClipboard}>Share</Button>
          <UserButton/>
        </div>
    </div>
  )
}

export default DcoumentHeader
