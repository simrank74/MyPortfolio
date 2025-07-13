# Simran Kaur - AI & Cybersecurity Portfolio

A stunning, interactive portfolio website showcasing Simran Kaur's expertise in Artificial Intelligence and Cybersecurity. Built with modern web technologies and featuring 3D graphics, smooth animations, and responsive design.

## 🌟 Features

### ✨ Visual Design
- **3D Particle Background**: Interactive Three.js particle system that responds to mouse movement
- **Glassmorphism UI**: Modern glass-like cards with backdrop blur effects
- **Gradient Animations**: Dynamic color gradients and glowing effects
- **Responsive Design**: Fully responsive across all devices and screen sizes

### 🎯 Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **3D Card Tilt**: Cards respond to mouse movement with realistic 3D tilt effects
- **Animated Skill Bars**: Progress bars animate when scrolled into view
- **Typing Effect**: Hero title types out character by character
- **Parallax Scrolling**: Floating elements move at different speeds for depth
- **Mobile Navigation**: Hamburger menu for mobile devices

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with animated title and floating stats card
2. **About**: Personal story with education timeline and achievement cards
3. **Experience**: Work experience and research projects with interactive cards
4. **Projects**: Featured projects with technology tags and badges
5. **Skills**: Technical skills with animated progress bars
6. **Contact**: Contact information and functional contact form

### 🛠 Technical Features
- **Three.js Integration**: 3D particle system for background
- **Intersection Observer**: Scroll-triggered animations
- **Form Handling**: Contact form with validation and notifications
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Dynamic theming with CSS variables

## 🚀 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with animations and 3D transforms
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Three.js**: 3D graphics and particle system

### Libraries & APIs
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Orbitron, Rajdhani)
- **Three.js CDN**: 3D graphics library

### Design Principles
- **Glassmorphism**: Modern glass-like design aesthetic
- **Neumorphism**: Subtle depth and shadows
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and keyboard navigation

## 📦 Installation & Setup

1. **Clone or Download** the project files
2. **Open `index.html`** in a modern web browser
3. **No build process required** - runs directly in the browser

### File Structure
```
profilewebsite/
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The color scheme can be easily modified by changing CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Main blue */
    --secondary-color: #ff6b6b;    /* Accent red */
    --accent-color: #4ecdc4;       /* Teal accent */
    --dark-bg: #0a0a0a;            /* Background */
    /* ... more variables */
}
```

### Content
- Update personal information in `index.html`
- Modify project details, skills, and experience
- Add or remove sections as needed

### 3D Background
Adjust particle system in `script.js`:
```javascript
const particleCount = 1000;  // Number of particles
const material = new THREE.PointsMaterial({
    size: 0.05,              // Particle size
    // ... more options
});
```

## 🌐 Browser Support

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support (with webkit prefixes)
- **Edge**: Full support
- **Mobile Browsers**: Full responsive support

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Performance Features

- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Intersection Observer for scroll animations
- **Efficient 3D**: Optimized Three.js particle system
- **Minimal Dependencies**: Only essential external libraries

## 🔧 Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style with CSS in `style.css`
3. Add animations in `script.js` if needed

### Adding New Animations
```javascript
// In script.js
function initNewAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    const elements = document.querySelectorAll('.new-element');
    elements.forEach(el => observer.observe(el));
}
```

## 📄 License

This project is created for Simran Kaur's portfolio. Feel free to use as inspiration for your own portfolio projects.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📞 Contact

For questions about this portfolio website:
- **Email**: simrankalsi2003@gmail.com
- **LinkedIn**: [simran-kaur-kalsi](https://linkedin.com/in/simran-kaur-kalsi)
- **GitHub**: [simran74](https://github.com/simran74)

---

**Built with ❤️ for the future of AI & Cybersecurity** 