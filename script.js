document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const catChips = document.querySelectorAll(".cat-chip");

let activeCategory = "alle";
let searchTerm = "";

function starString(rating) {
  const full = Math.round(rating);
  return "★★★★★☆☆☆☆☆".slice(5 - full, 10 - full);
}

function formatPrice(value) {
  return value.toLocaleString("de-CH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderProducts() {
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "alle" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = "";

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";

    const savePct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

    card.innerHTML = `
      <div class="card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="tag">${p.category}</span>
        ${p.featured ? '<span class="stamp">Fund<br>des<br>Tages</span>' : ""}
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-rating">
          <span class="stars">${starString(p.rating)}</span>
          <span>${p.rating.toFixed(1)} · ${p.reviews.toLocaleString("de-CH")}</span>
        </div>
        <div class="price-row">
          <span class="price-now">CHF ${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-was">CHF ${formatPrice(p.oldPrice)}</span>` : ""}
          ${savePct ? `<span class="price-save">-${savePct}%</span>` : ""}
        </div>
        <a class="cta" href="${p.affiliateUrl}" target="_blank" rel="nofollow sponsored noopener">
          Zum Angebot →
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "Fund" : "Funde"}`;
  emptyState.hidden = filtered.length !== 0;
}

catChips.forEach(chip => {
  chip.addEventListener("click", () => {
    catChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.cat;
    renderProducts();
  });
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderProducts();
});
searchBtn.addEventListener("click", () => renderProducts());

renderProducts();
