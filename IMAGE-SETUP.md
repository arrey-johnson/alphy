# Hero Slider Images Setup Guide

## 📸 Image Files Needed

Place these 4 images in the `public/images/hero/` directory:

### 1. carpet-cleaning.jpg
- **Current placeholder**: First image (person cleaning carpet with yellow gloves)
- **Slide**: Welcome slide
- **Recommended size**: 1920x800px
- **Description**: Shows professional carpet/upholstery cleaning
- **Overlay**: Blue-Green gradient

### 2. office-cleaning-team.jpg
- **Current placeholder**: Second image (two people cleaning office)
- **Slide**: Office & Commercial Cleaning
- **Recommended size**: 1920x800px
- **Description**: Team cleaning modern office space
- **Overlay**: Green-Gold gradient

### 3. deep-cleaning.jpg
- **Current placeholder**: Third image (person cleaning staircase railing)
- **Slide**: Deep Cleaning Specialists
- **Recommended size**: 1920x800px
- **Description**: Detailed cleaning work being performed
- **Overlay**: Pink-Blue gradient

### 4. office-cleaning.jpg
- **Current placeholder**: Fourth image (two people cleaning office entrance)
- **Slide**: Trusted Cleaning Experts
- **Recommended size**: 1920x800px
- **Description**: Professional cleaners at work
- **Overlay**: Purple-Pink gradient

---

## 📁 Directory Structure

```
public/
└── images/
    └── hero/
        ├── carpet-cleaning.jpg
        ├── office-cleaning-team.jpg
        ├── deep-cleaning.jpg
        └── office-cleaning.jpg
```

---

## 🎨 Image Requirements

### Technical Specs:
- **Format**: JPG or WebP (for better compression)
- **Dimensions**: 1920x800px (or 16:9 aspect ratio)
- **File size**: < 500KB per image (optimized)
- **Quality**: High resolution, professional photography
- **Orientation**: Landscape

### Content Guidelines:
- Show professional cleaners in action
- Bright, well-lit environments
- Modern, clean settings
- People wearing professional attire/uniforms
- Yellow gloves visible (brand consistency)
- Blue aprons/uniforms (matches brand colors)

### Composition:
- Subject should be centered or slightly off-center
- Leave space for text overlay (center area)
- Avoid busy backgrounds
- Good contrast for text readability

---

## 🔧 How to Add Images

### Step 1: Prepare Images
1. Resize images to 1920x800px
2. Optimize for web (compress to < 500KB)
3. Rename according to the list above

### Step 2: Add to Project
```bash
# Create directory if it doesn't exist
mkdir -p public/images/hero

# Copy your images
cp /path/to/your/carpet-cleaning.jpg public/images/hero/
cp /path/to/your/office-cleaning-team.jpg public/images/hero/
cp /path/to/your/deep-cleaning.jpg public/images/hero/
cp /path/to/your/office-cleaning.jpg public/images/hero/
```

### Step 3: Verify
- Check that all 4 images are in place
- Test the slider in development mode
- Ensure images load correctly

---

## 🎯 Image Optimization Tips

### Using Online Tools:
- **TinyPNG**: https://tinypng.com/ (compress JPG/PNG)
- **Squoosh**: https://squoosh.app/ (advanced compression)
- **ImageOptim**: https://imageoptim.com/ (Mac app)

### Using Command Line:
```bash
# Install ImageMagick
brew install imagemagick

# Resize and optimize
convert input.jpg -resize 1920x800^ -gravity center -extent 1920x800 -quality 85 output.jpg
```

### Using Node.js (Sharp):
```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .resize(1920, 800, { fit: 'cover' })
  .jpeg({ quality: 85 })
  .toFile('output.jpg');
```

---

## 🎨 Current Overlay Colors

Each slide has a gradient overlay for text readability:

1. **Slide 1**: Blue-Green (rgba(74, 144, 226, 0.85) → rgba(76, 175, 80, 0.75))
2. **Slide 2**: Green-Gold (rgba(76, 175, 80, 0.85) → rgba(255, 193, 7, 0.75))
3. **Slide 3**: Pink-Blue (rgba(255, 107, 157, 0.85) → rgba(74, 144, 226, 0.75))
4. **Slide 4**: Purple-Pink (rgba(156, 39, 176, 0.85) → rgba(233, 30, 99, 0.75))

The overlay ensures text is always readable regardless of image content.

---

## 📝 Alternative: Using Your Provided Images

If you want to use the exact images you provided:

1. Save the 4 images from your message
2. Rename them:
   - First image → `carpet-cleaning.jpg`
   - Second image → `office-cleaning-team.jpg`
   - Third image → `deep-cleaning.jpg`
   - Fourth image → `office-cleaning.jpg`
3. Place in `public/images/hero/`
4. Refresh the website

---

## 🚀 Testing

After adding images:

```bash
# Start development server
npm run dev

# Open browser
# Navigate to homepage
# Watch slider transition through all 4 images
# Check that text is readable on all slides
# Test on mobile devices
```

---

## 🔄 Fallback

If images don't load, the slider will show:
- Gradient backgrounds (current setup)
- All text remains visible
- Functionality continues to work

---

## 📊 Performance

With optimized images:
- Initial load: ~1.5MB (all 4 images)
- Lazy loading: Only current slide loads first
- Subsequent slides: Load in background
- Total impact: Minimal with proper optimization

---

## ✅ Checklist

- [ ] Create `public/images/hero/` directory
- [ ] Add `carpet-cleaning.jpg`
- [ ] Add `office-cleaning-team.jpg`
- [ ] Add `deep-cleaning.jpg`
- [ ] Add `office-cleaning.jpg`
- [ ] Optimize all images (< 500KB each)
- [ ] Test slider functionality
- [ ] Check text readability
- [ ] Test on mobile
- [ ] Verify all slides transition smoothly

---

**Note**: The code is already configured to use these images. Simply add the image files to the correct directory and they will automatically appear in the slider!
