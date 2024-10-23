// import React, { useState } from 'react';

// // Sample Data for Menu Items
// const menuData = {
//   Wedding: {
//     starters: [
//       { name: 'Chicken Soup', price: '150', type: 'Non-Veg', img: 'chicken-soup.jpg' },
//       { name: 'Veg Spring Roll', price: '120', type: 'Veg', img: 'spring-roll.jpg' },
//     ],
//     drinks: [
//       { name: 'Orange Juice', price: '50', type: 'Veg', img: 'orange-juice.jpg' },
//       { name: 'Lemonade', price: '40', type: 'Veg', img: 'lemonade.jpg' },
//     ],
//     mainCourses: [
//       { name: 'Chicken Biriyani', price: '250', type: 'Non-Veg', img: 'chicken-biriyani.jpg' },
//       { name: 'Kerala Sadhya', price: '200', type: 'Veg', img: 'sadhya.jpg' },
//     ],
//     desserts: [
//       { name: 'Payasam', price: '100', type: 'Veg', img: 'payasam.jpg' },
//     ],
//   },
//   Birthday: {
//     starters: [
//       { name: 'Paneer Tikka', price: '180', type: 'Veg', img: 'paneer-tikka.jpg' },
//       { name: 'Chicken Tikka', price: '200', type: 'Non-Veg', img: 'chicken-tikka.jpg' },
//     ],
//     drinks: [
//       { name: 'Mango Shake', price: '60', type: 'Veg', img: 'mango-shake.jpg' },
//     ],
//     mainCourses: [
//       { name: 'Pasta Alfredo', price: '220', type: 'Veg', img: 'pasta-alfredo.jpg' },
//       { name: 'Grilled Chicken', price: '300', type: 'Non-Veg', img: 'grilled-chicken.jpg' },
//     ],
//     desserts: [
//       { name: 'Chocolate Cake', price: '150', type: 'Veg', img: 'chocolate-cake.jpg' },
//     ],
//   },
//   Baptism: {
//     starters: [
//       { name: 'Vegetable Soup', price: '100', type: 'Veg', img: 'veg-soup.jpg' },
//     ],
//     drinks: [
//       { name: 'Apple Juice', price: '55', type: 'Veg', img: 'apple-juice.jpg' },
//     ],
//     mainCourses: [
//       { name: 'Beef Roast', price: '350', type: 'Non-Veg', img: 'beef-roast.jpg' },
//       { name: 'Veg Pulao', price: '180', type: 'Veg', img: 'veg-pulao.jpg' },
//     ],
//     desserts: [
//       { name: 'Ice Cream', price: '90', type: 'Veg', img: 'ice-cream.jpg' },
//     ],
//   },
// };

// const events = Object.keys(menuData);

// const EventMenu = () => {
//   const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event
//   const [filter, setFilter] = useState('All');

//   const handleEventChange = (event) => {
//     setSelectedEvent(event);
//   };

//   const handleFilterChange = (filter) => {
//     setFilter(filter);
//   };

//   const RenderMenuSection = (title, items) => {
//     return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {items
//           .filter((item) => filter === 'All' || item.type === filter)
//           .map((item, index) => (
//             <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
//               <img
//                 src={require(`./images/${item.img}`).default}
//                 alt={item.name}
//                 className="w-full h-32 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//               <p className="text-gray-600 mb-2">Price: ₹{item.price}</p>
//               <p className="text-sm text-gray-500">{item.type}</p>
//               <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
//                 Add to Order
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

//   const eventMenu = menuData[selectedEvent];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       {/* Title and Event Selector */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-indigo-600 mb-4">Catering Menu</h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Select an event to view the tailored menu for your special occasion.
//         </p>
//         <div className="inline-flex space-x-4">
//           {events.map((event) => (
//             <button
//               key={event}
//               className={`px-6 py-2 rounded-md font-medium ${
//                 selectedEvent === event
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-gray-200 text-gray-700'
//               }`}
//               onClick={() => handleEventChange(event)}
//             >
//               {event}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Filter by Dietary Preference */}
//       <div className="text-center mb-8">
//         <h3 className="text-xl font-semibold mb-4">Filter by Dietary Preference:</h3>
//         <div className="inline-flex space-x-4">
//           <button
//             className={`px-4 py-2 rounded-md ${
//               filter === 'All'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//             onClick={() => handleFilterChange('All')}
//           >
//             All
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${
//               filter === 'Veg'
//                 ? 'bg-green-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//             onClick={() => handleFilterChange('Veg')}
//           >
//             Vegetarian
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${
//               filter === 'Non-Veg'
//                 ? 'bg-red-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//             onClick={() => handleFilterChange('Non-Veg')}
//           >
//             Non-Veg
//           </button>
//         </div>
//       </div>

//       {/* Menu Sections */}
//       <div className="container mx-auto">
//         {/* {renderMenuSection('Starters', eventMenu.starters)} */}
//         {/* {renderMenuSection('Drinks', eventMenu.drinks)}
//         {renderMenuSection('Main Courses', eventMenu.mainCourses)}
//         {renderMenuSection('Desserts', eventMenu.desserts)} */}
//       </div>
//     </div>
//   );
// };

// export default EventMenu;






// import React from 'react';

// const menuItems = [
//   {
//     id: 1,
//     name: 'Chicken Biriyani',
//     price: 250,
//     description: 'Aromatic and flavorful rice cooked with tender chicken and spices.',
//     image: '/images/chicken-biriyani.jpg',
//   },
//   {
//     id: 2,
//     name: 'Kerala Sadhya',
//     price: 200,
//     description: 'A traditional vegetarian feast served on a banana leaf, includes rice, curries, and desserts.',
//     image: '/images/kerala-sadhya.jpg',
//   },
//   {
//     id: 3,
//     name: 'Paneer Tikka',
//     price: 180,
//     description: 'Delicious marinated paneer grilled to perfection.',
//     image: '/images/paneer-tikka.jpg',
//   },
//   {
//     id: 4,
//     name: 'Mango Shake',
//     price: 60,
//     description: 'Fresh and creamy mango shake, perfect for a hot day.',
//     image: '/images/mango-shake.jpg',
//   },
// ];

// const EventMenu = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Our Menu</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-lg font-bold mb-2">{item.name}</h2>
//                 <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//                 <p className="text-indigo-600 font-semibold text-lg">₹{item.price}</p>
//                 <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventMenu;







// import React from 'react';

// const menuItems = [
//   {
//     id: 1,
//     name: 'Chicken Biriyani',
//     price: 250,
//     description: 'Aromatic and flavorful rice cooked with tender chicken and spices.',
//     image: '/images/chicken-biriyani.jpg',
//   },
//   {
//     id: 2,
//     name: 'Kerala Sadhya',
//     price: 200,
//     description: 'A traditional vegetarian feast served on a banana leaf, includes rice, curries, and desserts.',
//     image: '/images/kerala-sadhya.jpg',
//   },
//   {
//     id: 3,
//     name: 'Paneer Tikka',
//     price: 180,
//     description: 'Delicious marinated paneer grilled to perfection.',
//     image: '/images/paneer-tikka.jpg',
//   },
//   {
//     id: 4,
//     name: 'Mango Shake',
//     price: 60,
//     description: 'Fresh and creamy mango shake, perfect for a hot day.',
//     image: '/images/mango-shake.jpg',
//   },
//   {
//     id: 5,
//     name: 'Appam with Stew',
//     price: 120,
//     description: 'Soft and fluffy appam served with flavorful vegetable or chicken stew.',
//     image: '/images/appam-stew.jpg',
//   },
//   {
//     id: 6,
//     name: 'Puttu and Kadala Curry',
//     price: 100,
//     description: 'Steamed rice cake (Puttu) served with a spicy black chickpea curry (Kadala).',
//     image: '/images/puttu-kadala.jpg',
//   },
//   {
//     id: 7,
//     name: 'Kerala Fish Curry',
//     price: 220,
//     description: 'Spicy and tangy fish curry made with fresh fish, tamarind, and spices.',
//     image: '/images/fish-curry.jpg',
//   },
//   {
//     id: 8,
//     name: 'Parippu Payasam',
//     price: 80,
//     description: 'A sweet and creamy dessert made with lentils, coconut milk, and jaggery.',
//     image: '/images/parippu-payasam.jpg',
//   },
// ];

// const EventMenu = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-5xl font-bold text-center text-indigo-600 mb-12">Our Special Menu</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
//                 <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//                 <p className="text-indigo-700 font-semibold text-lg mb-4">₹{item.price}</p>
//                 <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventMenu;





import React from 'react';

const eventMenus = {
  Wedding: [
    {
      id: 1,
      name: 'Chicken Biriyani',
      price: 250,
      description: 'Aromatic and flavorful rice cooked with tender chicken and spices.',
      image: '/images/chicken-biriyani.jpg',
    },
    {
      id: 2,
      name: 'Kerala Sadhya',
      price: 200,
      description: 'A traditional vegetarian feast served on a banana leaf, includes rice, curries, and desserts.',
      image: '/images/kerala-sadhya.jpg',
    },
    {
      id: 5,
      name: 'Appam with Stew',
      price: 120,
      description: 'Soft and fluffy appam served with flavorful vegetable or chicken stew.',
      image: '/images/appam-stew.jpg',
    },
    {
      id: 9,
      name: 'Mutton Korma',
      price: 280,
      description: 'Delicious slow-cooked mutton in a creamy, spiced yogurt sauce.',
      image: '/images/mutton-korma.jpg',
    },
    {
      id: 10,
      name: 'Butter Chicken',
      price: 230,
      description: 'Rich and creamy butter chicken with a tangy tomato base.',
      image: '/images/butter-chicken.jpg',
    },
  ],
  Birthday: [
    {
      id: 3,
      name: 'Paneer Tikka',
      price: 180,
      description: 'Delicious marinated paneer grilled to perfection.',
      image: '/images/paneer-tikka.jpg',
    },
    {
      id: 4,
      name: 'Mango Shake',
      price: 60,
      description: 'Fresh and creamy mango shake, perfect for a hot day.',
      image: '/images/mango-shake.jpg',
    },
    {
      id: 8,
      name: 'Parippu Payasam',
      price: 80,
      description: 'A sweet and creamy dessert made with lentils, coconut milk, and jaggery.',
      image: '/images/parippu-payasam.jpg',
    },
    {
      id: 11,
      name: 'Fruit Salad with Ice Cream',
      price: 90,
      description: 'Fresh fruit salad topped with creamy vanilla ice cream.',
      image: '/images/fruit-salad.jpg',
    },
    {
      id: 12,
      name: 'Chicken Lollipop',
      price: 150,
      description: 'Crispy fried chicken drumsticks served with tangy sauce.',
      image: '/images/chicken-lollipop.jpg',
    },
  ],
  Baptism: [
    {
      id: 6,
      name: 'Puttu and Kadala Curry',
      price: 100,
      description: 'Steamed rice cake (Puttu) served with a spicy black chickpea curry (Kadala).',
      image: '/images/puttu-kadala.jpg',
    },
    {
      id: 7,
      name: 'Kerala Fish Curry',
      price: 220,
      description: 'Spicy and tangy fish curry made with fresh fish, tamarind, and spices.',
      image: '/images/fish-curry.jpg',
    },
    {
      id: 13,
      name: 'Vellayappam with Egg Curry',
      price: 130,
      description: 'Soft, spongy rice pancakes served with a spicy egg curry.',
      image: '/images/vellayappam-egg-curry.jpg',
    },
    {
      id: 14,
      name: 'Banana Fritters (Pazham Pori)',
      price: 50,
      description: 'Fried sweet banana slices, a classic Kerala snack.',
      image: '/images/pazham-pori.jpg',
    },
  ],
  NewYear: [
    {
      id: 15,
      name: 'Ghee Rice with Beef Fry',
      price: 240,
      description: 'Delicious ghee rice served with spicy and flavorful beef fry.',
      image: '/images/ghee-rice-beef-fry.jpg',
    },
    {
      id: 16,
      name: 'Nadan Kozhi Roast',
      price: 260,
      description: 'Traditional Kerala-style roasted chicken with spices.',
      image: '/images/nadan-kozhi-roast.jpg',
    },
    {
      id: 17,
      name: 'Vegetable Stew with Idiyappam',
      price: 180,
      description: 'Mildly spiced vegetable stew served with soft rice noodles (Idiyappam).',
      image: '/images/veg-stew-idiyappam.jpg',
    },
  ],
};

const EventMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-indigo-600 mb-12">Catering Menu</h1>

        {/* Render each event section */}
        {Object.keys(eventMenus).map((eventName) => (
          <div key={eventName} className="mb-12">
            <h2 className="text-4xl font-bold text-indigo-600 mb-6">{eventName} Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {eventMenus[eventName].map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <p className="text-indigo-700 font-semibold text-lg mb-4">₹{item.price}</p>
                    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventMenu;

