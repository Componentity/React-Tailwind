import React, { useState } from 'react'

// **********************
//  Parameters

// 1. optional
//   a. classes(all TailwindCSS classes)

// 2. required
//   a. text (String 64)
//   b. theme(danger,warning,info,primary,light,secondary,success)
// **********************

const Badge = ({ text, theme, classes }) => {

  const themeBg = {
    danger: ' bg-red-600 text-white',
    warning: ' bg-yellow-500 text-white',
    info: ' bg-blue-400 text-white',
    success: ' bg-green-600 text-white',
    secondary: ' bg-gray-600 text-white',
    light: ' bg-white',
    primary: ' bg-indigo-600 text-white',
  }
  //   badge classes
  let defaultClasses = 'absolute'
  let badgeClasses =
    classes !== undefined
      ? `${defaultClasses} ${classes}`
      : 'absolute mt-25 px-3 py-1 rounded w-30 text-center'
  badgeClasses += themeBg[theme]
  // end badges classes
console.log(badgeClasses)
  return (
    <div>
      <div  className={badgeClasses}>
      <div>{text}</div>
    </div>
    </div>
  )
}

export default Badge
