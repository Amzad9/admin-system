import React from 'react'
import { IoIosClose } from "react-icons/io";
const Drawer = ({children, id}) => {
    return (
        <div className="drawer drawer-end z-50">
            <input id={id} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            </div>
            <div className="drawer-side">
                <label htmlFor={id} aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <div className='flex justify-between items-center'>
                <h4 className='text-xl font-thin'>User Form</h4>    
                <label htmlFor={id} className="btn btn-circle"><IoIosClose size="24"   /></label>
                </div>
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default Drawer