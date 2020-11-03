import React from 'react'

// **********************
//  Parameters

// 1. optional
//   a. classes(all TailwindCSS classes)
//   c. position(top,bottom,left,right)
//   d. theme(danger,warning,info,primary,light,secondary,success)

// 2. required
//   a. children
// **********************

const Drawer = ({isOpen, position="right", close, theme="light", children}) => {
    const themeBg = {
        'danger': ` bg-red-500 text-white`,
        'warning': ` bg-yellow-400 text-white`,
        'info': ` bg-blue-400 text-white`,
        'success': ` bg-green-400 text-white`,
        'secondary': ` bg-gray-600 text-white`,
        'dark': ` bg-gray-900 text-white`,
        'light': ` bg-white`,
        'primary': ` bg-indigo-400 text-white`,
    }
    let classes = themeBg[theme] + " fixed z-50 p-10 transform transition ease-in-out duration-500 sm:duration-700";
    switch (position) {
        case "right":
            classes += ' top-0 bottom-0 right-0 ';
            break;
        case "left":
            classes += ' top-0 bottom-0 left-0 ';
            break;
        case "top":
            classes += ' top-0 left-0 right-0 ';
            break;
        case "bottom":
            classes += ' bottom-0 left-0 right-0 ';
            break;
        default:
            classes += ' top-0 bottom-0 right-0 ';
            break;
    }

    if(!isOpen){
        if(position === "left"){
            classes += " -translate-x-full";
        }else{
            classes += " translate-x-full";
        }
    }

        return (
            <div className={classes}>
                <span className="absolute top-0 right-0 mb-5 ml-0 cursor-pointer transition rounded-sm ease-in-out duration-500 hover:bg-gray-900" onClick={()=>close()}>
                    <svg fill="currentColor" className="h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
                </span>
                {children}
            </div>
        )
}

export default Drawer
