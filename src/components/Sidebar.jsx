import React from 'react';
import '../components/css/Sidebar.css';


import { SidebarData } from '../assets/Data/Data';

function Sidebar() {
   return (
      <div className="sidebar">
         {/* // logo  */}
         <div className="logo">
            <img
               src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-donations-shopping-carts-forms-membershipworks-21.png"
               alt=""
            />
            <span>
               Sh
               <span>o</span>ps
            </span>
         </div>
         <div className="menu">
          {
SidebarData.map((item)=>{
     <div className="menuItem" key={item.id}>
          <item.icon/>
          <span>{item.heading}</span>
     </div>

})
          }
         </div>
      </div>
   );
}

export default Sidebar;
