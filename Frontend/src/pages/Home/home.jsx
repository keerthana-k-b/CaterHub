import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
     

      {/* Hero Section */}
      
      <section className="relative bg-cover bg-center h-[400px] bg-[url('img3.jpg')]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bring people together with Great Food
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Manage orders, menus, delivery, and feedback all in one place. 
            Let Karthika Catering Kapalamattom take your catering business to the next level.
          </p>
          <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700">
            Get Started
          </Link>

          {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700">
            Get Started
          </button> */}


        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Flexible Menu Management
              </h3>
              <p className="text-gray-600">
                Create, modify, and customize menus to meet diverse client needs effortlessly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Efficient Order Tracking
              </h3>
              <p className="text-gray-600">
                Track and manage orders in real-time, ensuring seamless communication and fulfillment.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Customer Feedback
              </h3>
              <p className="text-gray-600">
                Collect feedback from clients to drive continuous improvement and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Catering Business?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of catering businesses that trust Karthika Catering to manage their operations.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Karthika Catering Kadaplamattom. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;



// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center h-[400px] bg-[url('img3.jpg')]">
//         <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
//           <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
//             Bring People Together with Great Food
//           </h1>
//           <p className="text-lg text-gray-300 mb-6 px-4">
//             Manage orders, menus, delivery, and feedback all in one place.
//             Let CATERHUB take your catering business to the next level.
//           </p>
//           <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-10">
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Feature 1 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//               <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
//                 Flexible Menu Management
//               </h3>
//               <p className="text-gray-600">
//                 Create, modify, and customize menus to meet diverse client needs effortlessly.
//               </p>
//             </div>
//             {/* Feature 2 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//               <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
//                 Efficient Order Tracking
//               </h3>
//               <p className="text-gray-600">
//                 Track and manage orders in real-time, ensuring seamless communication and fulfillment.
//               </p>
//             </div>
//             {/* Feature 3 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//               <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
//                 Customer Feedback
//               </h3>
//               <p className="text-gray-600">
//                 Collect feedback from clients to drive continuous improvement and satisfaction.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-indigo-600 py-16 text-white text-center">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Streamline Your Catering Business?
//           </h2>
//           <p className="text-xl mb-8">
//             Join hundreds of catering businesses that trust CATERHUB to manage their operations.
//           </p>
//           <Link to="/login" className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto text-center">
//           <p className="mb-2">© 2024 CATERHUB. All Rights Reserved.</p>
//           <p className="text-sm">Follow us on social media:</p>
//           <div className="flex justify-center space-x-4 mt-2">
//             <Link to="#" className="hover:text-indigo-400 transition duration-200">Facebook</Link>
//             <Link to="#" className="hover:text-indigo-400 transition duration-200">Twitter</Link>
//             <Link to="#" className="hover:text-indigo-400 transition duration-200">Instagram</Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
