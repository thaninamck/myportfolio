import React from "react";
import { FaLinkedin , FaGithub} from "react-icons/fa";
function Navbar() {
  return (
    
   
    <div className="flex flex-col gap-7 md:flex-row items-center justify-between py-2 px-4">
    {/* Logo */}
    <div className="text-xl font-bold">Logo</div>
  
    {/* Icônes */}
    <div className="flex gap-4 mt-2 text-gray-600 md:mt-0">
      <a href="https://www.linkedin.com/in/thanina-mecherak-5912b0257/"> <FaLinkedin  className=" text-2xl"/></a>
        <a href="https://github.com/thaninamck"><FaGithub className=" text-2xl"/></a>
     
    </div>
  </div>
  
    
  );
}

export default Navbar;
