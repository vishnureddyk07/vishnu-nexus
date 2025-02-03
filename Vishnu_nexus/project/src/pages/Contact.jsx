import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connect with Au Nexus and be part of our growing community.
          </p>
        </div>
      </section>

      {/* Contact Info & Images */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      aunexus@anurag.edu.in
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 9391583026
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Anurag University, Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: 'linkedin.svg', link: '#', label: 'LinkedIn' },
                    { icon: 'instagram.svg', link: '#', label: 'Instagram' },
                    { icon: 'twitter.svg', link: '#', label: 'Twitter' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300"
                    >
                      <img
                        src={`/path-to-social-icons/${social.icon}`}
                        alt={social.label}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                  alt="Workshop"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0"
                  alt="Hackathon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                  alt="Team Meeting"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;