import { Gallery as PhotoSwipeGallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const Gallery = () => {
  // Sample gallery data - replace with your actual data
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      width: 1600,
      height: 1067,
      title: 'Data Analytics Workshop',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
      width: 1600,
      height: 1067,
      title: 'Hackathon 2024',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      width: 1600,
      height: 1067,
      title: 'Team Collaboration',
    },
    // Add more images as needed
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Gallery</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Capturing moments of learning, innovation, and collaboration.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <PhotoSwipeGallery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </PhotoSwipeGallery>
        </div>
      </section>
    </div>
  );
};

export default Gallery;