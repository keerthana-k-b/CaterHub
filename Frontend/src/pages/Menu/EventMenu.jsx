import React, { useState } from 'react';

// Sample Data for Menu Items
const menuData = {
  Wedding: {
    starters: [
      { name: 'Chicken Soup', price: '150', type: 'Non-Veg', img: 'chicken-soup.jpg' },
      { name: 'Veg Spring Roll', price: '120', type: 'Veg', img: 'spring-roll.jpg' },
    ],
    drinks: [
      { name: 'Orange Juice', price: '50', type: 'Veg', img: 'orange-juice.jpg' },
      { name: 'Lemonade', price: '40', type: 'Veg', img: 'lemonade.jpg' },
    ],
    mainCourses: [
      { name: 'Chicken Biriyani', price: '250', type: 'Non-Veg', img: 'chicken-biriyani.jpg' },
      { name: 'Kerala Sadhya', price: '200', type: 'Veg', img: 'sadhya.jpg' },
    ],
    desserts: [
      { name: 'Payasam', price: '100', type: 'Veg', img: 'payasam.jpg' },
    ],
  },
  Birthday: {
    starters: [
      { name: 'Paneer Tikka', price: '180', type: 'Veg', img: 'paneer-tikka.jpg' },
      { name: 'Chicken Tikka', price: '200', type: 'Non-Veg', img: 'chicken-tikka.jpg' },
    ],
    drinks: [
      { name: 'Mango Shake', price: '60', type: 'Veg', img: 'mango-shake.jpg' },
    ],
    mainCourses: [
      { name: 'Pasta Alfredo', price: '220', type: 'Veg', img: 'pasta-alfredo.jpg' },
      { name: 'Grilled Chicken', price: '300', type: 'Non-Veg', img: 'grilled-chicken.jpg' },
    ],
    desserts: [
      { name: 'Chocolate Cake', price: '150', type: 'Veg', img: 'chocolate-cake.jpg' },
    ],
  },
  Baptism: {
    starters: [
      { name: 'Vegetable Soup', price: '100', type: 'Veg', img: 'veg-soup.jpg' },
    ],
    drinks: [
      { name: 'Apple Juice', price: '55', type: 'Veg', img: 'apple-juice.jpg' },
    ],
    mainCourses: [
      { name: 'Beef Roast', price: '350', type: 'Non-Veg', img: 'beef-roast.jpg' },
      { name: 'Veg Pulao', price: '180', type: 'Veg', img: 'veg-pulao.jpg' },
    ],
    desserts: [
      { name: 'Ice Cream', price: '90', type: 'Veg', img: 'ice-cream.jpg' },
    ],
  },
};

const events = Object.keys(menuData);

const EventMenu = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event
  const [filter, setFilter] = useState('All');

  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const RenderMenuSection = (title, items) => {
    return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items
          .filter((item) => filter === 'All' || item.type === filter)
          .map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src={require(`./images/${item.img}`).default}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">Price: ₹{item.price}</p>
              <p className="text-sm text-gray-500">{item.type}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Add to Order
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

  const eventMenu = menuData[selectedEvent];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Title and Event Selector */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Catering Menu</h1>
        <p className="text-lg text-gray-600 mb-6">
          Select an event to view the tailored menu for your special occasion.
        </p>
        <div className="inline-flex space-x-4">
          {events.map((event) => (
            <button
              key={event}
              className={`px-6 py-2 rounded-md font-medium ${
                selectedEvent === event
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleEventChange(event)}
            >
              {event}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by Dietary Preference */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">Filter by Dietary Preference:</h3>
        <div className="inline-flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              filter === 'All'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === 'Veg'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleFilterChange('Veg')}
          >
            Vegetarian
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === 'Non-Veg'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleFilterChange('Non-Veg')}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto">
        {/* {renderMenuSection('Starters', eventMenu.starters)} */}
        {/* {renderMenuSection('Drinks', eventMenu.drinks)}
        {renderMenuSection('Main Courses', eventMenu.mainCourses)}
        {renderMenuSection('Desserts', eventMenu.desserts)} */}
      </div>
    </div>
  );
};

export default EventMenu;
