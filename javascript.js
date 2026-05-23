// ========== COFFEE CANVAS ANIMATION ==========
const coffeeCanvas = document.getElementById('coffeeCanvas');
if (coffeeCanvas) {
    const ctx = coffeeCanvas.getContext('2d');
    let width, height;
    let particles = [];
    let beans = [];
    let time = 0;

    function resize() {
        const rect = coffeeCanvas.parentElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        coffeeCanvas.width = width;
        coffeeCanvas.height = height;
        initParticles();
        initBeans();
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.2,
                alpha: Math.random() * 0.4 + 0.1
            });
        }
    }

    function initBeans() {
        beans = [];
        for (let i = 0; i < 25; i++) {
            beans.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 6 + 3,
                speedY: Math.random() * 0.5 + 0.2,
                rotation: Math.random() * 360,
                alpha: Math.random() * 0.3 + 0.2
            });
        }
    }

    function drawBackground() {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#0D0A08');
        grad.addColorStop(1, '#1A1512');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
    }

    function drawParticles() {
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 163, 115, ${p.alpha})`;
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < -50) p.x = width + 50;
            if (p.x > width + 50) p.x = -50;
            if (p.y < -50) p.y = height + 50;
            if (p.y > height + 50) p.y = -50;
        }
    }

    function drawBeans() {
        for (let b of beans) {
            ctx.save();
            ctx.translate(b.x, b.y);
            ctx.rotate(b.rotation * Math.PI / 180);
            ctx.beginPath();
            ctx.ellipse(0, 0, b.size / 2, b.size, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(101, 67, 33, ${b.alpha})`;
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(0, 0, b.size / 3, b.size / 1.5, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 163, 115, ${b.alpha * 0.5})`;
            ctx.fill();
            ctx.restore();
            b.y += b.speedY;
            b.rotation += 2;
            if (b.y > height + 50) {
                b.y = -50;
                b.x = Math.random() * width;
            }
        }
    }

    function drawSteam() {
        for (let i = 0; i < 8; i++) {
            const x = width * 0.5 + Math.sin(time * 0.01 + i) * 30;
            const y = height * 0.5 - 50 + i * 20;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, 30);
            grad.addColorStop(0, `rgba(255,255,255,${0.1 - i * 0.01})`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function animate() {
        if (!ctx) return;
        time++;
        drawBackground();
        drawParticles();
        drawBeans();
        drawSteam();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

// ========== WAFFLE CANVAS ANIMATION ==========
const waffleCanvas = document.getElementById('waffleCanvas');
if (waffleCanvas) {
    const ctx = waffleCanvas.getContext('2d');
    let width, height;
    let chocolateDrops = [];

    function resizeWaffle() {
        const rect = waffleCanvas.parentElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        waffleCanvas.width = width;
        waffleCanvas.height = height;
        initDrops();
    }

    function initDrops() {
        chocolateDrops = [];
        for (let i = 0; i < 40; i++) {
            chocolateDrops.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 4 + 2,
                speedY: Math.random() * 0.5 + 0.1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }
    }

    function drawWaffleBg() {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#1A120E');
        grad.addColorStop(1, '#0D0A08');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
    }

    function drawChocolate() {
        for (let d of chocolateDrops) {
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(101, 67, 33, ${d.alpha})`;
            ctx.fill();
            d.y += d.speedY;
            if (d.y > height) {
                d.y = 0;
                d.x = Math.random() * width;
            }
        }
    }

    function animateWaffle() {
        if (!ctx) return;
        drawWaffleBg();
        drawChocolate();
        requestAnimationFrame(animateWaffle);
    }

    window.addEventListener('resize', resizeWaffle);
    resizeWaffle();
    animateWaffle();
}

// ========== INDIAN COFFEES ==========
const indianCoffees = [
    { id: 1, name: "South Indian Filter Coffee", origin: "Tamil Nadu", taste: "Bold, Creamy", bestWith: "Masala Dosa", caffeine: "Medium-High", sweetness: "Medium", image: "https://images.pexels.com/photos/2258175/pexels-photo-2258175.jpeg", description: "Authentic South Indian-style strong coffee prepared using traditional metal filter brewing." },
    { id: 2, name: "Degree Coffee", origin: "Chennai", taste: "Strong, Aromatic", bestWith: "Butter Biscuit", caffeine: "High", sweetness: "Low", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", description: "Strong South Indian village-style coffee made with fresh cow milk." },
    { id: 3, name: "Malabar Monsoon Coffee", origin: "Kerala", taste: "Smooth, Earthy", bestWith: "Dark Chocolate", caffeine: "Medium", sweetness: "Low", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg", description: "Smooth low-acidity coffee from monsooned beans." },
    { id: 4, name: "Rose Latte", origin: "India", taste: "Floral, Creamy", bestWith: "Strawberry Waffles", caffeine: "Medium", sweetness: "Medium", image: "https://images.pexels.com/photos/1270192/pexels-photo-1270192.jpeg", description: "Creamy latte blended with subtle rose essence." }
];

// ========== KOREAN COFFEES ==========
const koreanCoffees = [
    { id: 5, name: "Dalgona Coffee", origin: "Korea", taste: "Sweet, Fluffy", bestWith: "Garlic Bread", caffeine: "Medium", sweetness: "High", image: "https://images.pexels.com/photos/14355346/pexels-photo-14355346.jpeg", description: "Whipped creamy coffee - viral Korean sensation!" },
    { id: 6, name: "Einspänner Coffee", origin: "Korea", taste: "Creamy, Smooth", bestWith: "Cheesecake", caffeine: "Medium", sweetness: "Medium", image: "https://images.pexels.com/photos/8211470/pexels-photo-8211470.jpeg", description: "Vienna-style coffee topped with sweet cream." },
    { id: 7, name: "Matcha Latte", origin: "Korea", taste: "Earthy, Smooth", bestWith: "Mochi Donuts", caffeine: "Medium", sweetness: "Medium", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", description: "Premium Korean-style matcha latte." },
    { id: 8, name: "Rose Petal Latte", origin: "Korea", taste: "Floral, Creamy", bestWith: "Strawberry Waffles", caffeine: "Low", sweetness: "Medium", image: "https://images.pexels.com/photos/1270192/pexels-photo-1270192.jpeg", description: "Elegant rose-infused latte with dried rose petals." }
];

// ========== WORLD COFFEES ==========
const worldCoffees = [
    { id: 9, name: "Espresso", origin: "Italy", taste: "Bold, Strong", bestWith: "Biscotti", caffeine: "High", sweetness: "Low", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg", description: "Strong concentrated coffee shot." },
    { id: 10, name: "Cappuccino", origin: "Italy", taste: "Creamy, Balanced", bestWith: "Cinnamon Roll", caffeine: "Medium", sweetness: "Medium", image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg", description: "Classic coffee with steamed milk and foam." },
    { id: 11, name: "Café Latte", origin: "Italy", taste: "Creamy, Smooth", bestWith: "Pancakes", caffeine: "Medium", sweetness: "Medium", image: "https://images.pexels.com/photos/2258175/pexels-photo-2258175.jpeg", description: "Creamy milk-forward espresso coffee." },
    { id: 12, name: "Mocha", origin: "Yemen", taste: "Chocolatey", bestWith: "Brownies", caffeine: "Medium", sweetness: "High", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", description: "Chocolate-infused espresso delight." }
];

// ========== WAFFLES ==========
const waffles = [
    { id: 13, name: "Belgian Chocolate Waffle", taste: "Chocolatey, Crispy", bestWith: "Cappuccino", image: "https://images.pexels.com/photos/1562376552-0d160a2f238d.jpeg", description: "Loaded with melted premium Belgian chocolate." },
    { id: 14, name: "Nutella Waffle", taste: "Nutty, Sweet", bestWith: "Hazelnut Latte", image: "https://images.pexels.com/photos/1504754524776-8f4f37790ca0.jpeg", description: "Crispy waffle with Nutella and hazelnuts." },
    { id: 15, name: "Strawberry Waffle", taste: "Fruity, Creamy", bestWith: "Vanilla Latte", image: "https://images.pexels.com/photos/1488477181946-6428a0291777.jpeg", description: "Fresh strawberries with whipped cream." }
];

// ========== COMBOS ==========
const combos = [
    { name: "Morning Combo", items: "Filter Coffee + Toast + Waffle", price: "₹299", image: "https://images.pexels.com/photos/2258175/pexels-photo-2258175.jpeg" },
    { name: "Korean Café Combo", items: "Dalgona + Croffle + Cheesecake", price: "₹399", image: "https://images.pexels.com/photos/14355346/pexels-photo-14355346.jpeg" },
    { name: "Chocolate Lovers Combo", items: "Mocha + Waffle + Brownie", price: "₹449", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" }
];

// ========== HELPER FUNCTIONS ==========
function renderStars() {
    return "⭐".repeat(5);
}

function renderGrid(containerId, items, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="${type === 'waffle' ? 'waffle-card' : 'coffee-card'}" onclick='showDetail(${JSON.stringify(item).replace(/'/g, "&#39;")}, "${type}")'>
            <img src="${item.image}" alt="${item.name}" class="${type === 'waffle' ? 'waffle-img' : 'coffee-img'}" loading="lazy" onerror="this.src='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'">
            <div class="${type === 'waffle' ? 'waffle-info' : 'coffee-info'}">
                <h3 class="coffee-name">${item.name}</h3>
                <span class="coffee-badge">${item.bestWith?.split(',')[0] || 'Perfect Pair'}</span>
                <div class="card-rating">${renderStars()}</div>
            </div>
        </div>
    `).join('');
}

function showDetail(item, type) {
    const modal = document.getElementById('coffeeModal');
    const inner = document.getElementById('modalInner');
    if (type === 'coffee') {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img">
            <h3>☕ ${item.name}</h3>
            <div class="detail-grid">
                <div><strong>Origin:</strong> ${item.origin}</div>
                <div><strong>Taste:</strong> ${item.taste}</div>
                <div><strong>Best With:</strong> ${item.bestWith}</div>
                <div><strong>Caffeine:</strong> ${item.caffeine}</div>
            </div>
            <p>${item.description}</p>
            <button class="btn-gold" style="width:100%; margin-top:1rem;">Add to Cart →</button>
        `;
    } else if (type === 'waffle') {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img">
            <h3>🧇 ${item.name}</h3>
            <div class="detail-grid">
                <div><strong>Taste:</strong> ${item.taste}</div>
                <div><strong>Coffee Pairing:</strong> ${item.bestWith}</div>
            </div>
            <p>${item.description}</p>
            <button class="btn-gold" style="width:100%; margin-top:1rem;">Order Waffle →</button>
        `;
    } else {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img">
            <h3>✨ ${item.name}</h3>
            <p><strong>Includes:</strong> ${item.items}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button class="btn-gold" style="width:100%; margin-top:1rem;">Order Combo →</button>
        `;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========== RENDER ALL SECTIONS ==========
renderGrid('indianGrid', indianCoffees, 'coffee');
renderGrid('koreanGrid', koreanCoffees, 'coffee');
renderGrid('worldGrid', worldCoffees, 'coffee');
renderGrid('wafflesGrid', waffles, 'waffle');
renderGrid('combosGrid', combos, 'combo');

// ========== MODAL CLOSE ==========
document.getElementById('modalClose')?.addEventListener('click', () => {
    document.getElementById('coffeeModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.getElementById('coffeeModal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        document.getElementById('coffeeModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== MOBILE MENU ==========
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-menu')?.classList.toggle('active');
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelector('.nav-menu')?.classList.remove('active');
        }
    });
});

// ========== CONTACT FORM ==========
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Thank you! Reservation confirmed. Visit BREWVERSE soon! ✨');
    e.target.reset();
});

// ========== NEWSLETTER ==========
document.getElementById('newsletterBtn')?.addEventListener('click', () => {
    const email = document.getElementById('newsletterEmail')?.value;
    if (email) {
        alert(`📧 Welcome to BREWVERSE family!`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('Please enter email');
    }
});

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-cinematic');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(13, 10, 8, 0.96)';
        } else {
            nav.style.background = 'rgba(13, 10, 8, 0.95)';
        }
    }
});

console.log('✨ BREWVERSE Loaded Successfully! ✨');