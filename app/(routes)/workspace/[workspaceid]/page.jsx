'use client'
import React, { useState } from 'react'
import SideNav from '../_components/SideNav'
import { Room } from '@/app/Room'
import { db } from '@/config/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import DocumentList from '../_components/DocumentList';
import DocumentItemList from '../_components/DocumentItemList';

function Workspace({ params }) {
  const { workspaceid } = params;
  const [workspaceDocs, setWorkspaceDocs] = useState([]);

  React.useEffect(() => {
    // Creating a query 
    const q = query(collection(db, 'workspaceDocuments'), where('workspaceId', '==', Number(workspaceid)));
    
    // Setting up real-time listener
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setWorkspaceDocs(data);
    });

    // Cleanup the listener on unmount or when workspaceid changes
    return () => unsubscribe();

  }, [workspaceid]); 

  return (
    <div>
      <Room params={params}>
        <SideNav params={params} />
        <div className="flex-1 md:ml-72">
         
        <DocumentItemList workspaceDocList={workspaceDocs} workspaceid={workspaceid} />

        </div>
      </Room>
    </div>
  )
}

export default Workspace