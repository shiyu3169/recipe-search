import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T),
) => {
  const [value, setValue] = useState<T>(() => {
    // THis is necessary for next.js
    if (typeof window === 'undefined') return null
    const jsonValue = localStorage.getItem(key)
    return jsonValue
      ? JSON.parse(jsonValue)
      : typeof initialValue === 'function'
      ? (initialValue as () => T)()
      : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}
