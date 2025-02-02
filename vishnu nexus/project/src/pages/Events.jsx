import { useState } from 'react';
import { FiSearch, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample event data - replace with your actual data
  const events = {
    upcoming: [
      {
        id: 1,
        title: 'Data Analytics Workshop 2024',
        date: '2024-04-15',
        time: '10:00 AM - 4:00 PM',
        location: 'Main Auditorium',
        description: 'Learn advanced data analytics techniques from industry experts.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      },
      {
        id: 2,
        title: 'Hackathon: AI Innovation',
        date: '2024-05-01',
        time: '9:00 AM - 6:00 PM',
        location: 'Tech Hub',
        description: 'A 24-hour hackathon focused on AI and machine learning solutions.',
        image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
      },
    ],
    completed: [
      {
        id: 3,
        title: 'Python for Data Science',
        date: '2024-03-01',
        time: '2:00 PM - 5:00 PM',
        location: 'Room 301',
        description: 'Introduction to Python programming for data science applications.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      },
      {
        id: 4,
        title: 'Web Development Bootcamp',
        date: '2024-02-15',
        time: '10:00 AM - 3:00 PM',
        location: 'Computer Lab',
        description: 'Hands-on workshop on modern web development technologies.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      },
    ],
  };

  // Filter events based on search query
  const filteredEvents = events[activeTab].filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Events</h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'upcoming'
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'completed'
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Completed Events
              </button>
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card overflow-hidden">
                <div className="relative h-48 mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiCalendar className="mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiMapPin className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                {activeTab === 'upcoming' && (
                  <button className="mt-4 btn-primary w-full">Register Now</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;