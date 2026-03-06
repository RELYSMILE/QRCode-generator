import React from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'
import { db } from './Servers/Config/Database'

const QRcode = () => {
  return (
    <div>
      <QRCode value='http://localhost:1000/verify/MBI-123456789' size={150} />
      <Link to={'/verify'}>Verify</Link>
    </div>
  )
}

export default QRcode
