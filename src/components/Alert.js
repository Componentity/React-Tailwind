import React from 'react'


// **********************
//  Parameters

// 1. optional
//   a. classes(all TailwindCSS classes)
//   b. timeout(500,600,...)
//   c. position(topRight,topLeft,bottomRight,bottomLeft)
//   d. type (simple,bordered)

// 2. required
//   a. message (String 64)
//   b. theme(danger,warning,info,primary,light,secondary,success)
// **********************


const Alert = ({message="No Content Alert!", isOpen, close, theme="danger", type, timeout, position="relative", classes}) => {
    let colorSchema = {}

    if(type === "simple"){
        const common = "rounded text-white shadow-lg";
        colorSchema = {
            'danger': `bg-red-600 ${common}`,
            'warning': `bg-yellow-500 ${common}`,
            'info': `bg-blue-300 ${common}`,
            'success': `bg-green-600 ${common}`,
            'secondary': `bg-gray-600 ${common}`,
            'light': `bg-gray-100 ${common}`,
            'primary': `bg-indigo-600 ${common}`,
        }
    }else if(type === "bordered"){
        const common = "shadow-sm border-4 border-r-0 border-t-0 border-b-0 text-gray-600";
        colorSchema = {
            'danger': `border-red-600 ${common}`,
            'warning': `border-yellow-500 ${common}`,
            'info': `border-blue-300 ${common}`,
            'success': `border-green-600 ${common}`,
            'secondary': `border-gray-600 ${common}`,
            'light': `border-gray-100 ${common}`,
            'primary': `border-indigo-600 ${common}`,
        }
    }else{
        const common = "shadow-sm border-4 border-r-0 border-t-0 border-b-0 text-gray-600";
        colorSchema = {
            'danger': `border-red-600 ${common}`,
            'warning': `border-yellow-500 ${common}`,
            'info': `border-blue-300 ${common}`,
            'success': `border-green-600 ${common}`,
            'secondary': `border-gray-600 ${common}`,
            'light': `border-gray-100 ${common}`,
            'primary': `border-indigo-600 ${common}`,
        }
    }

    const fixedPosition = {
        'relative': '',
        'topRight': 'm-10 fixed top-0 right-0',
        'topLeft': 'm-10 fixed top-0 left-0',
        'bottomRight': 'm-10 fixed bottom-0 right-0',
        'bottomLeft': 'm-10 fixed bottom-0 left-0'
    }

    // ****************************
    // BUG - run only once please
    // ****************************
    // useEffect(() => {
    //     if(timeout){
    //         setInterval(() => {
    //             closeAlert();
    //         }, timeout);
    //     }
    // }, [timeout]);

    if (!isOpen) {
        return <></>;
    }else{
        return (
            <div className={`p-4 flex justify-between items-center ${classes} ${fixedPosition[position]} ${colorSchema[theme]}`}>
                <span>{ message }</span>
                <span className="ml-10 cursor-pointer" onClick={()=>close()}>
                    <svg fill="currentColor" className="h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
                </span>
            </div>
        )
    }
}

export default Alert
