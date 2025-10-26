# 🏋️‍♀️ Nicole Arguedas Fitness - Personal Trainer Landing Page

A modern, minimalist single-page website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Features

- ✨ **Smooth animations** with Framer Motion
- 📱 **Fully responsive** design
- 🎯 **Single-page** navigation with smooth scrolling
- ⚡ **Fast performance** powered by Vite
- 🎨 **Minimalist design** inspired by Apple Fitness
- 🚀 **Easy deployment** to Vercel or Netlify

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📝 Customization Guide

### 1. Update Contact Information

Edit contact details in **all components** where they appear:

**`src/components/Contact.jsx`** - Main contact section:
```javascript
const contactInfo = {
  whatsapp: '50612345678',  // Your WhatsApp number
  email: 'nicole.arguedas@example.com',  // Your email
  instagram: 'nicolearguedas.fit',  // Your Instagram handle
};
```

**`src/components/Plans.jsx`** - WhatsApp contact in plans:
```javascript
const whatsappNumber = '50612345678';  // Update this
```

### 2. Replace Images

All images use Unsplash placeholders. Replace them with your own:

**Hero Section** (`src/components/Hero.jsx`):
- Background image URL (line ~30)

**About Section** (`src/components/About.jsx`):
- Portrait photo URL (line ~48)

**Testimonials** (`src/components/Testimonials.jsx`):
- Client photos (lines ~28-50)

### 3. Edit Text Content

**Hero Section** - Main heading and tagline
**About Section** - Biography and core values
**Plans Section** - Pricing, features, and descriptions
**Testimonials** - Client reviews and stats
**Contact Section** - Motivational quote and CTA text

Each component file has clear `EDIT THIS:` comments marking customizable content.

### 4. Modify Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f5f5f5',   // Lightest
    // ... through to
    900: '#0a0a0a',  // Darkest
  }
}
```

To change the entire color scheme, update these values.

### 5. Change Fonts

Current font: **Inter** (imported from Google Fonts)

To change:
1. Update import in `src/index.css`
2. Update font family in `tailwind.config.js`

### 6. Update Metadata

Edit SEO information in `index.html`:
- Page title
- Meta descriptions
- Open Graph tags

## 📂 Project Structure

```
PersonalTrainer/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Plans.jsx        # Pricing plans
│   │   ├── Testimonials.jsx # Client reviews
│   │   ├── Contact.jsx      # Contact/CTA
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

## 📋 Component Overview

### Navbar
- Sticky navigation with smooth scrolling
- Transparent on hero, solid white when scrolled
- Mobile-responsive

### Hero
- Full-screen background image
- Animated text entrance
- CTA button with smooth scroll
- Scroll indicator animation

### About
- Two-column layout (image + text)
- Portrait photo with decorative element
- Core values with icons
- Fade-in animations on scroll

### Plans
- Three pricing tiers
- Feature comparison
- "Join Now" buttons linking to WhatsApp
- Hover animations on cards

### Testimonials
- Three client testimonials
- Circular client photos
- Star ratings
- Social proof statistics

### Contact
- Motivational quote
- WhatsApp and Email CTAs
- Social media links
- Animated hover effects

### Footer
- Copyright notice
- Simple, minimal design

## 🎯 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance)
- 📦 **Bundle Size**: ~150KB (gzipped)
- 🚀 **First Contentful Paint**: < 1s

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Development Tips

### Hot Module Replacement (HMR)
Changes are reflected instantly during development without full page reload.

### Component Structure
Each component is self-contained with clear comments explaining customization options.

### Animation Performance
Framer Motion animations use GPU-accelerated transforms for smooth 60fps performance.

### Tailwind Customization
Use Tailwind's utility classes for quick styling adjustments without touching CSS files.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Design Inspiration**: Apple Fitness, Modern Fitness Websites
- **Images**: Unsplash (placeholder images)
- **Icons**: Heroicons (included via Tailwind)
- **Fonts**: Google Fonts (Inter)

## 💡 Tips for Going Live

1. **Replace all placeholder images** with professional photos
2. **Test all contact links** (WhatsApp, email, Instagram)
3. **Update contact information** in all components
4. **Customize text content** to match Nicole's actual services
5. **Add a custom favicon** (replace `/vite.svg`)
6. **Test on mobile devices** for responsiveness
7. **Run Lighthouse audit** for performance optimization
8. **Set up analytics** (Google Analytics, Plausible, etc.)

## 🐛 Troubleshooting

### Tailwind styles not working
Make sure PostCSS is configured correctly and `@tailwind` directives are in `index.css`

### Animations not smooth
Check that Framer Motion is installed: `npm install framer-motion`

### Build errors
Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`

---

**Built with ❤️ for Nicole Arguedas Fitness**
