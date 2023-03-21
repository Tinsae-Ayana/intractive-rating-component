import { Outlet } from "react-router-dom";

export default function App() {
   return (
      <div className='h-screen w-screen bg-veryDarkBlue flex justify-center items-center'>
         <Outlet></Outlet>
      </div>
   );
}
