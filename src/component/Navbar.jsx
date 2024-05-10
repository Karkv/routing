import './Box1.css'
import { Link } from 'react-router-dom';
const Navbar=()=>{

    return (

        <>
       <nav  className=" backdrop-brightness-95 xl:p-7 lg:p-5 p-2 md:p-3 table-fixed img1 ">
        <div className=" container mx-auto flex items-center justify-between">
        
            <Link to="#" className=" font-bold hover:subpixel-antialiased text-3xl py-2 bg-clip-text inline-block text-transparent bg-gradient-to-br from-green-300 via-indigo-950 to-red-500 ">Monteage</Link>
            <form action="">
            <input className="md:px-24 hover:bg-slate-600  border-4 rounded-s-lg text-center  select " type="text" placeholder="Search..." />
            <button className="   border-1 bg-teal-100 px-2  rounded-e-lg" type="submit">Search</button>
            </form>
            <div className="hidden md:flex space-x-4  text-sm  ">
                <Link to="/home" className="text-black hover:underline md:text-2xl">Home</Link>
                <Link to="/about" className="text-black hover:underline md:text-2xl">About</Link>
                <Link to="#" className="text-black hover:underline md:text-2xl">Services</Link>
                <Link to="#" className="text-black hover:underline md:text-2xl">Contact</Link>
            </div>
            

            
            <button className="md:hidden text-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
        
        </>
    )
}
export default Navbar;