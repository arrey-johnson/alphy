# Deployment Guide for ALPHY'S SERVICES LTD Website

## Quick Start Deployment

### Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Domain registered at GoDaddy: alphysservicesltd.com

## Step-by-Step Deployment

### 1. Prepare Your Code

```bash
# Navigate to your project directory
cd alphys-services-website

# Install dependencies
npm install

# Test the build locally
npm run build
npm run preview
```

### 2. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/alphys-services-website.git

# Push to GitHub
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository: `alphys-services-website`
5. Vercel auto-detects settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### 4. Configure Custom Domain

#### In Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter: `alphysservicesltd.com`
5. Click "Add"
6. Also add: `www.alphysservicesltd.com`

Vercel will show you DNS records to configure.

#### In GoDaddy:

1. Log in to GoDaddy
2. Go to "My Products" → "Domains"
3. Click on `alphysservicesltd.com`
4. Click "DNS" or "Manage DNS"
5. Add/Update these records:

**For Root Domain (@):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 seconds
```

6. Save changes
7. Wait 24-48 hours for DNS propagation (usually faster)

### 5. Verify Deployment

1. Visit: https://alphysservicesltd.com
2. Check all pages load correctly
3. Test contact form
4. Test mobile responsiveness
5. Check social media links

## Environment Variables (If Needed)

If you add backend services later:

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables like:
   - `VITE_API_KEY`
   - `VITE_FORM_ENDPOINT`

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- Rollback available in Vercel dashboard

## SSL Certificate

Vercel automatically provides free SSL certificates for:
- alphysservicesltd.com
- www.alphysservicesltd.com

## Performance Optimization

Already included:
- ✅ Vite build optimization
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Gzip compression (Vercel automatic)

## Monitoring

### Vercel Analytics (Optional)

1. Go to project → Analytics
2. Enable Vercel Analytics
3. View real-time traffic data

### Google Analytics (Recommended)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS records in GoDaddy match Vercel requirements
- Wait up to 48 hours for full propagation

### 404 Errors on Refresh
- Already handled by `vercel.json` rewrites
- Ensure `vercel.json` is in root directory

## Post-Deployment Checklist

- [ ] Website loads at alphysservicesltd.com
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] Social media links work
- [ ] Phone/WhatsApp links work
- [ ] SSL certificate active (https://)
- [ ] Google Search Console setup
- [ ] Submit sitemap to Google
- [ ] Test on multiple devices
- [ ] Test on multiple browsers

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com

## Updates

To update the website:

```bash
# Make changes to code
# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update description"
git push

# Vercel automatically deploys!
```

## Backup

Vercel keeps deployment history:
- View past deployments in dashboard
- Rollback to any previous version
- Download deployment source code

---

**Deployment Date**: [Add date when deployed]
**Deployed By**: [Your name]
**Production URL**: https://alphysservicesltd.com
