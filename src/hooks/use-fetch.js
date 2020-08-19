import { useState, useEffect, useRef } from "react"
import axios from "axios"

export const useFetch = ({ url, config }) => {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
  })

  const isMounted = useRef()

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(url, {
          ...config,
        })
        .then((res) => res.json())
        .then((res) => {
          setState({
            isLoading: false,
            data: res,
          })
        })
        .catch((err) => {
          console.log(`Error in fetch: ${err}`)
        })
    }
  }, [url, config])

  return state
}
