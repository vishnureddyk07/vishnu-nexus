import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      title: 'Data Analytics Workshop',
    },
    {
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
      title: 'Hackathon 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      title: 'Team Collaboration',
    },
  ];

  const achievements = [
    {
      number: '50+',
      label: 'Events Conducted',
      icon: '🎯',
    },
    {
      number: '1000+',
      label: 'Students Impacted',
      icon: '👥',
    },
    {
      number: '20+',
      label: 'Industry Partners',
      icon: '🤝',
    },
    {
      number: '30+',
      label: 'Projects Completed',
      icon: '💻',
    },
  ];

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000 }}
            loop
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Add your logo here */}
            <img
              src="/path-to-your-logo.png"
              alt="Au Nexus Logo"
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6">
            Welcome to Au Nexus
          </h1>
          <p className="hero-text text-xl md:text-2xl mb-8">
            Empowering students through data analytics, hackathons, and real-world
            projects
          </p>
          <div className="hero-text">
            <Link to="/events" className="btn-primary">
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Analytics',
                description:
                  'Learn from industry experts and gain hands-on experience with real-world data.',
                icon: '📊',
              },
              {
                title: 'Hackathons',
                description:
                  'Participate in exciting hackathons and showcase your skills.',
                icon: '💻',
              },
              {
                title: 'Workshops',
                description:
                  'Regular workshops on cutting-edge technologies and tools.',
                icon: '🔧',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Upcoming Workshop</h3>
              <p>Join us for an exciting workshop on Advanced Data Visualization!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">New Article</h3>
              <p>Read our latest article on AI trends in 2024.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Team Achievement</h3>
              <p>Our team won first place in the National Data Science Competition!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;