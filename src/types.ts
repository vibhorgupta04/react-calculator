import React from 'react'
export type count = {
  setValue?: React.Dispatch<React.SetStateAction<number>>
  value: number
  incrementCount: (e: string) => void
  decrementCount: () => void
}