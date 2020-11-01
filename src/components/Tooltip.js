import React, { useState } from 'react'

const Tooltip = ({ label, children, classes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onHover = () => {
    setIsOpen(!isOpen)
  }

  //   tooltip classes
  let defaultClasses = 'absolute'
  let tooltipClasses =
    classes !== undefined
      ? `${defaultClasses} ${classes}`
      : 'absolute top-0 -mt-10 bg-black px-3 py-2 rounded text-white w-48 text-center'
  tooltipClasses += isOpen ? '' : ' invisible'
  // end tooltip classes
  return (
    <div
      onMouseOver={() => onHover()}
      onMouseLeave={() => onHover()}
      className={'relative cursor-pointer'}
    >
      <div className={tooltipClasses}>{label}</div>
      <div>{children}</div>
    </div>
  )
}

export default Tooltip
