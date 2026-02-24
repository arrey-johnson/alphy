# ALPHY'S SERVICES LTD Website

Professional cleaning services website built with React, Vite, and modern UI design.

## 🌟 Features

- ✨ Modern, responsive design with smooth animations
- 📱 Mobile-first approach with hamburger menu
- 🎨 Brand colors: Sky Blue (#4A90E2), Pink (#FF6B9D), Green (#4CAF50)
- 🚀 Fast performance with Vite
- ♿ Accessibility compliant
- 📧 Contact form integration
- 🔍 SEO optimized with meta tags
- 📊 Statistics section
- ⭐ Customer reviews showcase
- 🎯 Smooth scroll navigation

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Run development server (opens at http://localhost:5173)
npm run dev
```

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Custom Domain Setup

1. After deployment, go to your project in Vercel
2. Navigate to Settings → Domains
3. Add `alphysservicesltd.com`
4. Vercel will provide DNS records
5. Go to GoDaddy DNS settings and add:
   - Type: A Record
   - Name: @
   - Value: (Vercel's IP)
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## 📄 Pages

- **Home** - Hero section, services overview, why choose us, stats
- **About** - Company story and core values
- **Services** - Detailed service descriptions (Standard, Deep, Move-in/out, Upholstery)
- **Gallery** - Photo gallery (placeholder ready)
- **Reviews** - Customer testimonials
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and business information
- **Privacy Policy** - GDPR compliant privacy policy
- **Cookie Policy** - Cookie usage policy

## 🎨 Design Improvements

- Gradient backgrounds and buttons
- Smooth hover animations
- Card-based layouts with shadows
- Animated hero section
- Interactive FAQ accordion
- Responsive grid layouts
- Modern color palette
- Professional typography

## 📸 Images

Placeholder SVG images are included in `/public/images/`:
- `hero-bg.svg` - Hero background
- `cleaning-icon.svg` - Service icon
- `logo.svg` - Company logo
- `service-placeholder.svg` - Service images
- `avatar-placeholder.svg` - Review avatars

Replace these with actual photos for production.

## 📞 Contact Information

- **Email**: info@alphysservicesltd.com
- **Phone**: 01902 239420
- **WhatsApp**: 07852 145002
- **Address**: 421 Bilston Road, Wolverhampton WV2 2NN
- **Hours**: Monday - Sunday, 08:00 AM - 08:00 PM

## 🗺️ Areas Covered

West Midlands, East Midlands, Manchester, Liverpool, Northamptonshire

## 🔧 Tech Stack

- React 18
- React Router 6
- Vite 5
- CSS3 with modern features
- SVG graphics

## 📱 Social Media

- Instagram: @alphysservices
- Facebook: Alphy's Services Ltd
- Google Business: [Link](https://share.google/nAQK3t3ucsNqiZdbX)

## 🎯 Next Steps

1. Replace placeholder images with actual photos
2. Add more customer reviews
3. Populate gallery with before/after photos
4. Set up email backend for contact form (Formspree, EmailJS, etc.)
5. Add Google Analytics
6. Set up Google Search Console
7. Create sitemap.xml
8. Add structured data (Schema.org)

## 📝 License

© 2024 Alphy's Services Ltd. All rights reserved.
