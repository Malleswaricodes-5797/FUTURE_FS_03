// ========== LOADER ==========
window.addEventListener('load', () => {
    const loader = document.querySelector('.premium-loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 2000);
});

// ========== CUSTOM CURSOR ==========
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
        cursorRing.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });

    document.querySelectorAll('a, button, .coffee-card, .waffle-card, .combo-card, .category-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.transform = 'scale(1.5)';
            cursorRing.style.borderColor = 'var(--gold)';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.style.transform = 'scale(1)';
        });
    });
}

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.premium-section, .waffle-luxury, .contact-luxury, .commercial-cinema');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ========== CATEGORY FILTER ==========
const categoryBtns = document.querySelectorAll('.category-btn');
const sections = {
    indian: document.getElementById('indian'),
    korean: document.getElementById('korean'),
    world: document.getElementById('world'),
    iced: document.getElementById('iced'),
    waffles: document.getElementById('waffles')
};

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (category === 'all') {
            Object.values(sections).forEach(section => {
                if (section) section.style.display = 'block';
            });
        } else {
            Object.entries(sections).forEach(([key, section]) => {
                if (section) {
                    section.style.display = key === category ? 'block' : 'none';
                }
            });
        }
    });
});

// ========== INDIAN COFFEES ==========
const indianCoffees = [
    { id: 1, name: "South Indian Filter Coffee", origin: "Tamil Nadu", taste: "Bold, Creamy, Rich", ingredients: "Coffee decoction, Boiled milk", bestWith: "Masala Dosa", caffeine: "Medium-High", sweetness: "Medium", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86", description: "Authentic South Indian-style strong coffee prepared using traditional metal filter brewing with frothy milk." },
    { id: 2, name: "Malabar Monsoon Coffee", origin: "Kerala", taste: "Smooth, Low-acidity", ingredients: "Monsooned beans", bestWith: "Dark Chocolate Cake", caffeine: "Medium", sweetness: "Low", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", description: "Smooth coffee made from monsoon-aged beans from Kerala coast." },
    { id: 3, name: "Cardamom Coffee", origin: "India", taste: "Fragrant, Warm", ingredients: "Cardamom, Coffee", bestWith: "Baklava", caffeine: "Medium", sweetness: "Low", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", description: "Traditional Indian coffee infused with cardamom spice." },
    
];

// ========== KOREAN COFFEES ==========
const koreanCoffees = [
    { id: 5, name: "Dalgona Coffee", origin: "Korea", taste: "Sweet, Fluffy", ingredients: "Instant coffee, Sugar, Milk", bestWith: "Korean Garlic Bread", caffeine: "Medium", sweetness: "High", image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9", description: "Whipped creamy coffee layered over chilled milk — viral Korean favorite!" },
    { id: 6, name: "Korean Café Latte", origin: "Korea", taste: "Smooth, Creamy", ingredients: "Espresso, Milk", bestWith: "Cheesecake", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24", description: "Traditional Korean café style latte with aesthetic presentation." },
    { id: 7, name: "Matcha Latte", origin: "Korea/Japan", taste: "Earthy, Smooth", ingredients: "Matcha powder, Milk", bestWith: "Mochi Donuts", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7", description: "Premium Korean-style matcha latte." }
];

// ========== WORLD COFFEES ==========
const worldCoffees = [
    { id: 8, name: "Espresso", origin: "Italy", taste: "Bold, Strong", ingredients: "Fine coffee beans", bestWith: "Biscotti", caffeine: "High", sweetness: "Low", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", description: "Strong concentrated coffee shot with bold aroma." },
    { id: 9, name: "Cappuccino", origin: "Italy", taste: "Creamy, Balanced", ingredients: "Espresso, Steamed milk, Foam", bestWith: "Cinnamon Roll", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1497636577773-f1231844b336", description: "Classic coffee with balanced espresso, steamed milk, and foam." },
    { id: 10, name: "Café Latte", origin: "Italy", taste: "Creamy, Smooth", ingredients: "Espresso, Steamed milk", bestWith: "Pancakes", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735", description: "Creamy milk-forward espresso coffee." },
    { id: 11, name: "Mocha", origin: "Yemen/Italy", taste: "Chocolatey", ingredients: "Espresso, Chocolate, Milk", bestWith: "Brownies", caffeine: "Medium", sweetness: "High", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e", description: "Chocolate-infused espresso delight." },
    { id: 12, name: "Affogato", origin: "Italy", taste: "Sweet, Bitter", ingredients: "Vanilla ice cream, Espresso", bestWith: "Chocolate Wafers", caffeine: "Medium", sweetness: "High", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78", description: "Vanilla ice cream topped with hot espresso." },
    { id: 13, name: "Turkish Coffee", origin: "Turkey", taste: "Strong, Rich", ingredients: "Finely ground coffee", bestWith: "Baklava", caffeine: "High", sweetness: "Low", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", description: "Traditional finely brewed rich coffee served unfiltered." }
];

// ========== ICED COFFEES ==========
const icedCoffees = [
    { id: 14, name: "Iced Latte", origin: "Global", taste: "Smooth, Refreshing", ingredients: "Espresso, Cold milk, Ice", bestWith: "Grilled Sandwich", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c", description: "Cold milk and espresso served over ice." },
    { id: 15, name: "Cold Brew", origin: "Global", taste: "Smooth, Low-acid", ingredients: "Slow-steeped coffee", bestWith: "Cheese Toast", caffeine: "High", sweetness: "Low", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38", description: "Slow-brewed coffee with naturally smooth taste." },
    { id: 16, name: "Frappé", origin: "Greece", taste: "Icy, Creamy", ingredients: "Instant coffee, Ice, Milk", bestWith: "Chocolate Waffles", caffeine: "Medium", sweetness: "Medium", image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13", description: "Blended icy coffee with creamy foam." }
];

// ========== WAFFLES ==========
const waffles = [
    { id: 17, name: "Belgian Chocolate Waffle", taste: "Chocolatey, Crispy", bestWith: "Cappuccino", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d", description: "Loaded with melted premium Belgian chocolate." },
    { id: 18, name: "Nutella Waffle", taste: "Nutty, Sweet", bestWith: "Hazelnut Latte", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0", description: "Crispy waffle topped with Nutella and nuts." },
    { id: 19, name: "Strawberry Waffle", taste: "Fruity, Creamy", bestWith: "Vanilla Latte", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777", description: "Fresh strawberries with whipped cream." },
    
];

// ========== COMBOS ==========
const combos = [
    { name: "Morning Combo", items: "Filter Coffee + Butter Toast + Mini Waffle", price: "₹299", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Korean Café Combo", items: "Dalgona Coffee + Croffle + Cheesecake", price: "₹399", image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9" },
    { name: "Chocolate Lovers Combo", items: "Mocha + Oreo Waffle + Brownie", price: "₹449", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e" }
];

// Render stars
function renderStars() {
    return '⭐'.repeat(5);
}

// Render function
function renderGrid(containerId, items, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div class="${type === 'waffle' ? 'waffle-card' : 'coffee-card'}" onclick='showDetail(${JSON.stringify(item).replace(/'/g, "&#39;")}, "${type}")'>
            <div class="card-rating">${renderStars()}</div>
            <img src="${item.image}" alt="${item.name}" class="${type === 'waffle' ? 'waffle-img' : 'coffee-img'}" loading="lazy">
            <div class="${type === 'waffle' ? 'waffle-info' : 'coffee-info'}">
                <h3 class="coffee-name">${item.name}</h3>
                <span class="coffee-badge">${item.bestWith?.split(',')[0] || 'Perfect Pair'}</span>
                <p style="font-size:0.8rem; opacity:0.7; margin-top:0.5rem;">${item.taste || ''}</p>
            </div>
        </div>
    `).join('');
}

// Show detail modal
function showDetail(item, type) {
    const modal = document.getElementById('coffeeModal');
    const inner = document.getElementById('modalInner');
    
    if (type === 'coffee') {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img" loading="lazy">
            <h2>☕ ${item.name}</h2>
            <div class="detail-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin:1.5rem 0; background:rgba(255,255,255,0.05); padding:1rem; border-radius:15px;">
                <div><strong>📍 Origin:</strong> ${item.origin || 'Global'}</div>
                <div><strong>👅 Taste:</strong> ${item.taste || 'Rich'}</div>
                <div><strong>🥛 Best With:</strong> ${item.bestWith}</div>
                <div><strong>⚡ Caffeine:</strong> ${item.caffeine || 'Medium'}</div>
                <div><strong>🍬 Sweetness:</strong> ${item.sweetness || 'Medium'}</div>
                <div><strong>⭐ Rating:</strong> ${renderStars()}</div>
            </div>
            <p><strong>📝 Description:</strong> ${item.description}</p>
            <p><strong>🥄 Ingredients:</strong> ${item.ingredients || 'Premium coffee beans'}</p>
            <div style="margin-top:1.5rem; display:flex; gap:1rem;">
                <button class="premium-btn primary" style="padding:0.8rem 1.5rem;">Add to Cart 🛒</button>
                <button class="premium-btn secondary" style="padding:0.8rem 1.5rem;">Order Now 🚀</button>
            </div>
        `;
    } else if (type === 'waffle') {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img" loading="lazy">
            <h2>🧇 ${item.name}</h2>
            <div class="detail-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin:1.5rem 0; background:rgba(255,255,255,0.05); padding:1rem; border-radius:15px;">
                <div><strong>👅 Taste:</strong> ${item.taste}</div>
                <div><strong>☕ Coffee Pairing:</strong> ${item.bestWith}</div>
                <div><strong>⭐ Rating:</strong> ${renderStars()}</div>
            </div>
            <p><strong>📝 Description:</strong> ${item.description}</p>
            <p><strong>🍦 Add-ons:</strong> Vanilla Ice Cream, Nutella, Maple Syrup</p>
            <div style="margin-top:1.5rem; display:flex; gap:1rem;">
                <button class="premium-btn primary" style="padding:0.8rem 1.5rem;">Order Waffle 🧇</button>
                <button class="premium-btn secondary" style="padding:0.8rem 1.5rem;">Add Coffee ☕</button>
            </div>
        `;
    } else if (type === 'combo') {
        inner.innerHTML = `
            <img src="${item.image}" class="modal-img">
            <h2>✨ ${item.name}</h2>
            <p><strong>Includes:</strong> ${item.items}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button class="premium-btn primary" style="margin-top:1.5rem; padding:0.8rem 1.5rem;">Order Combo Now 🎁</button>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render all sections
renderGrid('indianGrid', indianCoffees, 'coffee');
renderGrid('koreanGrid', koreanCoffees, 'coffee');
renderGrid('worldGrid', worldCoffees, 'coffee');
renderGrid('icedGrid', icedCoffees, 'coffee');
renderGrid('wafflesGrid', waffles, 'waffle');
renderGrid('combosGrid', combos, 'combo');

// Modal close
document.getElementById('modalClose')?.addEventListener('click', () => {
    document.getElementById('coffeeModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.getElementById('coffeeModal')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('luxury-modal')) {
        document.getElementById('coffeeModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-menu')?.classList.toggle('active');
});

// Smooth scroll
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

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Welcome to BREWVERSE! Your premium café experience awaits. ✨');
    e.target.reset();
});

// Newsletter
document.getElementById('newsletterBtn')?.addEventListener('click', () => {
    const email = document.getElementById('newsletterEmail')?.value;
    if (email) {
        alert(`📧 Welcome to BREWVERSE! Premium updates sent to ${email}`);
    } else {
        alert('Please enter your email');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(13, 13, 13, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(13, 13, 13, 0.8)';
    }
});

console.log('✨ BREWVERSE Premium — Cinematic Global Café Experience Loaded! ✨');