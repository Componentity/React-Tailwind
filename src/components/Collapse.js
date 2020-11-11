import React from 'react'

const Collapse = ({ isOpen, children, classes }) => {
  if (!classes) {
    classes = 'transform transition-all ease-in-out duration-500'
  }
  if (isOpen) {
    classes += ' h-full '
  } else {
    classes += ' -translate-y-full h-0'
  }

  return (
    <div className="overflow-hidden">
      <div className={classes}>{children}</div>
    </div>
  )
}

export default Collapse
