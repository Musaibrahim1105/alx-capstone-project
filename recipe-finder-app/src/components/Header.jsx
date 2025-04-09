import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Header = () => {


  const [isOpen, setIsOpen] = useState(false)


  return (
    <header className="bg-[#e9b08e] text-white fixed top-0 right-0 left-0 z-10 shadow-md p-4">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center space-x-2">
        <img
            className="w-10 h-10 rounded-full"
            src="/images/recipeLogo.jpg" 
            alt="logo"
          />
        <span>Recipe App</span>
        </div>

        <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>

        </div>
 <nav className="hidden md:flex space-x-6" >
        <Link to="/" className="text-white hover:text-green-500 transition">Home</Link>
        <Link to="/seafood" className="text-white hover:text-green-500 transition">Meat and SeaFood</Link>
        <Link to="/vegetarian" className="text-white hover:text-green-500 transition">Vegetarian</Link>
        <Link to="/cuisines" className="text-white hover:text-green-500 transition">Cuisines</Link>
        <Link to="/holidays" className="text-white hover:text-green-500 transition">Holidays</Link>
        
      </nav>

      </div>

       
     
      {isOpen && ( 
        <div className="md:hidden bg-[#e9b08e] px-4 pb-4 space-y-2">
           <Link to="/" className="block hover:text-green-200" onClick={() => setIsOpen(false)}>Home</Link>
           <Link to="/seafood" className="block hover:text-green-200" onClick={() => setIsOpen(false)}>Meat and SeaFood</Link>
           <Link to="/vegetarian" className="block hover:text-green-200" onClick={() => setIsOpen(false)}>Vegetarian</Link> 
           <Link to="/cuisines" className="block hover:text-green-200" onClick={() => setIsOpen(false)}>Cuisines</Link> 
           <Link to="/holidays" className="block hover:text-green-200" onClick={() => setIsOpen(false)}>Holidays</Link> 
        </div>)}
      
    </header>
  );
};

export default Header;
