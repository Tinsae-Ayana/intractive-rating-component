import { useLoaderData } from "react-router-dom";

const ThankYouCard = () => {
   const rate = useLoaderData();

   return (
      <div className='w-[350px] h-[350px] bg-darkBlue rounded-3xl flex flex-col items-center justify-around p-6'>
         <img className='h-20' src='assets/illustration-thank-you.svg' alt='' />
         <div className='bg-gray-700 rounded-xl py-1 text-center px-4 text-orange'>
            <h1>You selected {rate} out of 5</h1>
         </div>
         <div>
            <h1 className='text-3xl font-semibold text-proWhite text-center pb-4'>Thank You!</h1>
            <p className='text-[15px] text-ligthGray text-center'>
               We appreciate you taking the time to give us rating if you ever need more support, don't hesitate to get in touch!
            </p>
         </div>
      </div>
   );
};

export default ThankYouCard;

export const loader = ({ params }) => {
   return params.rateValue;
};
