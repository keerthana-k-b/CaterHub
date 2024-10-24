import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          About Us
        </h1>

        {/* Section: Our Vision */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            At Karthika Catering, our vision is to revolutionize the catering industry by
            integrating advanced digital solutions to simplify and enhance the
            overall customer experience. We aim to become the go-to platform for
            all catering needs by offering seamless, customizable, and
            efficient services.
          </p>
        </section>

        {/* Section: Our Mission */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower catering businesses of all sizes by
            providing them with cutting-edge tools to streamline operations,
            improve customer satisfaction, and optimize their workflow. We
            strive to help caterers focus on what they do best—serving
            delicious food—while Karthika Catering handles the logistics, from menu
            management to delivery.
          </p>
        </section>

        {/* Section: Core Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Innovation</strong>: We constantly evolve and adapt to the latest technological trends to stay ahead.</li>
            <li><strong>Customer Centricity</strong>: Customer satisfaction is at the heart of everything we do.</li>
            <li><strong>Integrity</strong>: We operate with honesty and transparency in all our dealings.</li>
            <li><strong>Excellence</strong>: We aim to deliver the highest quality service in every aspect.</li>
          </ul>
        </section>

        {/* Section: Our Team */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600">
          Karthika Catering is built by a team of passionate professionals with
            extensive experience in the catering and tech industries. Our
            dedicated team is constantly working to innovate and improve the
            platform, ensuring it meets the evolving needs of the catering
            sector.
          </p>
        </section>

        {/* Section: What We Offer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <strong>Menu Management</strong>: A flexible and easy-to-use system
              for caterers to create, modify, and manage their menus.
            </li>
            <li>
              <strong>Order Processing & Tracking</strong>: Seamless order
              placement, processing, and tracking features for customers and
              caterers alike.
            </li>
            <li>
              <strong>Real-Time Cost Tracking</strong>: A built-in system to
              manage and track costs, ensuring transparency for customers.
            </li>
            <li>
              <strong>Customer Feedback & Ratings</strong>: An integrated feedback
              system to help improve services based on customer input.
            </li>
            <li>
              <strong>Event Scheduling & Delivery Management</strong>: A tool to
              schedule events and ensure timely and accurate order delivery.
            </li>
          </ul>
        </section>

        {/* Section: Footer */}
        <footer className="text-center mt-8">
          <p className="text-gray-600">
            Ready to simplify your catering business? Join Karthika Catering today and
            experience the future of catering management.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
