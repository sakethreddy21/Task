import React from 'react';
import {BiSolidBank} from 'react-icons/bi'
import {AiOutlineRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    
    
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
        },
        {
            path:"/companies",
            name:"Companies",
        },
        {
            path:"/support",
            name:"Support & Tickets",
        },
        {
            path:"/user",
            name:"User Admins",
        },
        
    ]
    return (
        <div className="flex  ">
            
            <div className=' border-x-2 border-x-slate w-1/6 h-screen '>
            <div className='text-center my-10  mx-2 text-2xl font-medium text-blue-800'><span className='border-solid border-2 border-blue-800 p-1 mr-1'>TEXLA</span>CULTURE</div>
           <div  className=" text-gray-600  transition duration-700 ease-in-out">
               <div className="flex items-center py-4 px-3">
                   <h1  className="mt-8">General</h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex p-2  transition duration-700 ease-in-out  " >
                           <div  className=' flex justify-between '>
                               <button className='  bg-slate-300 p-1 rounded-full'><BiSolidBank size={18} /></button>
                           <div >{item.name}</div>
                           <div className='pt-1 '><AiOutlineRight size={18} className=""/></div>
                           </div>
                       </NavLink>
                   ))
               }
           </div>
           </div>
           <main>{children}</main>
        </div>
        
    );
};

export default Sidebar;