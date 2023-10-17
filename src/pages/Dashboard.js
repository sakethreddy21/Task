import React from 'react';
import {AiOutlineSearch,AiOutlineDown} from 'react-icons/ai'
import {HiArrowTrendingUp} from 'react-icons/hi2'
import {LiaRupeeSignSolid} from 'react-icons/lia'
import {IoIosArrowBack,IoIosArrowForward,IoIosNotifications} from 'react-icons/io'
import {BsFillPeopleFill} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import {Doughnut} from 'react-chartjs-2'
import {ArcElement,Chart} from 'chart.js'

Chart.register(ArcElement);

  const data = {
      datasets: [{
        label: 'My First Dataset',
        data: [20000, 250000, 100000,500000],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
          'rgb(60,179,113)',
       ],
       radius: '90%',
    options:{
       
      
    }

  }]
};
  const config={
    type:'doughnut',
    data: data,
  };
   

const Dashboard = () => {

    

    return (
        <div className=' h-full w-[5/6]'>
            <div className='flex justify-between mt-10 mx-4   '>
               <div className='mr-96'><AiOutlineSearch size={25}/></div> 
               <div className='  flex  gap-5 ml-96'>
                   <button className='pl-80'>uk </button>
                   <button className='flex '><div className='bg-red-600 text-white rounded-full z-20'>8</div><div className='z-10'><IoIosNotifications size={20}/></div></button>
                   <button><BsFillPeopleFill size={20}/></button>
                   <button><RxAvatar size={20}/></button>
               </div>
            </div>
            <div className='mt-4 mx-4 font-medium text-xl'>Client Management</div>
            <div className='flex gap-10 m-4'>
                <h1 className='border-b-2 border-green-600 '>Dashboard</h1>
                <h2 className='text-gray-500'>Client Details</h2>
            </div>
            <div className='w-full flex justify-between'>
            <div className='ml-6 mr-6'>
                <div className='pb-2 pl-4 font-bold'>Key Performance Indicator</div>
                <div className='w-[3/5] h-28 border-2 border-slate-200 rounded-md flex gap-4'>
                    <div className='ml-4 my-4 border-l-4 p-1 border-blue-900 '>
                        <h1 className='font-bold pb-2'>Client Retention Rate</h1>
                        <h2 className='font-bold text-blue-800 text-xl'>55%</h2>
                    </div>
                    <div className='ml-4 my-4 border-l-4 p-1 border-blue-600'>
                        <h1 className='font-bold pb-2'>Client Satisfaction</h1>
                        <h2 className='font-bold text-blue-600 text-xl'>55%</h2>
                    </div>
                    <div className='ml-4 my-4 border-l-4 p-1 border-green-900'>
                        <h1 className='font-bold pb-2'>Revenue Generated</h1>
                        <h2 className='font-bold text-green-800 text-xl'>55%</h2>
                    </div>
                </div>
            </div>

            <div className='ml-6 mr-6'>
                <div className='pb-2 pl-4 font-bold'>Companies Status</div>
                <div className='w-[1/5] h-28 border-2 border-slate-200 rounded-md flex gap-4 p-2'>
                    <div className='ml-4 my-4 border-l-4 p-1 border-blue-900'>
                        <h1 className='font-bold pb-2'>Total</h1>
                        <h2 className='font-bold text-blue-900 text-xl'>20</h2>
                    </div>
                    <div className='ml-4 my-4 border-l-4 p-1 border-green-900'>
                        <h1 className='font-bold pb-2'>Active</h1>
                        <h2 className='font-bold text-green-800 text-xl'>15</h2>
                    </div>
                    <div className='ml-4 my-4 border-l-4 p-1 border-blue-600'>
                        <h1 className='font-bold pb-2'>New</h1>
                        <h2 className='font-bold text-blue-600 text-xl'>3</h2>
                    </div>
                </div>
            </div>

            <div className='ml-6 mr-6'>
                <div className='pb-2 pl-4 font-bold'>Active User Base</div>
                <div className='w-[1/5] h-28 border-2 border-slate-200 rounded-md p-2'>
                    <div className='flex gap-2'>
                        <div >
                    <div
        className="w-3 h-3 ml-2 mt-2 bg-blue-900 rounded-full absolute "
       /><div className='pl-6'>89 % App User</div>
                    </div>
                    <div>
                    <div
        className="w-3 h-3  mt-2 bg-green-600 rounded-full absolute "
       /><div className='pl-6'>11 % App User</div>
                    </div>
                    </div>
                    <div className='flex gap-4'>
                    <div className='bg-blue-900 h-4 w-48 rounded-lg mt-8'></div>
                    <div className='bg-green-600 h-4 w-14 rounded-lg mt-8'></div>
                    </div>
                    
                </div>
                
            </div>
    
            
            
            </div>
            <div className='flex'>
          <div>
            <div className='flex'>
            <div className=''>
                <div className='ml-4 mt-6 font-bold  '>
                    Onboarded Companies
                </div>
                <div className='border-2 border-slate-200 ml-4 w-[700px] mt-2  '></div>
                
                <div className='flex'>

                <div className='ml-4 mt-4 w-28 h-10 p-2 border-2  border-gray-200 rounded-md relative block '>
                <span
    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 "
  >
    Service type
  </span><select>
          <option>All</option>
          <option>one</option>
          <option>two</option>
          <option>threerrrrr</option>
          </select></div>
            
          <div className="bg-white rounded-md flex items-center px-2 h-10 mt-4 ml-6 w-[560px] border-2 border-gray-200 ">
        <AiOutlineSearch size={20} color="gray" />
        <input
          className="bg-transparent  w-full focus:outline-none"
          type="text"
          placeholder="Search client or invoice number..."
        />
      </div>
      </div>
      
       <div className='mt-4 w-[700px] ml-4'>
<div className="relative ">
    <table className="w-full text-sm text-left  ">
        <thead className="text-xs ">
            <tr>
                <th scope="col" className="pl-5 py-3">
                    Company Name
                </th>
                <th scope="col" class="pl-3 py-3">
                    Onboarding Date
                </th>
                <th scope="col" className="pl-3 py-3">
                    Go-Live Date
                </th>
                <th scope="col"className="pl-3 py-3">
                    Total User base
                </th>
                <th scope="col" className="pl-3 py-3">
                    Last Billing
                </th>
                <th scope="col" className="pl-3 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <th scope="row" className='bg-violet-100 pl-2'>
                    <div className='flex gap-2'>
                    <div className='bg-blue-900 text-white rounded-full text-center pt-2 w-9 h-9' ><span className='border-2 border-white p-0.5'>TC</span></div>
                    <div><div className='text-sm font-medium'>Texlaculture</div>
                    <div className='text-xs font-normal'>INV-17048</div></div>
                    </div>
                    
                </th>
                <td className="pl-3 py-4">
                    12 Jan 2022
                </td>
                <td className="pl-3 py-4">
                    07 Aug 2022
                </td>
                <td className="pl-3 py-4">
                    244
                </td>
                <td className="pl-3 py-4">
                    07 Aug 2022
                </td>
                <td className="pl-3 py-4   text-green-800 ">
                    <div className='h-6 w-12 px-1 rounded-md font-medium bg-green-200'>
                    Active</div>
                </td>
            </tr>
            <tr >
                <th scope="row" className='bg-green-100 pl-2'>
                    <div className='flex gap-2'>
                    <div className='bg-blue-900 text-white rounded-full text-center pt-2 w-9 h-9' ><span className='border-2 border-white p-0.5'>TC</span></div>
                    <div><div className='text-sm font-medium'>Pinch Life</div>
                    <div className='text-xs font-normal'>INV-17049</div></div>
                    </div>
                    
                </th>
                <td className="pl-3 py-4">
                    11 Feb 2022
                </td>
                <td className="pl-3 py-4">
                    06 May 2022
                </td>
                <td className="pl-3 py-4">
                    1000
                </td>
                <td className="pl-3 py-4">
                    07 Aug 2022
                </td>
                <td className="pl-3 py-4   text-green-800 font-medium">
                    <div className='h-6 w-12 px-1 rounded-md bg-green-200'>
                    Active</div>
                </td>
            </tr>
            <tr >
                <th scope="row" className='bg-yellow-100 pl-2'>
                    <div className='flex gap-2'>
                    <div className='bg-blue-900 text-white rounded-full text-center pt-2 w-9 h-9' ><span className='border-2 border-white p-0.5'>TC</span></div>
                    <div><div className='text-sm font-medium'>O Buddy</div>
                    <div className='text-xs font-normal'>INV-13042</div></div>
                    </div>
                    
                </th>
                <td className="pl-3 py-4">
                    10 Sep 2022
                </td>
                <td className="pl-3 py-4">
                    05 Oct 2022
                </td>
                <td className="pl-3 py-4">
                    150
                </td>
                <td className="pl-3 py-4">
                    207 Aug 2022
                </td>
                <td className="pl-3 py-4  font-medium  ">
                    <div className='h-6 w-12 px-1 rounded-md bg-gray-200'>
                    Draft</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div className='border-2 border-slate-200 ml-4 w-[700px]  '></div>

<div className='flex justify-between w-[700px]'>
    <div >
        <div className='flex'>
        <div className="w-7 h-4 border-2 mt-3 ml-6  bg-gray-400 rounded-lg flex items-center justify-between  relative cursor-pointer " >
      
      <div
        className="w-3 h-3 bg-white rounded-full absolute"
       />
    </div>
    <div className='ml-4 mt-2'>Dense</div>
        </div>
    </div>
<div className='flex mt-2 gap-4'>
    <div>Rows per page:</div>
    <div className='flex'><div>5</div>
       <div className='pt-1'><AiOutlineDown /></div>
    </div>
    <div>6-10 of 11</div>
    <div className='pt-1'><IoIosArrowBack color="gray"/></div>
    <div className='pt-1'><IoIosArrowForward /></div>
</div>
</div>
</div>
<div>
<div className='mt-6 font-medium text-lg ml-20'>Regional Metrics</div>
<div className='border-2 border-gray-200 w-[470px] h-80 mt-2 rounded-lg px-6 ml-20'>
<div className='relative'>
                    <div className=''>
                      <div className='flex gap-7 '>
                          <div>
                          <div className='flex'> <div className=' '>East</div><div
        className="w-3 h-3 ml-10 mt-2 bg-yellow-400 rounded-full absolute "
       /></div>
       
                      </div>
                      <div>
                          <div className='flex'> <div className=' '>North</div><div
        className="w-3 h-3 ml-12 mt-2 bg-green-600 rounded-full absolute "
       /></div>
       
                      </div>
                      <div>
                          <div className='flex'> <div className=' '>South</div><div
        className="w-3 h-3 ml-12 mt-2 bg-red-500 rounded-full absolute "
       /></div>
       
                      </div>
                      <div>
                          <div className='flex'> <div className=' '>West</div><div
        className="w-3 h-3 ml-12 mt-2 bg-blue-500 rounded-full absolute "
       /></div>
       
                      </div>
                      </div>
                     <div className='w-60 h-60'><Doughnut  {...config} ></Doughnut></div>
                        
                      
                    
                    
                </div></div>
                <div className='flex'>
                <div className='border-2 border-gray-200 w-32 rounded-lg px-2'>
                   <div>6 Clients</div>
                   <div className='flex gap-2'>
                   <div><HiArrowTrendingUp color="blue"/></div>
                   <div className='text-blue-600 flex'><LiaRupeeSignSolid color="blue" size={15} className='mt-1'/>250000</div>
                   </div>
                </div>  
                <div className='border-2 border-gray-200 w-32 rounded-lg px-2 '>
                   <div>5 Clients</div>
                   <div className='flex gap-2'>
                   <div><HiArrowTrendingUp color="blue"/></div>
                   <div className='text-blue-600 flex'><LiaRupeeSignSolid color="blue" size={15} className='mt-1'/>100000</div>
                   </div>
                </div>  
                <div className='border-2 border-gray-200 w-32 rounded-lg px-2'>
                   <div>1 Clients</div>
                   <div className='flex gap-2'>
                   <div><HiArrowTrendingUp color="blue"/></div>
                   <div className='text-blue-600 flex'><LiaRupeeSignSolid color="blue" size={15} className='mt-1'/>20000</div>
                   </div>
                </div>  
                <div className='border-2 border-gray-200 w-32 rounded-lg px-2'>
                   <div>20 Clients</div>
                   <div className='flex gap-2'>
                   <div><HiArrowTrendingUp color="blue"/></div>
                   <div className='text-blue-600 flex'><LiaRupeeSignSolid color="blue" size={15} className='mt-1'/>5000000</div>
                   </div>
                </div>  
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Dashboard;