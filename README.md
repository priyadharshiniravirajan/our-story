# Ravi ❤️ Priya - Romantic Love Story Website

A beautiful, cinematic website that tells the love story of Ravi and Priya through interactive scrollable sections with smooth animations, photo galleries, and romantic design elements.

## 🌟 Features

- **Cinematic Storytelling**: Scrollable sections that unfold your love story like movie scenes
- **Smooth Animations**: AOS (Animate on Scroll) library for beautiful fade-ins and transitions
- **Photo Gallery**: Swiper.js powered slideshow for your trip memories
- **Interactive Elements**: 
  - Background music control
  - Countdown timer to your anniversary (22-09-2025)
  - Hidden easter egg love letter
  - Floating hearts and particles
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Romantic Theme**: Warm colors (gold, peach, red, beige) with handwritten fonts

## 🚀 Quick Setup

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Fork/Download** this repository
2. **Upload** your photos to the `images/` folder (create the folder if needed)
3. **Edit** the content in `index.html` to personalize your story
4. **Push** to GitHub and enable GitHub Pages in repository settings

### Option 2: Deploy to Netlify

1. **Zip** the project files
2. **Drag and drop** to [Netlify](https://netlify.com)
3. **Done!** Your site is live instantly

### Option 3: Local Development

```bash
# Clone the repository
git clone [your-repo-url]

# Open with a local server (recommended)
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Or simply open index.html in your browser
```

## 🎨 Customization Guide

### 1. Personal Content

**Edit `index.html` to customize:**

- **Names**: Replace "Ravi" and "Priya" with your names
- **Story Details**: Update timeline events, dates, and descriptions
- **Love Letter**: Modify the easter egg love letter content
- **Anniversary Date**: Change the countdown target date

### 2. Photos

**Replace the photo URLs in the Swiper gallery:**

```html
<!-- Find this section in index.html and update image URLs -->
<div class="swiper-slide">
    <div class="trip-photo">
        <img src="YOUR_PHOTO_URL" alt="Your photo description">
        <div class="photo-caption">
            <p>Your photo caption</p>
        </div>
    </div>
</div>
```

**Recommended photo sources:**
- Your own photos (upload to `images/` folder)
- [Pexels](https://pexels.com) for stock photos
- [Unsplash](https://unsplash.com) for high-quality images

### 3. Colors & Styling

**Edit `styles.css` to customize:**

```css
/* Change the main color scheme */
:root {
    --gold-400: #your-color;
    --gold-500: #your-color;
    --romantic-gradient: linear-gradient(135deg, #your-gradient);
}
```

### 4. Background Music

**Add your own music:**

1. Add your audio file to the project folder
2. Update the audio source in `index.html`:

```html
<audio id="bgMusic" loop>
    <source src="your-music-file.mp3" type="audio/mpeg">
</audio>
```

## 📁 File Structure

```
romantic-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/            # Your photos (create this folder)
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 🛠 Technical Details

### Libraries Used

- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Animate On Scroll library
- **Swiper.js**: Modern touch slider
- **GSAP**: High-performance animations (optional)

### Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Performance

- Optimized images and animations
- Lazy loading for better performance
- Minimal dependencies via CDN

## 💝 Special Features Explained

### Countdown Timer
Automatically counts down to your specified anniversary date (22-09-2025). Updates every second and shows a special message when the date arrives.

### Easter Egg Love Letter
Click the gift (💝) icon in the final section to reveal a hidden personal love letter with sparkle animations.

### Responsive Timeline
The timeline adapts beautifully from desktop (center-aligned) to mobile (left-aligned) layouts.

### Background Music
Includes auto-muted background music with a toggle control. Users can unmute to enjoy soft romantic instrumental music.

## 🎭 Animation Details

- **Floating Hearts**: CSS keyframe animations
- **Parallax Scrolling**: GSAP-powered smooth scrolling effects
- **Wave Animations**: CSS-generated wave motions
- **Particle Effects**: JavaScript-generated floating particles
- **Typing Effect**: Typewriter animation for chat bubbles

## 📱 Mobile Optimization

- Touch-friendly navigation
- Responsive image galleries
- Optimized font sizes
- Mobile-specific timeline layout
- Performance optimized for slower connections

## 🚀 Deployment Tips

### For GitHub Pages:
1. Repository name can be `username.github.io` for main domain
2. Enable GitHub Pages in Settings > Pages
3. Choose source branch (usually `main` or `master`)

### For Custom Domain:
1. Add `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

### For Netlify:
1. Automatic SSL certificate
2. Form handling capabilities
3. Easy custom domain setup

## 🤝 Contributing

Feel free to fork this project and make it your own! If you create something amazing, we'd love to see it.

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for your own romantic surprises! ❤️

## 💌 Credits

Created with love for couples who want to celebrate their unique love stories. 

**Special thanks to:**
- Tailwind CSS team for the amazing framework
- AOS library for beautiful animations
- Swiper.js for the elegant photo gallery
- Pexels for beautiful stock photos

---

**Made with ❤️ for love stories that deserve to be celebrated**

*"Love is not just looking at each other, it's looking in the same direction together."* ✨