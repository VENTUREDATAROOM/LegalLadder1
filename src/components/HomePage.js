
import { Outlet } from 'react-router-dom';

import DashBoardSide from './DashBoardSide';





const HomePage = () => {

     return (
          <div className='flex h-screen overflow-hidden'>  
               <DashBoardSide/>
               <div className='flex-1 overflow-y-auto  bg-white ' >
                  <Outlet/>
               </div>
          </div>

     )
}

export default HomePage;


