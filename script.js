// JavaScript for Romantic Love Story Website

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Initialize Swiper
const swiper = new Swiper('.trip-gallery', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    speed: 800,
});

// Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9v6l6-3-6-3z" />`;
    } else {
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
        musicIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />`;
    }
    isPlaying = !isPlaying;
});

// Smooth scrolling for "Start Story" button
document.getElementById('startStory').addEventListener('click', () => {
    document.getElementById('chapter1').scrollIntoView({
        behavior: 'smooth'
    });
});

// Countdown Timer to 22-09-2025
function updateCountdown() {
    const targetDate = new Date('2025-09-22T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Target date reached
        document.getElementById('countdown').innerHTML = '<div class="text-4xl text-gold-400 font-bold">Happy Anniversary! 🎉</div>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Easter Egg - Love Letter Modal
const easterEggBtn = document.getElementById('easterEgg');
const loveLetterModal = document.getElementById('loveLetterModal');
const closeLetter = document.getElementById('closeLetter');

easterEggBtn.addEventListener('click', () => {
    loveLetterModal.classList.remove('hidden');
    loveLetterModal.classList.add('flex');
    
    // Add sparkle effect
    createSparkles();
});

closeLetter.addEventListener('click', () => {
    loveLetterModal.classList.add('hidden');
    loveLetterModal.classList.remove('flex');
});

// Close modal when clicking outside
loveLetterModal.addEventListener('click', (e) => {
    if (e.target === loveLetterModal) {
        loveLetterModal.classList.add('hidden');
        loveLetterModal.classList.remove('flex');
    }
});

// Sparkle effect for easter egg
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '9999';
    
    document.body.appendChild(sparkleContainer);
    
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s ease-out forwards`;
        
        sparkleContainer.appendChild(sparkle);
    }
    
    // Remove sparkles after animation
    setTimeout(() => {
        document.body.removeChild(sparkleContainer);
    }, 3000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// GSAP Animations for enhanced effects
if (typeof gsap !== 'undefined') {
    // Parallax effect for backgrounds
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax backgrounds
    gsap.to('.sunrise-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: '#landing',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Floating animation for hearts
    gsap.to('.heart', {
        y: -100,
        rotation: 360,
        duration: 6,
        ease: "none",
        repeat: -1,
        stagger: 2
    });
    
    // Text reveal animation
    gsap.fromTo('.romantic-title', 
        { 
            opacity: 0, 
            y: 50 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.romantic-title',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Add typing effect to chat bubbles
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when chat bubbles come into view
const chatBubbles = document.querySelectorAll('.chat-bubble p');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent;
            setTimeout(() => {
                typeWriter(entry.target, text);
            }, 500);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

chatBubbles.forEach(bubble => observer.observe(bubble));

// Add floating animation to timeline markers
const timelineMarkers = document.querySelectorAll('.timeline-marker');
timelineMarkers.forEach((marker, index) => {
    marker.style.animationDelay = `${index * 0.2}s`;
    marker.style.animation = 'float 3s ease-in-out infinite';
});

// Add float animation CSS
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateX(-50%) translateY(0px); }
        50% { transform: translateX(-50%) translateY(-10px); }
    }
`;
document.head.appendChild(floatStyle);

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.width = '0%';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6)';
scrollProgress.style.zIndex = '9999';
scrollProgress.style.transition = 'width 0.3s ease';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// Add subtle particle effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#f59e0b';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.6';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 10;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const distance = Math.random() * 200 + 100;
    
    particle.animate([
        { transform: `translateY(0px) translateX(0px)`, opacity: 0.6 },
        { transform: `translateY(-${distance}px) translateX(${(Math.random() - 0.5) * 100}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(particle);
    };
}

// Create particles occasionally
setInterval(createParticle, 3000);

console.log('🌟 Welcome to Ravi & Priya\'s Love Story! 🌟');
console.log('💕 This website was made with love and lots of code! 💕');


    function openImageModal(img) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        modalImg.src = img.src;
        modal.classList.remove("hidden");
    }

    function closeImageModal() {
        document.getElementById("imageModal").classList.add("hidden");
    }

const slider = document.getElementById('imageSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalSlides = slider.children.length;
    let index = 0;

    function showSlide(i) {
        slider.style.transform = `translateX(-${i * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        showSlide(index);
    });

    // Automatic sliding
    setInterval(() => {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }, 3000);