import React from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'
import { db } from './Servers/Config/Database'

const QRcode = () => {
  return (
    <div>
      <QRCode value='https://qrcode-generator-generic.netlify.app/verify' size={150} />
    </div>
  )
}

export default QRcode
