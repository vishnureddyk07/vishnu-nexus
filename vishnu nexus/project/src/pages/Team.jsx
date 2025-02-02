import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    gsap.utils.toArray('.team-member').forEach((member, index) => {
      gsap.from(member, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: member,
          start: 'top 80%',
        },
      });
    });
  }, []);

  // Team data structure
  const teamSections = [
    {
      title: 'Leadership',
      members: [
        {
          name: 'Dr. M Sredhavi',
          role: 'Head of Department',
          image: '/path-to-hod-photo.jpg',
          bio: 'Professor of Computer Science with expertise in Data Analytics and AI.',
          social: {
            linkedin: '#',
            email: 'hod@example.com',
          },
        },
        {
          name: 'Prof. Y Suguna Reddy',
          role: 'Faculty Coordinator',
          image: '/path-to-coordinator-photo.jpg',
          bio: 'Experienced faculty member specializing in data science education.',
          social: {
            linkedin: '#',
            email: 'coordinator@example.com',
          },
        },
      ],
    },
    {
      title: 'Core Team',
      members: [
        {
          name: 'John Doe',
          role: 'President',
          image: '/path-to-president-photo.jpg',
          bio: 'Final year Computer Science student with a passion for leadership.',
          social: {
            linkedin: '#',
            github: '#',
            email: 'president@example.com',
          },
        },
        {
          name: 'Jane Smith',
          role: 'Vice President',
          image: '/path-to-vice-president-photo.jpg',
          bio: 'Third year Data Science student focused on innovation.',
          social: {
            linkedin: '#',
            github: '#',
            email: 'vice.president@example.com',
          },
        },
        {
          name: 'Mike Johnson',
          role: 'Secretary',
          image: '/path-to-secretary-photo.jpg',
          bio: 'Organizing and coordinating club activities.',
          social: {
            linkedin: '#',
            github: '#',
            email: 'secretary@example.com',
          },
        },
        {
          name: 'Sarah Wilson',
          role: 'Treasurer',
          image: '/path-to-treasurer-photo.jpg',
          bio: 'Managing club finances and budgeting.',
          social: {
            linkedin: '#',
            github: '#',
            email: 'treasurer@example.com',
          },
        },
      ],
    },
    {
      title: 'Technical Team',
      members: [
        // Add tech team members
      ],
    },
    {
      title: 'PR Team',
      members: [
        // Add PR team members
      ],
    },
    {
      title: 'Content Team',
      members: [
        // Add content team members
      ],
    },
    {
      title: 'Design Team',
      members: [
        // Add design team members
      ],
    },
    {
      title: 'Social Media Team',
      members: [
        // Add social media team members
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Team</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and learning at Au Nexus.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      {teamSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 px-4 ${
            sectionIndex % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, index) => (
                <div key={index} className="team-member card text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Team;