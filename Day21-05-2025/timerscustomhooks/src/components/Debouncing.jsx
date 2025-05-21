import React, { useEffect, useState } from 'react'
function useDebounce(value){
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, 1000)

        return () => clearTimeout(timer)
    }, [value])

    return debouncedValue
}
export default function Debouncing() {
    const [inputValue, setInputValue] = useState('')
    // const [data,setData]=useState('')
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setData(inputValue)
    //     }, 1000)

    //     return () => clearTimeout(timer)
    // }, [inputValue])
    let debounce=useDebounce(inputValue)
  return (
    <div>
        <h1>Debouncing</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>{debounce}</p>
    </div>
  )
}
