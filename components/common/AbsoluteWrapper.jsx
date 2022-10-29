import React from 'react'

export default function AbsoluteWrapper({bgColor}) {
  return (
    <span className={`${bgColor} w-full h-full top-0 left-0 right-0 bottom-0 z-[-5] absolute`}></span>
  )
}
