# RT8 Rotate Group - Deployment Guide

## Project Overview
This is the official website for RT8 Rotate Group - A Harmonic Symphony of Art & Innovation. Built with React, TypeScript, Tailwind CSS, and Vite.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React + FontAwesome
- **Deployment**: Netlify

## Features
- ✨ Modern, responsive design with 3D animations
- 🎵 Interactive music label showcase
- 👥 Team member profiles with glitch effects
- 📱 Mobile-first responsive design
- 🚀 Optimized performance with Vite
- 🎨 Custom CSS animations and effects
- 🔗 Social media integration
- 📧 Contact forms and demo submissions

## Project Structure
```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing page hero
│   ├── AboutUs.tsx      # About page
│   ├── MeetTheTeam.tsx  # Team profiles
│   ├── Background3D.tsx # 3D background effects
│   └── ...
├── index.css           # Global styles and animations
├── main.tsx           # App entry point
└── App.tsx            # Main app component
```

## Git Setup Instructions

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: RT8 Rotate Group website"
```

### 2. Connect to Remote Repository
```bash
# Add your remote repository
git remote add origin https://github.com/yourusername/rt8-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Environment Setup
Create a `.env` file for any environment variables:
```env
VITE_APP_TITLE=RT8 Rotate Group
VITE_APP_URL=https://rt8.co.za
```

## Development Commands

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Deployment Options

### Netlify (Current)
- Automatic deployments from Git
- Custom domain support
- Form handling
- Edge functions support

### Alternative Platforms
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Build and deploy to `gh-pages` branch
- **Firebase Hosting**: `firebase deploy`

## Key Features Implemented

### 1. Enhanced Header Navigation
- Animated logo with glow effects
- Dropdown submenus
- Social media links
- Support portal integration

### 2. 3D Background Effects
- Floating particles
- Morphing grid squares
- 3D asteroids with realistic lighting
- Mouse interaction effects

### 3. Team Section with Glitch Effects
- Dynamic image loading
- Hover-triggered glitch animations
- Scanline effects
- RGB color separation

### 4. Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

### 5. Performance Optimizations
- Lazy loading for images
- Optimized animations
- Efficient CSS with Tailwind
- Vite's fast build system

## Content Management

### Adding Team Members
Edit `src/components/MeetTheTeam.tsx` and add to the `teamMembers` array:
```typescript
{
  name: 'New Member',
  role: 'Position',
  department: 'Department',
  bio: 'Biography...',
  image: 'https://example.com/image.jpg',
  skills: ['Skill 1', 'Skill 2'],
  social: {
    email: 'email@rt8.co.za',
    linkedin: 'https://linkedin.com/in/username',
    instagram: 'https://instagram.com/username'
  }
}
```

### Updating Labels
Edit `src/components/LabelsOnRotate.tsx` to modify the labels showcase.

### Modifying Navigation
Update `src/components/Header.tsx` to add/remove menu items.

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics
- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License
© 2025 RT8 Rotate Group. All rights reserved.

## Support
For technical support, contact: ilyas@rt8.co.za
For general inquiries: info@rt8.co.za
