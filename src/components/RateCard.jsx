import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const RateCard = () => {
   const itemSelected = "w-12 h-12 bg-gray-700 rounded-full flex justify-center items-center bg-orange text-proWhite cursor-pointer";
   const itemNotSelected =
      "w-12 h-12 bg-gray-700 hover:bg-ligthGray rounded-full flex justify-center items-center text-ligthGray hover:text-proWhite cursor-pointer";
   const [rate, setRate] = useState(null);
   const select = (rate) => {
      setRate(rate);
   };
   return (
      <div className='w-[350px] h-[350px] bg-darkBlue rounded-3xl flex flex-col items-start justify-between p-6'>
         <div className='rounded-full w-12 h-12 bg-gray-700 flex justify-center items-center'>
            <AiFillStar className='fill-orange w-6 h-6'></AiFillStar>
         </div>
         <div>
            <h1 className='font-bold text-2xl text-proWhite pb-2'>How did we do?</h1>
            <p className='text-[15px] text-ligthGray'>
               Please let us know how we did with your support request. All feedback is apperciated to help us improve our offering.
            </p>
         </div>
         <div className='flex justify-between w-full'>
            <div
               className={rate == 1 ? itemSelected : itemNotSelected}
               onClick={() => {
                  select(1);
               }}
            >
               <h1 className=''>1</h1>
            </div>
            <div
               className={rate == 2 ? itemSelected : itemNotSelected}
               onClick={() => {
                  select(2);
               }}
            >
               <h1 className=''>2</h1>
            </div>
            <div
               className={rate == 3 ? itemSelected : itemNotSelected}
               onClick={() => {
                  select(3);
               }}
            >
               <h1 className=''>3</h1>
            </div>
            <div
               className={rate == 4 ? itemSelected : itemNotSelected}
               onClick={() => {
                  select(4);
               }}
            >
               <h1 className=''>4</h1>
            </div>
            <div
               className={rate == 5 ? itemSelected : itemNotSelected}
               onClick={() => {
                  select(5);
               }}
            >
               <h1 className=''>5</h1>
            </div>
         </div>
         <NavLink to={`${rate}`} className='w-full'>
            <div className='rounded-3xl w-full py-2 font-semibold text-center bg-orange hover:bg-proWhite text-proWhite hover:text-orange cursor-pointer'>
               <h1>SUBMIT</h1>
            </div>
         </NavLink>
      </div>
   );
};

export default RateCard;
