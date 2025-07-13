// Enhanced 3D Background with Rotating Stars and Space Entities
let scene, camera, renderer, stars = [];

// Initialize Three.js Scene
function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('bg-canvas'),
        alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Create particle system for stars (rotating)
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.8
    });
    
    // Create more stars with bigger sizes
    const starPositions = [];
    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starPositions.push(x, y, z);
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
    
    // Create different colored stars
    const starType = Math.random();
    if (starType < 0.7) {
        // White/blue stars
        starMaterial.color.setHex(0x87CEEB);
    } else if (starType < 0.85) {
        // Yellow stars
        starMaterial.color.setHex(0xFFD700);
    } else {
        // Red stars
        starMaterial.color.setHex(0xFF6B6B);
    }
    
    camera.position.z = 500;
    
    // Add rotation to the scene
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the entire star field
        starField.rotation.y += 0.001;
        starField.rotation.x += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Enhanced Star Field Creation - Reduced density
// function createStarField() {
//     const starField = document.createElement('div');
//     starField.className = 'star-field';
    
//     // Create fewer stars (reduced from 200 to 100)
//     for (let i = 0; i < 100; i++) {
//         const star = document.createElement('div');
//         const starTypes = ['star-small', 'star-medium', 'star-large'];
//         const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
        
//         star.className = `star ${starType}`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.top = `${Math.random() * 100}%`;
        
//         // Random animation delay for staggered twinkling
//         star.style.animationDelay = `${Math.random() * 8}s`;
        
//         // Add some colored stars (reduced frequency)
//         if (Math.random() > 0.9) { // Reduced from 0.8 to 0.9
//             const colors = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#8a2be2'];
//             const color = colors[Math.floor(Math.random() * colors.length)];
//             star.style.background = color;
//             star.style.boxShadow = `0 0 10px ${color}`;
//         }
        
//         starField.appendChild(star);
//     }
    
//     document.body.appendChild(starField);
// }

// Cartoon Aliens that stay in content area - COMMENTED OUT
// function createCartoonAliens() {
//     const alienColors = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#8a2be2', '#ffa726'];
    
//     // Create 3 cartoon aliens that stay in content area
//     for (let i = 0; i < 3; i++) {
//         const alien = document.createElement('div');
//         alien.className = 'cartoon-alien';
        
//         // Position in content area only (not full viewport)
//         const startY = 100 + (i * 200); // Spread them out vertically
//         const startX = 50 + (i * 150); // Spread them out horizontally
        
//         alien.style.top = `${startY}px`;
//         alien.style.left = `${startX}px`;
        
//         // Random color
//         const color = alienColors[Math.floor(Math.random() * alienColors.length)];
//         alien.style.background = `linear-gradient(135deg, ${color}, ${color}dd)`;
        
//         // Random size
//         const scale = 0.8 + Math.random() * 0.4;
//         alien.style.transform = `scale(${scale})`;
        
//         // Add to body
//         document.body.appendChild(alien);
//     }
// }

// Animate Three.js Scene (static background)
function animate() {
    requestAnimationFrame(animate);
    
    // Keep stars static - no rotation
    // Only subtle movement for depth effect
    if (particleSystem) {
        // Very subtle movement for depth
        particleSystem.position.z = Math.sin(Date.now() * 0.0001) * 10;
    }
    
    renderer.render(scene, camera);
}

// Mouse movement tracking
document.addEventListener('mousemove', (event) => {
    window.mouseX = event.clientX - window.innerWidth / 2;
    window.mouseY = event.clientY - window.innerHeight / 2;
});

// Window resize handler
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile navigation toggle
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .experience-card, .achievement-card, .about-card, .timeline-content, .research-card, .certification-card, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Skill bar animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// 3D tilt effect for cards
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Contact Form with Message Storage
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const messagesDisplay = document.getElementById('messagesDisplay');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Store message in localStorage
            const newMessage = {
                id: Date.now(),
                name: name,
                email: email,
                subject: subject,
                message: message,
                date: new Date().toLocaleString()
            };
            
            // Get existing messages
            let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            messages.unshift(newMessage); // Add new message at the beginning
            
            // Keep only last 10 messages
            if (messages.length > 10) {
                messages = messages.slice(0, 10);
            }
            
            // Save to localStorage
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            // Update messages display
            updateMessagesDisplay();
            
            // Show success message
            showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Load existing messages on page load
    if (messagesDisplay) {
        updateMessagesDisplay();
    }
}

// Show form messages
function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
    }
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Update messages display
function updateMessagesDisplay() {
    const messagesDisplay = document.getElementById('messagesDisplay');
    if (!messagesDisplay) return;
    
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    if (messages.length === 0) {
        messagesDisplay.innerHTML = '<h3>No messages yet</h3><p>Messages sent through the contact form will appear here.</p>';
        return;
    }
    
    let html = '<h3>Recent Messages</h3>';
    
    messages.forEach(msg => {
        html += `
            <div class="message-item">
                <div class="message-header">
                    <span class="message-sender">${msg.name}</span>
                    <span class="message-date">${msg.date}</span>
                </div>
                <div class="message-subject">${msg.subject}</div>
                <div class="message-content">${msg.message}</div>
                <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-secondary);">
                    From: ${msg.email}
                </div>
            </div>
        `;
    });
    
    messagesDisplay.innerHTML = html;
}

// Typing effect for hero title
function initTypingEffect() {
    const titleElement = document.querySelector('.title-line');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Parallax scrolling effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card, .achievement-card');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// FAQ accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// Gallery modal functionality
function initGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const closeBtn = document.querySelector('.gallery-close');
    const galleryBtns = document.querySelectorAll('.gallery-btn');
    const galleryImage = document.getElementById('gallery-image');
    const galleryTitle = document.getElementById('gallery-title');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentImages = [];
    let currentIndex = 0;
    
    // Project image collections
    const projectImages = {
        'tanx': [
            'images/tanx transport/Screenshot 2025-07-13 124005.png',
            'images/tanx transport/Screenshot 2025-07-13 124244.png',
            'images/tanx transport/Screenshot 2025-07-13 124314.png'
        ],
        'loofy': [
            'images/loofy event management/Screenshot 2025-05-11 154414.png',
            'images/loofy event management/Screenshot 2025-05-11 154432.png',
            'images/loofy event management/Screenshot 2025-05-11 154456.png',
            'images/loofy event management/Screenshot 2025-05-11 154507.png',
            'images/loofy event management/Screenshot 2025-05-11 154556.png'
        ],
        'taskmaster': [
            'images/task master/Screenshot 2025-07-13 104650.png',
            'images/task master/Screenshot 2025-07-13 104724.png',
            'images/task master/Screenshot 2025-07-13 105402.png',
            'images/task master/Screenshot 2025-07-13 105421.png',
            'images/task master/Screenshot 2025-07-13 105451.png'
        ],
        'papyr': [
            'images/papyr/Screenshot 2025-05-27 154916.png',
            'images/papyr/Screenshot 2025-05-27 154937.png',
            'images/papyr/Screenshot 2025-05-27 154954.png',
            'images/papyr/Screenshot 2025-05-27 155042.png',
            'images/papyr/Screenshot 2025-05-27 155110.png',
            'images/papyr/Screenshot 2025-05-27 155134.png',
            'images/papyr/Screenshot 2025-05-27 155209.png'
        ]
    };
    
    const projectTitles = {
        'tanx': 'Trailer Tracking System',
        'loofy': 'Loofy Event Management',
        'taskmaster': 'Task Masters',
        'papyr': 'Online Bookstore UI'
    };
    
    function openGallery(projectKey) {
        currentImages = projectImages[projectKey] || [];
        currentIndex = 0;
        
        if (currentImages.length > 0) {
            galleryTitle.textContent = `${projectTitles[projectKey]} - Gallery`;
            updateGalleryImage();
            createThumbnails();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeGallery() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentImages = [];
        currentIndex = 0;
    }
    
    function updateGalleryImage() {
        if (currentImages.length > 0) {
            galleryImage.src = currentImages[currentIndex];
            galleryImage.alt = `Project Screenshot ${currentIndex + 1}`;
            
            // Update thumbnail active state
            const thumbnails = thumbnailsContainer.querySelectorAll('.gallery-thumbnail');
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentIndex);
            });
            
            // Update navigation buttons
            prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
            nextBtn.style.display = currentIndex < currentImages.length - 1 ? 'flex' : 'none';
        }
    }
    
    function createThumbnails() {
        thumbnailsContainer.innerHTML = '';
        
        currentImages.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.className = 'gallery-thumbnail';
            thumbnail.classList.toggle('active', index === currentIndex);
            
            thumbnail.addEventListener('click', () => {
                currentIndex = index;
                updateGalleryImage();
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    function nextImage() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            updateGalleryImage();
        }
    }
    
    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGalleryImage();
        }
    }
    
    // Event listeners
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = btn.getAttribute('data-project');
            openGallery(projectKey);
        });
    });
    
    closeBtn.addEventListener('click', closeGallery);
    
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGallery();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch (e.key) {
                case 'Escape':
                    closeGallery();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader immediately if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    try {
        initThreeJS();
    } catch (error) {
        console.log('Three.js not available, using fallback effects');
    }
    
    // createStarField(); // Removed to eliminate white balls
    // createCartoonAliens(); // COMMENTED OUT
    initSmoothScrolling();
    initMobileNav();
    initScrollAnimations();
    initSkillBars();
    initTiltEffect();
    initContactForm();
    initTypingEffect();
    initParallaxEffect();
    initFAQAccordion();
    initGalleryModal(); // Initialize gallery modal
});

// Error handling for Three.js
window.addEventListener('error', (e) => {
    if (e.message.includes('THREE')) {
        console.log('Three.js error, continuing with fallback effects');
    }
});

// Fallback to hide loader if it's still visible after 3 seconds
setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        loader.style.display = 'none';
    }
}, 3000); 