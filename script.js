"// State management
const state = {
    expandedServices: {},
    serviceImageIndexes: {},
    currentTestimonialIndex: 0,
    currentAvatarMessageIndex: 0,
    isMobileMenuOpen: false,
    isAvatarBubbleVisible: false,
    testimonialAutoPlay: true
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set business info
    document.getElementById('logo-text').textContent = businessInfo.name;
    document.getElementById('hero-title').textContent = businessInfo.tagline;
    document.getElementById('footer-brand').textContent = businessInfo.name;
    document.getElementById('footer-tagline').textContent = businessInfo.tagline;
    document.getElementById('footer-copyright').textContent = businessInfo.name;
    document.getElementById('footer-email-text').textContent = businessInfo.email;
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set WhatsApp links
    const whatsappLinks = [
        'header-cta',
        'mobile-cta',
        'hero-contact-btn',
        'cta-start-btn',
        'footer-whatsapp'
    ];
    whatsappLinks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.href = businessInfo.whatsappLink;
        }
    });
    
    // Set social links
    document.getElementById('footer-email').href = `mailto:${businessInfo.email}`;
    document.getElementById('footer-instagram').href = businessInfo.social.instagram;
    document.getElementById('footer-twitter').href = businessInfo.social.twitter;
    document.getElementById('footer-linkedin').href = businessInfo.social.linkedin;
    
    // Render content
    renderServices();
    renderPortfolio();
    renderTestimonials();
    
    // Initialize avatar guide
    setTimeout(() => {
        showAvatarGuide();
    }, 2000);
    
    // Add scroll listener for header
    window.addEventListener('scroll', handleScroll);
    
    // Start testimonial auto-play
    startTestimonialAutoPlay();
}

// Services rendering
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    services.forEach(service => {
        state.serviceImageIndexes[service.id] = 0;
        
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.id = `service-${service.id}`;
        
        serviceCard.innerHTML = `
            <div class=\"service-card-header\" onclick=\"toggleService(${service.id})\">
                <div class=\"service-thumbnail\">
                    <img src=\"${service.thumbnail}\" alt=\"${service.title}\">
                    <div class=\"service-price-badge\">${service.startingPrice}</div>
                </div>
                
                <div class=\"service-header-content\">
                    <h3 class=\"service-title\">${service.title}</h3>
                    <p class=\"service-short-desc\">${service.shortDescription}</p>
                    <div class=\"service-expand-btn\" id=\"expand-btn-${service.id}\">
                        <span>View Details</span>
                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            <polyline points=\"6 9 12 15 18 9\"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div class=\"service-card-expanded\" id=\"expanded-${service.id}\" style=\"display: none;\">
                ${renderServiceExpanded(service)}
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

function renderServiceExpanded(service) {
    const benefitsList = service.benefits.map(benefit => `
        <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                <polyline points=\"20 6 9 17 4 12\"></polyline>
            </svg>
            <span>${benefit}</span>
        </li>
    `).join('');
    
    const packages = service.packages.map((pkg, index) => `
        <div class=\"package-card ${index === 1 ? 'featured' : ''}\">
            ${index === 1 ? '<div class=\"package-badge\">Most Popular</div>' : ''}
            <div class=\"package-header\">
                <h5 class=\"package-name\">${pkg.name}</h5>
                <div class=\"package-price\">${pkg.price}</div>
            </div>
            <ul class=\"package-features\">
                ${pkg.features.map(feature => `
                    <li>
                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            <polyline points=\"20 6 9 17 4 12\"></polyline>
                        </svg>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
            <button class=\"btn-package\" onclick=\"orderPackage('${service.title}', '${pkg.name}')\">
                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                    <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>
                </svg>
                Order Now
            </button>
        </div>
    `).join('');
    
    return `
        <div class=\"service-gallery\">
            <div class=\"gallery-main\">
                <img src=\"${service.images[0]}\" alt=\"${service.title}\" class=\"gallery-image\" id=\"gallery-img-${service.id}\">
                ${service.images.length > 1 ? `
                    <button class=\"gallery-btn prev\" onclick=\"prevServiceImage(${service.id}, event)\">
                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            <polyline points=\"15 18 9 12 15 6\"></polyline>
                        </svg>
                    </button>
                    <button class=\"gallery-btn next\" onclick=\"nextServiceImage(${service.id}, event)\">
                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            <polyline points=\"9 18 15 12 9 6\"></polyline>
                        </svg>
                    </button>
                ` : ''}
            </div>
            <div class=\"gallery-dots\" id=\"gallery-dots-${service.id}\">
                ${service.images.map((_, index) => `
                    <button class=\"dot ${index === 0 ? 'active' : ''}\" onclick=\"goToServiceImage(${service.id}, ${index}, event)\"></button>
                `).join('')}
            </div>
        </div>
        
        <div class=\"service-video\">
            <h4 class=\"section-subtitle\">Preview Sample</h4>
            <div class=\"video-container\">
                <iframe
                    src=\"${service.videoUrl}\"
                    title=\"${service.title} Preview\"
                    frameBorder=\"0\"
                    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        
        <div class=\"service-details\">
            <h4 class=\"section-subtitle\">About This Service</h4>
            <p class=\"service-description\">${service.description}</p>
            
            <div class=\"service-benefits\">
                <h5>What You'll Get:</h5>
                <ul>${benefitsList}</ul>
            </div>
        </div>
        
        <div class=\"service-packages\">
            <h4 class=\"section-subtitle\">Choose Your Package</h4>
            <div class=\"packages-grid\">${packages}</div>
        </div>
    `;
}

function toggleService(serviceId) {
    const expanded = document.getElementById(`expanded-${serviceId}`);
    const card = document.getElementById(`service-${serviceId}`);
    const expandBtn = document.getElementById(`expand-btn-${serviceId}`);
    
    if (state.expandedServices[serviceId]) {
        // Collapse
        expanded.style.display = 'none';
        card.classList.remove('expanded');
        state.expandedServices[serviceId] = false;
        expandBtn.innerHTML = `
            <span>View Details</span>
            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                <polyline points=\"6 9 12 15 18 9\"></polyline>
            </svg>
        `;
    } else {
        // Expand
        expanded.style.display = 'block';
        card.classList.add('expanded');
        state.expandedServices[serviceId] = true;
        expandBtn.innerHTML = `
            <span>Show Less</span>
            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                <polyline points=\"18 15 12 9 6 15\"></polyline>
            </svg>
        `;
    }
}

function nextServiceImage(serviceId, event) {
    event.stopPropagation();
    const service = services.find(s => s.id === serviceId);
    state.serviceImageIndexes[serviceId] = (state.serviceImageIndexes[serviceId] + 1) % service.images.length;
    updateServiceImage(serviceId, service);
}

function prevServiceImage(serviceId, event) {
    event.stopPropagation();
    const service = services.find(s => s.id === serviceId);
    state.serviceImageIndexes[serviceId] = (state.serviceImageIndexes[serviceId] - 1 + service.images.length) % service.images.length;
    updateServiceImage(serviceId, service);
}

function goToServiceImage(serviceId, index, event) {
    event.stopPropagation();
    const service = services.find(s => s.id === serviceId);
    state.serviceImageIndexes[serviceId] = index;
    updateServiceImage(serviceId, service);
}

function updateServiceImage(serviceId, service) {
    const currentIndex = state.serviceImageIndexes[serviceId];
    const img = document.getElementById(`gallery-img-${serviceId}`);
    const dotsContainer = document.getElementById(`gallery-dots-${serviceId}`);
    
    if (img) {
        img.src = service.images[currentIndex];
    }
    
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

function orderPackage(serviceName, packageName) {
    const message = `Hi! I'm interested in the ${packageName} package for ${serviceName}. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsappLink}?text=${encodedMessage}`, '_blank');
}

// Portfolio rendering
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        portfolioItem.innerHTML = `
            <div class=\"portfolio-image-container\">
                <img src=\"${item.image}\" alt=\"${item.title}\">
                <div class=\"portfolio-overlay\">
                    <div class=\"portfolio-content\">
                        <span class=\"portfolio-category\">${item.category}</span>
                        <h3 class=\"portfolio-title\">${item.title}</h3>
                        <p class=\"portfolio-description\">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Testimonials rendering
function renderTestimonials() {
    const testimonialTrack = document.getElementById('testimonial-track');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    testimonials.forEach((testimonial, index) => {
        // Render testimonial card
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const stars = Array(testimonial.rating).fill(0).map(() => `
            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\">
                <polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/>
            </svg>
        `).join('');
        
        card.innerHTML = `
            <div class=\"testimonial-rating\">${stars}</div>
            <p class=\"testimonial-text\">\"${testimonial.text}\"</p>
            <div class=\"testimonial-author\">
                <img src=\"${testimonial.image}\" alt=\"${testimonial.name}\" class=\"author-image\">
                <div class=\"author-info\">
                    <h4 class=\"author-name\">${testimonial.name}</h4>
                    <p class=\"author-role\">${testimonial.role}</p>
                </div>
            </div>
        `;
        
        testimonialTrack.appendChild(card);
        
        // Render dot
        const dot = document.createElement('button');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToTestimonial(index);
        dotsContainer.appendChild(dot);
    });
    
    updateTestimonialPosition();
}

function nextTestimonial() {
    state.testimonialAutoPlay = false;
    state.currentTestimonialIndex = (state.currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialPosition();
}

function prevTestimonial() {
    state.testimonialAutoPlay = false;
    state.currentTestimonialIndex = (state.currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialPosition();
}

function goToTestimonial(index) {
    state.testimonialAutoPlay = false;
    state.currentTestimonialIndex = index;
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('#testimonial-dots .dot');
    
    if (track) {
        track.style.transform = `translateX(-${state.currentTestimonialIndex * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        if (index === state.currentTestimonialIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startTestimonialAutoPlay() {
    setInterval(() => {
        if (state.testimonialAutoPlay) {
            state.currentTestimonialIndex = (state.currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonialPosition();
        }
    }, 5000);
}

// Avatar Guide
function showAvatarGuide() {
    const avatarGuide = document.getElementById('avatar-guide');
    avatarGuide.style.display = 'block';
    
    setTimeout(() => {
        showAvatarBubble();
    }, 500);
    
    // Start message rotation
    setInterval(rotateAvatarMessage, 8000);
}

function showAvatarBubble() {
    const bubble = document.getElementById('avatar-bubble');
    const messageElement = document.getElementById('avatar-message');
    
    messageElement.textContent = avatarMessages[state.currentAvatarMessageIndex];
    bubble.style.display = 'block';
    state.isAvatarBubbleVisible = true;
}

function closeAvatarBubble() {
    const bubble = document.getElementById('avatar-bubble');
    bubble.style.display = 'none';
    state.isAvatarBubbleVisible = false;
}

function toggleAvatarBubble() {
    if (state.isAvatarBubbleVisible) {
        closeAvatarBubble();
    } else {
        showAvatarBubble();
    }
}

function rotateAvatarMessage() {
    if (!state.isAvatarBubbleVisible) return;
    
    closeAvatarBubble();
    
    setTimeout(() => {
        state.currentAvatarMessageIndex = (state.currentAvatarMessageIndex + 1) % avatarMessages.length;
        showAvatarBubble();
    }, 500);
}

// Navigation and scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Close mobile menu if open
        if (state.isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
    
    if (state.isMobileMenuOpen) {
        mobileNav.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

function handleScroll() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}
"
