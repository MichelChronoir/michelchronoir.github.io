// 1. Logika Avatar Penuntun
let messageIndex = 0;
const chatBubble = document.getElementById('avatarChat');

setInterval(() => {
    chatBubble.classList.add('fade-out');
    setTimeout(() => {
        messageIndex = (messageIndex + 1) % siteData.guideMessages.length;
        chatBubble.innerText = siteData.guideMessages[messageIndex];
        chatBubble.classList.remove('fade-out');
    }, 500);
}, 6000);

// 2. Fungsi Expandable Service Cards
function toggleService(element) {
    const allCards = document.querySelectorAll('.service-card');
    const parentCard = element.parentElement;
    
    allCards.forEach(card => {
        if(card !== parentCard) card.classList.remove('active');
    });
    parentCard.classList.toggle('active');
}

// 3. Render Data ke HTML saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // Update nomor WA di tombol kontak bawah
    document.getElementById('wa-contact-btn').href = `https://wa.me/${siteData.whatsappNumber}`;

    // Render Jasa
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = siteData.services.map(srv => `
        <div class="service-card glass">
            <div class="service-header" onclick="toggleService(this)">
                <img src="${srv.thumb}" alt="${srv.title}">
                <div class="service-title">
                    <h3>${srv.title}</h3>
                    <p>Mulai dari ${srv.startPrice}</p>
                </div>
                <i class="fas fa-chevron-down toggle-icon"></i>
            </div>
            <div class="service-body">
                <div class="service-details-grid">
                    <div class="service-desc">
                        <h4>${srv.headline}</h4>
                        <p style="color: var(--text-muted); margin: 10px 0;">${srv.desc}</p>
                        <div class="pricing-packages">
                            <div class="package">Basic <span>${srv.packages.basic}</span></div>
                            <div class="package">Standard <span>${srv.packages.standard}</span></div>
                            <div class="package">Premium <span>${srv.packages.premium}</span></div>
                        </div>
                        <a href="https://wa.me/${siteData.whatsappNumber}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20${encodeURIComponent(srv.title)}" target="_blank" class="btn btn-primary" style="width: 100%;">Pesan Sekarang via WA <i class="fab fa-whatsapp"></i></a>
                    </div>
                    <div class="video-preview">
                        <img src="${srv.preview}" alt="${srv.title} Preview">
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Render Portofolio
    const portfolioContainer = document.getElementById('portfolio-container');
    portfolioContainer.innerHTML = siteData.portfolio.map(port => `
        <div class="portfolio-item glass">
            <img src="${port.img}" alt="${port.title}">
            <div class="portfolio-overlay"><h3>${port.title}</h3></div>
        </div>
    `).join('');

    // Render Testimoni
    const testimonialContainer = document.getElementById('testimonial-container');
    testimonialContainer.innerHTML = siteData.testimonials.map(testi => `
        <div class="testimonial-card glass">
            <p>"${testi.text}"</p>
            <div class="client-info">
                <img src="${testi.avatar}" alt="${testi.name}">
                <div>
                    <h4 style="color: var(--text-main)">${testi.name}</h4>
                    <span style="font-size: 0.8rem;">${testi.role}</span>
                </div>
            </div>
        </div>
    `).join('');
});
