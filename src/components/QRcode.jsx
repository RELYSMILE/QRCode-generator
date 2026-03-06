import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'
import { db } from './Servers/Config/Database'
import { doc, getDoc } from 'firebase/firestore'

const QRcode = () => {
  const [ticket, setTicket] = useState(null)
  useEffect(() => {
    const fetchTicketCode = async() => {
      try{
       const ticketRef = await getDoc(doc(db, 'tickets', 'mIDToqeF2oPW3j5lkkAj'))
       if(ticketRef.exists()){
        setTicket(ticketRef.data())
       }

      }catch(err){
        console.log(err.message)
      }
    }
    fetchTicketCode()
  }, [])
  return (
    <div>
      <QRCode value={`https://qrcode-generator-generic.netlify.app/verify/${ticket?.code}`} size={150} />
      <Link to={`verify/${ticket?.code}`}>Verify</Link>
      <div>{ticket?.code}</div>
      <div>{ticket?.status}</div>
    </div>
  )
}

export default QRcode
