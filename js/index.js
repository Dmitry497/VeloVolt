document.addEventListener('DOMContentLoaded', () => {
  const brandTrack = document.getElementById('brands-track');
  if (brandTrack) {
    const brandItems = brandTrack.innerHTML;
    brandTrack.innerHTML = brandItems + brandItems + brandItems + brandItems;
  }

  const modal = document.getElementById('product-modal');
  
  if (!modal) return;

  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSlider = document.getElementById('modal-slider');
  const modalThumbs = document.getElementById('modal-thumbs');

  let currentProduct = null;
  let currentImgIndex = 0;

  function openModal(product) {
    currentProduct = product;
    currentImgIndex = 0;
    
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price.toLocaleString('ru-RU') + ' ₽';
    modalDesc.textContent = product.desc;
    
    updateGallery();
    
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateGallery() {
    const images = currentProduct.images && currentProduct.images.length > 0 
      ? currentProduct.images 
      : ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'];

    modalSlider.innerHTML = images.map(img => 
      `<img src="${img}" class="modal__slide" alt="Фото товара">`
    ).join('');
    
    if (images.length > 1) {
      modalThumbs.style.display = 'flex';
      modalThumbs.innerHTML = images.map((img, idx) => 
        `<img src="${img}" class="modal__thumb ${idx === currentImgIndex ? 'is-active' : ''}" data-index="${idx}" alt="Миниатюра">`
      ).join('');
    } else {
      modalThumbs.style.display = 'none';
    }

    modalSlider.style.transform = `translateX(-${currentImgIndex * 100}%)`;

    modalThumbs.querySelectorAll('.modal__thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        currentImgIndex = parseInt(e.target.dataset.index);
        updateGallery();
      });
    });
  }

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  const mockProducts = [
    {
      id: 1,
      title: 'Горный электровелосипед Mackwheel Fat',
      price: 110000,
      desc: 'Мощный фэтбайк для бездорожья. Мотор 1000W, батарея 48V 17.5Ah. Отличный выбор для дачи и охоты.',
      images: [
        'https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp',
        'https://static.tildacdn.com/tild6235-3237-4064-b231-343832653937/g_04c8439fc01fb127.webp',
        'https://static.tildacdn.com/tild6331-3334-4862-b935-306534333439/g_785e375c302e2a70.webp'
      ]
    }
  ];

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    
    if (card) {
      if (e.target.closest('.btn')) return;

      const id = card.dataset.id ? parseInt(card.dataset.id) : 1;
      const product = mockProducts.find(p => p.id === id) || mockProducts[0];
      
      if (product) openModal(product);
    }
  });
});