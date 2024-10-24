// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// const Navbar = () => {
//   return (
//     <nav className=" bg-gray-100 p-4">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <div className="text-black font-bold text-xl ">
//           <Link to="/">CATERHUB</Link>
//         </div>
//         <div className="space-x-4">
//           <Link to="/" className="text-black hover:text-indigo-200">
//             Home
//           </Link>
//           <Link to="/aboutus" className="text-black hover:text-indigo-200">
//             About Us
//           </Link>
//           <Link to="/eventmenu" className="text-black hover:text-indigo-200">
//              Menu
//           </Link>
//           {/* <Link to="/feedback" className="text-white hover:text-indigo-200">
//             Feedback
//           </Link> */}
//           <Link to="/contactus" className="text-black hover:text-indigo-200">
//             Contact Us
//           </Link>
//           <Link to="/login" className="text-black hover:text-indigo-200">
//             Login
//           </Link>
//           {/* <Link to="/registration" className="text-white hover:text-indigo-200">
//             Register
//           </Link> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Add the logo image here */}
          <Link to="/">
            <img
              src="/logo.jpg"  // Replace with the actual path to your logo
              alt="CaterHub Logo"
              className="h-10 w-auto mr-3" // Adjust height and spacing if needed
            />
          </Link>
          {/* <div className="text-black font-bold text-xl">
            <Link to="/">KARTHIKA CATERING</Link>
          </div> */}

<div className="text-black font-extrabold text-4xl tracking-wide" style={{ fontFamily: 'Lobster, cursive' }}>
      <Link to="/">KARTHIKA CATERING</Link>
    </div>


        </div>

        <div className="space-x-4">
          <Link to="/" className="text-black hover:text-indigo-200">
            Home
          </Link>
          <Link to="/aboutus" className="text-black hover:text-indigo-200">
            About Us
          </Link>
          <Link to="/eventmenu" className="text-black hover:text-indigo-200">
            Menu
          </Link>
          <Link to="/contactus" className="text-black hover:text-indigo-200">
            Contact Us
          </Link>
          <Link to="/login" className="text-black hover:text-indigo-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
