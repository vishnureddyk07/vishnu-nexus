# Au Nexus Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Component Documentation](#component-documentation)
4. [Adding Content](#adding-content)
5. [Performance Optimizations](#performance-optimizations)

## Project Overview
The Au Nexus website is built using:
- React for UI components
- Vite for fast development and building
- TailwindCSS for styling
- GSAP for animations
- React Router for navigation
- Various React libraries for specific features

## File Structure
```
src/
├── components/
│   ├── Navbar.jsx       # Navigation component
│   └── Footer.jsx       # Footer component
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About page
│   ├── Events.jsx       # Events listing
│   ├── Articles.jsx     # Articles/blog
│   ├── Podcast.jsx      # Video content
│   ├── Team.jsx         # Team members
│   ├── Gallery.jsx      # Photo gallery
│   └── Contact.jsx      # Contact information
└── App.jsx              # Main application component
```

## Component Documentation

### Home Page (Home.jsx)
The home page features:
- Hero section with background slider
- Statistics section
- Featured content
- Latest updates

Key functions:
```javascript
useEffect(() => {
  // GSAP animations for hero section
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
```

### About Page (About.jsx)
Contains:
- Mission & Vision statements
- Leadership notes with photos
- GSAP animations for smooth scrolling effects

To update leadership photos:
1. Add photos to the public directory
2. Update image paths in the component:
```javascript
<img
  src="/path-to-hod-photo.jpg"
  alt="Dr. M Sredhavi"
  className="w-full h-full object-cover"
/>
```

### Team Page (Team.jsx)
Displays team members in categories:
- Leadership
- Core Team
- Technical Team
- PR Team
- Content Team
- Design Team
- Social Media Team

To add new team members:
```javascript
const teamSections = [
  {
    title: 'Leadership',
    members: [
      {
        name: 'Name',
        role: 'Role',
        image: '/path-to-photo.jpg',
        bio: 'Bio text',
        social: {
          linkedin: '#',
          github: '#',
          email: 'email@example.com',
        },
      },
      // Add more members
    ],
  },
  // Add more sections
];
```

### Video Content (Podcast.jsx)
For adding YouTube videos:
1. Upload video to YouTube
2. Get the video ID from the URL
3. Add to the podcasts array:
```javascript
const podcasts = [
  {
    id: uniqueId,
    title: 'Video Title',
    host: 'Host Name',
    date: 'YYYY-MM-DD',
    duration: 'XX min',
    description: 'Video description',
    videoId: 'YOUTUBE_VIDEO_ID',
  },
  // Add more videos
];
```

## Adding Content

### Adding Events
In Events.jsx:
```javascript
const events = {
  upcoming: [
    {
      id: uniqueId,
      title: 'Event Title',
      date: 'YYYY-MM-DD',
      time: 'HH:MM AM/PM',
      location: 'Location',
      description: 'Event description',
      image: 'image-url',
    },
  ],
  completed: [
    // Similar structure for past events
  ],
};
```

### Adding Articles
In Articles.jsx:
```javascript
const articles = [
  {
    id: uniqueId,
    title: 'Article Title',
    author: 'Author Name',
    date: 'YYYY-MM-DD',
    category: 'Category',
    description: 'Article description',
    image: 'image-url',
  },
  // Add more articles
];
```

### Adding Gallery Images
In Gallery.jsx:
```javascript
const images = [
  {
    id: uniqueId,
    src: 'image-url',
    width: imageWidth,
    height: imageHeight,
    title: 'Image Title',
  },
  // Add more images
];
```

## Performance Optimizations

1. Image Optimization:
- Use appropriate image sizes
- Implement lazy loading
- Use modern image formats (WebP)
- Compress images before upload

2. Code Splitting:
- Routes are automatically code-split
- Lazy load components when needed:
```javascript
const Component = React.lazy(() => import('./Component'));
```

3. Asset Loading:
- Preload critical assets
- Lazy load non-critical assets
- Use CDN for static assets

4. Animation Performance:
- Use CSS transforms instead of layout properties
- Implement will-change for heavy animations
- Use requestAnimationFrame for custom animations

5. State Management:
- Keep state updates minimal
- Use memo and useMemo for expensive calculations
- Implement proper key props for lists

## Deployment
1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` directory

3. Deploy to your hosting provider

## Maintenance
1. Regularly update dependencies
2. Monitor performance using browser dev tools
3. Keep content fresh and relevant
4. Backup data regularly
5. Test across different devices and browsers

## Support
For questions or issues:
- Email: support@aunexus.com
- GitHub: [repository-url]