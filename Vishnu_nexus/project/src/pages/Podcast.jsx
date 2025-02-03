import { useState } from 'react';
import { FiSearch, FiCalendar, FiClock } from 'react-icons/fi';

const Podcast = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample podcast data - replace with your actual data
  const podcasts = [
    {
      id: 1,
      title: 'Data Science Career Paths',
      host: 'Dr. Sarah Johnson',
      date: '2024-03-15',
      duration: '45 min',
      description: 'Exploring various career opportunities in data science and analytics.',
      thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_1', // Replace with actual YouTube video ID
    },
    {
      id: 2,
      title: 'AI in Healthcare',
      host: 'Prof. Michael Brown',
      date: '2024-03-10',
      duration: '35 min',
      description: 'Discussion on the impact of AI in modern healthcare systems.',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID_2', // Replace with actual YouTube video ID
    },
    // Add more podcasts as needed
  ];

  // Filter podcasts based on search query
  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Nexus Narratives</h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPodcasts.map((podcast) => (
              <div key={podcast.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{podcast.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{podcast.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      <span>{new Date(podcast.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-2" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${podcast.videoId}`}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Hosted by: {podcast.host}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;