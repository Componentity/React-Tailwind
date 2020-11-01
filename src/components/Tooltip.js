import React, { useState } from 'react'

// **********************
//  Parameters

// 1. optional
//   a. classes(all TailwindCSS classes)

// 2. required
//   a. label (String 64)
//   b. theme(danger,warning,info,primary,light,secondary,success)
// **********************

const Tooltip = ({ label, children, theme, classes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onHover = () => {
    setIsOpen(!isOpen)
  }

  const themeBg = {
    'danger': ` bg-red-100 text-white`,
    'warning': ` bg-yellow-100 text-white`,
    'info': ` bg-blue-100 text-white`,
    'success': ` bg-green-100 text-white`,
    'secondary': ` bg-gray-100 text-white`,
    'light': ` bg-white`,
    'primary': ` bg-indigo-600 text-white`,
  }

  //   tooltip classes
  let defaultClasses = 'absolute'
  let tooltipClasses =
    classes !== undefined
      ? `${defaultClasses} ${classes}`
      : 'absolute top-0 -mt-10 px-3 py-2 rounded w-48 text-center'
      tooltipClasses += themeBg[theme]
  tooltipClasses += isOpen ? '' : ' invisible '
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
