import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Verify = () => {
  const code = useParams()
  // const [ticketCode, setTicketCode] = useState(code)
  return (
    <div>
      Success {code.code}
    </div>
  )
}

export default Verify
