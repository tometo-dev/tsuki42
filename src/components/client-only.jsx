import React, { useEffect, useState } from "react"

const ClientOnly = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? children : null
}

export default ClientOnly
