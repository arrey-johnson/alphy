# Service Images Setup Guide

## 📸 Images Needed for "Our Main Services" Section

You need **8 service images** to replace the current SVG illustrations.

---

## 📁 Directory Structure

Create this directory and add your images:

```
public/
└── images/
    └── services/
        ├── house-cleaning.jpg
        ├── office-cleaning.jpg
        ├── deep-cleaning.jpg
        ├── move-cleaning.jpg
        ├── upholstery-cleaning.jpg
        ├── carpet-cleaning.jpg
        ├── recurring-services.jpg
        └── custom-cleaning.jpg
```

---

## 🎯 Image Requirements

### Technical Specs:
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 800x600px (4:3 ratio) or 1200x900px
- **File size**: < 300KB per image (optimized)
- **Quality**: High resolution, professional photography
- **Orientation**: Landscape

### Content Guidelines:

#### 1. house-cleaning.jpg
- **Shows**: Residential home cleaning
- **Suggestions**: Living room, bedroom, or kitchen being cleaned
- **Elements**: Clean, bright, modern home interior

#### 2. office-cleaning.jpg
- **Shows**: Commercial/office space cleaning
- **Suggestions**: Office desk, conference room, or workspace
- **Elements**: Professional office environment

#### 3. deep-cleaning.jpg
- **Shows**: Detailed, thorough cleaning work
- **Suggestions**: Scrubbing, detailed work, cleaning supplies visible
- **Elements**: Close-up of cleaning action

#### 4. move-cleaning.jpg
- **Shows**: Empty space or moving-related cleaning
- **Suggestions**: Empty room, boxes, keys, or fresh clean space
- **Elements**: Moving context visible

#### 5. upholstery-cleaning.jpg
- **Shows**: Furniture/upholstery being cleaned
- **Suggestions**: Sofa, chair, or fabric furniture
- **Elements**: Cleaning equipment on furniture

#### 6. carpet-cleaning.jpg
- **Shows**: Carpet or floor cleaning
- **Suggestions**: Vacuum, carpet cleaner, or floor scrubbing
- **Elements**: Focus on floor/carpet

#### 7. recurring-services.jpg
- **Shows**: Regular/routine cleaning
- **Suggestions**: Calendar, schedule, or regular maintenance
- **Elements**: Consistency/routine theme

#### 8. custom-cleaning.jpg
- **Shows**: Customized/specialized cleaning
- **Suggestions**: Checklist, planning, or tailored service
- **Elements**: Personalization theme

---

## 🚀 Quick Setup

### Step 1: Create Directory
```bash
mkdir -p public/images/services
```

### Step 2: Add Your Images
Place your 8 images in the directory with the exact names listed above.

### Step 3: Optimize Images (Optional but Recommended)

Using online tools:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/

Or using command line:
```bash
# Install ImageMagick
brew install imagemagick

# Optimize all images
for img in public/images/services/*.jpg; do
  convert "$img" -resize 800x600^ -gravity center -extent 800x600 -quality 85 "$img"
done
```

### Step 4: Refresh Browser
- Clear cache: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- The service cards will now show your real photos!

---

## 🎨 Current Fallback

Until you add the images, the service cards will show:
- Animated SVG illustrations (current)
- All functionality still works
- Hover effects active
- Badges visible

---

## ✨ What Happens After Adding Images

Once you add the photos:
- ✅ Real photos replace SVG illustrations
- ✅ Gradient overlay on hover (blue-green)
- ✅ Image zooms on hover
- ✅ Title and description appear
- ✅ Golden badges remain visible
- ✅ Animated arrow appears
- ✅ Smooth transitions

---

## 📊 Image Composition Tips

### Good Composition:
- Subject centered or slightly off-center
- Clean, uncluttered background
- Good lighting (bright, natural)
- Professional appearance
- Action shots (people cleaning)
- Brand colors visible (blue, yellow gloves)

### Avoid:
- Dark or poorly lit photos
- Cluttered backgrounds
- Blurry images
- Low resolution
- Unprofessional settings

---

## 🔄 Using Stock Photos (Temporary)

If you don't have professional photos yet, you can use stock photos from:
- **Unsplash**: https://unsplash.com/s/photos/cleaning-service
- **Pexels**: https://www.pexels.com/search/cleaning/
- **Pixabay**: https://pixabay.com/images/search/cleaning/

Search terms:
- "professional cleaning"
- "house cleaning service"
- "office cleaning"
- "carpet cleaning"
- "commercial cleaning"

---

## ✅ Checklist

- [ ] Create `public/images/services/` directory
- [ ] Add 8 images with correct names
- [ ] Optimize images (< 300KB each)
- [ ] Verify dimensions (800x600px recommended)
- [ ] Test in browser
- [ ] Check hover effects
- [ ] Verify on mobile

---

## 🎯 Alternative: Use Your Hero Photos

If you want to reuse your hero photos temporarily:

```bash
# Copy hero photos to services directory
cp public/images/hero/2148112715.jpg public/images/services/house-cleaning.jpg
cp public/images/hero/2149345516.jpg public/images/services/office-cleaning.jpg
cp public/images/hero/2149345525.jpg public/images/services/deep-cleaning.jpg
cp public/images/hero/2150520639.jpg public/images/services/move-cleaning.jpg

# Duplicate for remaining services
cp public/images/hero/2148112715.jpg public/images/services/carpet-cleaning.jpg
cp public/images/hero/2149345516.jpg public/images/services/upholstery-cleaning.jpg
cp public/images/hero/2149345525.jpg public/images/services/recurring-services.jpg
cp public/images/hero/2150520639.jpg public/images/services/custom-cleaning.jpg
```

This will give you real photos immediately while you gather specific service photos.

---

## 📝 Current Status

- ✅ Code updated to use JPG images
- ✅ Paths configured correctly
- ⏳ Waiting for images to be added
- ✅ Fallback SVGs working

Once you add the images, they'll automatically appear with all the beautiful hover effects and animations!
