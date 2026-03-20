// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// WHATSAPP
function goWhatsApp() {
  const phone = DATA.business.whatsapp;
  const message = "Halo, saya tertarik dengan jasa Anda.";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// LOAD SERVICES
function loadServices() {
  const container = document.getElementById("servicesContainer");

  DATA.services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <img src="${service.thumbnail}" alt="">
      <h3>${service.title}</h3>
      <p>Mulai dari ${service.price}</p>

      <div class="service-content">
        <p>${service.description}</p>

        <video controls width="100%">
          <source src="${service.video}" type="video/mp4">
        </video>

        <div class="grid">
          ${service.images.map(img => `<img src="${img}">`).join("")}
        </div>

        <div class="packages">
          ${service.packages.map(p => `
            <p><b>${p.name}</b> - ${p.price}</p>
          `).join("")}
        </div>

        <button class="btn primary" onclick="goWhatsApp()">Pesan Sekarang</button>
      </div>
    `;

    // TOGGLE
    card.addEventListener("click", () => {
      const content = card.querySelector(".service-content");
      content.style.display = content.style.display === "block" ? "none" : "block";
    });

    container.appendChild(card);
  });
}

// LOAD PORTFOLIO
function loadPortfolio() {
  const container = document.getElementById("portfolioContainer");

  DATA.portfolio.forEach(item => {
    const el = document.createElement("img");
    el.src = item.image;
    container.appendChild(el);
  });
}

// LOAD TESTIMONI
function loadTestimonials() {
  const container = document.getElementById("testimonialsContainer");

  DATA.testimonials.forEach(t => {
    const el = document.createElement("div");
    el.className = "testimonial";

    el.innerHTML = `
      <p>"${t.text}"</p>
      <small>- ${t.name}</small>
    `;

    container.appendChild(el);
  });
}

// LOAD SOCIAL
function loadSocials() {
  document.getElementById("igLink").href = DATA.social.instagram;
  document.getElementById("ttLink").href = DATA.social.tiktok;
  document.getElementById("fbLink").href = DATA.social.facebook;
  document.getElementById("lynkLink").href = DATA.social.lynk;
}

// AVATAR CHAT
let chatOpen = false;
let chatIndex = 0;

function toggleChat() {
  const chat = document.getElementById("chatBox");
  chatOpen = !chatOpen;
  chat.style.display = chatOpen ? "block" : "none";
}

function startChatRotation() {
  const chat = document.getElementById("chatBox");

  setInterval(() => {
    if (!chatOpen) {
      chat.style.display = "block";
      chat.innerText = DATA.avatarMessages[chatIndex];
      chatIndex = (chatIndex + 1) % DATA.avatarMessages.length;

      setTimeout(() => {
        chat.style.display = "none";
      }, 3000);
    }
  }, 6000);
}

// INIT
function init() {
  loadServices();
  loadPortfolio();
  loadTestimonials();
  loadSocials();
  startChatRotation();
}

init();
