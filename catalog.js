// База данных товаров
const allProducts = [
  { id: 1, category: 'scooters', brand: 'kugoo', title: 'Kugoo M4 Pro', price: 34900, desc: 'Мощный электросамокат для бездорожья и города. Отличный выбор для ежедневных поездок.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 2, category: 'scooters', brand: 'xiaomi', title: 'Xiaomi Mi Scooter 3', price: 42000, desc: 'Легкий и маневренный самокат с надежной батареей.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 3, category: 'scooters', brand: 'motiko', title: 'Motiko S1', price: 21900, desc: 'Бюджетный вариант для города.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 4, category: 'scooters', brand: 'kugoo', title: 'Kugoo S3 Pro', price: 28900, desc: 'Отличный бюджетный самокат.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 5, category: 'scooters', brand: 'gt', title: 'GT Max', price: 55000, desc: 'Скоростной самокат для опытных райдеров.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 6, category: 'scooters', brand: 'kugoo', title: 'Kugoo G-Booster', price: 75000, desc: 'Настоящий внедорожник.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 7, category: 'scooters', brand: 'xiaomi', title: 'Xiaomi Pro 2', price: 48000, desc: 'Дальнобойный и надежный.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 8, category: 'scooters', brand: 'motiko', title: 'Motiko M4', price: 42900, desc: 'Комфортный самокат на каждый день.', images: ['https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp'] },
  { id: 9, category: 'bikes', brand: 'elbike', title: 'Mackwheel Fat', price: 110000, desc: 'Мощный фэтбайк для любых дорог.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 10, category: 'bikes', brand: 'elbike', title: 'Elbike City', price: 65000, desc: 'Городской велосипед с мотором.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 11, category: 'bikes', brand: 'gt', title: 'GT Hunter Pro', price: 150000, desc: 'Внедорожный велосипед.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 12, category: 'bikes', brand: 'kugoo', title: 'Kugoo V1', price: 85000, desc: 'Складной электровелосипед.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 13, category: 'bikes', brand: 'motiko', title: 'Motiko Cruiser', price: 70000, desc: 'Прогулочный велосипед.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 14, category: 'bikes', brand: 'xiaomi', title: 'Xiaomi Bike', price: 95000, desc: 'Горный электровелосипед.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 15, category: 'bikes', brand: 'elbike', title: 'Elbike Cargo', price: 130000, desc: 'С грузовой платформой.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 16, category: 'bikes', brand: 'gt', title: 'GT Mountain X', price: 125000, desc: 'Горный велосипед.', images: ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'] },
  { id: 17, category: 'scooters-moped', brand: 'motiko', title: 'Motiko Moped V1', price: 90000, desc: 'Классический электроскутер.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 18, category: 'scooters-moped', brand: 'kugoo', title: 'Kugoo City Cargo', price: 120000, desc: 'С багажником для города.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 19, category: 'scooters-moped', brand: 'gt', title: 'GT E-Scooter Max', price: 140000, desc: 'Максимальная скорость.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 20, category: 'scooters-moped', brand: 'elbike', title: 'Elbike Retro', price: 110000, desc: 'Ретро дизайн.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 21, category: 'scooters-moped', brand: 'xiaomi', title: 'Xiaomi Urban Rider', price: 85000, desc: 'Для города.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 22, category: 'scooters-moped', brand: 'kugoo', title: 'Kugoo Fat Tire', price: 150000, desc: 'Широкие колеса.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 23, category: 'scooters-moped', brand: 'motiko', title: 'Motiko Compact', price: 75000, desc: 'Компактный скутер.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 24, category: 'scooters-moped', brand: 'gt', title: 'GT Power Scooter', price: 130000, desc: 'Мощный мотор.', images: ['https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'] },
  { id: 25, category: 'tricycles', brand: 'gt', title: 'GT Tricycle Pro', price: 160000, desc: 'Для дачи.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 26, category: 'tricycles', brand: 'elbike', title: 'Elbike Cargo Trike', price: 180000, desc: 'Грузовой.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 27, category: 'tricycles', brand: 'motiko', title: 'Motiko Passenger', price: 200000, desc: 'Пассажирский.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 28, category: 'tricycles', brand: 'kugoo', title: 'Kugoo Utility', price: 140000, desc: 'Хозяйственный.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 29, category: 'tricycles', brand: 'xiaomi', title: 'Xiaomi Trike Max', price: 220000, desc: 'Усиленный.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 30, category: 'tricycles', brand: 'elbike', title: 'Elbike Comfort', price: 170000, desc: 'С удобным сиденьем.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 31, category: 'tricycles', brand: 'gt', title: 'GT Offroad Trike', price: 190000, desc: 'Внедорожный.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 32, category: 'tricycles', brand: 'motiko', title: 'Motiko Eco', price: 150000, desc: 'Экологичный.', images: ['https://static.tildacdn.com/tild3862-3864-4633-a464-663636313464/g_3048bea553331e7e.webp'] },
  { id: 33, category: 'pitbikes', brand: 'gt', title: 'GT Pit Bike 50', price: 80000, desc: 'Для детей.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 34, category: 'pitbikes', brand: 'gt', title: 'GT Pit Bike 125', price: 120000, desc: 'Подростковый.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 35, category: 'pitbikes', brand: 'kugoo', title: 'Kugoo Dirt E-Bike', price: 220000, desc: 'Кроссовый.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 36, category: 'pitbikes', brand: 'motiko', title: 'Motiko Enduro E', price: 200000, desc: 'Эндуро.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 37, category: 'pitbikes', brand: 'xiaomi', title: 'Xiaomi Mini Pit', price: 60000, desc: 'Мини-версия.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 38, category: 'pitbikes', brand: 'elbike', title: 'Elbike Pro Pit', price: 250000, desc: 'Профессиональный.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 39, category: 'pitbikes', brand: 'gt', title: 'GT Electric Motocross', price: 300000, desc: 'Мотокросс.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] },
  { id: 40, category: 'pitbikes', brand: 'kugoo', title: 'Kugoo Pit Bike 250', price: 180000, desc: 'Взрослый.', images: ['https://static.tildacdn.com/tild6631-3836-4463-b865-636135313031/g_8c11be0e4cde374a.webp'] }
];

const brands = [...new Set(allProducts.map(p => p.brand))];
const categories = [...new Set(allProducts.map(p => p.category))];

const categoryNames = {
  'scooters': 'Электросамокаты',
  'bikes': 'Электровелосипеды',
  'scooters-moped': 'Электроскутеры',
  'tricycles': 'Электротрициклы',
  'pitbikes': 'Электропитбайки'
};

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';
  let activeBrand = urlParams.get('brand') || 'all';
  let minPrice = 0;
  let maxPrice = Infinity;

  const gridElement = document.getElementById('products-grid');
  const titleElement = document.getElementById('page-title');
  const breadcrumbElement = document.getElementById('breadcrumb-category');
  const filtersCategories = document.getElementById('filter-categories');
  const filtersBrands = document.getElementById('filter-brands');
  const priceMinInput = document.getElementById('price-min');
  const priceMaxInput = document.getElementById('price-max');

  if (priceMinInput) priceMinInput.setAttribute('step', '5000');
  if (priceMaxInput) priceMaxInput.setAttribute('step', '5000');

  function renderFilters() {
    let catHtml = `<button class="filter-btn ${activeCategory === 'all' ? 'is-active' : ''}" data-cat="all">Все</button>`;
    categories.forEach(cat => {
      catHtml += `<button class="filter-btn ${activeCategory === cat ? 'is-active' : ''}" data-cat="${cat}">${categoryNames[cat] || cat}</button>`;
    });
    filtersCategories.innerHTML = catHtml;

    let brandHtml = `<button class="filter-btn ${activeBrand === 'all' ? 'is-active' : ''}" data-brand="all">Все</button>`;
    brands.forEach(brand => {
      brandHtml += `<button class="filter-btn ${activeBrand === brand ? 'is-active' : ''}" data-brand="${brand}">${brand.toUpperCase()}</button>`;
    });
    filtersBrands.innerHTML = brandHtml;

    document.querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        updatePage();
      });
    });
    document.querySelectorAll('[data-brand]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeBrand = btn.dataset.brand;
        updatePage();
      });
    });
  }

  function filterAndRender() {
    let actualMin = minPrice;
    let actualMax = maxPrice;
    if (actualMin > actualMax && actualMax !== Infinity) {
      actualMin = maxPrice;
      actualMax = minPrice;
    }

    const filtered = allProducts.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchBrand = activeBrand === 'all' || p.brand === activeBrand;
      const matchPrice = p.price >= actualMin && p.price <= actualMax;
      return matchCat && matchBrand && matchPrice;
    });

    if (filtered.length === 0) {
      gridElement.innerHTML = '<p style="color: var(--color-muted); grid-column: 1 / -1; padding: 20px 0;">По вашему запросу ничего не найдено.</p>';
      return;
    }

    gridElement.innerHTML = filtered.map(product => `
      <li class="product-card" data-id="${product.id}">
        <div class="product-card__media">
          <img src="${product.images[0]}" alt="${product.title}" class="product-card__img" loading="lazy">
        </div>
        <div class="product-card__body">
          <h3 class="product-card__title">${product.title}</h3>
          <p class="product-card__meta">${product.desc}</p>
          <div class="product-card__bottom">
            <span class="product-card__price">${product.price.toLocaleString('ru-RU')} ₽</span>
            <button class="btn btn--accent btn--sm" onclick="event.stopPropagation(); window.location.href='tel:+79805642778'">Купить</button>
          </div>
        </div>
      </li>
    `).join('');
  }

  function updatePage() {
    renderFilters();
    filterAndRender();

    if (activeCategory === 'all' && activeBrand === 'all') {
      titleElement.textContent = 'Каталог';
      breadcrumbElement.textContent = 'Каталог';
    } else if (activeCategory !== 'all' && activeBrand === 'all') {
      titleElement.textContent = categoryNames[activeCategory];
      breadcrumbElement.textContent = categoryNames[activeCategory];
    } else if (activeCategory === 'all' && activeBrand !== 'all') {
      titleElement.textContent = `Бренд: ${activeBrand.toUpperCase()}`;
      breadcrumbElement.textContent = activeBrand.toUpperCase();
    } else {
      titleElement.textContent = `${categoryNames[activeCategory]} ${activeBrand.toUpperCase()}`;
      breadcrumbElement.textContent = activeBrand.toUpperCase();
    }
  }

  let priceTimeout;
  function handlePriceChange() {
    clearTimeout(priceTimeout);
    priceTimeout = setTimeout(() => {
      let minVal = priceMinInput.value ? parseInt(priceMinInput.value) : 0;
      let maxVal = priceMaxInput.value ? parseInt(priceMaxInput.value) : Infinity;
      
      if (minVal < 0) { minVal = 0; priceMinInput.value = 0; }
      if (maxVal < 0 && maxVal !== Infinity) { maxVal = 0; priceMaxInput.value = 0; }

      if (maxVal !== Infinity && minVal > maxVal) {
        minVal = maxVal;
        priceMinInput.value = minVal;
      }

      minPrice = minVal;
      maxPrice = maxVal;
      filterAndRender();
    }, 600);
  }

  priceMinInput.addEventListener('input', handlePriceChange);
  priceMaxInput.addEventListener('input', handlePriceChange);

  priceMinInput.addEventListener('step', (e) => {
    e.preventDefault();
    let currentVal = parseInt(priceMinInput.value) || 0;
    let maxVal = parseInt(priceMaxInput.value) || Infinity;
    let newVal = e.detail > 0 ? currentVal + 5000 : Math.max(0, currentVal - 5000);
    if (newVal > maxVal && maxVal !== Infinity) newVal = maxVal;
    minPrice = newVal;
    priceMinInput.value = minPrice;
    filterAndRender();
  });

  priceMaxInput.addEventListener('step', (e) => {
    e.preventDefault();
    let currentVal = parseInt(priceMaxInput.value) || 0;
    let minVal = parseInt(priceMinInput.value) || 0;
    let newVal = e.detail > 0 ? currentVal + 5000 : Math.max(0, currentVal - 5000);
    if (newVal < minVal) newVal = minVal;
    maxPrice = newVal;
    priceMaxInput.value = maxPrice;
    filterAndRender();
  });

  updatePage();

  // ===== ЛОГИКА МОДАЛЬНОГО ОКНА =====
  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSku = document.getElementById('modal-sku');
  
  const modalSlider = document.getElementById('modal-slider');
  const modalThumbs = document.getElementById('modal-thumbs');
  
  const btnPrev = document.getElementById('modal-prev');
  const btnNext = document.getElementById('modal-next');
  
  const productView = document.getElementById('modal-product-view');
  const mapView = document.getElementById('modal-map-view');
  const stockBtn = document.getElementById('modal-stock-btn');
  const mapBackBtn = document.getElementById('modal-map-back');

  let currentProduct = null;
  let currentImgIndex = 0;
  let currentImages = [];

  function openModal(product) {
    currentProduct = product;
    currentImgIndex = 0;
    
    const baseImg = product.images[0];
    currentImages = [baseImg, baseImg, baseImg, baseImg, baseImg];
    
    modalSku.textContent = `Артикул: VV-${1000 + product.id}`;
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price.toLocaleString('ru-RU') + ' ₽';
    modalDesc.textContent = product.desc;
    
    renderGallery();
    
    productView.classList.remove('modal__content--hidden');
    mapView.classList.add('modal__content--hidden');
    initAccordion();

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function renderGallery() {
    modalSlider.innerHTML = currentImages.map(img => 
      `<img src="${img}" class="modal__slide" alt="Фото товара">`
    ).join('');
    
    modalThumbs.innerHTML = currentImages.map((img, idx) => 
      `<img src="${img}" class="modal__thumb ${idx === currentImgIndex ? 'is-active' : ''}" data-index="${idx}" alt="Миниатюра">`
    ).join('');

    updateSliderPosition();

    modalThumbs.querySelectorAll('.modal__thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        currentImgIndex = parseInt(e.target.dataset.index);
        updateSliderPosition();
        updateThumbsState();
      });
    });
  }

  function updateSliderPosition() {
    const width = modalSlider.clientWidth;
    modalSlider.scrollTo({
      left: currentImgIndex * width,
      behavior: 'smooth'
    });
  }

  function updateThumbsState() {
    modalThumbs.querySelectorAll('.modal__thumb').forEach((thumb, idx) => {
      thumb.classList.toggle('is-active', idx === currentImgIndex);
    });
  }

  modalSlider.addEventListener('scroll', () => {
    if (!currentProduct) return;
    const width = modalSlider.clientWidth;
    const scrollLeft = modalSlider.scrollLeft;
    const newIndex = Math.round(scrollLeft / width);
    
    if (newIndex !== currentImgIndex && newIndex >= 0 && newIndex < currentImages.length) {
      currentImgIndex = newIndex;
      updateThumbsState();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentImgIndex > 0) {
      currentImgIndex--;
      updateSliderPosition();
      updateThumbsState();
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentProduct && currentImgIndex < currentImages.length - 1) {
      currentImgIndex++;
      updateSliderPosition();
      updateThumbsState();
    }
  });

  if (stockBtn) {
    stockBtn.addEventListener('click', () => {
      productView.classList.add('modal__content--hidden');
      mapView.classList.remove('modal__content--hidden');
    });
  }

  if (mapBackBtn) {
    mapBackBtn.addEventListener('click', () => {
      mapView.classList.add('modal__content--hidden');
      productView.classList.remove('modal__content--hidden');
    });
  }

  function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    accordionItems.forEach(item => {
      const content = item.querySelector('.accordion__content');
      if (item.classList.contains('is-active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion__header');
      
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('is-active');
        
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('is-active');
          otherItem.querySelector('.accordion__content').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('is-active');
          const content = item.querySelector('.accordion__content');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  gridElement.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
      const id = parseInt(card.dataset.id);
      const product = allProducts.find(p => p.id === id);
      if (product) openModal(product);
    }
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
});