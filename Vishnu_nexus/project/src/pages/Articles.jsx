import { useState } from 'react';
import { FiSearch, FiCalendar, FiUser } from 'react-icons/fi';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample articles data - replace with your actual data
  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Data Analytics',
      author: 'John Doe',
      date: '2024-03-15',
      category: 'Data Analytics',
      description: 'Exploring how artificial intelligence is revolutionizing the field of data analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
    {
      id: 2,
      title: 'Machine Learning in Healthcare',
      author: 'Jane Smith',
      date: '2024-03-10',
      category: 'Machine Learning',
      description: 'How machine learning is transforming healthcare diagnosis and treatment.',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc',
    },
    // Add more articles as needed
  ];

  // Filter articles based on search query
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nexus Spectrum</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Exploring the intersection of data science, technology, and innovation through insightful articles and research papers.
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Join us on a journey of discovery as we delve into the latest trends, breakthroughs, and applications in the world of data analytics.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-8">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiUser className="mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="mt-4 btn-primary w-full">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;