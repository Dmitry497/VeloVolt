document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. БЕГУЩАЯ СТРОКА БРЕНДОВ (БЕСКОНЕЧНАЯ)
  // ==========================================
  const brandTrack = document.getElementById('brands-track');
  if (brandTrack) {
    const brandItems = brandTrack.innerHTML;
    // Дублируем контент 4 раза, чтобы лента была очень длинной.
    // В CSS анимация сдвигает её ровно на 25%, создавая эффект бесконечности.
    brandTrack.innerHTML = brandItems + brandItems + brandItems + brandItems;
  }

  // ==========================================
  // 2. ЛОГИКА МОДАЛЬНОГО ОКНА (БЫСТРЫЙ ПРОСМОТР)
  // ==========================================
  const modal = document.getElementById('product-modal');
  
  // Если модалки на странице нет (например, мы в каталоге, а скрипт подключен), просто выходим
  if (!modal) return;

  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSlider = document.getElementById('modal-slider');
  const modalThumbs = document.getElementById('modal-thumbs');

  let currentProduct = null;
  let currentImgIndex = 0;

  // Функция открытия модалки
  function openModal(product) {
    currentProduct = product;
    currentImgIndex = 0;
    
    // Заполняем текстовые данные
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price.toLocaleString('ru-RU') + ' ₽';
    modalDesc.textContent = product.desc;
    
    // Рендерим картинки
    updateGallery();
    
    // Показываем модалку
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокируем скролл фона
  }

  // Функция закрытия модалки
  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Функция обновления галереи (слайдера)
  function updateGallery() {
    // Если картинок нет, ставим заглушку
    const images = currentProduct.images && currentProduct.images.length > 0 
      ? currentProduct.images 
      : ['https://static.tildacdn.com/tild6565-6264-4837-b033-663837356332/g_5188996ffe8d9e48.webp'];

    // Рендер слайдов
    modalSlider.innerHTML = images.map(img => 
      `<img src="${img}" class="modal__slide" alt="Фото товара">`
    ).join('');
    
    // Рендер миниатюр (если картинка одна, миниатюры можно скрыть)
    if (images.length > 1) {
      modalThumbs.style.display = 'flex';
      modalThumbs.innerHTML = images.map((img, idx) => 
        `<img src="${img}" class="modal__thumb ${idx === currentImgIndex ? 'is-active' : ''}" data-index="${idx}" alt="Миниатюра">`
      ).join('');
    } else {
      modalThumbs.style.display = 'none';
    }

    // Сдвигаем слайдер на нужный кадр
    modalSlider.style.transform = `translateX(-${currentImgIndex * 100}%)`;

    // Вешаем обработчики на миниатюры
    modalThumbs.querySelectorAll('.modal__thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        currentImgIndex = parseInt(e.target.dataset.index);
        updateGallery();
      });
    });
  }

  // Закрытие по крестику или оверлею
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Закрытие по нажатию клавиши Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // ==========================================
  // 3. ПЕРЕХВАТ КЛИКОВ ПО КАРТОЧКАМ ТОВАРОВ
  // ==========================================
  // Если на главной странице появятся карточки товаров (например, "Хиты продаж"),
  // этот код заставит их открывать модалку.
  
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

  // Слушатель кликов по карточкам (класс .product-card)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    
    // Если кликнули по карточке товара
    if (card) {
      // Если это кнопка "Купить" внутри карточки, не открываем модалку (пусть работает ссылка на телефон)
      if (e.target.closest('.btn')) return;

      // Ищем товар по ID (если карточка в каталоге) или берем тестовый (если на главной)
      const id = card.dataset.id ? parseInt(card.dataset.id) : 1;
      
      // В реальном проекте здесь можно брать данные из общего массива allProducts
      const product = mockProducts.find(p => p.id === id) || mockProducts[0];
      
      if (product) openModal(product);
    }
  });
});