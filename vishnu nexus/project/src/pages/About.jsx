import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animate sections on scroll
    gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Au Nexus
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering the next generation of data analysts and tech
              innovators through hands-on learning and real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll card">
              <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                To create a vibrant community of data enthusiasts and tech
                innovators, providing them with the tools, knowledge, and
                opportunities to excel in the digital age through hands-on
                experience and industry collaboration.
              </p>
            </div>
            <div className="animate-on-scroll card">
              <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                To be the leading student-led organization in data analytics and
                technology innovation, fostering collaboration, practical learning,
                and professional development while creating a lasting impact on
                the tech community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Notes */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leadership Notes
          </h2>
          
          {/* HOD's Note */}
          <div className="animate-on-scroll mb-12">
            <div className="card">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src="/path-to-hod-photo.jpg"
                    alt="Dr. M Sredhavi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">HOD's Note</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    "Au Nexus represents our commitment to providing students
                    with practical experience in data analytics and technology.
                    Through this club, we aim to bridge the gap between academic
                    learning and industry requirements. Our focus is on nurturing
                    talent and creating opportunities for students to excel in
                    their chosen fields."
                  </p>
                  <div>
                    <p className="font-semibold text-lg">Dr. M Sredhavi</p>
                    <p className="text-primary-600 dark:text-primary-400">
                      Head of Department
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Computer Science & Data Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinator's Note */}
          <div className="animate-on-scroll">
            <div className="card">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src="/path-to-coordinator-photo.jpg"
                    alt="Prof. Y Suguna Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Coordinator's Note</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    "Our focus is on creating hands-on learning experiences
                    through workshops, hackathons, and real-world projects. We
                    believe in learning by doing and growing together as a
                    community. Au Nexus provides a platform for students to
                    explore their potential and develop essential skills for
                    their future careers."
                  </p>
                  <div>
                    <p className="font-semibold text-lg">Prof. Y Suguna Reddy</p>
                    <p className="text-primary-600 dark:text-primary-400">
                      Faculty Coordinator
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Au Nexus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;