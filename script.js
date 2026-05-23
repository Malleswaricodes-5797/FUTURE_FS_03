// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.premium-loader');

    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 2000);
});

// Coffee Data
const indianCoffees = [
    {
        id: 1,
        name: "South Indian Filter Coffee",
        origin: "Tamil Nadu",
        taste: "Bold, Creamy",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
        description: "Traditional South Indian coffee."
    },

    {
        id: 2,
        name: "Malabar Monsoon Coffee",
        origin: "Kerala",
        taste: "Smooth, Rich",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        description: "Smooth monsoon-aged coffee."
    }
];

// Render Grid
function renderGrid(containerId, items) {

    const container = document.getElementById(containerId);

    container.innerHTML = items.map(item => `
    
        <div class="coffee-card"
             onclick='showDetail(${JSON.stringify(item)})'>

            <img src="${item.image}"
                 class="coffee-img">

            <div class="coffee-info">
                <h3>${item.name}</h3>
                <p>${item.taste}</p>
            </div>

        </div>

    `).join('');
}

// Show Modal
function showDetail(item){

    const modal = document.getElementById('coffeeModal');
    const inner = document.getElementById('modalInner');

    inner.innerHTML = `
    
        <img src="${item.image}" class="modal-img">

        <h2>${item.name}</h2>

        <p><strong>Origin:</strong> ${item.origin}</p>

        <p><strong>Taste:</strong> ${item.taste}</p>

        <p>${item.description}</p>

    `;

    modal.classList.add('active');
}

// Close Modal
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('coffeeModal')
            .classList.remove('active');
});

// Render
renderGrid('indianGrid', indianCoffees);
