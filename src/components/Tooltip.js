import React from 'react'

const Tooltip = ({label, children, classes}) => {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Tooltip
