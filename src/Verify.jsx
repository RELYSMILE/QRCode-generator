import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './components/Servers/Config/Database'


const Verify = () => {
  const {id} = useParams()
  const [ticketCode, setTicketCode] = useState(null)
    useEffect(() => {
      const fetchTicketCode = async() => {
        try{
         const ticketRef = await getDoc(doc(db, 'tickets', id))
         if(ticketRef.exists()){
          setTicketCode(ticketRef.data())
         }
  
        }catch(err){
          console.log(err.message)
        }
      }
      fetchTicketCode()
    }, [])
  return (
    <div>
      {ticketCode?.id}
      {ticketCode?.code}
      {ticketCode? 'success' : 'Used'}
    </div>
  )
}

export default Verify
