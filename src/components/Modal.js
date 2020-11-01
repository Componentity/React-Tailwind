import React from 'react'

const Modal = ({title, icon, size, isOpen, closeModal, theme, children}) => {
    const svgBg = {
        'danger': `bg-red-100`,
        'warning': `bg-yellow-100`,
        'info': `bg-blue-100`,
        'success': `bg-green-100`,
        'secondary': `bg-gray-100`,
        'light': `bg-white`,
        'primary': `bg-indigo-100`,
    }
    const svgColor = {
        'danger': `text-red-600`,
        'warning': `text-yellow-600`,
        'info': `text-blue-300`,
        'success': `text-green-600`,
        'secondary': `text-gray-600`,
        'light': `text-gray-100`,
        'primary': `text-indigo-600`,
    }

    const modalWidth = {
        'xl': `lg:max-w-6xl md:max-w-xl`,
        'lg': `lg:max-w-4xl md:max-w-xl`,
        'md': `lg:max-w-3xl md:max-w-xl`,
        'sm': `lg:max-w-xl md:max-w-lg`,
    }

    if (!isOpen) {
        return null;
    }else{
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div onClick={()=>closeModal()} className="absolute inset-0 bg-gray-200 opacity-75"></div>
                    </div>

                    <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${modalWidth[size]} sm:max-w-lg sm:w-full`} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 ${svgBg[theme]}`}>
                            <svg className={`h-6 w-6 ${svgColor[theme]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                            {title}
                            </h3>
                            <div className="mt-2">
                            <div className="text-sm leading-5 text-gray-500">
                                {children}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
