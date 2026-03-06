import React from 'react'
import QRCode from 'react-qr-code'
import { db } from './Servers/Config/Database'

const QRcode = () => {
  return (
    <QRCode value='http://localhost:1000/verify/MBI-123456789' size={150} />
  )
}

export default QRcode
