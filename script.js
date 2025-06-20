function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderProducts(productList) {
  const container = document.getElementById('productGrid');
  container.innerHTML = '';
  productList.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
    `;
    container.appendChild(card);
  });
}

function applyFilter() {
  const min = parseFloat(document.getElementById('minPrice').value) || 0;
  const max = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  const category = getQueryParam('category');
  const filtered = products.filter(p => p.category === category && p.price >= min && p.price <= max);
  renderProducts(filtered);
}

window.onload = () => {
  const category = getQueryParam('category');
  document.getElementById('category-title').innerText = category + " Products";
  const categoryProducts = products.filter(p => p.category === category);
  renderProducts(categoryProducts);
};
